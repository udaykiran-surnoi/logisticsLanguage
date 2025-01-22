import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

const OTPVerificationScreen = ({ route, navigation, t }) => {
  const { email } = route.params;
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleVerifyAndReset = async () => {
    if (!otp || !newPassword) {
      Alert.alert(t('error'), t('fillAllFields'));
      return;
    }

    try {
      const response = await fetch("http://10.0.2.2:8080/user/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      if (response.ok) {
        Alert.alert(t('success'), t('passwordResetSuccess'));
        navigation.navigate("Login");
      } else {
        const errorText = await response.text();
        Alert.alert(t('error'), errorText);
      }
    } catch (error) {
      Alert.alert(t('error'), t('unexpectedError'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('enterOTP')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('otpPlaceholder')}
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder={t('newPasswordPlaceholder')}
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyAndReset}>
        <Text style={styles.buttonText}>{t('resetPassword')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  heading: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { height: 50, borderColor: "gray", borderWidth: 1, marginBottom: 15, paddingHorizontal: 10 },
  button: { backgroundColor: "#007BFF", padding: 15, borderRadius: 5, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default OTPVerificationScreen;
