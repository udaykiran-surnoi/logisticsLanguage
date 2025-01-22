import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";


const DriverTracking = () => {
        const { t } = useTranslation();
  
  const [loading, setLoading] = useState(true);
  const [driverCoords, setDriverCoords] = useState(null);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);
  const [estimatedTime, setEstimatedTime] = useState(null); // Estimated time in minutes
  const [distance, setDistance] = useState(null); // Distance in kilometers

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        // Dummy data for testing
        const dummyDriverCoords = {
          latitude: 37.7929, // Example latitude for driver
          longitude: -122.4194, // Example longitude for driver
        };

        const dummyPickupCoords = {
          latitude: 37.7749, // Example latitude for pickup
          longitude: -122.4194, // Example longitude for pickup
        };

        setDriverCoords(dummyDriverCoords);
        setPickupCoords(dummyPickupCoords);

        // Simulate route and calculate distance and time
        const dummyRouteCoords = [
          dummyDriverCoords,
          { latitude: 37.7830, longitude: -122.4150 }, // A waypoint
          dummyPickupCoords,
        ];

        setRouteCoords(dummyRouteCoords);

        // Dummy calculation for distance (in kilometers) and time (in minutes)
        const dummyDistance = 5.0; // 5 kilometers (dummy)
        const dummyTime = 10; // 10 minutes (dummy)

        setDistance(dummyDistance);
        setEstimatedTime(dummyTime);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        Alert.alert(t("title"), t("failed_to_retrieve_data"));
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4b0082" />
        <Text>{t("map")}</Text>
      </View>
    );
  }

  if (!driverCoords || !pickupCoords) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{t("loading_map_details")}</Text>

      </View>
    );
  }

  const handleStartJourney = () => {
    Alert.alert(t("started_title"), t("started_message"));
    console.log("Journey started!");
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: driverCoords.latitude,
          longitude: driverCoords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/* Driver Location Marker */}
        <Marker
          coordinate={driverCoords}
          title={t("driver_location_title")}
          description={t("driver_location_description")}
        />

        {/* Pickup Location Marker */}
        <Marker
          coordinate={pickupCoords}
          title={t("pickup_location_title")}
          description={t("pickup_location_description")}
        />

        {/* Route Polyline */}
        {routeCoords.length > 0 && (
          <Polyline
            coordinates={routeCoords}
            strokeColor="#4b0082"
            strokeWidth={4}
          />
        )}
      </MapView>

      {/* Display Estimated Time and Distance */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
        {t("estimated_time")}: {estimatedTime} {t("minutes")}
        </Text>
        <Text style={styles.infoText}>
        {t("distance")}: {distance} {t("kilometers")}
        </Text>
      </View>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton} onPress={handleStartJourney}>
      <Text style={styles.startButtonText}>{t("start")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  map: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "#dc3545",
    textAlign: "center",
  },
  infoContainer: {
    position: "absolute",
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4b0082",
    marginBottom: 5,
  },
  startButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#28a745",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  startButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DriverTracking;
