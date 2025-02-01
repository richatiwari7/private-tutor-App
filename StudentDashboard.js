// screens/StudentDashboard.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
// import { fetchTutors } from '../services/api'; // A function to fetch tutor data

const StudentDashboard = ({ navigation }) => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    loadTutors();
  }, []);

  const loadTutors = async () => {
    const data = await fetchTutors();
    setTutors(data);
  };

  return (
    <View>
      <Text>Available Tutors</Text>
      <FlatList
        data={tutors}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Book Session" onPress={() => navigation.navigate('BookingPage', { tutorId: item.id })} />
          </View>
        )}
      />
    </View>
  );
};

export default StudentDashboard;
