import { View, Text, Image, StyleSheet } from "react-native";

export default function BanarasiPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Banarasi Saree</Text>
      <Image source={require("../assets/images/homeCarouselImg1.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  image: { width: 200, height: 200, borderRadius: 10 },
});
