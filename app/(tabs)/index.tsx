import { Ionicons } from "@expo/vector-icons";

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Button } from "react-native-paper";
import Card from "../components/Card";
import CardExample from "../components/home/CardExample";
import HomeScreens from "../components/home/HomeScreens";
import Navbar from "../components/home/Navbar";

const LoginScreen = () => {
  return (
    <View>
      <Navbar/>
       <ScrollView>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      
      {/* <View style={styles.homeTitle}>
        <Text style={styles.title}>
          <Ionicons name="cart" size={30} /> Kite Fashion
        </Text>
      </View> */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="person-circle-sharp" size={50} color="#525252" />
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              buttonColor="#c5001c"
              onPress={() => console.log("Pressed")}
              style={styles.orderButton}
            >
              My Orders
            </Button>
            <Ionicons name="cart" color={"#525252"} size={35} />
          </View>
        </View>
      </View>

      <View style={styles.homeContainer}>
        <View style={styles.homeContainer}>
          {/* Image with Text Inside */}
          <View style={styles.heroSection}>
            {/* <View style={styles.heroTextContainer}>
      <Text style={styles.heroTitle}>Get the Latest Saree Models From Us</Text>
      <Button mode="contained" buttonColor="#000" style={styles.shopNowButton}>
        Shop Now
      </Button>
    </View> */}
            <Image
              style={styles.heroImage}
              source={require("../../assets/images/homeImg1.png")}
            />
          </View>

          <View style={styles.shopSection}>
            <Text style={styles.shopTitle}>Shop</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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

              {/* Add more items */}
            </ScrollView>
          </View>
      
        
          <View style={styles.shopSection}>
            <Text style={styles.shopTitle}>Shop</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                     
            </ScrollView>
          </View>
          <HomeScreens/>
          <HomeScreens/>

        </View>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>

    </View>

   
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },
  homeTitle: {
    textAlign: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 70,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 30,
    paddingHorizontal: 20,
    shadowColor: "#f9f9f9",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#10191e",
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeft: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    width: 250,
  },
  orderButton: {
    alignItems: "flex-end",
    borderWidth: 2,
    borderColor: "#200000",
  },
  homeContainer: {
    backgroundColor: "#ffe9ec",
  },
  heroSection: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 10,
  },
  heroImage: {
    width: 300,
    height: 250,
    borderRadius: 10,
    resizeMode: "contain",
  },
  heroTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  heroTitle: {
    // fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  shopNowButton: {
    marginTop: 10,
    borderRadius: 5,
  },

  // Carousel Section
  shopSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  shopTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  carouselItem: {
    alignItems: "center",
    marginRight: 15,
  },
  carouselImage: {
    width: 70,
    height: 70,
    borderRadius: 50, // Makes it fully circular
    resizeMode: "cover",
  },
  carouselText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
});
