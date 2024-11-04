import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ProgressBar, Surface } from "react-native-paper";
import AppStyles from "../AppStyles";
import { useContext, useState } from "react";
import TripContext from "./TripContext";
import LottieView from "lottie-react-native";

export default function SelectBudget({ navigation }) {
  const options = [
    {
      id: 1,
      name: "Budget-Friendly",
      description: "Keeping it light on the wallet",
      icon: "https://lottie.host/d0343cad-63a4-4ee7-ae97-2cf2aac4fa93/7LmN4ITvoq.json",
    },
    {
      id: 2,
      name: "Balanced",
      description: "A mix of comfort and value",
      icon: "https://lottie.host/8b6f66df-522b-47f5-9734-beea418e56f8/M5qcnfy0N3.json",
    },
    {
      id: 3,
      name: "Luxurious",
      description: "Go all out with the best",
      icon: "https://lottie.host/51a01f23-c9dc-40a9-a7a9-a9530c460bb7/gjW0IxVs2Q.json",
    },
  ];

  const { tripDetails, setTripDetails } = useContext(TripContext);
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={0.8}
        color="#6200b3"
        style={{ marginBottom: 20 }}
      />
      <Text style={AppStyles.title}>How fancy are we?</Text>
      <Text style={AppStyles.text}>Low-key budget or treat-yourself mode?</Text>
      <View style={AppStyles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            activeOpacity={0.5}
            onPress={() => {
              setSelectedOptionId(option.id);
              setTripDetails({ ...tripDetails, budget: option });
              console.log(tripDetails);
              navigation.navigate("ReviewTrip");
            }}
          >
            <Surface
              key={option.id}
              style={[
                AppStyles.surface,
                selectedOptionId === option.id && {
                  backgroundColor: "#e5daff",
                  borderColor: "#6200b3",
                  borderWidth: 3,
                },
              ]}
              elevation={2}
            >
              <View style={AppStyles.optionContainer}>
                <View style={AppStyles.textContainer}>
                  <Text style={AppStyles.smallTitle}>{option.name}</Text>
                  <Text style={AppStyles.smallText}>{option.description}</Text>
                </View>
                <LottieView
                  source={{ uri: option.icon }}
                  style={AppStyles.icon}
                  autoPlay
                />
              </View>
            </Surface>
          </TouchableOpacity>
        ))}
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
