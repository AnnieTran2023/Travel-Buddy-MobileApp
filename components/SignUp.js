import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  TextInput,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../configs/FirebaseConfig";

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

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const createAccount = () => {
    if (!name || !email || !password || !confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Please fill in all fields!",
      });
      return;
    }

    if (!validateEmail(email)) {
      Toast.show({
        type: "error",
        text1: "Please enter a valid email!",
      });
      return;
    }

    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Passwords do not match!",
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
        });
        console.log(user);
        Toast.show({
          type: "success",
          text1: "Account created successfully!",
          visibilityTime: 2000,
        });
        setTimeout(() => {
          navigation.navigate("SignIn");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Toast.show({
          type: "error",
          text1: errorMessage,
        });
      });
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <View>
          <TextInput
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={(name) => setName(name)}
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
          onPress={createAccount}
        >
          Create Account
        </Button>
        <Button
          mode="outlined"
          textColor="black"
          labelStyle={styles.signInButtonText}
          contentStyle={styles.signInButtonContent}
          style={styles.signInButton}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign In
        </Button>
      </View>
      <Toast />
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
    width: 330,
    alignSelf: "center",
  },
  signInButtonText: {
    fontFamily: "Outfit-Regular",
    fontSize: 18,
    color: "black",
  },
  signInButtonContent: {
    height: 50,
    borderColor: "black",
    backgroundColor: "white",
  },
  signInButton: {
    marginTop: 20,
    width: 330,
    alignSelf: "center",
    borderColor: "black",
  },
});
