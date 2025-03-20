import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

// const sareeData = [
//   {
//     image: require("../../assets/images/cardImg1.png"),
//     name: "Elegant Red Silk Saree with Gold Border",
//     price: "2,499",
//     originalPrice: "3000",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil numquam, quo expedita earum fugit porro reiciendis laudantium enim totam hic molestias facilis? Inventore doloremque aut nihil quasi doloribus nemo.",
//   },
// ];

const sareeData = {
  images: [
    { image: require("../../assets/images/saree1.jpg") },
    { image: require("../../assets/images/saree4.png") },
    { image: require("../../assets/images/saree3.png") },
  ],
};
const Cart = () => {
  const [selectedImage, setSelectedImage] = useState(sareeData.images[0].image);

  return (
    <View style={styles.container}>
      <View style={styles.homeTitle}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.title}>
          <Ionicons name="cart" size={30} /> Kite Fashion
        </Text>
      </View>
      <View style={styles.container}>
      {/* Display Selected Image */}
      <Image source={selectedImage} style={styles.mainImage} />

      {/* Image Selection Thumbnails */}
      <View style={styles.thumbnailContainer}>
        {sareeData.images.map((imgObj, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedImage(imgObj.image)}
            style={[
              styles.thumbnailWrapper,
              selectedImage === imgObj.image && styles.selectedThumbnail,
            ]}
          >
            <Image source={imgObj.image} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  homeTitle: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    paddingTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#10191e",
    paddingLeft: 50,
    alignItems: "center",
    textAlign: "center",
  },
  imagecontainers: {
    display: "flex",
    flexDirection: "row",
  },
  card: {
    marginLeft: 10,
    width: 108,
    height: 168,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedCard: {
    borderColor: "red", // Highlight selected image
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  mainImage: {
    marginLeft: 30,
    width: 300,
    height: 260,
    marginBottom: 20,
    resizeMode: "cover",
    borderRadius: 15,
  },
  thumbnailContainer: {
    flexDirection: "row",
    marginLeft: 10,
    // gap: 3,
  },
  thumbnailWrapper: {
    borderWidth: 2,
    borderColor: "transparent",
    padding: 5,
  },
  selectedThumbnail: {
    borderWidth: 2, 
    borderColor: "red", 
    borderRadius: 1,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 15,
    resizeMode: "cover",
  },
});
