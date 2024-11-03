import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppStyles from "../AppStyles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchPlaces() {
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
          console.log(data.description);
          console.log(details?.geometry.location);
          console.log(details?.photos[0]?.photo_reference);
          console.log(details?.url);
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
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
