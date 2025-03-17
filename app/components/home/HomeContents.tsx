import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, TouchableOpacity, Dimensions } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import HomeSection from "./HomeSection";

const { width } = Dimensions.get("window"); // Get screen width

const homeData = [
    {
        bgImage: require("../../../assets/images/homeImg1.png"),
        title: "Get the Latest Saree Models From Us",
    },
    {
        bgImage: require("../../../assets/images/homeImg1.png"),
        title: "Get the Latest Saree Models From Us",
    },
    {
        bgImage: require("../../../assets/images/homeImg1.png"),
        title: "Get the Latest Saree Models From Us",
    },
    {
        bgImage: require("../../../assets/images/homeImg1.png"),
        title: "Get the Latest Saree Models From Us",
    },
];


const HomeContents = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const translateX = useRef(new Animated.Value(0)).current;
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        let interval: any;

        if (!paused) {
            interval = setInterval(() => {
                goToNextSlide();
            }, 2000); // Auto-slide every 2 seconds
        }

        return () => clearInterval(interval);
    }, [paused]);

    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % homeData.length;
        animateSlide(nextIndex);
    };

    const goToPrevSlide = () => {
        const prevIndex = (currentIndex - 1 + homeData.length) % homeData.length;
        animateSlide(prevIndex);
    };

    const animateSlide = (newIndex: number) => {
        setPaused(true);
        setCurrentIndex(newIndex);

        Animated.timing(translateX, {
            toValue: -newIndex * width,
            duration: 1000, // Smooth 1s transition
            useNativeDriver: true,
        }).start(() => setPaused(false));
    };

    return (
        <View style={styles.container}>
            {/* Carousel Slides */}
            <Animated.View style={[styles.carouselTrack, { transform: [{ translateX }] }]}>
                {homeData.map((item, index) => (
                    <View key={index} style={{ width }}>
                        <HomeSection bgImage={item.bgImage} title={item.title} />
                    </View>
                ))}
            </Animated.View>

            {/* Fixed Navigation Buttons */}
            {currentIndex > 0 && (
                <TouchableOpacity onPress={goToPrevSlide} style={[styles.button, styles.leftButton]}>
            <AntDesign name="leftcircle" size={25} color="white" />
            </TouchableOpacity>
            )}
            {currentIndex < homeData.length - 1 && (
                <TouchableOpacity onPress={goToNextSlide} style={[styles.button, styles.rightButton]}>
                <AntDesign name="rightcircle" size={24} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default HomeContents;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        overflow: "hidden",
    },
    carouselTrack: {
        flexDirection: "row",
        width: width * homeData.length, // Ensure all slides fit
    },
    button: {
        position: "absolute",
        top: "50%",
        // backgroundColor: "rgba(0,0,0,0.5)",
        padding: 5,
        borderRadius: 30,
        transform: [{ translateY: -12 }], // Center vertically
    },
    leftButton: {
        left: 20,
    },
    rightButton: {
        right: 20,
    },
});
