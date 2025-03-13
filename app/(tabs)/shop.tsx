import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const products = [
    { id: "1", name: "T-Shirt", price: "$20", image: "https://via.placeholder.com/100" },
    { id: "2", name: "Jeans", price: "$40", image: "https://via.placeholder.com/100" },
    { id: "3", name: "Sneakers", price: "$60", image: "https://via.placeholder.com/100" },
];

const Shop = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the Shop 🛒</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.product}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Shop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        padding: 20,
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    product: {
        backgroundColor: "#ffffff",
        padding: 15,
        marginVertical: 10,
        width: 250,
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    price: {
        fontSize: 16,
        color: "green",
    },
});
