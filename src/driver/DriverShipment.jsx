import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from 'react-i18next';


const DriverShipment = ({ navigation }) => {
      const { t } = useTranslation(); 
  
  
  const [shipmentDetails, setShipmentDetails] = useState([]);
  const [driverId, setDriverId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch driverId and shipment details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedDriverId = await AsyncStorage.getItem("driverId");
        if (storedDriverId) {
          setDriverId(storedDriverId);
          console.log("Driver ID retrieved from AsyncStorage:", storedDriverId);
        } else {
          Alert.alert(
            "Error",
            "Driver ID not found. Please save your driver details first."
          );
          return;
        }

        const response = await fetch(
          "http://10.0.2.2:8080/assignShipments/pending"
        );
        if (!response.ok)
          throw new Error(
            `Failed to fetch shipment details: ${response.status}`
          );

        const data = await response.json();
        console.log("Fetched Shipment Details:", data);
        setShipmentDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        Alert.alert("Error", error.message || "Failed to fetch shipment details.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleViewMore = (item) => {
    navigation.navigate("DriverShipmentDetails", {
      shipment: item.shipment,
      transporter: item.transporter,
      assignmentId: item.assignmentId,
      driverId,
    });
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4b0082" />
        <Text>{t("Loading...")}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{t('shipmentRequests')}</Text>
      {shipmentDetails.length > 0 ? (
        shipmentDetails.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('pickupLocation')}:</Text> {item.shipment?.pickupPoint || "N/A"}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('dropLocation')}:</Text> {item.shipment?.dropPoint || "N/A"}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>{t('cargoType')}:</Text> {item.shipment?.cargoType || "N/A"}
            </Text>
            <TouchableOpacity
              style={styles.viewMoreButton}
              onPress={() => handleViewMore(item)}
            >
              <Text style={styles.viewMoreText}>{t('viewMore')}</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <View style={styles.noShipmentsContainer}>
          <Text style={styles.noShipmentsText}>
          {t('No pending shipments available')}          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4b0082",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  detailText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  viewMoreButton: {
    marginTop: 10,
    backgroundColor: "#4b0082",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  viewMoreText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  noShipmentsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    marginTop: 50,
  },
  noShipmentsText: {
    fontSize: 16,
    color: "#555",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DriverShipment;
