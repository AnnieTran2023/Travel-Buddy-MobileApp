import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import AppStyles from "../AppStyles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import TripContext from "./TripContext";
import { useContext } from "react";

export default function SearchPlaces() {
  const { tripDetails, setTripDetails } = useContext(TripContext);

  useEffect(() => {
    console.log(tripDetails);
  }, [tripDetails]);

  return (
    <View style={styles.container}>
      <Text style={AppStyles.title}>Ready to explore?</Text>
      <Text style={AppStyles.text}>
        Pick a place, and Travel Buddy’ll handle the magic! 🧳✨
      </Text>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setTripDetails({
            description: data.description,
            location: details.geometry.location,
            photo: details.photos[0]?.photo_reference,
            url: details.url,
          });
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 7,
            marginTop: 20,
            height: 60,
          },
          textInput: {
            height: 38,
            fontSize: 17,
            alignSelf: "center",
            paddingLeft: 10,
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 120,
    padding: 20,
  },
});
