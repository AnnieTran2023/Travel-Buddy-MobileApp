import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import AppStyles from "../AppStyles";
import { Button, Card } from "react-native-paper";
import LottieView from "lottie-react-native";
import OtherTrip from "./OtherTrip";

export default function TripList({ trips, navigation }) {
  const recentTrip = JSON.parse(trips[trips.length - 1].tripDetails);
  const recentTripPlan = JSON.parse(trips[trips.length - 1].tripPlan);
  console.log(typeof recentTripPlan);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Card>
          <Card.Cover
            source={{
              uri:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photo_reference=" +
                recentTrip.photo +
                "&key=" +
                process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            }}
            style={{ marginBottom: 10, objectFit: "contain", height: 220 }}
          />
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={AppStyles.smallTitle}>
                  {recentTrip?.description}
                </Text>
                <Text style={AppStyles.smallText}>
                  {recentTrip?.startDate} - {recentTrip?.endDate}
                </Text>
              </View>
              <LottieView
                source={{ uri: recentTrip.budget.icon }}
                style={[AppStyles.icon, { width: 55, height: 55 }]}
                autoPlay
                loop
              />
            </View>
            <Button
              mode="contained"
              labelStyle={AppStyles.buttonText}
              contentStyle={AppStyles.buttonContent}
              style={AppStyles.button}
              onPress={() =>
                navigation.navigate("PlanList", {
                  trip: recentTrip,
                  plan: recentTripPlan,
                })
              }
            >
              Show my adventure
            </Button>
          </Card.Content>
        </Card>
      </View>
      {trips
        .slice()
        .reverse()
        .map((trip, index) => {
          if (index !== 0) {
            return <OtherTrip trip={trip} key={index} navigation={navigation}/>;
          }
        })}
    </ScrollView>
  );
}
