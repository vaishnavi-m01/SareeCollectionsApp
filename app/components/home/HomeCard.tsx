import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type SareeCardProps = {
  id: number;
  image: string | number;
  name: string;
  price: string;
};

export default function HomeCard({ id, image, name, price }: SareeCardProps) {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const handleCardClick = () => {
    console.log("Data", id);
    router.replace("/shop"); 
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleCardClick}>
      <Card style={styles.card}>
        {/* Image Container with onTouchStart & onTouchEnd to simulate hover */}
        <View
          onTouchStart={() => setHover(true)}
          onTouchEnd={() => setHover(false)}
          style={styles.imageContainer}
        >
          <Image
            source={typeof image === "string" ? { uri: image } : image}
            style={styles.image}
          />

          {/* Show "Add to Cart" when hover is true */}
          {hover && (
            <View style={styles.overlay}>
              <TouchableOpacity style={styles.button}>
                <MaterialIcons name="shopping-cart" size={20} color="white" />
                <Text style={styles.buttonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <Card.Content style={styles.cardContent}>
          <View style={styles.textRow}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>₹{price}</Text>
          </View>
          <Text style={styles.quality}>Best quality</Text>
          <View style={styles.ratingRow}>
            <View style={styles.starContainer}>
              {[...Array(5)].map((_, index) => (
                <MaterialIcons key={index} name="star" size={15} color="gold" />
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
    padding: 10,
    maxWidth: 110,
    borderRadius: 8,
    marginVertical: 10,
  },
  card: {
    overflowX: "hidden",
    overflowY: "hidden",

    width: 160,
    height: 260,
    borderRadius: 5,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    height: 150,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#BC0320",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(43, 32, 23, 0.9)", 
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    marginLeft: 5,
  },
  cardContent: {
    backgroundColor: "#B10000",
    padding: 10,
    width: "100%",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    gap: 3,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
  price: {
    color: "white",
    fontWeight: 900,
  },
  quality: {
    color: "#FBEFF1",
    marginTop: 10,
    fontSize: 8,
    fontWeight: "bold",
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
