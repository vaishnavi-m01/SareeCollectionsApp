import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const sareeData = [
  {
    images: [
      { image: require("../../assets/images/saree1.jpg") },
      { image: require("../../assets/images/saree4.png") },
      { image: require("../../assets/images/saree3.png") },
    ],
    name: "Double Shade Banarasi Silk saree",
    originalPrice: 3000,
    price: 2800,
    discount: 40,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi enim voluptate neque odit repellat. Sit ipsa quas voluptates, odio rerum laudantium maxime vel labore ea repellendus, iusto sint molestiae asperiores?",
  },
];

const Cart = () => {
  const saree = sareeData[0]; // Extract the first saree object
  const [selectedImage, setSelectedImage] = useState(saree.images[0].image);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.homeTitle}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.title}>
          <Ionicons name="cart" size={30} /> Kite Fashion
        </Text>
      </View>

      <ScrollView style={styles.sareeContainer}>
      {/* Saree Display Section */}
      <View style={styles.sareeSubContainers}>
        {/* Main Image Display */}
        <Image source={selectedImage} style={styles.mainImage} />

        {/* Image Selection Thumbnails */}
        <View style={styles.thumbnailContainer}>
          {saree.images.map((imgObj, index) => (
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

        {/* Saree Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.sareeName}>{saree.name}</Text>
          <View style={styles.starContainer}>
      {[...Array(4)].map((_, index) => (
        <MaterialIcons key={index} name="star" size={24} color="#ffc633" />
      ))}
              <Text style={styles.starRate}> 4/5</Text>
       </View>
       <View style={styles.priceContainer}>
            <Text style={styles.discountPrice}>₹{saree.price}</Text>
            <Text style={styles.originalPrice}>₹{saree.originalPrice}</Text>
            <Text style={styles.discount}> - {saree.discount}%</Text>
          </View>
          <Text style={styles.description}>{saree.description}</Text>
        </View>
        <View style={styles.bottomLine}></View>
        <View style={styles.detailsContainer}>
          <Text style={styles.sareeName}>{saree.name}</Text>
          <Text style={styles.description}>{saree.description}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>₹{saree.originalPrice}</Text>
            <Text style={styles.discountPrice}>₹{saree.price}</Text>
            <Text style={styles.discount}> -{saree.discount}% </Text>
          </View>
        </View>
        </View>


        <View style={styles.shopPurChaseContents}>
        <Text style={styles.shopContent}>Select Color</Text>
        <Text style={styles.shopContent}>Select Color</Text>
        <Text style={styles.shopContent}>Select Color</Text>
        <Text style={styles.shopContent}>Select Color</Text>
        <Text style={styles.shopContent}>Select Color</Text>
        <Text style={styles.shopContent}>Select Color</Text>




      </View>

           </ScrollView>
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
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#10191e",
    paddingLeft: 50,
    textAlign: "center",
  },
  sareeContainer:{
    backgroundColor: "#ffe9ec",
  },
  sareeSubContainers: {
    alignItems: "center",
    paddingVertical: 20,
  },
  mainImage: {
    width: 300,
    height: 260,
    alignItems: "center",
    marginBottom: 20,
    resizeMode: "cover",
    borderRadius: 15,
  },
  thumbnailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  thumbnailWrapper: {
    marginHorizontal: 5,
  },
  selectedThumbnail: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 16,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 15,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
  },
  sareeName: {
    fontSize: 20,
    fontWeight: 900,
    color: "#000000",
  },
  starContainer: {
    flexDirection: "row",
    marginVertical: 15,
    gap:3
  },
  starRate:{
    fontSize:20,
    fontWeight: 400

  },
  description: {
    fontSize: 15,
    color: "#B2A3A5",
    paddingHorizontal: 5,
    marginVertical: 20,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap:10
  },
  originalPrice: {
    textDecorationLine: "line-through",
    fontSize: 30,
    color: "#BDABAE",
    marginRight: 5,
  },
  discountPrice: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginRight: 5,
  },
  discount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF7071",
    borderRadius: 10,
    backgroundColor: "#FFD7DA",
    padding: 5,
    paddingLeft:6,
    paddingRight:10 
  },
  bottomLine:{
   width: "90%",
   height: 2,
   backgroundColor: "#E0E0E0",
   marginBottom: 10

  },

  shopPurChaseContents:{
    padding:20
  },
  shopContent:{
     fontWeight: 700,
     color:"0F1A20",
     fontSize:20,
  }
});
