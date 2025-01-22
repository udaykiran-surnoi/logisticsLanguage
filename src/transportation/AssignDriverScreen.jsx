import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useTranslation } from 'react-i18next';


const AssignDriverScreen = ({ route, navigation }) => {
      const { t } = useTranslation();
  
  const { shipment, transporterId } = route.params;
  const [loading, setLoading] = useState(false);
  const [assignmentStatus, setAssignmentStatus] = useState("NEW");
  const [driverDetails, setDriverDetails] = useState(null);
  const [shipmentDetails, setShipmentDetails] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [selectedDrivers, setSelectedDrivers] = useState([]);

  // Fetch all drivers
  const fetchAllDrivers = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://10.0.2.2:8080/driver/getAllDrivers");
      if (!response.ok) {
        throw new Error("Failed to fetch drivers.");
      }
      const data = await response.json();
      setDrivers(data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
      Alert.alert("Error", t('AssignDriverScreen.errors.fetchDrivers'));
    } finally {
      setLoading(false);
    }
  };

  // Fetch assignment status and driver details
  const fetchAssignmentStatusAndDriver = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://10.0.2.2:8080/assignShipments/checkStatus?shipmentId=${shipment.shipmentId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch assignment status and driver details.");
      }

      const { assignmentStatus, driverDetails, shipmentDetails } =
        await response.json();
      setAssignmentStatus(assignmentStatus);
      setShipmentDetails(shipmentDetails);

      if (assignmentStatus === "ACCEPTED") {
        setDriverDetails(driverDetails);
      } else {
        setDriverDetails(null);
      }
    } catch (error) {
      console.error("Error fetching assignment status and driver:", error);
      Alert.alert(
        "Error",
        t('AssignDriverScreen.errors.fetchAssignment')
      );
    } finally {
      setLoading(false);
    }
  };

  // Assign selected drivers to the shipment
  const assignDrivers = async () => {
    if (selectedDrivers.length === 0) {
      Alert.alert(t('error'), t('AssignDriverScreen.errors.selectDrivers'));
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `http://10.0.2.2:8080/assignShipments/assign?shipmentId=${shipment.shipmentId}&transporterId=${transporterId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedDrivers),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to assign drivers.");
      }

      Alert.alert(t('success'), t('AssignDriverScreen.assignSuccess'));
      fetchAssignmentStatusAndDriver(); // Refresh the assignment status
    } catch (error) {
      console.error("Error assigning drivers:", error);
      Alert.alert(t('error'), "Failed to assign drivers. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Navigate to another screen
  const handleAssignVehicle = () => {
    navigation.navigate("AssignVehicleScreen", {
      shipment,
      driverDetails,
      transporterId
    });
  };

  // Toggle driver selection
  const toggleDriverSelection = (driverId) => {
    if (selectedDrivers.includes(driverId)) {
      setSelectedDrivers(selectedDrivers.filter((id) => id !== driverId));
    } else {
      setSelectedDrivers([...selectedDrivers, driverId]);
    }
  };

  // Render individual driver item
  const renderDriverItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.driverCard,
        selectedDrivers.includes(item.driverId) && styles.selectedDriverCard,
      ]}
      onPress={() => toggleDriverSelection(item.driverId)}
    >
      <Text style={styles.driverName}>{item.name}</Text>
      <Text style={styles.driverPhone}>{`${t('AssignDriverScreen.driverDetails.phone')}: ${item.phoneNumber}`}</Text>
    </TouchableOpacity>
  );

  // Render driver details if status is ACCEPTED
  const renderDriverDetails = () => {
    if (driverDetails) {
      return (
        <View style={styles.card}>
          <Text style={styles.driverName}> {`${t('AssignDriverScreen.driverDetails.driverName')} ${driverDetails.name}`}
          </Text>
          <Text style={styles.driverPhone}>
          {`${t('AssignDriverScreen.driverDetails.phone')}: ${driverDetails.phoneNumber}`}
          </Text>
        </View>
      );
    } else if (assignmentStatus === "PENDING") {
      return <Text style={styles.pendingText}>{t('AssignDriverScreen.status.pending')}</Text>;
    }
    return null;
  };

  // Render appropriate action button
  const renderButton = () => {
    if (assignmentStatus === "ACCEPTED" && driverDetails) {
      return (
        <TouchableOpacity
          style={styles.assignButton}
          onPress={handleAssignVehicle} // Navigate to AssignVehicleScreen
        >
          <Text style={styles.buttonText}>
          {t('AssignDriverScreen.buttons.assignVehicle')}            </Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  useEffect(() => {
    fetchAssignmentStatusAndDriver();
    if (assignmentStatus !== "ACCEPTED") {
      fetchAllDrivers();
    }
  }, [assignmentStatus]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('AssignDriverScreen.heading')}</Text>

      {/* Shipment Details */}
      <View style={styles.shipmentDetails}>
      <Text style={styles.subheading}>{t('AssignDriverScreen.shipmentDetails.title')}</Text>
      <Text style={styles.detailText}>
      {`${t('AssignDriverScreen.shipmentDetails.cargoType')}: ${shipmentDetails?.cargoType || shipment.cargoType}`}
      </Text>
        <Text style={styles.detailText}>
        {`${t('AssignDriverScreen.shipmentDetails.pickupPoint')}: ${shipmentDetails?.pickupPoint || shipment.pickupPoint}`}
        </Text>
        <Text style={styles.detailText}>
        {`${t('AssignDriverScreen.shipmentDetails.dropPoint')}: ${shipmentDetails?.dropPoint || shipment.dropPoint}`}
        </Text>
        {`${t('AssignDriverScreen.shipmentDetails.status')}: ${assignmentStatus}`}
        </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          {/* Render driver list and request button only if not accepted */}
          {assignmentStatus !== "ACCEPTED" && (
            <>
              <FlatList
                data={drivers}
                renderItem={renderDriverItem}
                keyExtractor={(item) => item.driverId.toString()}
              />

              <TouchableOpacity
                style={styles.assignButton}
                onPress={assignDrivers}
              >
                <Text style={styles.buttonText}>{t('AssignDriverScreen.buttons.sendRequest')}</Text>
                </TouchableOpacity>
            </>
          )}

          {/* Driver Details */}
          {renderDriverDetails()}

          {/* Assign Vehicle Button */}
          {renderButton()}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "#333" },
  shipmentDetails: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
  },
  subheading: { fontSize: 18, fontWeight: "bold", marginBottom: 5, color: "#555" },
  detailText: { fontSize: 16, marginBottom: 5, color: "#555" },
  driverCard: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedDriverCard: {
    backgroundColor: "#cce5ff",
    borderColor: "#007bff",
  },
  driverName: { fontSize: 18, fontWeight: "bold", color: "#333" },
  driverPhone: { fontSize: 14, color: "#555" },
  pendingText: { fontSize: 16, color: "#ff9900", textAlign: "center", marginVertical: 10 },
  assignButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default AssignDriverScreen;
