import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Button } from "react-native-paper";

export default function Login({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Outfit-Regular": require("./../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <View>
      <Image
        source={require("./../assets/login.jpg")}
        style={{ width: 400, height: 500 }}
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
            labelStyle={styles.buttonText}
            contentStyle={styles.buttonContent}
            onPress={() => navigation.navigate("SignIn")}
          >
            Get started!
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: 350,
  },
});
