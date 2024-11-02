import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppStyles from "../AppStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import StartNewTrip from "../StartNewTrip";

export default function Trip({ navigation }) {
  const [trips, setTrips] = useState([]);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Text style={AppStyles.titleLeft}>My Trips</Text>
        {trips.length > 0 && (
          <AntDesign name="pluscircle" size={32} color="black" />
        )}
      </View>

      {trips.length === 0 ? <StartNewTrip navigation={navigation} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 80,
    padding: 30,
  },
});
