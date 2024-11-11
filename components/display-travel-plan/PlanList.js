import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Transport from "./Transport";
import AppStyles from "../AppStyles";
import Accommodation from "./Accommodation";
import TravelPlan from "./TravelPlan";

export default function PlanList() {
  const route = useRoute();
  const { plan } = route.params;
  const { trip } = route.params;

  console.log(plan);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photo_reference=" +
              trip.photo +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={AppStyles.whiteText}>{trip.description}</Text>
        </View>
      </View>
      <View style={styles.planContainer}>
        <Transport transportDetails={plan.transport} />
        <Accommodation accommodationDetails={plan.accommodation} />
        <TravelPlan travelPlanDetails={plan.itinerary} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  planContainer: {
    backgroundColor: "white",
    marginTop: -20,
    paddingTop: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
});
