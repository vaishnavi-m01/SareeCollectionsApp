import React, { useRef } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import Navbar from "../components/home/Navbar";
import HomeContents from "../components/home/HomeContents";
import HomeCard from "../components/home/HomeCard";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SareeCarousel from "../components/home/SareeCarousel";

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
  {
    id: 3,
    image: require("../../assets/images/cardImg1.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 4,
    image: require("../../assets/images/cardImg1.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
];

const HomeScreen = () => {

  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);

  const handleRegister = () => {
    router.replace("/shop"); // Navigate to the main app
  };

  const handleScroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollTo({
      x: direction === "right" ? 200 : -200, // Moves right or left
      animated: true,
    });
  };


  return (
    <View style={styles.container}>
      {/* Navbar */}
      <Navbar />

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Home Content */}
        <HomeContents />

        {/* Carousel Section */}
        <View style={styles.shopSection}>
          <Text style={styles.shopTitle}>Shop</Text>
          {/* <View style={styles.carouselRounded}>
            <TouchableOpacity onPress={() => handleScroll("left")}>
              <AntDesign name="left" size={15} color="white" style={styles.CarouselIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.carouselItem} onPress={handleRegister} >
              <Image
                style={styles.carouselImage}
                source={require("../../assets/images/homeCarouselImg1.png")}
              />
              <Text style={styles.carouselText}>Banarasi</Text>
            </TouchableOpacity>
            <View style={styles.carouselItem}>
              <Image
                style={styles.carouselImage}
                source={require("../../assets/images/homeCarouselImg1.png")}
              />
              <Text style={styles.carouselText}>Banarasi</Text>
            </View>
            <View style={styles.carouselItem}>
              <Image
                style={styles.carouselImage}
                source={require("../../assets/images/homeCarouselImg1.png")}
              />
              <Text style={styles.carouselText}>Banarasi</Text>
            </View>
            <View style={styles.carouselItem}>
              <Image
                style={styles.carouselImage}
                source={require("../../assets/images/homeCarouselImg1.png")}
              />
              <Text style={styles.carouselText}>Banarasi</Text>
            </View>
            <TouchableOpacity onPress={() => handleScroll("right")}>
              <AntDesign name="right" size={15} color="white" style={styles.CarouselIcon} />
            </TouchableOpacity>
            <View style={styles.carouselItem}>
              <Image 
                style={styles.carouselImage}
                source={require("../../assets/images/homeCarouselImg1.png")}
              />
              <Text style={styles.carouselText}>Banarasi</Text>
            </View>
            <View style={styles.carouselItem}>
              <Image
                style={styles.carouselImage}
                source={require("../../assets/images/homeCarouselImg1.png")}
              />
              <Text style={styles.carouselText}>Banarasi</Text>
            </View>
          </View> */}
          <SareeCarousel></SareeCarousel>

        </View>

        {/* Cards Section */}
        <View style={styles.cardSection}>
          <Text style={styles.CardTitle}>New</Text>
          <Text style={styles.cardRightTitle}>View all</Text>
        </View>

        <Text style={styles.cardSubSection}>You've never seen it before!</Text>

        {/* Scrollable Saree Cards */}
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe9ec",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100, // Ensures scrolling space
  },
  shopSection: {
    marginTop: 25,
    paddingHorizontal: 5,
  },
  shopTitle: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 10,
    marginLeft: 25
  },
  cardSection: {
    marginTop: 30,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CardTitle: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 10,
  },
  cardRightTitle: {
    fontSize: 15,
    color: "#968386",
  },
  cardSubSection: {
    padding: 5,
    paddingLeft: 22,
    color: "#968386",
  },
  Cardcontainer: {
    flexDirection: "row",
    gap: 60,
    paddingHorizontal: 10,
  },

  carouselRounded: {
    flexDirection: "row"


  },
  carouselItem: {
    alignItems: "center",
    marginRight: 1,
  },
  carouselImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    resizeMode: "cover",
  },
  carouselText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  CarouselIcon: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    marginTop: 20,
    padding: 5,
    backgroundColor: "#10191f",
    marginRight: 5,
    marginLeft: 5
  },
});
