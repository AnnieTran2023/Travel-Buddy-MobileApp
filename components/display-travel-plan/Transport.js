import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import AppStyles from "../AppStyles";
import { Card } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";

export default function Transport({ transportDetails }) {
  console.log(transportDetails);

  const renderTransport = () => {
    if (!transportDetails || Object.keys(transportDetails).length === 0) {
      return <Text>No transport details</Text>;
    } else if (transportDetails.flights) {
      const flight = transportDetails.flights[0];
      return (
        <View>
          <View style={{ marginLeft: 12 }}>
            <Text style={AppStyles.smallTitle}>
              Airline: {flight?.airline} ✈️
            </Text>
          </View>
          <Card style={{ marginTop: 0, margin: 10 }}>
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <View style={{ flex: 6 }}>
                  <Text style={AppStyles.smallText}>
                    Departure: {flight?.departure}
                  </Text>
                  <Text style={AppStyles.smallText}>
                    Arrival: {flight?.arrival}
                  </Text>
                  <Text style={AppStyles.smallText}>
                    Price: {flight?.price} EUR
                  </Text>
                </View>
                {transportDetails.flights.length !== 0 ? (
                  <TouchableOpacity
                    style={{ flex: 1, alignItems: "flex-end" }}
                    onPress={() => Linking.openURL(flight.bookingUrl)}
                  >
                    <Feather name="external-link" size={24} color="black" />
                  </TouchableOpacity>
                ) : null}
              </View>
            </Card.Content>
          </Card>
        </View>
      );
    } else if (transportDetails.trains) {
      const train = transportDetails.trains[0];
      return (
        <Card style={{ marginTop: 0, marginLeft: 0 }}>
          <Card.Content>
            <Text style={AppStyles.smallTitle}>
              Train Operator: {train?.operator} 🚆
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <View style={{ flex: 6 }}>
                <Text style={AppStyles.smallText}>
                  Departure: {train?.departure}
                </Text>
                <Text style={AppStyles.smallText}>
                  Arrival: {train?.arrival}
                </Text>
                <Text style={AppStyles.smallText}>
                  Price: {train?.price} EUR
                </Text>
              </View>
              <TouchableOpacity
                style={{ flex: 1, alignItems: "flex-end" }}
                onPress={() => Linking.openURL(train.bookingUrl)}
              >
                <Feather name="external-link" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
      );
    } else if (transportDetails.localTransport) {
      const local = transportDetails.localTransport;
      return (
        <View style={styles.container}>
          <Text style={AppStyles.title}>Type: {local.type}</Text>
          <Text>Price: {local.price}</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(local.bookingUrl)}
          >
            More Info
          </Text>
        </View>
      );
    } else {
      return <Text>No transport information available</Text>;
    }
  };

  return <View style={styles.container}>{renderTransport()}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 0,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 5,
  },
});
