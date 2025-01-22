import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from 'react-i18next';


const DriverDetailsForm = () => {
  const {t} = useTranslation();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  // Fetch the userId from AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("userId");
        console.log("User ID retrieved from AsyncStorage:", storedUserId);
        if (storedUserId) {
          setUserId(storedUserId);
        } else {
          Alert.alert(t('error'), t('userIdNotFound'));
        }
      } catch (error) {
        console.error("Error retrieving User ID:", error);
        Alert.alert(t('error'), t('failedToRetrieveUserId'));
      }
    };

    fetchUserId();
  }, []);

  const handleSave = async () => {
    if (!name || !phoneNumber || !experience) {
      Alert.alert(t('error'), t('fillAllFieldsBeforeSaving'));
      return;
    }

    if (!userId) {
      Alert.alert(t('error'), t('userIdNotAvailable'));
      return;
    }

    const driverData = {
      name,
      phoneNumber,
      experience,
    };

    try {
      setLoading(true);

      const response = await fetch(`http://10.0.2.2:8080/driver/addDriver/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(driverData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} - ${errorData.message}`);
      }

      const result = await response.json();

      // Save driverId to AsyncStorage
      await AsyncStorage.setItem("driverId", result.driverId.toString());
      console.log("Driver ID saved to AsyncStorage:", result.driverId);

      Alert.alert(t('success'), t('driverDetailsSavedSuccessfully'));

      // Reset the form fields after successful save
      setName("");
      setPhoneNumber("");
      setExperience("");
    } catch (error) {
      console.error("Error saving driver details:", error);
      Alert.alert(t('error'), `${t('failedToSaveDriverDetails')}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!userId) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4b0082" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
     <Text style={styles.label}>{t('nameAsPerLicence')}:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder={t('enterNameAsPerLicence')}
      />

<Text style={styles.label}>{t('phoneNumberWork')}:</Text>
<TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder={t('enterPhoneNumber')}
        keyboardType="phone-pad"
      />

<Text style={styles.label}>{t('experience')}:</Text>
<TextInput
        style={styles.input}
        value={experience}
        onChangeText={setExperience}
        placeholder={t('enterExperience')}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#4b0082" />
      ) : (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>{t('save')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  saveButton: {
    marginTop: 16,
    backgroundColor: "#4b0082",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DriverDetailsForm;
