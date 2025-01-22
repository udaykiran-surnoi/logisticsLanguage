import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const ShipmentCard = ({ shipment }) => {
        const { t } = useTranslation();
  
  const navigation = useNavigation();

  const handleViewDetails = () => {
    navigation.navigate('ShipmentDetails', { shipmentId: shipment.shipmentId });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{shipment.cargoType}</Text>
      <Text style={styles.statusText}>{t('status')}: {shipment.shipmentStatus}</Text>
      <Text style={styles.dateText}>
      {t('createdAt')}: {new Date(shipment.createdAt).toLocaleDateString()}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleViewDetails}>
        <Text style={styles.buttonText}>{t('viewDetails')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ShipmentList = () => {
  const [shipments, setShipments] = useState([]);
  const [filteredShipments, setFilteredShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await axios.get(
          'http://10.0.2.2:8080/api/shipments/manufacturer/1'
        );
        setShipments(response.data);
        setFilteredShipments(response.data);
      } catch (error) {
        console.error('Error fetching shipments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShipments();
  }, []);

  const handleFilterChange = (status) => {
    setSelectedFilter(status);
    if (status === 'ALL') {
      setFilteredShipments(shipments);
    } else {
      const filtered = shipments.filter(
        (shipment) => shipment.shipmentStatus === status
      );
      setFilteredShipments(filtered);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
        <Text style={styles.loaderText}>{t('loadingShipments')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header with Back Arrow */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>{t('shipmentsList')}</Text>
      </View>

      {/* Filter Dropdown */}
      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>{t('filter')}:</Text>
        <Picker
          selectedValue={selectedFilter}
          style={styles.filterDropdown}
          onValueChange={(itemValue) => handleFilterChange(itemValue)}
        >
          <Picker.Item label={t('all')} value="ALL" />
          <Picker.Item label={t('pending')} value="PENDING" />
          <Picker.Item label={t('inTransit')} value="IN_TRANSIT" />
          <Picker.Item label={t('delivered')} value="DELIVERED" />
          <Picker.Item label={t('cancelled')} value="CANCELLED" />
        </Picker>
      </View>

      {/* Shipment List */}
      {filteredShipments.length === 0 ? (
        <Text style={styles.noDataText}>
          {t('noShipmentsForStatus')}
          </Text>
      ) : (
        <FlatList
          data={filteredShipments}
          keyExtractor={(item) => item.shipmentId.toString()}
          renderItem={({ item }) => <ShipmentCard shipment={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F5F5F5' },
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
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  filterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 8,
    elevation: 3,
  },
  filterLabel: { fontSize: 18, marginRight: 8, color: '#555', fontWeight: 'bold' },
  filterDropdown: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    padding: 16,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 12,
    elevation: 4,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 4, color: '#333' },
  statusText: { fontSize: 16, marginBottom: 4, color: '#777' },
  dateText: { fontSize: 15, marginBottom: 8, color: '#AAA' },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: { color: '#FFF', textAlign: 'center', fontSize: 16 },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loaderText: { marginTop: 8, fontSize: 16, color: '#555' },
  noDataText: { textAlign: 'center', marginTop: 16, fontSize: 16, color: '#999' },
});

export default ShipmentList;
