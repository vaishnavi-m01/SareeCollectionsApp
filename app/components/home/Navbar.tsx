import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

const Navbar = () => {
  return (
    <View >
      <View style={styles.homeTitle}>
        <Text style={styles.title}>
          <Ionicons name="cart" size={30} /> Kite Fashion
        </Text>
      </View>
    </View>
  );
};
export default Navbar;

const styles = StyleSheet.create({
  homeTitle: {
    textAlign: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 70,
  },
  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#10191e",
    flexDirection: "row",
    alignItems: "center",
  },
});
