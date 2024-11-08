import { View, Text , StyleSheet} from "react-native";
import React from "react";
import AppStyles from "../AppStyles";
import {Card}from "react-native-paper";

export default function OtherTrip({ trip, index, navigation }) {
  const currentTrip = JSON.parse(trip.tripDetails);
  const currentTripPlan = JSON.parse(trip.tripPlan);
  return (
    <View>
      <Card
        style={styles.card}
        onPress={() =>
          navigation.navigate("PlanList", {
            trip: currentTrip,
            plan: currentTripPlan,
          })
        }
      >
        <View style={styles.cardContent}>
          <Card.Cover
            source={{
              uri:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                currentTrip.photo +
                "&key=" +
                process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={AppStyles.extraSmallTitle}>
              {currentTrip?.description}
            </Text>
            <Text style={AppStyles.extraSmallText}>
              {currentTrip?.startDate} - {currentTrip?.endDate}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop:25,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "35%",
    height: 100,
    objectFit:"contain"
  },
  textContainer: {
    paddingLeft: 15,
  },
});