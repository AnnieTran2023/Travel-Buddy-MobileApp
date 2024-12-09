import { View, Text, StyleSheet, Alert, Linking } from "react-native";
import React, { useContext, useState, useCallback } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { ActivityIndicator } from "react-native-paper";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";
import TripContext from "../create-trips/TripContext";
import AppStyles from "../AppStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function Discover() {
  const { tripDetails, setTripDetails } = useContext(TripContext);
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  const fetchLocationAndPlaces = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "We need your location to show places around you"
        );
        return;
      }
      setLoading(true);

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      console.log("User's current location:", latitude, longitude);

      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (reverseGeocode.length > 0) {
        const { city, country } = reverseGeocode[0];
        const cityName = `${city || "Unknown City"}, ${
          country || "Unknown Country"
        }`;

        setTripDetails((prevDetails) => ({
          ...prevDetails,
          currentLocation: cityName,
          currentLatitude: latitude,
          currentLongitude: longitude,
        }));
      } else {
        setTripDetails((prevDetails) => ({
          ...prevDetails,
          currentLocation: "Random city",
          currentLatitude: latitude,
          currentLongitude: longitude,
        }));
      }

      await fetchNearbyPlaces(latitude, longitude);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: "Error fetching location: " + error.message,
      });
    }
  };

  const fetchNearbyPlaces = async (latitude, longitude) => {
    try {
      const radius = 3000; // within 3km
      const types = "restaurant|tourist_attraction";
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${types}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      const placesData = data.results;

      console.log("Fetched places:", placesData);

      if (placesData && placesData.length > 0) {
        setPlaces(placesData);
      } else {
        Toast.show({
          type: "info",
          text1: "No places found around you.",
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error fetching places: " + error.message,
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchLocationAndPlaces();
    }, [])
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : tripDetails.currentLocation ? (
        <>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={AppStyles.text}>Let Travel-Buddy lead you!</Text>
            <LottieView
              source={{
                uri: "https://lottie.host/179ca274-aa57-426f-8154-7d9f505b9655/s717E7RJRn.json",
              }}
              style={{ width: 80, height: 80, marginTop: -40, marginLeft: 5 }}
              autoPlay
              loop
            />
          </View>

          <MapView
            style={styles.map}
            region={{
              latitude: tripDetails.currentLatitude,
              longitude: tripDetails.currentLongitude,
              latitudeDelta: 0.0322,
              longitudeDelta: 0.0221,
            }}
          >
            <Marker
              coordinate={{
                latitude: tripDetails.currentLatitude,
                longitude: tripDetails.currentLongitude,
              }}
              title="You are here!"
            />
            {places.map((place, index) => {
              console.log(`Rendering marker for place: ${place.name}`);
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: place.geometry.location.lat,
                    longitude: place.geometry.location.lng,
                  }}
                  title={place.name}
                  description={place.vicinity}
                  icon={{ uri: place.icon }}
                >
                  <Callout>
                    <View style={styles.callout}>
                      <Text style={AppStyles.extraSmallTitle}>
                        {place.name}
                      </Text>
                      <Text style={AppStyles.extraSmallText}>
                        {place.vicinity}
                      </Text>
                      <Text style={AppStyles.extraSmallText}>
                        Rating: 🌟{place.rating} ({place.user_ratings_total}{" "}
                        ratings)
                      </Text>
                      <Text style={AppStyles.extraSmallTextRed}>
                        {place.opening_hours?.open_now ? "Open now" : "Closed"}
                      </Text>
                      <TouchableOpacity
                        style={{
                          alignItems: "flex-end",
                        }}
                        onPress={() =>
                          Linking.openURL(
                            `https://www.google.com/maps/place/?q=place_name:${place.name}`
                          )
                        }
                      >
                        <Ionicons name="navigate" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </Callout>
                </Marker>
              );
            })}
          </MapView>
        </>
      ) : (
        <Text style={styles.text}>Loading your location...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 80,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  callout: {
    width: 200,
    padding: 10,
  },
  placeName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  placeVicinity: {
    fontSize: 14,
    color: "gray",
  },
  placeRating: {
    fontSize: 14,
    color: "green",
  },
  placeHours: {
    fontSize: 14,
    color: "red",
  },
});
