import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AppStyles from "../AppStyles";
import { Card } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import { Linking } from "react-native";

export default function TravelPlan({ travelPlanDetails }) {
  return (
    <View>
      <View style={{ marginLeft: 16, marginTop: 18 }}>
        <Text style={AppStyles.smallTitle}>Travel Plan 🗓️</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {travelPlanDetails?.map((day, dayIndex) => (
            <View key={dayIndex} style={styles.dayContainer}>
              {/* Extracting just "Day 1", "Day 2", etc. */}
              <Text style={AppStyles.extraSmallTitle}>Day {dayIndex + 1}</Text>

              {day.schedule.map((place, index) => (
                <Card key={index} style={styles.card}>
                  <View style={styles.imageContainer}>
                    <Card.Cover
                      source={require("../../assets/landscape.jpg")}
                      style={styles.image}
                    />
                    <Text style={AppStyles.overlayTextHotel}>
                      {place.placeName}
                    </Text>
                  </View>

                  <Card.Content>
                    <Text style={AppStyles.extraSmallText}>
                      🕒 {place.time}
                    </Text>
                    <Text style={AppStyles.extraSmallText}>
                      📍 {place.placeDetails}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 8,
                      }}
                    >
                      <Text style={AppStyles.extraSmallText}>
                        💸 Price:{" "}
                        {place.ticketPricing && place.ticketPricing !== "N/A"
                          ? place.ticketPricing
                          : "Unknown"}
                      </Text>
                      <Text style={AppStyles.extraSmallText}>
                        ⭐ Rating:{" "}
                        {place.placeRating && place.placeRating !== "N/A"
                          ? place.placeRating
                          : "Unknown"}
                      </Text>
                      <TouchableOpacity
                        onPress={() => Linking.openURL(place.placeUrl)}
                      >
                        <Feather name="external-link" size={22} color="black" />
                      </TouchableOpacity>
                    </View>
                  </Card.Content>
                </Card>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    marginBottom: 16,
  },
  card: {
    marginRight: 18,
    marginVertical: 10,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    height: 180,
    width: "100%",
    objectFit: "contain",
  },
});