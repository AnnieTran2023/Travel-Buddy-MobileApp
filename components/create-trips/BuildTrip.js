import { View, Text, StyleSheet, ViewBase } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import AppStyles from "../AppStyles";
import { useContext , useEffect} from "react";
import TripContext from "./TripContext";

export default function BuildTrip() {
  const { tripDetails, setTripDetails } = useContext(TripContext);

  useEffect(() => {
    buildTrip();
  }, []);

  const buildTrip = () => {
    const prompt = `Generate Travel Plan for Location : ${tripDetails.description}, starting from Location ${tripDetails.currentLocation}, from ${tripDetails.startDate} to ${tripDetails.endDate} for ${tripDetails.companions.name} with a ${tripDetails.budget.name} budget with a transport details , transport Price with transport Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to visit each of the location for ${tripDetails.duration} with each day plan with best time to visit in JSON Format`;
    console.log(prompt);
  };

  return (
    <View style={styles.container}>
      <Text style={AppStyles.title}>Hold On Tight...</Text>
      <Text style={AppStyles.text}>
        {" "}
        Travel Buddy is busy creating your perfect adventure. Just a moment
        more!
      </Text>
      <LottieView
        source={{
          uri: "https://lottie.host/37795546-6320-4bd4-8ac2-bbaee1f0ab38/AePOArUrH5.json",
        }}
        style={styles.icon}
        autoPlay
        loop
      />
      <LottieView
        source={{
          uri: "https://lottie.host/e10a5f59-18dd-4e94-a228-ba997ffad795/z270ckQM5Y.json",
        }}
        style={styles.smallIcon}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 150,
    padding: 20,
  },
  icon: {
    width: 280,
    height: 280,
    alignSelf: "center",
    marginTop: 20,
  },
  smallIcon: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});
