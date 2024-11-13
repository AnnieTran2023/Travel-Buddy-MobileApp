import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  TextInput,
  Button,
  Provider as PaperProvider,
} from "react-native-paper";
import Toast from "react-native-toast-message";
import { signOut, onAuthStateChanged , updateProfile} from "firebase/auth";
import { auth } from "../../configs/FirebaseConfig";
import AppStyles from "../AppStyles";

export default function Profile({ navigation }) {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || "");
        setEmail(currentUser.email || "");
      } else {
        setUser(null);
        setDisplayName("");
        setEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Logged out successfully",
          visibilityTime: 3000,
        });
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: error.message,
        });
      });
  };

   const handleChangeName = () => {
     if (displayName !== user.displayName) {
       updateProfile(user, { displayName })
         .then(() => {
           Toast.show({
             type: "success",
             text1: "Name updated successfully",
             visibilityTime: 3000,
           });
         })
         .catch((error) => {
           Toast.show({
             type: "error",
             text1: "Failed to update name: " + error.message,
           });
         });
     } else {
       Toast.show({
         type: "info",
         text1: "No changes to name",
         visibilityTime: 3000,
       });
     }
   };

  return (
    <PaperProvider theme={AppStyles.theme}>
      <View style={styles.container}>
        <Text style={AppStyles.title}>Profile</Text>
        {user ? (
          <>
            <Text style={AppStyles.text}>
              Welcome back, {user.displayName}!
            </Text>
            <View>
              <TextInput
                mode="outlined"
                label="Name"
                value={displayName}
                onChangeText={setDisplayName}
                style={AppStyles.input}
                theme={AppStyles.theme}
              />
              <TextInput
                mode="outlined"
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={AppStyles.input}
                theme={AppStyles.theme}
                editable={false}
              />
            </View>
            <View
              style={{  justifyContent: "space-around" }}
            >
              <Button
                mode="outlined"
                buttonColor="white"
                textColor="black"
                labelStyle={AppStyles.buttonText}
                contentStyle={AppStyles.buttonContent}
                style={AppStyles.button}
                onPress={handleChangeName}
              >
                Save
              </Button>
              <Button
                mode="contained"
                buttonColor="black"
                textColor="white"
                labelStyle={AppStyles.buttonText}
                contentStyle={AppStyles.buttonContent}
                style={AppStyles.button}
                onPress={handleLogout}
              >
                Log Out
              </Button>
            </View>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </PaperProvider>
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

