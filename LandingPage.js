// /screens/LandingPage.js
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/landing-background.jpg')} style={styles.container}>
      <Text style={styles.title}>Welcome to the Local Tutor Finder</Text>
      <Text style={styles.subtitle}>Find the perfect tutor or student near you</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="I'm a Student" 
          color="#FF6347" 
          onPress={() => navigation.navigate('ProfileForm', { role: 'student' })} 
        />
        <Button 
          title="I'm a Tutor" 
          color="#32CD32" 
          onPress={() => navigation.navigate('ProfileForm', { role: 'tutor' })} 
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default LandingPage;
