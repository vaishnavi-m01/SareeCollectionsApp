import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const WelcomePage = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.replace("login" as never);
  };
  return (
    <View style={style.container}>
      <Text style={style.title}>React Native Card</Text>
      <TouchableOpacity style={style.button} onPress={handleRegister}> Register
        {/* <Text style={style.buttonText}>Register</Text> */}
      </TouchableOpacity>
    </View>
  );
};
export default WelcomePage;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
