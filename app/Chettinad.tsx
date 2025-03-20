import { View, FlatList, StyleSheet } from "react-native";
import HomeCard from "./components/home/HomeCard";

const cardsarees = [
  {
    id: 1,
    image: require("../assets/images/cardImg1.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 2,
    image: require("../assets/images/cardImg2.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 3,
    image: require("../assets/images/cardImg3.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 4,
    image: require("../assets/images/cardImg4.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 3,
    image: require("../assets/images/cardImg1.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 4,
    image: require("../assets/images/cardImg2.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
];

export default function ChettinadPage() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cardsarees}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Display 2 cards per row
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <HomeCard id={item.id} image={item.image} name={item.name} price={item.price} />
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  listContainer: {
    gap: 0, 
  },
  cardWrapper: {
    flex: 1,
  },
});

