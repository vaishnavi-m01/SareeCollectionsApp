import { AntDesign, Ionicons } from "@expo/vector-icons";

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";

import HomeScreens from "../components/home/HomeScreens";
import Navbar from "../components/home/Navbar";
import HomeContents from "../components/home/HomeContents";
import HomeCard from "../components/home/HomeCard";

const cardsarees = [
  {
    id: 1,
    image: "/image/homeImg1.png",
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 1,
    image: "/image/cardImg1.png",
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
];

const LoginScreen = () => {
  return (
    <View>
      {/* Navbar  */}
      <Navbar />

      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.container}>
            <HomeContents />
          </View>
          {/* Shop Carousel  container */}

          <View style={styles.shopSection}>
            <Text style={styles.shopTitle}>Shop</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <AntDesign
                name="left"
                size={15}
                color="white"
                style={styles.CarouelIcon}
              />

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
                  source={require("../../assets/images/homeCarouselImg2.png")}
                />
                <Text style={styles.carouselText}>Kanchipuram</Text>
              </View>
              <View style={styles.carouselItem}>
                <Image
                  style={styles.carouselImage}
                  source={require("../../assets/images/homeCarouselImg3.png")}
                />
                <Text style={styles.carouselText}>Chettinad</Text>
              </View>
              <View style={styles.carouselItem}>
                <Image
                  style={styles.carouselImage}
                  source={require("../../assets/images/homeCarouselImg4.png")}
                />
                <Text style={styles.carouselText}>Kumbakon</Text>
              </View>
              <AntDesign
                name="right"
                size={15}
                color="white"
                style={styles.CarouelIcon}
              />
            </ScrollView>
          </View>

          {cardsarees.map((saree, index) => (
            <HomeCard
              id={saree.id}
              image={saree.image}
              name={saree.name}
              price={saree.price}
            />
          ))}
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffe9ec",
  },

  heroSection: {
    padding: 20,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundSize: "conver",
    backgroundRepeat: "no-repeat",
  },
  homeImage: {
    width: 300,
    borderRadius: 10,
    resizeMode: "contain",
  },
  heroTextContainer: {
    flex: 1,
    marginLeft: 15,
  },

  shopNowButton: {
    marginTop: 10,
    borderRadius: 5,
  },

  // Carousel Section
  shopSection: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  shopTitle: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 10,
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
  CarouelIcon: {
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 25,
    height: 30,
    marginTop: 20,
    padding: 5,
    backgroundColor: "#10191f",
  },
});
