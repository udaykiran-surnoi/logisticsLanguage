import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useTranslation } from 'react-i18next';


const CompletedTrips = ({ route }) => {
    const { t } = useTranslation();
  
  const { completedTrips } = route.params;

  if (!completedTrips || completedTrips.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{t("No completed trips available.")}</Text>
      </View>
    );
  }

  const handleViewMore = (item) => {
    Alert.alert(t("viewMore"), t("Details for Trip ID: {{id}}", { id: item.assignmentId }));
    // Add navigation or further actions for "View More" if needed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{t('completedTrips')}</Text>
      {completedTrips.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.detailText}>
            <Text style={styles.bold}>{t("Trip ID")}:</Text> {item.assignmentId}
          </Text>
          <Text style={styles.detailText}>
          <Text style={styles.bold}>{t('pickupLocation')}:</Text> {item.pickupLocation}
          </Text>
          <Text style={styles.detailText}>
          <Text style={styles.bold}>{t('dropLocation')}:</Text> {item.dropOffLocation}
          </Text>
          <Text style={styles.detailText}>
          <Text style={styles.bold}>{t('price')}:</Text> {item.amount || "N/A"}
          </Text>
          <TouchableOpacity
            style={styles.viewMoreButton}
            onPress={() => handleViewMore(item)}
          >
            <Text style={styles.viewMoreText}>{t('viewMore')}</Text>
            </TouchableOpacity>
        </View>
      ))}
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
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
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
    padding: 8,
    alignItems: "center",
  },
  viewMoreText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
  },
});

export default CompletedTrips;
