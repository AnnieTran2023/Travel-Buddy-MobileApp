import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  TextInput,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";

export default function SignIn({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Outfit-Regular": require("./../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const theme = {
    colors: {
      text: "black",
      background: "white",
      placeholder: "grey",
      primary: "black",
      outline: "grey",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.text}>Great to see you again!</Text>
        <View>
          <TextInput
            mode="outlined"
            label="Username"
            value={username}
            onChangeText={(username) => setUsername(username)}
            style={styles.input}
            theme={theme}
          />
          <TextInput
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={!passwordVisible}
            right={
              <TextInput.Icon
                icon={passwordVisible ? "eye-off" : "eye"}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
            style={styles.input}
            theme={theme}
          />
        </View>
        <View>
          <Button
            mode="contained"
            buttonColor="black"
            textColor="white"
            labelStyle={styles.buttonText}
            contentStyle={styles.buttonContent}
            style={styles.button}
          >
            Sign in
          </Button>
          <Text style={styles.signupText}>
            Don't have an account?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <Image
          source={require("./../assets/bear.png")}
          style={{
            width: 400,
            height: 150,
            alignSelf: "center",
            marginTop: 20,
          }}
          resizeMode="contain"
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    textAlign: "center",
  },
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 120,
    padding: 20,
  },
  text: {
    fontFamily: "Outfit-Regular",
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    padding: 10,
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
    height: 70,
  },
  buttonText: {
    fontFamily: "Outfit-Regular",
    fontSize: 18,
  },
  buttonContent: {
    height: 50,
  },
  button: {
    marginTop: 20,
    width: 350,
    alignSelf: "center",
  },
  signupText: {
    fontFamily: "Outfit-Regular",
    fontSize: 16,
    color: "grey",
    textAlign: "center",
    marginTop: 20,
  },
  signupLink: {
    fontFamily: "Outfit-Bold",
    fontSize: 16,
    top: 3,
    color: "#3d348b",
    textDecorationLine: "underline",
  },
});
