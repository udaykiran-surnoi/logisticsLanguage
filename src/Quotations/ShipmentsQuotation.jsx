import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const ShipmentCard = ({ shipment }) => {
      const { t } = useTranslation();
  
  const navigation = useNavigation();

  const handleViewQuotationsDetails = () => {
    navigation.navigate('QuotationsListScreen', { shipmentId: shipment.shipmentId });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{shipment.cargoType}</Text>
      <Text>{t('ShipmentList.status')}: {shipment.shipmentStatus}</Text>
      <Text>{t('ShipmentList.createdAt')}: {new Date(shipment.createdAt).toLocaleDateString()}</Text>
      <TouchableOpacity style={styles.button} onPress={handleViewQuotationsDetails}>
        <Text style={styles.buttonText}>{t('ShipmentList.viewQuotations')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ShipmentsQuotation = () => {
  const navigation = useNavigation();
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:8080/api/shipments/manufacturer/2');
        setShipments(response.data);
      } catch (error) {
        console.error('Error fetching shipments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShipments();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text style={styles.loaderText}>{t('ShipmentList.loadingShipments')}</Text>
      </View>
    );
  }

  if (!shipments) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{t('ShipmentList.noShipments')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Back Arrow and Title */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>{t('QuotationList.transportersQuotations')}</Text>
      </View>

      <FlatList
        data={shipments}
        keyExtractor={(item) => item.shipmentId.toString()}
        renderItem={({ item }) => <ShipmentCard shipment={item} />}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 19,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  backButton: {
    marginRight: 10,
    padding: 10,
  },
  backButtonText: {
    fontSize: 34,
    color: '#000',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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

export default ShipmentsQuotation;
