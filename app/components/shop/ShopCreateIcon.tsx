import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { AirbnbRating } from "react-native-ratings"; // Star rating library
import Toast from "react-native-toast-message"; // Optional for better UI

type ShopCreateIconsProps = {
  onNewReview: (review: any) => void;
};

export default function ShopCreateIcons({ onNewReview }: ShopCreateIconsProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!name || !reviewText || rating === 0) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    const newReview = {
      id: Math.random(),
      name,
      reviewText,
      rating,
      verified: false,
      date: new Date().toLocaleDateString(),
    };

    onNewReview(newReview); // ✅ Instantly update UI

    fetch("https://your-api.com/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then(() => Toast.show({ type: "success", text1: "Review Submitted!" }))
      .catch(() => Toast.show({ type: "error", text1: "Submission Failed!" }));

    setOpen(false);
    setName("");
    setReviewText("");
    setRating(0);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
        <Text style={styles.buttonText}>Write a Review</Text>
      </TouchableOpacity>

      <Modal visible={open} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Write a Review</Text>

            <AirbnbRating
              count={5}
              defaultRating={0}
              size={30}
              showRating={false}
              onFinishRating={(value) => setRating(value)}
            />

            <TextInput
              style={styles.input}
              placeholder="Your Name"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.textarea}
              placeholder="Your Review"
              value={reviewText}
              onChangeText={setReviewText}
              multiline
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setOpen(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    height: 100,
    textAlignVertical: "top",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    marginRight: 5,
  },
  submitButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    marginLeft: 5,
  },
});
