import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ShopCreateIcons from "../components/shop/ShopCreateIcon";
import ShopViewCommand from "../components/shop/ShopViewCommand";
import HomeCard from "../components/home/HomeCard";

const cardsarees = [
  {
    id: 1,
    image: require("../../assets/images/cardImg1.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 2,
    image: require("../../assets/images/cardImg1.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
];
const ShopPurchaseReviews = [
  {
    id: 1,
    name: "Vaishnavi M.",
    reviewText:
      "This product exceeded my expectations. The quality is outstanding, and the details are well-crafted. I will definitely recommend this to my friends!",
    date: "Posted on August 14,2023",
  },
  {
    id: 2,
    name: "Hari S.",
    reviewText:
      "I was skeptical at first, but this purchase turned out to be amazing. The material feels premium, and it works perfectly. Worth every penny!",
    date: "Posted on August 14,2023",
  },
  {
    id: 3,
    name: "Sabitha Sri M.",
    reviewText:
      "A truly fantastic product! The durability and design are top-notch. I have been using it daily, and I absolutely love it!",
    date: "Posted on August 14,2023",
  },
];
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
const colors = ["#4F4631", "#314F4A", "#31344F"];

const Cart = () => {
  const saree = sareeData[0]; // Extract the first saree object
  const [selectedImage, setSelectedImage] = useState(saree.images[0].image);
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]); // Default color
  const [count, setCount] = useState(0);
  const [_reviews, setReviews] = useState<any[]>([]);

  const handleNewReview = (newReview: any) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  };

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
                <MaterialIcons
                  key={index}
                  name="star"
                  size={24}
                  color="#ffc633"
                />
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
        </View>

        <View style={styles.shopPurChaseContents}>
          <Text style={styles.shopContent}>Select Colors</Text>
          <View style={styles.colorContainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedColor(color)}
                style={[
                  styles.colorCircle,
                  { backgroundColor: color },
                  selectedColor === color && styles.selectedCircle,
                ]}
              >
                {selectedColor === color && (
                  <MaterialIcons name="check" size={20} color="white" />
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Quantity Content */}
          <View style={styles.QuantityContainer}>
            <View style={styles.bottomLine}></View>
            <Text style={styles.quantityTitle}>Quantity</Text>
          </View>
          <View style={styles.shopButton}>
            <TouchableOpacity
              onPress={() => setCount((prev) => Math.max(0, prev - 1))}
            >
              <Text style={styles.shopButtonIcons}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.iconButton}>{count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCount((prev) => prev + 1)}>
              <Text style={styles.shopButtonIcons}> + </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomLine}></View>

          <View style={styles.shopButtonContainer}>
            <TouchableOpacity style={styles.buyNowButton}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.ratingText}>Rating & Reviews</Text>
          <Text style={styles.ratingLine}></Text>

          <View style={styles.commentContainers}>
            <Text style={styles.reviewText}>All Reviews</Text>
            <MaterialCommunityIcons
              name="filter-variant"
              style={styles.filterIcon}
              size={30}
              color="black"
            />
            <ShopCreateIcons onNewReview={handleNewReview} />
          </View>
          <ScrollView>
            <View style={styles.ratingContainer}>
              {ShopPurchaseReviews.map((item, index) => (
                <ShopViewCommand
                  key={index}
                  name={item.name}
                  reviewText={item.reviewText}
                  date={item.date}
                />
              ))}
            </View>
          </ScrollView>

          <View style={styles.reviewButton}>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.reviewButtonText}>Load More Reviews</Text>
            </TouchableOpacity>
          </View>
        </View>
          <Text style={styles.cardText}>You might also like</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.Cardcontainer}
        >
          {cardsarees.map((saree) => (
            <HomeCard
              key={saree.id}
              id={saree.id}
              image={saree.image}
              name={saree.name}
              price={saree.price}
            />
          ))}
        </ScrollView>
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
  sareeContainer: {
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
    gap: 3,
  },
  starRate: {
    fontSize: 20,
    fontWeight: 400,
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
    gap: 10,
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
    paddingLeft: 6,
    paddingRight: 10,
  },
  bottomLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#E0E0E0",
  },

  shopPurChaseContents: {
    padding: 10,
    paddingLeft: 20,
  },
  shopContent: {
    fontWeight: 900,
    color: "0F1A20",
    fontSize: 20,
  },
  shopcolor: {
    display: "flex",
    flexDirection: "row",
  },
  colorContainer: {
    flexDirection: "row",
    gap: 10,
  },
  colorCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCircle: {
    borderColor: "black",
  },

  QuantityContainer: {
    marginTop: 40,
  },
  quantityTitle: {
    color: "0F1A20",
    fontSize: 20,
    fontWeight: "bold",
  },
  shopButton: {
    flexDirection: "row",
    display: "flex",
    marginTop: 20,
    marginBottom: 30,
    gap: 10,
  },
  shopButtonIcons: {
    fontSize: 25,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#bc0420",
    color: "white",
    width: 40,
    height: 40,
  },
  iconButton: {
    width: 40,
    height: 40,
    color: "#BC0320",
    borderColor: "#BC0320",
    borderWidth: 2,
    textAlign: "center",
    paddingTop: 10,
  },
  shopButtonContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    gap: 5,
  },
  buyNowButton: {
    backgroundColor: "#BC0320",
    borderRadius: 30,
    padding: 10,
    width: "50%",
    textAlign: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  addToCartButton: {
    borderRadius: 30,
    padding: 10,
    width: "50%",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#BC0320",
  },
  addToCartText: {
    color: "#BC0320",
  },
  ratingText: {
    margin: 20,
    paddingTop: 10,
    color: "#000000",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
  },
  ratingLine: {
    alignSelf: "center",
    height: 2,
    width: "50%",
    backgroundColor: "#000000",
  },
  commentContainers: {
    padding: 10,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: 900,
  },
  filterIcon: {
    backgroundColor: "#f0f0f0",
    padding: 5,
  },
  ratingContainer: {
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  reviewButton: {
    marginTop: 20,
    textAlign: "center",
    alignSelf: "center",
  },
  reviewButtonText: {
    color: "#000",
    fontWeight: 700,
  },

  Cardcontainer: {
    flexDirection: "row",
    padding:5,
    gap: 60,
    marginBottom: 80
  },
  cardText:{
    marginTop: 20,
    alignSelf: "center",
    fontSize: 25,
    fontWeight:800
  }
});
