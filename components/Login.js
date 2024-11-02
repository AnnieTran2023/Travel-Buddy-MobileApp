import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useEffect } from "react";
import { auth } from "./../configs/FirebaseConfig";

export default function Login({ navigation }) {
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigation.navigate("Authenticated");
    }
  }, []);

  return (
    <View>
      <Image
        source={require("./../assets/airplane.jpg")}
        style={{ width: 400, height: 550, alignSelf: "flex-end" }}
        resizeMode="cover"
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
    width: 330,
  },
});
