import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const tutors = [
  {
    id: "1",
    name: "John Doe",
    subject: "Math",
    rating: 4.5,
    image: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    id: "2",
    name: "Jane Smith",
    subject: "Science",
    rating: 4.8,
    image: "https://via.placeholder.com/100", // Placeholder image
  },
];

const HomeScreen = () => {
  const renderTutorCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.tutorImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.tutorName}>{item.name}</Text>
        <Text style={styles.tutorSubject}>{item.subject}</Text>
        <Text style={styles.tutorRating}>Rating: {item.rating} ★</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Find Your Tutor</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search tutors..." />
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Tutor List */}
      <FlatList
        data={tutors}
        keyExtractor={(item) => item.id}
        renderItem={renderTutorCard}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  filterButton: {
    marginLeft: 8,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  filterText: {
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tutorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  cardDetails: {
    flex: 1,
  },
  tutorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  tutorSubject: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  tutorRating: {
    fontSize: 14,
    color: "#444",
  },
  profileButton: {
    marginTop: 8,
    backgroundColor: "#28a745",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  profileButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default HomeScreen;
