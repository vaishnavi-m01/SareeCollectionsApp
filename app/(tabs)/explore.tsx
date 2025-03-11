import {
  StyleSheet, Image, Platform, View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import {  useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter();
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", password: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // ✅ Handle Form Submission
  const handleSubmit = () => {
    if (validateForm()) {
      router.push("/Sample");
    }
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>


          <View style={styles.registerationContainer}>
            <ThemedText style={styles.title}>Registeration</ThemedText>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input}
              placeholder='Enter your name'
              value={name}
              onChangeText={setName}>
            </TextInput>
            {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input}
              placeholder='email'
              value={email}
              onChangeText={setEmail}
            >
            </TextInput>
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input}
              placeholder='password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              autoCapitalize='none'
            >
            </TextInput>
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}


            <TouchableOpacity style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonLabel}>Sumbit</Text>

            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent:"center",   
    padding: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#f5f5f5",
  },
  inner: {
  },

  registerationContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,

  },
  title: {
    fontSize: 20,
    paddingTop: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  label: {
    marginTop: 20,
    fontSize: 20,
    paddingLeft: 5
  },
  input: {
    marginTop: 10,
    width: "100%",
    height: 50,
  },
  button: {
    marginBottom: 20,
    padding: 10,
    marginTop: 30,
    width: "100%",
    borderRadius: 2,
    backgroundColor: "#007BFF",
  },
  buttonLabel: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 5,
  },
})