import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";

import { useTranslation } from 'react-i18next';

import AsyncStorage from "@react-native-async-storage/async-storage";

const DriverDashboard = ({ navigation }) => {
  const { t } = useTranslation(); 

  const [loading, setLoading] = useState(false);
  const [driverId, setDriverId] = useState(null);

  // Fetch Driver ID
  useEffect(() => {
    const fetchDriverId = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (!userId) {
          throw new Error("User ID not found. Please log in again.");
        }

        const response = await fetch(`http://10.0.2.2:8080/driver/getDriver/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch Driver ID.");
        }

        const data = await response.json();
        if (data.driverId) {
          setDriverId(data.driverId);
          await AsyncStorage.setItem("driverId", data.driverId.toString());
        } else {
          throw new Error("Driver ID not found for the logged-in user.");
        }
      } catch (error) {
        console.error("Error fetching Driver ID:", error);
        Alert.alert(t("Error"), error.message || t("Failed to fetch Driver ID."));
      }
    };

    fetchDriverId();
  }, []);

  const sections = [
    {
      key: "driverShipment",
      title: t("shipmentRequests"),
      image: require("../assets/pick-up.png"),
    },
    {
      key: "completedTrips",
      title: t("completedTrips"),
      image: require("../assets/done.png"),
    },
    {
      key: "invoices",
      title: t("driverInvoices"),
      image: require("../assets/invoice1.png"),
    },
    {
      key: "rewards",
      title: t("driverRewards"),
      image: require("../assets/reward.png"),
    },
    {
      key: "feedback",
      title: t("driverFeedback"),
      image: require("../assets/feedback.png"),
    },
  ];

  const handleSectionPress = async (sectionKey) => {
    if (!driverId) {
      Alert.alert(t("Error"), t("Driver ID is missing. Please save your driver details."));
      return;
    }

    if (sectionKey === "driverShipment") {
      try {
        setLoading(true);
        const response = await fetch("http://10.0.2.2:8080/assignShipments/pending");

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const shipmentDetails = await response.json();
        navigation.navigate("DriverShipment", { shipmentDetails, driverId });
      } catch (error) {
        console.error("Error fetching shipment details:", error.message);
        Alert.alert(t("Error"), t(`Failed to fetch shipment details: ${error.message}`));
      } finally {
        setLoading(false);
      }
    } else if (sectionKey === "completedTrips") {
      try {
        setLoading(true);
        const response = await fetch(`http://10.0.2.2:8080/assignShipments/completed-trips/driver/${driverId}`);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const completedTrips = await response.json();
        navigation.navigate("CompletedTrips", { completedTrips });
      } catch (error) {
        console.error("Error fetching completed trips:", error.message);
        Alert.alert(t("Error"), t(`Failed to fetch completed trips: ${error.message}`));
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert(t("Feature not implemented"), `${t("Section")}: ${sectionKey}`);
    }
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.key}
            style={styles.sectionContainer}
            onPress={() => handleSectionPress(section.key)}
          >
            <View style={styles.card}>
              <Image source={section.image} style={styles.sectionImage} />
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F8",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionContainer: {
    width: "45%",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  sectionImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
    resizeMode: "contain",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DriverDashboard;
