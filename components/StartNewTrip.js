import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppStyles from "./AppStyles";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";

export default function StartNewTrip({ navigation }) {
  return (
    <View>
      <LottieView
        source={{
          uri: "https://lottie.host/e0564133-86a7-460a-8fe4-2c3a2360b195/N3zi3IBDQC.json",
        }}
        style={styles.icon}
        autoPlay
        loop
      />
      <Text style={AppStyles.text}>
        It looks like you don’t have any planned trips yet. Start exploring and
        add your first adventure!
      </Text>
      <Button
        mode="contained"
        buttonColor="black"
        textColor="white"
        labelStyle={AppStyles.buttonText}
        contentStyle={AppStyles.buttonContent}
        style={AppStyles.button}
        onPress={() => navigation.navigate("SearchPlaces")}
      >
        Start a new trip!
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginBottom: 23,
  },
});
