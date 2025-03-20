import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const sarees = [
  { id: 1, image: require("../../../assets/images/homeCarouselImg1.png"), name: "Banarasi", screen: "/banarasi" },
  { id: 2, image: require("../../../assets/images/homeCarouselImg2.png"), name: "Kanchipuram", screen: "/kanchipuram" },
  { id: 3, image: require("../../../assets/images/homeCarouselImg3.png"), name: "Chettinad", screen: "/chettinad" },
  { id: 4, image: require("../../../assets/images/homeCarouselImg4.png"), name: "Kumbakonam", screen: "/kumbakonam" },
];

const SareeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = sarees.length - itemsPerView;

  const router = useRouter();

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleImageClick = (saree:any) => {
    router.push(saree.screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={prevSlide}
        disabled={currentIndex === 0}
        style={[styles.navButton, currentIndex === 0 && styles.disabledButton]}
      >
        <AntDesign name="left" size={18} color="black" />
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        style={{ width: "80%" }}
      >
        {sarees.slice(currentIndex, currentIndex + itemsPerView).map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <TouchableOpacity onPress={() => handleImageClick(item)}>
              <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
              </View>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={nextSlide}
        disabled={currentIndex >= maxIndex}
        style={[styles.navButton, currentIndex >= maxIndex && styles.disabledButton]}
      >
        <AntDesign name="right" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  scrollView: {
    flexDirection: "row",
  },
  cardContainer: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  card: {
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  text: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  navButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    elevation: 3,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default SareeCarousel;
