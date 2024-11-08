import { View, Text, StyleSheet } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import AppStyles from "../AppStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import StartNewTrip from "../StartNewTrip";
import TripContext from "../create-trips/TripContext";
import TripList from "../display-trips/TripList";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";

import { ActivityIndicator } from "react-native-paper";

export default function Trip({ navigation }) {
  const [trips, setTrips] = useState([]);
  const { tripDetails, setTripDetails } = useContext(TripContext);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "Trips"), where("user", "==", user.email));

      // Listen for real-time updates on the Trips collection
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tripsData = [];
        querySnapshot.forEach((doc) => {
          tripsData.push(doc.data());
        });
        setTrips(tripsData);
        setLoading(false);
      });

      // Cleanup listener when the component is unmounted or user changes
      return () => unsubscribe();
    }
  }, [user]);

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
          currentLocation: cityName,
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

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      ) : trips.length === 0 ? (
        <StartNewTrip navigation={navigation} />
      ) : (
        <TripList trips={trips} navigation = {navigation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 80,
    padding: 25,
  },
});
