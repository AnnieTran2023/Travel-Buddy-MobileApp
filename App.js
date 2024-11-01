import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Toast from "react-native-toast-message";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Discover from "./components/Discover";
import Trip from "./components/Trip";
import Profile from "./components/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthenticatedTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Trip" component={Trip} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
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
        <Stack.Screen name="Authenticated" component={AuthenticatedTabs} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
