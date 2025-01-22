import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import axios from 'axios';
import { useTranslation } from 'react-i18next';


const ShipmentDetails = ({ route }) => {
  const { t } = useTranslation();

  const { shipmentId } = route.params;
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); // Get navigation instance

  useEffect(() => {
    const fetchShipmentDetails = async () => {
      try {
        const response = await axios.get(`http://10.0.2.2:8080/api/shipments/${shipmentId}`);
        setShipment(response.data);
      } catch (error) {
        console.error('Error fetching shipment details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShipmentDetails();
  }, [shipmentId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text style={styles.loaderText}>{t('shipmentDetails.loadingShipmentDetails')}</Text>
      </View>
    );
  }

  if (!shipment) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{t('shipmentDetails.noShipmentDetails')}</Text>
        </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.header}>{t('shipmentDetails.shipmentDetails')}</Text>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{t('shipmentDetails.basicInformation')}:</Text>
      <Text style={styles.label}>{t('shipmentDetails.shipmentID')}: <Text style={styles.value}>{shipment.shipmentId}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.cargoType')}: <Text style={styles.value}>{shipment.cargoType}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.dimensions')}: <Text style={styles.value}>{shipment.dimensions}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.cargoWeight')}: <Text style={styles.value}>{shipment.weight} kg</Text></Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>{t('shipmentDetails.statusPricing')}:</Text>
      <Text style={styles.label}>{t('shipmentDetails.shipmentStatus')}: <Text style={styles.value}>{shipment.shipmentStatus}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.quotedPrice')}: <Text style={styles.value}>${shipment.quotedPrice}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.estimatedPrice')}: <Text style={styles.value}>${shipment.estimatedPrice}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.distance')}: <Text style={styles.value}>{shipment.distance} km</Text></Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>{t('shipmentDetails.pickupDelivery')}:</Text>
      <Text style={styles.label}>{t('shipmentDetails.pickupPoint')}: <Text style={styles.value}>{shipment.pickupPoint}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.dropPoint')}: <Text style={styles.value}>{shipment.dropPoint}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.pickupDate')}: <Text style={styles.value}>{shipment.pickupDate || t('shipmentDetails.notAvailable')}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.deliveryDate')}: <Text style={styles.value}>{shipment.deliveryDate || t('shipmentDetails.notAvailable')}</Text></Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>{t('shipmentDetails.contactDetails')}:</Text>
      <Text style={styles.label}>{t('shipmentDetails.contactName')}: <Text style={styles.value}>{shipment.contactName || t('shipmentDetails.notAvailable')}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.contactNumber')}: <Text style={styles.value}>{shipment.contactNumber || t('shipmentDetails.notAvailable')}</Text></Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>{t('shipmentDetails.additionalInformation')}:</Text>
      <Text style={styles.label}>{t('shipmentDetails.createdAt')}: <Text style={styles.value}>{new Date(shipment.createdAt).toLocaleDateString()}</Text></Text>
      <Text style={styles.label}>{t('shipmentDetails.updatedAt')}: <Text style={styles.value}>{new Date(shipment.updatedAt).toLocaleDateString()}</Text></Text>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  
  },
  backButtonText: {
    fontSize: 34,
    color: '#000',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  value: {
    fontWeight: '600',
    color: '#000',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default ShipmentDetails;
