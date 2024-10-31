import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { TextInput, Provider as PaperProvider } from "react-native-paper";

export default function SignIn() {
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
    },
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.text}>Good to see you again!</Text>
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
    padding: 30,
    marginTop: 40,
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
});
