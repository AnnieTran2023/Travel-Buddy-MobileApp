import { View, Text, Image } from "react-native";
import React from "react";
import AppStyles from "./AppStyles";
import { Button } from "react-native-paper";

export default function StartNewTrip({ navigation }) {
  return (
    <View>
      <Image
        source={require("./../assets/pink-luggage.jpg")}
        style={{
          width: 400,
          height: 170,
          alignSelf: "center",
          marginBottom: 20,
        }}
        resizeMode="contain"
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
