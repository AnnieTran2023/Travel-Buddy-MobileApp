import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppStyles from "../AppStyles";
import { ProgressBar, Surface } from "react-native-paper";
import { useContext, useEffect } from "react";
import TripContext from "./TripContext";

export default function SelectCompanions({ navigation }) {
  const options = [
    {
      id: 1,
      name: "Just me",
      description: "Just me, myself, and I",
      icon: "🚶‍♂️",
      people: "1",
    },
    {
      id: 2,
      name: "Best Buddies",
      description: "The more, the merrier",
      icon: "🍾",
      people: "3-10",
    },
    {
      id: 3,
      name: "Lovebirds",
      description: "Just us, exploring hand in hand",
      icon: "💗",
      people: "2",
    },
    {
      id: 4,
      name: "Family Crew",
      description: "Family fun for everyone",
      icon: "🏡",
      people: "3-10",
    },
  ];

  const { tripDetails, setTripDetails } = useContext(TripContext);

  useEffect(() => {
    console.log(tripDetails);
  }, [tripDetails]);
  return (
    <View style={styles.container}>
      <ProgressBar
        progress={0.5}
        color="#f72585"
        style={{ marginBottom: 20 }}
      />
      <Text style={AppStyles.title}>Who's Coming Along?</Text>
      <Text style={AppStyles.text}>
        Is it a solo trip, or are we gathering the gang? 👯‍♀️🍻
      </Text>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            activeOpacity={0.5}
            onPress={() => {
              setTripDetails({ ...tripDetails, companions: option });
              navigation.navigate("SelectDate");
            }}
          >
            <Surface style={styles.surface} elevation={2}>
              <View style={styles.optionContainer}>
                <View>
                  <Text style={AppStyles.smallTitle}>{option.name}</Text>
                  <Text style={AppStyles.smallText}>{option.description}</Text>
                </View>
                <Text style={styles.icon}>{option.icon}</Text>
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
  surface: {
    padding: 16,
    backgroundColor: "#ffe5ec",
    marginBottom: 16,
    borderRadius: 8,
    width: 330,
    marginBottom: 25,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: 35,
  },
});
