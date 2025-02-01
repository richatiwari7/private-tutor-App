import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LandingPage from "../screens/LandingPage";
import ProfileForm from "../screens/ProfileForm";
// import Dashboard from "../screens/Dashboard";
import LocationBasedMatching from "../screens/LocationBasedMatching";
import StudentDashboard from "../screens/StudentDashboard";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="ProfileForm" component={ProfileForm} />
        <Stack.Screen name="Dashboard" component={StudentDashboard} />
        <Stack.Screen name="LocationMatching" component={LocationBasedMatching} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
