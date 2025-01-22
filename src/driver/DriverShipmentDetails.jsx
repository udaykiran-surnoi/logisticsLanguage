import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useTranslation } from 'react-i18next';

import AsyncStorage from "@react-native-async-storage/async-storage";

const DriverShipmentDetails = ({ route, navigation }) => {
          const { t } = useTranslation();
  
  const { shipment, transporter, assignmentId: passedAssignmentId, driverId: passedDriverId } = route.params;
  const [loading, setLoading] = useState(false);
  const [driverId, setDriverId] = useState(passedDriverId || null);
  const [assignmentId, setAssignmentId] = useState(passedAssignmentId || null);
  const [assignmentStatus, setAssignmentStatus] = useState("PENDING");
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Fetch Driver ID if not already available
  useEffect(() => {
    const fetchDriverId = async () => {
      if (driverId) return;

      try {
        const storedDriverId = await AsyncStorage.getItem("driverId");
        if (storedDriverId) {
          setDriverId(storedDriverId);
        } else {
          const userId = await AsyncStorage.getItem("userId");
          if (!userId) throw new Error("User ID not found. Please log in again.");

          const response = await fetch(`http://10.0.2.2:8080/driver/getDriver/${userId}`);
          if (!response.ok) throw new Error("Failed to fetch Driver ID from the server.");

          const data = await response.json();
          if (data.driverId) {
            setDriverId(data.driverId);
            await AsyncStorage.setItem("driverId", data.driverId.toString());
          } else {
            throw new Error("Driver ID not found for the logged-in user.");
          }
        }
      } catch (error) {
        console.error("Error retrieving Driver ID:", error.message);
        Alert.alert("Error", error.message || "Failed to retrieve Driver ID.");
      }
    };

    fetchDriverId();
  }, [driverId]);

  // Fetch Assignment Status
  useEffect(() => {
    const fetchAssignmentStatus = async () => {
      if (!shipment?.shipmentId) {
        console.error("Shipment ID is missing.");
        return;
      }

      try {
        const url = `http://10.0.2.2:8080/assignShipments/checkStatus?shipmentId=${shipment.shipmentId}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch assignment status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Assignment Status:", data.assignmentStatus);

        setAssignmentStatus(data.assignmentStatus || "PENDING");
      } catch (error) {
        console.error("Error fetching assignment status:", error.message);
        Alert.alert("Error", error.message || "Failed to fetch assignment status.");
      }
    };

    fetchAssignmentStatus();
  }, [shipment]);

  // Fetch Payment Status
  useEffect(() => {
    const checkPaymentStatus = async () => {
      if (
        assignmentStatus !== "ACCEPTED" ||
        !shipment?.shipmentId ||
        !driverId ||
        !transporter?.transporterId
      ) {
        setPaymentStatus(null);
        return;
      }

      try {
        const url = `http://10.0.2.2:8080/api/payments/details?shipmentId=${shipment.shipmentId}&driverId=${driverId}&transporterId=${transporter.transporterId}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch payment status.");
        }

        const data = await response.json();
        setPaymentStatus(data.paymentStatus || null);
      } catch (error) {
        console.error("Error fetching payment status:", error.message);
        Alert.alert("Error", error.message || "Failed to fetch payment status.");
      }
    };

    checkPaymentStatus();
  }, [assignmentStatus, shipment, driverId, transporter]);

  const handleAccept = async () => {
    const currentAssignmentId = shipment.assignmentId || assignmentId;
    if (!driverId) {
      Alert.alert("Error", "Driver ID is missing. Please save your driver details.");
      return;
    }

    if (!currentAssignmentId) {
      Alert.alert("Error", "Assignment ID is missing in the shipment details.");
      return;
    }

    try {
      setLoading(true);

      const endpoint = `http://10.0.2.2:8080/assignShipments/accept/${currentAssignmentId}/${driverId}`;
      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed with status ${response.status}: ${errorText || "Unknown error"}`);
      }

      Alert.alert(t('Success'), t('Shipment status updated to IN_TRANSIT.'));
      setAssignmentStatus("ACCEPTED");
    } catch (error) {
      console.error("Error accepting shipment:", error.message);
      Alert.alert(t("title"), `${t("error.failed_to_accept_shipment")}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToPickup = () => {
    if (!shipment || !shipment.pickupLatitude || !shipment.pickupLongitude) {
      Alert.alert(t("title"), t("error.pickup_location_missing"));
      return;
    }

    navigation.navigate("DriverTracking", {
      driverLatitude: shipment.driverLatitude,
      driverLongitude: shipment.driverLongitude,
      pickupLatitude: shipment.pickupLatitude,
      pickupLongitude: shipment.pickupLongitude,
    });
  };

  const handleDecline = () => {
    Alert.alert(t('Declined'), t('You have declined the shipment.'));
  };

  if (!shipment || !transporter) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorTitle}>{t('Error')}</Text>
        <Text style={styles.errorMessage}>{t('Shipment or Transporter details are missing.')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#4b0082" />
          <Text>{t('Updating shipment status...')}</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>{t('Shipment Details')}</Text>
          <View style={styles.card}>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('Pick-up Location')}:</Text> {shipment.pickupPoint}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('Drop Location')}:</Text> {shipment.dropPoint}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('Cargo Type')}:</Text> {shipment.cargoType}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('Weight')}:</Text> {shipment.weight}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('Vehicle Type')}:</Text> {shipment.vehicleTypeRequired}
            </Text>
          </View>

          <Text style={styles.title}>{t('Transporter Details')}</Text>
          <View style={styles.card}>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('Company Name')}:</Text> {transporter.companyName}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('Contact')}:</Text> {transporter.phoneNumber}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('Email')}:</Text> {transporter.email}
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            {assignmentStatus === "PENDING" ? (
              <>
                <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
                  <Text style={styles.buttonText}>{t('Accept')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.declineButton} onPress={handleDecline}>
                  <Text style={styles.buttonText}>{t('Decline')}</Text>
                </TouchableOpacity>
              </>
            ) : assignmentStatus === "ACCEPTED" &&
              shipment?.shipmentId &&
              driverId &&
              transporter?.transporterId &&
              paymentStatus === null ? (
              <View style={styles.statusContainer}>
<Text style={styles.statusText}>{t("waiting_for_payment")}</Text>
</View>
            ) : assignmentStatus === "ACCEPTED" &&
              shipment?.shipmentId &&
              driverId &&
              transporter?.transporterId &&
              paymentStatus === "PENDING" ? (
              <TouchableOpacity style={styles.navigateButton} onPress={handleNavigateToPickup}>
<Text style={styles.navigateButtonText}>{t("navigate_to_pickup")}</Text>
</TouchableOpacity>
            ) : (
<Text style={styles.statusText}>{t("shipment_status")}: {assignmentStatus}</Text>
            )}
          </View>
        </>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4b0082",
    marginVertical: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  detailText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
    lineHeight: 22,
  },
  bold: {
    fontWeight: "bold",
    color: "#4b0082",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  acceptButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
  },
  declineButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
  },
  navigateButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    elevation: 5,
    alignSelf: "center",
    width: "60%",
  },
  navigateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  statusContainer: {
    backgroundColor: "#f0ad4e",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#dc3545",
    textAlign: "center",
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});

export default DriverShipmentDetails;
