import { View, Text, Image } from "react-native";
import React from "react";
import AppStyles from "../AppStyles";
import { Button , Card } from "react-native-paper";

export default function TripList({ trips }) {
  const recentTrip = JSON.parse(trips[0].tripDetails);
  return (
    <View>
      <View>
        <Card style={AppStyles.card}>
          <Card.Cover
            source={{
              uri:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                recentTrip.photo +
                "&key=" +
                process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            }}
            style={{ borderRadius: 15 }}
          />
          <Card.Content>
            <Text style={AppStyles.smallTitle}>{recentTrip?.description}</Text>
            <Text style={AppStyles.smallText}>
              {recentTrip?.startDate} - {recentTrip?.endDate}
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
            >
              See your plan!
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
}
