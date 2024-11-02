import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  titleLeft: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    marginBottom: 20,
  },
  text: {
    fontFamily: "Outfit-Regular",
    fontSize: 20,
    color: "grey",
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

export default AppStyles;
