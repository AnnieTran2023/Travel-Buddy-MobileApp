import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppStyles from "../AppStyles";
import { ProgressBar, Surface } from "react-native-paper";
import LottieView from "lottie-react-native";
import { useContext, useState } from "react";
import TripContext from "./TripContext";

export default function SelectCompanions({ navigation }) {
  const options = [
    {
      id: 1,
      name: "Just me",
      description: "Just me, myself, and I ",
      icon: "https://lottie.host/87b71244-56f1-4115-b6a3-3259e97cb4ff/GOHtdrYNAr.json",
      people: "1",
    },
    {
      id: 2,
      name: "Best Buddies",
      description: "The more, the merrier",
      icon: "https://lottie.host/d721f27f-f19b-482d-a851-d415d2fbfe80/0P3xIkDqEL.json",
      people: "3-10",
    },
    {
      id: 3,
      name: "Lovebirds",
      description: "Romantic getaway for two",
      icon: "https://lottie.host/273cbfe3-b304-4c31-90e0-d5ddc727f9c8/mpvW9NJieb.json",
      people: "2",
    },
    {
      id: 4,
      name: "Family Crew",
      description: "Family fun for everyone",
      icon: "https://lottie.host/f5dc9d85-6f1b-4da5-b068-e07e7105ada6/NCZ0A8gyhr.json",
      people: "3-10",
    },
  ];

  const { tripDetails, setTripDetails } = useContext(TripContext);
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={0.5}
        color="#6200b3"
        style={{ marginBottom: 20 }}
      />
      <Text style={AppStyles.title}>Who's Coming Along?</Text>
      <Text style={AppStyles.text}>
        Is it a solo trip, or are we gathering the gang?
      </Text>
      <View style={AppStyles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            activeOpacity={0.4}
            onPress={() => {
              setSelectedOptionId(option.id);
              setTripDetails({ ...tripDetails, companions: option });
              navigation.navigate("SelectDate");
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
