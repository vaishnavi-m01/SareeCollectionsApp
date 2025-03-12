import { Text, View, StyleSheet } from "react-native";

const Sample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Registeration Successfully😎</Text>
    </View>
  );
};
export default Sample;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  label: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color:"green"
  },
});
