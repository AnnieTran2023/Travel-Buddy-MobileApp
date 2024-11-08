import { View, Text , StyleSheet} from "react-native";
import React from "react";

export default function Transport({ transportDetails }) {
  console.log(transportDetails);
  return (
    <View style = {styles.container}>
      <Text>Transport</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 100,
    padding: 25,
  },
});
