import { View, Text, StyleSheet } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import AppStyles from "../AppStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import StartNewTrip from "../StartNewTrip";
import TripContext from "../create-trips/TripContext";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";
import TripList from "../TripDisplay/TripList";

export default function Trip({ navigation }) {
  const [trips, setTrips] = useState([]);
  const { tripDetails, setTripDetails } = useContext(TripContext);
  const user = auth.currentUser;

  useEffect(() => {
    fetchTrips();
  }, [user]);

  const fetchTrips = async () => {
    const q = query(collection(db, "Trips"), where("user", "==", user.email));

    const querySnapshot = await getDocs(q);

    setTrips([]);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setTrips((prev) => [...prev, doc.data()]);
    });
  };

  useEffect(() => {
    (async () => {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Toast.show({
          type: "error",
          text1: "Permission Denied",
          text2:
            "Travel Buddy needs your current location to create the best plan for you!",
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      console.log(latitude, longitude);

      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // Extract city name if available
      if (reverseGeocode.length > 0) {
        const { city, region, country } = reverseGeocode[0];
        const cityName = `${city || ""}, ${country || ""}`;

        setTripDetails((prevDetails) => ({
          ...prevDetails,
          currentLocation: cityName, // Update current location only
        }));
      } else {
        setTripDetails((prevDetails) => ({
          ...prevDetails,
          currentLocation: "Random city",
        }));
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Text style={AppStyles.titleLeft}>My Trips</Text>
        {trips.length > 0 && (
          <AntDesign
            name="pluscircle"
            size={32}
            color="black"
            onPress={() => navigation.navigate("SearchPlaces")}
          />
        )}
      </View>

      {trips.length === 0 ? (
        <StartNewTrip navigation={navigation} />
      ) : (
        <TripList trips={trips} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 80,
    padding: 30,
  },
});
