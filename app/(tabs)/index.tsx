import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Button } from "react-native-paper";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <View style={styles.containers}>
          <Text style={styles.title}>
            <Ionicons name="cart" size={28} /> Kite Fashion
          </Text>

          <View style={styles.homeIconContainer}>
              <Ionicons style={styles.personIcon} name="person-circle-sharp" size={30}  color="#525252" />
            <Text style={styles.myorderIcon}>
              <Button
                mode="contained"
                buttonColor="#c5001c"
                onPress={() => console.log("Pressed")}
                style={{ borderWidth: 2, borderColor: "#200000" }}
              >
                My Orders
              </Button>
              <Ionicons name="cart" color={"#525252"} size={35} />
            </Text>
          </View>
          <View style={styles.homeContainers}>
            <View style={styles.homeSubContents}>
              <Image
                style={styles.homeImg}
                source={require("../../assets/images/homeImg1.png")}
              ></Image>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containers: {
    paddingTop: 100,
    paddingBottom: 30,
    width: "100%",
    shadowColor: "#f9f9f9",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 19,
    fontWeight: 800,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "#10191e",
  },
  homeIconContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  personIcon: {
    textAlign: "left",
    justifyContent: "flex-start",
    paddingLeft: 20,
    padding: 10,
  },
  myorderIcon: {
    display:"flex",
    textAlign: "right",
    justifyContent: "flex-end",
    marginRight: 30,
    marginTop: 0,
    paddingBottom: 30,
  },
  homeContainers: {
    padding: 30,
    backgroundColor: "#ffe9ec",
  },
  homeSubContents: {
    marginRight: 20,
  },
  homeImg: {
    width: "110%",
    borderRadius: 10,
  },
  homeTitle: {
    alignItems: "flex-start",
    textAlign: "left",
    color: "#ffeef5",
    fontSize: 20,
    fontWeight: 900,
  },
});
