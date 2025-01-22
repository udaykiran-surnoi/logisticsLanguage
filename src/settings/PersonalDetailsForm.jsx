import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useTranslation } from 'react-i18next';


const PersonalDetailsForm = () => {
    const {t} = useTranslation();
  
  const [form, setForm] = useState({
    panNumber: '',
    aadharNumber: '',
    dateOfBirth: '',
    gender: '',
    licenseNumber: '',
    licenseType: '',
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const userId = 1;

  // Input handler
  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // Date picker handler
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      setForm({ ...form, dateOfBirth: formattedDate });
    }
  };

  // Validation Function
  const validateForm = () => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN format: ABCDE1234F
    const aadharRegex = /^[0-9]{12}$/; // Aadhaar: 12 digits

    if (!form.panNumber || !panRegex.test(form.panNumber)) {
      Alert.alert(t('validationError'), t('validPanError'));
      return false;
    }

    if (!form.aadharNumber || !aadharRegex.test(form.aadharNumber)) {
      Alert.alert(t('validationError'), t('validAadharError'));
      return false;
    }

    if (!form.dateOfBirth) {
      Alert.alert(t('validationError'), t('dobError'));
      return false;
    }

    if (!form.gender) {
      Alert.alert(t('validationError'), t('genderError'));
      return false;
    }

    if (!form.licenseNumber) {
      Alert.alert('Validation Error', 'Please enter your License Number.');
      return false;
    }

    if (!form.licenseType) {
      Alert.alert('Validation Error', 'Please select your License Type.');
      return false;
    }

    return true;
  };

  // Form submission handler
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        `http://10.0.2.2:8080/profileSettings/user/${userId}`,
        form
      );

      // Show success popup
      Alert.alert(t('success'), t('personalDetailsSuccess'), [{ text: 'OK' }]);

      // Reset form after successful submission
      setForm({
        panNumber: '',
        aadharNumber: '',
        dateOfBirth: '',
        gender: '',
        licenseNumber: '',
        licenseType: '',
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert(t('error'), t('personalDetailsError'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('personalDetails')}</Text>

      <TextInput
        style={styles.input}
        placeholder={t('panNumber')}
        value={form.panNumber}
        onChangeText={(value) => handleInputChange('panNumber', value)}
        maxLength={10}
      />

      <TextInput
        style={styles.input}
        placeholder={t('aadharNumber')}
        value={form.aadharNumber}
        keyboardType="number-pad"
        onChangeText={(value) => handleInputChange('aadharNumber', value)}
        maxLength={12}
      />

      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.datePickerText}>
          {form.dateOfBirth ? form.dateOfBirth : t('selectDob')}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={new Date()} // Default to current date
          mode="date"
          display="default"
          minimumDate={new Date()} // Restrict to today or future dates
          onChange={handleDateChange}
        />
      )}

      <View style={styles.pickerContainer}>
      <Text style={styles.label}>{t('gender')}</Text>
      <Picker
          selectedValue={form.gender}
          style={styles.picker}
          onValueChange={(value) => handleInputChange('gender', value)}
        >
           <Picker.Item label={t('selectGender')} value="" />
          <Picker.Item label={t('male')} value="Male" />
          <Picker.Item label={t('female')} value="Female" />
          <Picker.Item label={t('other')} value="Other" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="License Number"
        value={form.licenseNumber}
        onChangeText={(value) => handleInputChange('licenseNumber', value)}
        maxLength={15}
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>License Type</Text>
        <Picker
          selectedValue={form.licenseType}
          style={styles.picker}
          onValueChange={(value) => handleInputChange('licenseType', value)}
        >
          <Picker.Item label="Select License Type" value="" />
          <Picker.Item label="2-Wheeler" value="2-Wheeler" />
          <Picker.Item label="3-Wheeler" value="3-Wheeler" />
          <Picker.Item label="4-Wheeler" value="4-Wheeler" />
          <Picker.Item label="Heavy Wheeler" value="Heavy Wheeler" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
      <Text style={styles.submitButtonText}>{t('submit')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  datePickerText: {
    fontSize: 16,
    color: '#6c757d',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 14,
    color: '#6c757d',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  picker: {
    height: 50,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#ffd700',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PersonalDetailsForm;
