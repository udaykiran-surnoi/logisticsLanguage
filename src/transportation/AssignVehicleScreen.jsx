import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useTranslation } from 'react-i18next';


const AssignVehicleScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { shipment } = route.params;
  const [loading, setLoading] = useState(false);
  const [shipmentDetails, setShipmentDetails] = useState(null);
  const [driverDetails, setDriverDetails] = useState(null);
  const [vehicleDetails, setVehicleDetails] = useState(null);

  // Fetch shipment, driver, and vehicle details
  const fetchDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://10.0.2.2:8080/assignShipments/checkStatus?shipmentId=${shipment.shipmentId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch details.");
      }

      const data = await response.json();
      setShipmentDetails(data.shipmentDetails);
      setDriverDetails(data.driverDetails);
      setVehicleDetails(data.vehicleDetails);
    } catch (error) {
      console.error("Error fetching details:", error);
      Alert.alert(t('error'), t('AssignVehicleScreen.fetchDetails'));
    } finally {
      setLoading(false);
    }
  };

  // Handle Pay Now button click
  const handlePayNow = () => {
    navigation.navigate("PaymentScreen", {
      shipmentId: shipment.shipmentId,
      vehicleId: vehicleDetails?.vehicleId,
      driverId: driverDetails?.driverId,
    });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('AssignVehicleScreen.heading')}</Text>

      {/* Shipment Details */}
      {shipmentDetails && (
        <View style={styles.detailsCard}>
          <Text style={styles.subheading}>{t('AssignVehicleScreen.shipmentDetails')}</Text>
          <Text style={styles.detailText}>{t('AssignVehicleScreen.cargoType')}: {shipmentDetails.cargoType}</Text>
          <Text style={styles.detailText}>{t('AssignVehicleScreen.pickupPoint')}: {shipmentDetails.pickupPoint}</Text>
          <Text style={styles.detailText}>{t('AssignVehicleScreen.dropPoint')}: {shipmentDetails.dropPoint}</Text>
        </View>
      )}

      {/* Driver Details */}
      {driverDetails && (
        <View style={styles.detailsCard}>
          <Text style={styles.subheading}>{t('AssignVehicleScreen.driverDetails')}</Text>
          <Text style={styles.detailText}>{t('AssignVehicleScreen.name')}: {driverDetails.name}</Text>
          <Text style={styles.detailText}>{t('AssignVehicleScreen.phone')}: {driverDetails.phoneNumber}</Text>
        </View>
      )}

      {/* Vehicle Details */}
      {vehicleDetails && (
        <View style={styles.detailsCard}>
          <Text style={styles.subheading}>{t('AssignVehicleScreen.vehicleDetails')}:</Text>
          <Text style={styles.detailText}>{t('AssignVehicleScreen.vehicleNumber')}: {vehicleDetails.vehicleNumber}</Text>
          <Text style={styles.detailText}>{t('AssignVehicleScreen.vehicleType')}: {vehicleDetails.vehicleType}</Text>
        </View>
      )}

      {/* Pay Now Button */}
      <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
        <Text style={styles.buttonText}>{t('AssignVehicleScreen.payNow')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#333" },
  detailsCard: {
    padding: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    marginBottom: 15,
  },
  subheading: { fontSize: 18, fontWeight: "bold", marginBottom: 5, color: "#555" },
  detailText: { fontSize: 16, color: "#555", marginBottom: 5 },
  payNowButton: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default AssignVehicleScreen;
