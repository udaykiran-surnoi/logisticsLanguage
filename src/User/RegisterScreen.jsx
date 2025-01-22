// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// //   Picker,
// } from "react-native";
// import { Picker } from '@react-native-picker/picker';

// import axios from "axios";

// const RegisterScreen = ({ navigation }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   const handleRegister = async () => {
//     if (!name || !email || !password || !role) {
//       Alert.alert("Error", "All fields are required");
//       return;
//     }

//     try {
//       const response = await axios.post("http://10.0.2.2:8080/user/register", {
//         name,
//         email,
//         password,
//         role,
//       });

//       if (response.status === 201) {
//         Alert.alert("Success", "Registration successful");
//         navigation.navigate("Login");
//       } else {
//         Alert.alert("Registration Failed", response.data || "An error occurred");
//       }
//     } catch (error) {
//       console.error(error);
//       const errorMessage = error.response?.data || "An error occurred while registering";
//       Alert.alert("Error", errorMessage);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Register</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Picker
//         selectedValue={role}
//         style={styles.picker}
//         onValueChange={(itemValue) => setRole(itemValue)}
//       >
//         <Picker.Item label="Select Role" value="" />
//         <Picker.Item label="Driver" value="DRIVER" />
//         <Picker.Item label="Transporter" value="TRANSPORTER" />
//         <Picker.Item label="Manufacturer" value="MANUFACTURER" />
//       </Picker>
//       <TouchableOpacity style={styles.button} onPress={handleRegister}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//         <Text style={styles.link}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 15,
//   },
//   picker: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     marginBottom: 15,
//     borderRadius: 5,
//   },
//   button: { backgroundColor: "#007BFF", padding: 15, borderRadius: 5 },
//   buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
//   link: { color: "#007BFF", marginTop: 15, textAlign: "center" },
// });

// export default RegisterScreen;
import React, { useState ,useContext} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const { t } = useTranslation(); // For translations
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password || !role) {
      Alert.alert(t("error"), t("allFieldsRequired"));
      return;
    }

    try {
      const response = await axios.post("http://10.0.2.2:8080/user/register", {
        name,
        email,
        password,
        role,
      });

      if (response.status === 201) {
        Alert.alert(t("success"), t("registrationSuccess"));
        navigation.navigate("Login");
      } else {
        Alert.alert(t("registrationFailed"), response.data || t("errorOccurred"));
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data || t("errorOccurred");
      Alert.alert(t("error"), errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image
        source={require("../assets/password.png")} // Replace with the correct path to your logo
        style={styles.logo}
      />
      <Text style={styles.title}>{t("createAccount")}</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder={t("name")}
        value={name}
        onChangeText={setName}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder={t("email")}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder={t("password")}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#999"
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={role}
          style={styles.picker}
          onValueChange={(itemValue) => setRole(itemValue)}
        >
          <Picker.Item label={t("selectRole")} value="" />
          <Picker.Item label={t("driver")} value="DRIVER" />
          <Picker.Item label={t("transporter")} value="TRANSPORTER" />
          <Picker.Item label={t("manufacturer")} value="MANUFACTURER" />
        </Picker>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>{t("register")}</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>{t("alreadyHaveAccount")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  pickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  picker: {
    width: "100%",
    height: 50,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#007BFF",
    fontSize: 16,
    marginTop: 10,
  },
  
});

export default RegisterScreen;