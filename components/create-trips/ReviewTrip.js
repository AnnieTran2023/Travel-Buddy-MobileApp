import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import AppStyles from "../AppStyles";
import { ProgressBar, Card, List, Divider, Button } from "react-native-paper";
import TripContext from "./TripContext";

export default function ReviewTrip({ navigation }) {
  const { tripDetails } = useContext(TripContext);

  return (
    <View style={styles.container}>
      <ProgressBar progress={1} color="#6200b3" style={{ marginBottom: 20 }} />
      <Text style={AppStyles.title}>Just One Last Look!</Text>
      <Text style={AppStyles.text}>
        Let's go over your trip details before Travel Buddy crafts your perfect
        plan!
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <List.Item
            title={() => <Text style={AppStyles.smallTitle}>Destination</Text>}
            description={() => (
              <Text style={AppStyles.smallText}>{tripDetails.description}</Text>
            )}
            left={() => <List.Icon icon="map-marker" color="#FF0800" />}
          />
          <Divider />
          <List.Item
            title={() => <Text style={AppStyles.smallTitle}>Dates</Text>}
            description={() => (
              <Text style={AppStyles.smallText}>
                {`${new Date(
                  tripDetails.startDate
                ).toLocaleDateString()} - ${new Date(
                  tripDetails.endDate
                ).toLocaleDateString()}  (${tripDetails.duration} days)`}
              </Text>
            )}
            left={() => <List.Icon icon="calendar" color="#007FFF" />}
          />
          <Divider />
          <List.Item
            title={() => <Text style={AppStyles.smallTitle}>Companions</Text>}
            description={() => (
              <Text style={AppStyles.smallText}>
                {tripDetails.companions.name}
              </Text>
            )}
            left={() => <List.Icon icon="account-group" color="#FFBA00" />}
          />
          <Divider />
          <List.Item
            title={() => <Text style={AppStyles.smallTitle}>Budget</Text>}
            description={() => (
              <Text style={AppStyles.smallText}>{tripDetails.budget.name}</Text>
            )}
            left={() => <List.Icon icon="cash-multiple" color="#138808" />}
          />
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        buttonColor="black"
        textColor="white"
        labelStyle={AppStyles.buttonText}
        contentStyle={AppStyles.buttonContent}
        style={AppStyles.button}
        onPress={() => navigation.navigate("BuildTrip")}
      >
        Plan My Adventure ✨
      </Button>
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
  card: {
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 12,
    elevation: 4,
    width: 350,
    alignSelf: "center",
  },
});
