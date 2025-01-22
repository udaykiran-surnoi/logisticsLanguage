import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { Picker } from "@react-native-picker/picker";
import i18n from "../i18n";

const LoginScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(t('error'), t('pleaseEnterEmailPassword'));
      return;
    }

    try {
      console.log("Sending login request...");
      const response = await fetch("http://10.0.2.2:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful, parsing response...");
        console.log("Parsed response:", data);

        // Store token, role, and userId in AsyncStorage
        await AsyncStorage.setItem("token", data.token);
        await AsyncStorage.setItem("role", data.role);
        Alert.alert(t('success'), t('loginSuccessful'));

        // Navigate based on user role
        switch (data.role) {
          case "MANUFACTURER":
            navigation.navigate("TrackingApp", { userId: data.id });
            break;
          case "TRANSPORTER":
            navigation.navigate("Dashboard", { userId: data.id });
            break;
          case "DRIVER":
            navigation.navigate("DriverDashboard", { userId: data.id });
            break;
          default:
            Alert.alert(t('error'), t('unknownRole'));
        }
      } else {
        const errorText = await response.text();
        Alert.alert(t('loginFailed'), errorText);
      }
    } catch (error) {
      Alert.alert(t('error'), t('loginError'));
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert(t('error'), t('pleaseEnterEmail'));
      return;
    }

    try {
      const response = await fetch("http://10.0.2.2:8080/user/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Alert.alert(t('success'), t('passwordResetLinkSent'));
        setIsForgotPassword(false);
      } else {
        const errorText = await response.text();
        Alert.alert(t('error'), errorText);
      }
    } catch (error) {
      Alert.alert(t('error'), t('resetLinkError'));
    }
  };

  useEffect(() => {
    // Load saved language from AsyncStorage
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem("appLanguage");
      if (storedLanguage) {
        i18n.changeLanguage(storedLanguage);
        setSelectedLanguage(storedLanguage);
      }
    };
    loadLanguage();
  }, []);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setSelectedLanguage(languageCode);
    setIsLanguageModalVisible(false);
    
    // Optional: Persist language selection
    AsyncStorage.setItem("appLanguage", languageCode);
    const { changeLanguage } = useContext(LanguageContext);
    changeLanguage(languageCode);

    Alert.alert(t("success"), t("languageChanged")); // Optional feedback for the user

  };

  return (
    <View style={styles.container}>
      {/* Language Selector Button */}
      <TouchableOpacity 
        style={styles.languageButton} 
        onPress={() => setIsLanguageModalVisible(true)}
      >
        <Text style={styles.languageButtonText}>
          {t('selectLanguage')}
        </Text>
      </TouchableOpacity>

      {/* Language Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLanguageModalVisible}
        onRequestClose={() => setIsLanguageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('chooseLanguage')}</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => changeLanguage(itemValue)}
            >
              <Picker.Item label="English" value="en" />
              <Picker.Item label="Français" value="fr" />
              <Picker.Item label="हिन्दी" value="hi" />
              <Picker.Item label="తెలుగు" value="te" />
              <Picker.Item label="ಕನ್ನಡ" value="kn" />
              <Picker.Item label="தமிழ்" value="ta" />
              <Picker.Item label="മലയാളം" value="ml" />
            </Picker>
            <TouchableOpacity 
              style={styles.modalCloseButton}
              onPress={() => setIsLanguageModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>{t('close')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Rest of the existing login screen remains the same */}
      <Image source={require("../assets/login.png")} style={styles.logo} />
      <Text style={styles.title}>{t('welcomeBack')}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={t('email')}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        {!isForgotPassword && (
          <TextInput
            style={styles.input}
            placeholder={t('password')}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />
        )}
      </View>

      {!isForgotPassword ? (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{t('login')}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          <Text style={styles.buttonText}>{t('resetPassword')}</Text>
        </TouchableOpacity>
      )}

      {!isForgotPassword && (
        <TouchableOpacity onPress={() => setIsForgotPassword(true)}>
          <Text style={styles.link}>{t('forgotAccount')}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>{t('dontHaveAccount')}</Text>
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
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    marginBottom: 10,
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
  languageButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    paddingVertical: 10, 
    paddingHorizontal: 20, // Added horizontal padding for better width
    backgroundColor: '#dff0fe', // Softer blue background for better contrast
    borderRadius: 10, // More rounded corners
    borderWidth: 1.5, // Subtle border width
    borderColor: '#0056b3', // Dark blue border for emphasis
    shadowColor: '#000', // Shadow effect for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4, // Elevated effect on Android
  },
  languageButtonText: {
    color: '#003d99', // Slightly darker blue text for readability
    fontWeight: '600', // Medium-bold font weight
    fontSize: 16, // Slightly larger font size for readability
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay for better focus
  },
  modalContent: {
    width: '90%', // Increased width for responsiveness
    backgroundColor: '#ffffff', // Clean white background
    borderRadius: 12, // Rounded corners for elegance
    padding: 20, // Comfortable padding
    shadowColor: '#000', // Slight shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, // Elevated effect for Android
  },
  modalTitle: {
    fontSize: 22, // Larger font size for prominence
    fontWeight: '700', // Bold font weight
    color: '#003d99', // Darker blue for visibility
    textAlign: 'center',
    marginBottom: 15, // Slightly reduced margin for compactness
  },
  modalCloseButton: {
    marginTop: 20, // Improved spacing from content
    paddingVertical: 10, // Better touch area
    paddingHorizontal: 20,
    backgroundColor: '#e6f2ff', // Subtle blue background
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#0056b3', // Consistent blue border
    alignSelf: 'center', // Centered button
  },
  modalCloseButtonText: {
    textAlign: 'center',
    fontWeight: 'bold', 
    color: '#003d99', 
    fontSize: 16, 
  },


});

export default LoginScreen;