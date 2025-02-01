/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import store from "./redux/store";
import { Provider } from 'react-redux';

import LandingPage from './screens/LandingPage'; 
import ProfileForm from './screens/ProfileForm';
import LocationBasedMatching from './screens/LocationBasedMatching';
import StudentDashboard from './screens/StudentDashboard';
import AppNavigator from "./navigation/AppNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{
          headerShown: false, // Hides the header for a cleaner look
        }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="ProfileForm" component={ProfileForm} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        <Stack.Screen name="LocationBasedMatching" component={LocationBasedMatching} />

        <Provider store={store}>
      <AppNavigator />
    </Provider>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import store from "./redux/store";
import { Provider } from 'react-redux';

import LandingPage from './screens/LandingPage'; 
import ProfileForm from './screens/ProfileForm';
import LocationBasedMatching from './screens/LocationBasedMatching';
import StudentDashboard from './screens/StudentDashboard';
import AppNavigator from "./navigation/AppNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LandingPage"
          screenOptions={{
            headerShown: false, // Hides the header for a cleaner look
          }}
        >
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="ProfileForm" component={ProfileForm} />
          <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
          <Stack.Screen name="LocationBasedMatching" component={LocationBasedMatching} />

          <AppNavigator />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
