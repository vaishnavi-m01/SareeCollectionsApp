import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.homeTitle}>
        <Text style={styles.title}>
          <Ionicons name="cart" size={30} /> Kite Fashion
        </Text>
      </View>
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
    </View>
  );
};
export default Navbar;

const styles = StyleSheet.create({
  navbarContainer:{
    paddingTop:50,
    shadowColor: "#f9f9f9",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#f5f5f5",

  },

  homeTitle: {
    textAlign: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#10191e",
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 30,
    paddingHorizontal: 20,
   
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
});
