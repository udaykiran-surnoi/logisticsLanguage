import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useTranslation } from 'react-i18next';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const TransporterShipmentScreen = () => {
  const { t } = useTranslation();

  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [transporterId, setTransporterId] = useState(null);
  const [quoteStatuses, setQuoteStatuses] = useState({});
  const navigation = useNavigation();

  // Fetch `transporterId` using `userId`
  const fetchTransporterId = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      console.log("Fetched userId from AsyncStorage:", userId);
  
      if (!userId) {
        throw new Error("User ID not found. Please log in again.");
      }
  
      const response = await fetch(
        `http://10.0.2.2:8080/transporter/getTransporter/${userId}`
      );
  
      const responseData = await response.json();
      console.log("Transporter API Response:", responseData);
  
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Transporter ID: ${responseData.error || responseData}`
        );
      }
  
      if (responseData.transporterId) {
        setTransporterId(responseData.transporterId);
      } else {
        throw new Error("Transporter ID not found in the response.");
      }
    } catch (error) {
      console.error("Error fetching transporterId:", error.message);
      Alert.alert("Error", error.message || "Failed to fetch Transporter ID.");
    }
  };
  
  
  // Fetch shipments data
  const fetchShipments = async () => {
    try {
      const response = await fetch(
        "http://10.0.2.2:8080/api/shipments/getPendingShipments"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch shipments.");
      }

      const data = await response.json();

      // Debug log: full API response
      console.log("Full API Response:", JSON.stringify(data, null, 2));

      // Fetch details for each shipment dynamically
      for (const shipment of data) {
        const shipmentId = shipment.shipmentId;
        const manufacturerId = shipment.manufacturer?.manufacturerId;

        if (shipmentId && manufacturerId) {
          // Call API with shipmentId and manufacturerId
          const detailsResponse = await fetch(
            `http://10.0.2.2:8080/api/shipments/getShipments?shipmentId=${shipmentId}&manufacturerId=${manufacturerId}`
          );

          if (detailsResponse.ok) {
            const shipmentDetails = await detailsResponse.json();
            console.log("Fetched Details for Shipment:", shipmentDetails);
          } else {
            console.error(
              `Failed to fetch details for shipmentId: ${shipmentId}, manufacturerId: ${manufacturerId}`
            );
          }
        } else {
          console.error(
            `Missing shipmentId or manufacturerId for shipment: ${JSON.stringify(
              shipment
            )}`
          );
        }
      }

      // Optionally set the initial fetched shipments into state
      setShipments(data);
    } catch (error) {
      console.error("Error fetching shipments:", error);
      Alert.alert("Error", "Failed to load shipments. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch quote statuses for all shipments
  const fetchQuoteStatuses = async () => {
    if (!transporterId || shipments.length === 0) return;

    const statuses = {};
    try {
      for (const shipment of shipments) {
        const response = await fetch(
          `http://10.0.2.2:8080/api/quotations/quoteStatus?shipmentId=${shipment.shipmentId}&transporterId=${transporterId}`
        );
        if (response.ok) {
          const status = await response.json();
          statuses[shipment.shipmentId] = status;
        } else {
          statuses[shipment.shipmentId] = "NEW";
        }
      }
    } catch (error) {
      console.error("Error fetching quote statuses:", error);
    }
    setQuoteStatuses(statuses);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTransporterId();
      await fetchShipments();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (transporterId && shipments.length > 0) {
      fetchQuoteStatuses();
    }
  }, [transporterId, shipments]);

  const handleNavigateToQuoteForm = (item) => {
    if (!transporterId) {
      Alert.alert("Error", "Transporter ID is missing. Please try again.");
      return;
    }
  
    const manufacturer = item.manufacturer; // Get the manufacturer details from the shipment
  
    // Check if manufacturer details are available
    if (!manufacturer) {
      Alert.alert("Error", "Manufacturer details are missing. Please try again.");
      return;
    }
  
    // Log the shipmentId, manufacturerId, and transporterId to the console
    console.log("Shipment ID:", item.shipmentId);
    console.log("Manufacturer ID:", manufacturer.manufacturerId);
    console.log("Transporter ID:", transporterId);
  
    // Navigate to the QuoteFormScreen
    navigation.navigate("QuoteFormScreen", {
      shipment: {
        shipmentId: item.shipmentId,
        cargoType: item.cargoType,
        pickup: item.pickupPoint,
        drop: item.dropPoint,
        dimensions: item.dimensions,
        weight: item.weight,
        vehicleType: item.vehicleTypeRequired,
      },
      manufacturer, // Pass the full manufacturer object
      transporterId, // Pass transporterId as well
    });
  };
  

  const renderButton = (shipmentId, item) => {
    const status = quoteStatuses[shipmentId] || "NEW";

    if (status === "NEW") {
      return (
        <TouchableOpacity
          style={styles.quoteButton}
          onPress={() => handleNavigateToQuoteForm(item)}
        >
<Text style={styles.quoteButtonText}>{t('shipmentScreen.quote')}</Text>
</TouchableOpacity>
      );
    }

    if (status === "PENDING") {
      return (
        <TouchableOpacity
          style={styles.pendingButton}
          onPress={() => handleNavigateToQuoteForm(item)}
        >
<Text style={styles.pendingButtonText}>{t('shipmentScreen.waitingForApproval')}</Text>
</TouchableOpacity>
      );
    }

    if (status === "ACCEPTED") {
      return (
        <TouchableOpacity
          style={styles.acceptedButton}
          onPress={() => handleNavigateToQuoteForm(item)}
        >
<Text style={styles.acceptedButtonText}>{t('shipmentScreen.quoteAccepted')}</Text>
</TouchableOpacity>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('shipmentScreen.heading')}</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <FlatList
          data={shipments}
          keyExtractor={(item) => item.shipmentId.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
            <Text style={styles.label}>{t('shipmentScreen.cargoType')}: {item.cargoType}</Text>
            <Text style={styles.label}>{t('shipmentScreen.pickup')}: {item.pickup}</Text>
            <Text style={styles.label}>{t('shipmentScreen.drop')}: {item.drop}</Text>
              {renderButton(item.shipmentId, item)}
            </View>
          )}
          ListEmptyComponent={
<Text style={styles.emptyMessage}>{t('shipmentScreen.noPendingShipments')}</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#333" },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  label: { fontSize: 16, color: "#333", marginBottom: 5 },
  quoteButton: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#007bff",
    alignItems: "center",
  },
  quoteButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  pendingButton: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#6c757d",
    alignItems: "center",
  },
  pendingButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  acceptedButton: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#28a745",
    alignItems: "center",
  },
  acceptedButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "#777",
    marginTop: 20,
  },
});

export default TransporterShipmentScreen;