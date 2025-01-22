import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker for Dropdown
import axios from 'axios';

const AccountDetailsForm = () => {
  const [form, setForm] = useState({
    bankName: '',
    ifscCode: '',
    accountNumber: '',
    accountHolderName: '', // Added field
    accountType: '', // Added field
  });

  const userId = 1; // Replace with dynamic userId if needed

  // Input handler
  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // Validation Function
  const validateForm = () => {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/; // IFSC Code: 4 letters, 0, 6 alphanumerics (Total: 11 characters)
    const accountNumberRegex = /^[0-9]{9,18}$/; // Account Number: 9-18 digits

    if (!form.bankName.trim()) {
      Alert.alert(t('accountDetails.validation.bankNameRequired'));
      return false;
    }

    if (!form.accountHolderName.trim()) {
      Alert.alert(t('accountDetails.validationError'), t('accountHolderNameRequired'));
      return false;
    }

    if (!form.ifscCode.trim()) {
      Alert.alert(t('accountDetails.validation.ifscCodeRequired'));
      return false;
    }

    if (form.ifscCode.length !== 11 || !ifscRegex.test(form.ifscCode)) {
      Alert.alert(t('accountDetails.validation.invalidIfscCode'));

      return false;
    }

    if (!form.accountNumber.trim() || !accountNumberRegex.test(form.accountNumber)) {
      Alert.alert(t('accountDetails.validation.accountNumberRequired'));
      return false;
    }

    if (!form.accountType) {
      Alert.alert('Validation Error', 'Please select an Account Type.');
      return false;
    }

    return true;
  };

  // Form submission handler
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        `http://10.0.2.2:8080/bank/user/${userId}`,
        form
      );

      // Show success message
      Alert.alert(t('accountDetails.success'));
      console.log('Response:', response.data);

      // Reset the form fields
      setForm({
        bankName: '',
        ifscCode: '',
        accountNumber: '',
        accountHolderName: '',
        accountType: '',
      });
    } catch (error) {
      console.error('Error:', error);
      Alert.alert(t('accountDetails.error'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('accountDetails.heading')}</Text>

      {/* Bank Name Input */}
      <TextInput
        style={styles.input}
        placeholder={t('accountDetails.bankName')}
        value={form.bankName}
        onChangeText={(value) => handleInputChange('bankName', value)}
      />

      {/* Account Holder Name Input */}
      <TextInput
        style={styles.input}
        placeholder={t('accountDetails.accountHolderName')}
        value={form.accountHolderName}
        onChangeText={(value) => handleInputChange('accountHolderName', value)}
      />

      {/* IFSC Code Input */}
      <TextInput
        style={styles.input}
        placeholder={t('accountDetails.ifscCode')}
        value={form.ifscCode}
        autoCapitalize="characters"
        maxLength={11} // Restrict input to 11 characters
        onChangeText={(value) => handleInputChange('ifscCode', value)}
      />

      {/* Account Number Input */}
      <TextInput
        style={styles.input}
        placeholder={t('accountDetails.accountNumber')}
        value={form.accountNumber}
        keyboardType="number-pad"
        maxLength={18}
        onChangeText={(value) => handleInputChange('accountNumber', value)}
      />

      {/* Account Type Dropdown */}
      <View style={styles.pickerContainer}>
      <Text style={styles.label}>{t('accountDetails.accountType')}</Text>
      <Picker
          selectedValue={form.accountType}
          style={styles.picker}
          onValueChange={(value) => handleInputChange('accountType', value)}
        >
          <Picker.Item label={t('accountDetails.selectAccountType')} value="" />
    <Picker.Item label={t('accountDetails.savings')} value="Savings" />
    <Picker.Item label={t('accountDetails.current')} value="Current" />
    <Picker.Item label={t('accountDetails.fixedDeposit')} value="FixedDeposit" />
  </Picker>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>{t('accountDetails.submit')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  pickerContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#ffd700',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccountDetailsForm;
