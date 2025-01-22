import React, { useState } from 'react';

import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

import axios from 'axios';
 
const CompanyDetailsForm = () => {

  const [formData, setFormData] = useState({

    companyName: '',

    email: '',

    phoneNumber: '',

    address: '',

    gstNumber: '',

    cinNumber: '',

  });
 
  const userId = 1; // Replace with dynamic userId if needed
 
  // Handle input changes

  const handleInputChange = (field, value) => {

    setFormData((prevData) => ({

      ...prevData,

      [field]: value,

    }));

  };
 
  // Validation logic

  const validateForm = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation

    const phoneRegex = /^[0-9]{10,15}$/; // Phone number: 10–15 digits

    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/; // GST Number format

    const cinRegex = /^[A-Z]{1,2}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/; // CIN format
 
    if (!formData.companyName.trim()) {

      Alert.alert(t('validationError'), t('companyNameRequired'));

      return false;

    }
 
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {

      Alert.alert(t('validationError'), t('enterValidEmail'));

      return false;

    }
 
    if (!formData.phoneNumber.trim() || !phoneRegex.test(formData.phoneNumber)) {

      Alert.alert(t('validationError'), t('enterValidPhoneNumber'));

      return false;

    }
 
    if (!formData.address.trim()) {

      Alert.alert(t('validationError'), t('addressRequired'));

      return false;

    }
 
    if (!formData.gstNumber.trim() || !gstRegex.test(formData.gstNumber)) {

      Alert.alert(t('validationError'), t('enterValidGst'));


      return false;

    }
 
    if (!formData.cinNumber.trim() || !cinRegex.test(formData.cinNumber)) {

      Alert.alert(t('validationError'), t('enterValidGst'));


      return false;

    }
 
    return true;

  };
 
  // Handle form submission

  const handleSubmit = async () => {

    if (!validateForm()) return;
 
    try {

      const response = await axios.post(

        `http://10.0.2.2:8080/company/user/${userId}`,

        formData

      );
 
      Alert.alert(t('success'), t('companyDetailsSubmitted'));

      console.log('Response:', response.data);
 
      // Reset form fields

      setFormData({

        companyName: '',

        email: '',

        phoneNumber: '',

        address: '',

        gstNumber: '',

        cinNumber: '',

      });

    } catch (error) {

      console.error('Error:', error);

      Alert.alert(t('error'), t('failedToSubmitDetails'));

    }

  };
 
  return (
<ScrollView contentContainerStyle={styles.container}>
<Text style={styles.heading}>{t('companyDetails')}</Text>
 
      {/* Company Name Input */}
<Text style={styles.label}>{t('companyName')}</Text>
<TextInput

        style={styles.input}

        placeholder={t('enterCompanyName')}

        value={formData.companyName}

        onChangeText={(value) => handleInputChange('companyName', value)}

      />
 
      {/* Email Input */}
      <Text style={styles.label}>{t('email')}</Text>
      <TextInput

        style={styles.input}

        placeholder={t('enterEmail')}

        keyboardType="email-address"

        value={formData.email}

        onChangeText={(value) => handleInputChange('email', value)}

      />
 
      {/* Phone Number Input */}
      <Text style={styles.label}>{t('phoneNumber')}</Text>
      <TextInput

        style={styles.input}

        placeholder={t('enterPhoneNumber')}

        keyboardType="phone-pad"

        value={formData.phoneNumber}

        onChangeText={(value) => handleInputChange('phoneNumber', value)}

      />
 
      {/* Address Input */}
      <Text style={styles.label}>{t('address')}</Text>
      <TextInput

        style={[styles.input, styles.textArea]}

        placeholder={t('enterAddress')}

        multiline

        numberOfLines={3}

        value={formData.address}

        onChangeText={(value) => handleInputChange('address', value)}

      />
 
      {/* GST Number Input */}
      <Text style={styles.label}>{t('gstNumber')}</Text>
<TextInput

        style={styles.input}

        placeholder={t('enterGstNumber')}

        value={formData.gstNumber}

        onChangeText={(value) => handleInputChange('gstNumber', value)}

      />
 
      {/* CIN Number Input */}
      <Text style={styles.label}>{t('cinNumber')}</Text>
<TextInput

        style={styles.input}

        placeholder={t('enterCinNumber')}

        value={formData.cinNumber}

        onChangeText={(value) => handleInputChange('cinNumber', value)}

      />
 
      {/* Submit Button */}
<TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
<Text style={styles.submitButtonText}>{t('submit')}</Text>
</TouchableOpacity>
</ScrollView>

  );

};
 
const styles = StyleSheet.create({

  container: {

    padding: 16,

    backgroundColor: '#f8f9fa',

  },

  heading: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 20,

    textAlign: 'center',

  },

  label: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 8,

    color: '#333',

  },

  input: {

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 8,

    padding: 12,

    marginBottom: 16,

    fontSize: 16,

    backgroundColor: '#fff',

  },

  textArea: {

    textAlignVertical: 'top',

  },

  submitButton: {

    backgroundColor: '#ffd700',

    padding: 16,

    borderRadius: 8,

    alignItems: 'center',

    marginTop: 16,

  },

  submitButtonText: {

    color: '#000',

    fontSize: 16,

    fontWeight: 'bold',

  },

});
 
export default CompanyDetailsForm;

 