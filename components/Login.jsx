import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Button } from "react-native-paper";

export default function Login() {
  let [fontsLoaded] = useFonts({
    "Outfit-Regular": require("./../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/login.jpg")}
        style={{ width: 400, height: 450 }}
      />
      <View style={styles.login}>
        <Text style={styles.title}>Travel Buddy</Text>
        <Text style={styles.text}>
          Discover new destinations, plan your adventures, and keep track of
          every moment. Let’s make travel easier, more exciting, and perfectly
          tailored to you. Ready to explore?
        </Text>
        <View>
          <Button
            mode="contained"
            buttonColor="black"
            textColor="white"
            icon="google"
            labelStyle={styles.buttonText}
            contentStyle={styles.buttonContent}
          >
            Sign in with Google
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
  },
  login: {
    backgroundColor: "white",
    marginTop: -20,
    paddingTop: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  text: {
    fontFamily: "Outfit-Regular",
    fontSize: 16,
    color: "grey",
    textAlign: "center",
    padding: 10,
    marginTop: 15,
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: "Outfit-Regular",
    fontSize: 18,
  },
  buttonContent: {
    height: 50,
  },
});
