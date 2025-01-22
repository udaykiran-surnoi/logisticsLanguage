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
import { useTranslation } from 'react-i18next';

import DateTimePicker from "@react-native-community/datetimepicker";


const QuoteFormScreen = ({ route, navigation }) => {
  const { t } = useTranslation();

  const { shipment, manufacturer, transporterId } = route.params;
  const [quotedPrice, setQuotedPrice] = useState("");
  const [validityDate, setValidityDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [quoteStatus, setQuoteStatus] = useState("NEW");
  const [loading, setLoading] = useState(false);

  // Fetch Quote Status
  const fetchQuoteStatus = async () => {
    const API_URL = `http://10.0.2.2:8080/api/quotations/quoteStatus?shipmentId=${shipment.shipmentId}&transporterId=${transporterId}`;
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (response.ok) {
        const status = await response.json();
        setQuoteStatus(status);
      } else {
        setQuoteStatus("NEW");
      }
    } catch (error) {
      console.error("Error fetching quote status:", error);
      setQuoteStatus("NEW");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuoteStatus();
  }, []);

  // Handle Send Quote Logic
  const handleSendQuote = async () => {
    if (!quotedPrice || !validityDate) {
      Alert.alert(t('quoteForm.errorTitle'), t('quoteForm.errorMessage'));
      return;
    }

    try {
      setLoading(true);
      const API_URL = `http://10.0.2.2:8080/api/quotations/full?shipmentId=${shipment.shipmentId}&transporterId=${transporterId}`;
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quotedPrice,
          validityPeriod: validityDate.toISOString(),
          quoteStatus: "PENDING",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send quote");
      }

      Alert.alert(t('success'), t('quoteForm.successMessage'));
      fetchQuoteStatus(); // Refresh the status after sending
    } catch (error) {
      console.error("Error sending quote:", error);
      Alert.alert(t('error'), t('quoteForm.sendFailure'));
    } finally {
      setLoading(false);
    }
  };

  // Handle Navigation to Assign Driver Screen
  const handleAssignDriverNavigation = () => {
    if (!transporterId) {
      Alert.alert(t('error'), t('quoteForm.transporterIdMissing'))
      return;
    }

    navigation.navigate("AssignDriverScreen", {
      shipment, // Pass the shipment details
      transporterId, // Pass the transporter ID
    });
  };

  // Render Buttons Based on Status
  const renderButtons = () => {
    if (quoteStatus === "NEW") {
      return (
        <>
          <TouchableOpacity style={styles.sendButton} onPress={handleSendQuote}>
          <Text style={styles.buttonText}>{t('quoteForm.sendQuote')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>{t('quoteForm.decline')}</Text>
          </TouchableOpacity>
        </>
      );
    }
    if (quoteStatus === "PENDING") {
      return (
        <TouchableOpacity style={styles.pendingButton}>
<Text style={styles.buttonText}>{t('quoteForm.pendingApproval')}</Text>
</TouchableOpacity>
      );
    }
    if (quoteStatus === "ACCEPTED") {
      return (
        <TouchableOpacity
          style={styles.assignButton}
          onPress={handleAssignDriverNavigation}
        >
<Text style={styles.buttonText}>{t('quoteForm.assignDriver')}</Text>
</TouchableOpacity>
      );
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>{t('quoteForm.manufacturerDetails')}</Text>
        <Text style={styles.label}>{t('quoteForm.company')}: {manufacturer.companyName || "N/A"}</Text>
      <Text style={styles.label}>{t('quoteForm.phone')}: {manufacturer.phoneNumber || "N/A"}</Text>
      <Text style={styles.label}>{t('quoteForm.email')}: {manufacturer.email || "N/A"}</Text>

      <Text style={styles.heading}>{t('quoteForm.shipmentDetails')}</Text>
      <Text style={styles.label}>{t('quoteForm.cargoType')}: {shipment.cargoType}</Text>
      <Text style={styles.label}>{t('quoteForm.pickup')}: {shipment.pickup}</Text>
      <Text style={styles.label}>{t('quoteForm.drop')}: {shipment.drop}</Text>
      <Text style={styles.label}>{t('quoteForm.weight')}: {shipment.weight}</Text>
      <Text style={styles.label}>{t('quoteForm.vehicleType')}: {shipment.vehicleType}</Text>

      {quoteStatus === "NEW" && (
        <>
          <TextInput
            style={styles.input}
            placeholder={t('quoteForm.quotedPricePlaceholder')}
            keyboardType="numeric"
            value={quotedPrice}
            onChangeText={setQuotedPrice}
          />
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.datePickerButtonText}>
            {t('quoteForm.validityDate')}: {validityDate.toISOString().split("T")[0]}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={validityDate}
              mode="date"
              display="default"
              minimumDate={new Date()}
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  setValidityDate(selectedDate);
                }
              }}
            />
          )}
        </>
      )}

      {renderButtons()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "#333" },
  label: { fontSize: 16, marginBottom: 5, color: "#555" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  sendButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 15,
  },
  declineButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 15,
  },
  assignButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 15,
  },
  pendingButton: {
    backgroundColor: "#6c757d",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  datePickerButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  datePickerButtonText: { fontSize: 16, color: "#333" },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuoteFormScreen;
