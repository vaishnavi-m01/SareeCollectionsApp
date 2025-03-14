import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";

const sampleData = [
  { id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
  { id: "4", text: "Item 4" },
  { id: "5", text: "Item 5" },
];

const HomeScreens = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.shopSection}>
        <Text style={styles.shopTitle}>Shop</Text>

        {/* ✅ FlatList with Vertical Scrolling */}
        <FlatList
          data={sampleData} // Required data array
          keyExtractor={(item) => item.id} // Unique key for each item
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.text}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false} // Hide scroll indicator
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  shopSection: {
    flex: 1, // Ensure the section expands to allow scrolling
    marginTop: 20,
    paddingHorizontal: 10,
  },
  shopTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5, 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow effect for Android
  },
  listItemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
