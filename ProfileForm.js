import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice'; // Import Redux action

const ProfileForm = ({ route, navigation }) => {
  const { role } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const dispatch = useDispatch(); // Get Redux dispatch function

  const handleSubmit = () => {
    dispatch(setUser({ name, email, role, extraInfo })); // Save data to Redux store
    navigation.navigate('Dashboard'); // Navigate after storing
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{role === 'student' ? 'Student Profile' : 'Tutor Profile'}</Text>
      <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} />
      {role === 'tutor' && (
        <TextInput style={styles.input} placeholder="Enter your qualifications" value={extraInfo} onChangeText={setExtraInfo} />
      )}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 15, paddingLeft: 10, borderRadius: 10, backgroundColor: 'white' },
  submitButton: { backgroundColor: '#32CD32', paddingVertical: 12, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  submitButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default ProfileForm;
