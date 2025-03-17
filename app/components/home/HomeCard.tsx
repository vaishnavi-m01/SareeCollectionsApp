import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

type SareeCardProps = {
  id: number;
  image: string;
  name: string;
  price: string;
};

export default function HomeCard({ id, image, name, price }: SareeCardProps) {
  const navigation = useNavigation();
  const [hover, setHover] = useState(false);

  const handleCardClick = () => {
    console.log("Data", id);
    navigation.navigate("shop" as never);
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={handleCardClick}
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
    >
      <Card style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />

        {hover && (
          <View style={styles.overlay}>
            <Button
              mode="outlined"
              icon="cart"
              textColor="white"
              style={styles.addToCartButton}
            >
              ADD TO CART
            </Button>
          </View>
        )}

        <Card.Content style={styles.cardContent}>
          <View style={styles.textRow}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>₹{price}</Text>
          </View>
          <Text style={styles.quality}>Best quality</Text>
          <View style={styles.ratingRow}>
            <View style={styles.starContainer}>
              {[...Array(5)].map((_, index) => (
                <MaterialIcons key={index} name="star" size={24} color="gold" />
              ))}
            </View>
            <Text style={styles.ratingText}>(1k)</Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    maxWidth: 350,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: "center",
  },
  card: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    height: 20,
    width: "100%",
    resizeMode: "cover",
    borderBottomWidth: 2,
    borderBottomColor: "#BC0320",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#2B2017",
    padding: 10,
    alignItems: "center",
  },
  addToCartButton: {
    borderColor: "white",
  },
  cardContent: {
    backgroundColor: "#B10000",
    padding: 10,
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    color: "white",
    fontWeight: "bold",
  },
  quality: {
    color: "#FBEFF1",
    marginTop: 10,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  starContainer: {
    flexDirection: "row",
    gap: 5,
  },
  ratingText: {
    marginLeft: 10,
    fontSize: 16,
    color: "white",
  },
});
