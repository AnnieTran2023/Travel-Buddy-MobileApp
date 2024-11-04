import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ProgressBar } from "react-native-paper";
import AppStyles from "../AppStyles";
import { useContext } from "react";
import TripContext from "./TripContext";
import CalendarPicker from "react-native-calendar-picker";

export default function SelectDate() {
  const { tripDetails, setTripDetails } = useContext(TripContext);

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={0.75}
        color="#6200b3"
        style={{ marginBottom: 20 }}
      />
      <Text style={AppStyles.title}>When are we heading?</Text>
      <Text style={AppStyles.text}>
        Share your dates so we can pack our bags and hit the road!
      </Text>
      <View style={{ marginTop: 0 }}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={10}
          selectedRangeStyle={{ backgroundColor: "#dec8ff" }}
        />
      </View>
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
});
