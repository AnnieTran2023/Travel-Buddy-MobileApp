import { View, Text, StyleSheet } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import AppStyles from "../AppStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import StartNewTrip from "../StartNewTrip";
import TripContext from "../create-trips/TripContext";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";

export default function Trip({ navigation }) {
  const [trips, setTrips] = useState([]);
  const { tripDetails, setTripDetails } = useContext(TripContext);

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
          ...prevDetails, // Retain previous tripDetails
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
          <AntDesign name="pluscircle" size={32} color="black" />
        )}
      </View>

      {trips.length === 0 ? <StartNewTrip navigation={navigation} /> : null}
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
