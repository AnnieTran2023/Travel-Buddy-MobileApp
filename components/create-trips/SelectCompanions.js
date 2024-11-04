import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppStyles from "../AppStyles";
import { ProgressBar, Surface } from "react-native-paper";
import LottieView from "lottie-react-native";

export default function SelectCompanions() {
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
      icon: "https://lottie.host/eb5108f3-e710-4760-a86f-7f72a7c4e6ff/6pNWKER3DL.json",
      people: "3-10",
    },
    {
      id: 3,
      name: "Lovebirds",
      description: "Just us, exploring hand in hand",
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

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={0.5}
        color="#f72585"
        style={{ marginBottom: 20 }}
      />
      <Text style={AppStyles.title}>Who's Coming Along?</Text>
      <Text style={AppStyles.text}>
        Is it a solo trip, or are we gathering the gang?
      </Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <Surface key={option.id} style={styles.surface} elevation={3}>
            <View style={styles.optionContainer}>
              <View style={styles.textContainer}>
                <Text style={AppStyles.smallTitle}>{option.name}</Text>
                <Text style={AppStyles.smallText}>{option.description}</Text>
              </View>
              <LottieView
                source={{ uri: option.icon }}
                style={styles.icon}
                autoPlay
                loop
              />
            </View>
          </Surface>
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
  optionsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  surface: {
    padding: 16,
    backgroundColor: "#f8edeb",
    marginBottom: 16,
    borderRadius: 8,
    width: 320,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  icon: {
    width: 70,
    height: 70,
  },
});
