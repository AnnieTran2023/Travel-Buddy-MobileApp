import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import AppStyles from "../AppStyles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import TripContext from "./TripContext";
import { useContext } from "react";
import Toast from "react-native-toast-message";
import { ProgressBar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchPlaces({ navigation }) {
  const { tripDetails, setTripDetails } = useContext(TripContext);

  useEffect(() => {
    console.log(tripDetails);
  }, [tripDetails]);

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={0.25}
        color="#f72585"
        style={{ marginBottom: 20 }}
      />
      <Text style={AppStyles.title}>Ready to explore?</Text>
      <Text style={AppStyles.text}>
        Pick a place, and Travel Buddy’ll handle the magic!
      </Text>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          const photoReference =
            details.photos && details.photos.length > 0
              ? details.photos[0].photo_reference
              : null;

          if (!photoReference) {
            Toast.show({
              type: "error",
              text1: "Photo not available",
              text2: "Please choose another location.",
            });
            return;
          }
          setTripDetails({
            description: data.description,
            location: details.geometry.location,
            photo: details.photos[0]?.photo_reference,
            url: details.url,
          });
          navigation.navigate("SelectCompanions");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        renderLeftButton={() => (
          <MaterialIcons
            name="search"
            size={24}
            color="grey"
            style={styles.icon}
          />
        )}
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
          },
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
  icon: {
    paddingLeft: 10,
    marginTop: -5,
    alignSelf: "center",
  },
});
