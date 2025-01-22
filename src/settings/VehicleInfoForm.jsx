import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTranslation } from 'react-i18next';


const VehicleInfoForm = () => {
    const { t } = useTranslation();

  const [form, setForm] = useState({
    brand: "",
    model: "",
    refrigerator: "",
    registrationDate: "",
  });

  const [showRegistrationDatePicker, setShowRegistrationDatePicker] =
    useState(false);

  const transporterId = 3; // Replace with dynamic transporter ID if needed

  // Input handler
  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // Date picker handler
  const handleDateChange = (field, event, selectedDate) => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      setForm({ ...form, [field]: formattedDate });
    }
    setShowRegistrationDatePicker(false);
  };

  // Form submission handler
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://10.0.2.2:8080/api/vehicles/Vehicle/${transporterId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const responseText = await response.text();

      if (response.ok) {
        Alert.alert(t('success'), t('vehicleInfoSubmitted'));
        setForm({
          brand: "",
          model: "",
          refrigerator: "",
          registrationDate: "",
        });
      } else {
        Alert.alert(t('error'), responseText);
      }
    } catch (error) {
      Alert.alert(t('error'), t('networkError'));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <Text style={styles.heading}>{t('vehicleInformation')}</Text>

        {/* Brand */}
        <View style={styles.pickerContainer}>
        <Text style={styles.label}>{t("brand")}</Text>
        <Picker
            selectedValue={form.brand}
            style={styles.picker}
            onValueChange={(value) => handleInputChange("brand", value)}
          >
            <Picker.Item label={t("selectBrand")} value="" />
            <Picker.Item label="Tata" value="Tata" />
            <Picker.Item label="Mahindra" value="Mahindra" />
            <Picker.Item label="Ashok Leyland" value="Ashok Leyland" />
            <Picker.Item label="Volvo" value="Volvo" />
          </Picker>
        </View>

        {/* Model */}
        <View style={styles.pickerContainer}>
        <Text style={styles.label}>{t("model")}</Text>
        <Picker
            selectedValue={form.model}
            style={styles.picker}
            onValueChange={(value) => handleInputChange("model", value)}
          >
            <Picker.Item label={t("selectModel")} value="" />
            <Picker.Item label="Model X" value="Model X" />
            <Picker.Item label="Model Y" value="Model Y" />
            <Picker.Item label="Model Z" value="Model Z" />
          </Picker>
        </View>

        {/* Refrigerator */}
        <View style={styles.pickerContainer}>
        <Text style={styles.label}>{t("refrigerator")}</Text>
        <Picker
            selectedValue={form.refrigerator}
            style={styles.picker}
            onValueChange={(value) => handleInputChange("refrigerator", value)}
          >
            <Picker.Item label={t("selectOption")} value="" />
            <Picker.Item label={t("yes")} value="Yes" />
            <Picker.Item label={t("no")} value="No" />
          </Picker>
        </View>

        {/* Vehicle Registration Date */}
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowRegistrationDatePicker(true)}
        >
          <Text style={styles.datePickerText}>
          {form.registrationDate || t("selectRegistrationDate")}
          </Text>
        </TouchableOpacity>
        {showRegistrationDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            maximumDate={new Date()} // Prevent future dates
            onChange={(event, date) =>
              handleDateChange("registrationDate", event, date)
            }
          />
        )}

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>{t('submit')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  pickerContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  datePickerText: {
    fontSize: 16,
    color: "#6c757d",
  },
  submitButton: {
    backgroundColor: "#ffd700",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default VehicleInfoForm;
