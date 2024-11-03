import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ProgressBar } from "react-native-paper";
import AppStyles from "../AppStyles";

export default function SelectDate() {
  return (
    <View style={styles.container}>
      <ProgressBar
        progress={0.75}
        color="#f72585"
        style={{ marginBottom: 20 }}
      />
      <Text style={AppStyles.title}>When are we heading?</Text>
      <Text style={AppStyles.text}>
        Share your dates so we can pack our bags and hit the road!
      </Text>
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
