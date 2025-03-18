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

import Navbar from "../components/home/Navbar";
import HomeContents from "../components/home/HomeContents";
import HomeCard from "../components/home/HomeCard";


const cardsarees = [
  {
    id: 1,
    image: require("../../assets/images/cardImg1.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
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

          {/* card Section */}

          <View style={styles.cardSection}>
            <Text style={styles.CardTile}>New</Text>
            <Text style={styles.cardRightTile}>View all</Text>
          </View>

          <Text style={styles.cardSubSection}>
            You've never seen it before!
          </Text>
           
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.Cardcontainer}>
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
    marginTop: 25,
    paddingHorizontal: 25,
    // flexDirection:"row",
    justifyContent: "space-between",
  },
  shopTitle: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 10,
  },
  cardSection: {
    marginTop: 30,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CardTile: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 10,
  },
  cardRightTile: {
    fontSize: 15,
    color: "#968386",
  },
  cardSubSection: {
    padding: 5,
    paddingLeft: 22,
    color: "#968386",
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
  Cardcontainer: {
    flexDirection: "row",
    flexWrap: "wrap", 
    justifyContent: "space-between", 
    padding: 10,
    gap: 60
  },
});
