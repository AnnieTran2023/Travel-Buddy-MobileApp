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
  smallTitle: {
    fontFamily: "Outfit-Medium",
    fontSize: 20,
    marginBottom: 10,
  },
  extraSmallTitle: {
    fontFamily: "Outfit-Medium",
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontFamily: "Outfit-Regular",
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginBottom: 15,
  },
  smallText: {
    fontFamily: "Outfit-Regular",
    fontSize: 16,
    color: "grey",
  },
  extraSmallText: {
    fontFamily: "Outfit-Regular",
    fontSize: 14,
    color: "grey",
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
    width: "100%",
    alignSelf: "center",
  },
  optionsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  surface: {
    padding: 14,
    marginBottom: 20,
    borderRadius: 8,
    width: 330,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  icon: {
    width: 60,
    height: 60,
  },
  whiteText: {
    fontSize: 30,
    color: "white",
    fontFamily: "Outfit-Bold",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default AppStyles;
