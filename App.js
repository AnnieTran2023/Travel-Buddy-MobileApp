import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native-paper";
import Toast from "react-native-toast-message";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Discover from "./components/bottom-tab-components/Discover";
import Trip from "./components/bottom-tab-components/Trip";
import Profile from "./components/bottom-tab-components/Profile";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchPlaces from "./components/create-trips/SearchPlaces";
import "react-native-get-random-values";
import { useState } from "react";
import TripContext from "./components/create-trips/TripContext";
import SelectCompanions from "./components/create-trips/SelectCompanions";
import SelectDate from "./components/create-trips/SelectDate";
import SelectBudget from "./components/create-trips/SelectBudget";
import ReviewTrip from "./components/create-trips/ReviewTrip";
import BuildTrip from "./components/create-trips/BuildTrip";
import PlanList from "./components/display-travel-plan/PlanList";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthenticatedTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#6200b3",
        tabBarInactiveTintColor: "#a7a7a7",
        tabBarStyle: {
          height: 90,
          backgroundColor: "#f8f5ff",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Trip"
        component={Trip}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bag-suitcase"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="globe-europe" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [fontsLoaded] = useFonts({
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "Outfit-ExtraBold": require("./assets/fonts/Outfit-ExtraBold.ttf"),
  });

  const [tripDetails, setTripDetails] = useState([]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <TripContext.Provider value={{ tripDetails, setTripDetails }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Authenticated"
            component={AuthenticatedTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchPlaces"
            component={SearchPlaces}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
              headerTintColor: "black",
            }}
          />
          <Stack.Screen
            name="SelectCompanions"
            component={SelectCompanions}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
              headerTintColor: "black",
            }}
          />
          <Stack.Screen
            name="SelectDate"
            component={SelectDate}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
              headerTintColor: "black",
            }}
          />
          <Stack.Screen
            name="SelectBudget"
            component={SelectBudget}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
              headerTintColor: "black",
            }}
          />
          <Stack.Screen
            name="ReviewTrip"
            component={ReviewTrip}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
              headerTintColor: "black",
            }}
          />
          <Stack.Screen
            name="BuildTrip"
            component={BuildTrip}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlanList"
            component={PlanList}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
              headerTintColor: "black",
            }}
          />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </TripContext.Provider>
  );
};

export default App;
