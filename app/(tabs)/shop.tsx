import { View, FlatList, StyleSheet,Text } from "react-native";
import HomeCard from "../components/home/HomeCard";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const cardsarees = [
  {
    id: 1,
    image: require("../../assets/images/cardImg1.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 2,
    image: require("../../assets/images/cardImg2.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 3,
    image: require("../../assets/images/cardImg3.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
  {
    id: 4,
    image: require("../../assets/images/cardImg4.png"),
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
    image: require("../../assets/images/cardImg2.png"),
    name: "Elegant Red Silk Saree with Gold Border",
    price: "2,499",
  },
];

export default function Shop() {
  return (
      <View style={styles.container}>
        <View style={styles.homeTitle}>
        <Text style={styles.title}>
          <Ionicons name="cart" size={30} /> Kite Fashion
        </Text>
        </View>
        <View style={styles.shopContent}>
          <Text style={styles.shopTitle}>Saree List</Text>
          <Text style={styles.subTitle}> Filter
          <MaterialCommunityIcons name="filter-variant" size={25} color="black" /> 
        </Text>
        </View>
        <FlatList
          data={cardsarees}
          keyExtractor={(item,index) => item.id.toString()}
          numColumns={2} 
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <HomeCard
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
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
    backgroundColor: "#fce6e9"

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
  subTitle:{
    fontSize: 19,
    color: "#10191e",
    fontWeight: 600,
    flexDirection: "row",
    alignItems: "center",
  },
  shopContent:{
    display:"flex",
    justifyContent:"space-between",
    flexDirection: "row",
    backgroundColor: "white",
    padding:10,
  },
  shopTitle:{
    fontSize: 22,
    color: "#071518",
    fontWeight: 900,
    marginHorizontal: 10
  }    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
});
