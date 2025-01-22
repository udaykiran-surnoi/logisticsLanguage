import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

 
const ConfirmInvitation = ({ driverId }) => {
      const { t } = useTranslation();
  
  const [status, setStatus] = useState(null);
 
  const handleConfirm = async (confirmationStatus) => {
    try {
      const response = await axios.post(
        `http://your-backend-url/driver/${driverId}/confirm?status=${confirmationStatus}`
      );
      setStatus(confirmationStatus);
      Alert.alert(
        t("confirmation"),
        response.data,
        [{ text: "OK" }],
        { cancelable: true }
      );
    } catch (error) {
      Alert.alert(
        t("error"),
        error.response?.data || t("errorMessage"),
        [{ text: "OK" }],
        { cancelable: true }
      );
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t("transporterInvitation")}</Text>
      <Text style={styles.message}>
      {t("invitationMessage")}       </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.acceptButton]}
          onPress={() => handleConfirm("ACCEPTED")}
        >
          <Text style={styles.buttonText}>{t("accept")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.rejectButton]}
          onPress={() => handleConfirm("REJECTED")}
        >
          <Text style={styles.buttonText}>{t("reject")}</Text>
        </TouchableOpacity>
      </View>
      {status && (
        <Text style={styles.status}>
    {t(status === "ACCEPTED" ? "accepted" : "rejected")}
    </Text>
      )}
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  acceptButton: {
    backgroundColor: "#28a745",
  },
  rejectButton: {
    backgroundColor: "#dc3545",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    marginTop: 30,
    fontSize: 18,
    color: "#333",
  },
});
 
export default ConfirmInvitation;
 
 