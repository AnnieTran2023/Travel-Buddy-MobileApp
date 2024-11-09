import { View, Text, StyleSheet, Linking } from "react-native";
import React from "react";
import AppStyles from "../AppStyles";

export default function Transport({ transportDetails }) {
  console.log(transportDetails);

  const renderTransport = () => {
    if (!transportDetails || Object.keys(transportDetails).length === 0) {
      return <Text>No transport details</Text>;
    } else if (transportDetails.flights) {
      const flight = transportDetails.flights[0];
      return (
        <View style={styles.container}>
          <Text style={AppStyles.smallTitle}>Airline: {flight.airline}</Text>
          <Text>Departure: {flight.departure}</Text>
          <Text>Arrival: {flight.arrival}</Text>
          <Text>
            Date: {flight.departureDate} - {flight.arrivalDate}
          </Text>
          <Text>
            Time: {flight.departureTime} - {flight.arrivalTime}
          </Text>
          <Text>Price: {flight.price} EUR</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(flight.bookingUrl)}
          >
            Book Flight
          </Text>
        </View>
      );
    } else if (transportDetails.trains) {
      const train = transportDetails.trains[0];
      return (
        <View style={styles.container}>
          <Text style={AppStyles.smallTitle}>Train Operator: {train.operator}</Text>
          <Text>Departure: {train.departure}</Text>
          <Text>Arrival: {train.arrival}</Text>
          <Text>
            Date: {train.departureDate} - {train.arrivalDate}
          </Text>
          <Text>
            Time: {train.departureTime} - {train.arrivalTime}
          </Text>
          <Text>Price: {train.price}</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(train.bookingUrl)}
          >
            Book Train
          </Text>
        </View>
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
    padding:10,
    marginTop:0,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 5,
  },
});
