import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../screens/LandingPage';
import ProfileForm from '../screens/ProfileForm';
import Dashboard from '../screens/Dashboard';
import LocationBasedMatching from '../screens/LocationBasedMatching';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileForm" component={ProfileForm} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="LocationBasedMatching" component={LocationBasedMatching} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
