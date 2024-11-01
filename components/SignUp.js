import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  TextInput,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";
import { useFonts } from "expo-font";

export default function SignUp({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Outfit-Regular": require("./../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  const theme = {
    colors: {
      text: "black",
      background: "white",
      placeholder: "grey",
      primary: "black",
      outline: "grey",
    },
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
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
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.input}
            theme={theme}
          />
          <TextInput
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
            style={styles.input}
            theme={theme}
          />
          <TextInput
            mode="outlined"
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
            secureTextEntry
            style={styles.input}
            theme={theme}
          />
        </View>
        <Button
          mode="contained"
          buttonColor="black"
          textColor="white"
          labelStyle={styles.buttonText}
          contentStyle={styles.buttonContent}
          style={styles.button}
        >
          Create Account
        </Button>
        <Button
          mode="outlined"
          buttonColor="white"
          textColor="black"
          labelStyle={styles.buttonText}
          contentStyle={styles.buttonContent}
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign In
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 120,
    backgroundColor: "white",
    height: "100%",
  },
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    textAlign: "center",
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
});
