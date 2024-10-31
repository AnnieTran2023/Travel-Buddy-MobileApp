import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Login from "./components/Login";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.customFontText}>Hello with Outfit Font!</Text>
      <Login/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customFontText: {
    fontFamily: "Outfit",
    fontSize: 15,
  },
});

export default App;
