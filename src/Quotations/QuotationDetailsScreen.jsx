import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  ActivityIndicator 
} from 'react-native';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const QuotationDetailsScreen = () => {
    const { t } = useTranslation();
  
  const [quotationDetails, setQuotationDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const navigation = useNavigation();
  const { quotationId } = route.params;

  useEffect(() => {
    const fetchQuotationDetails = async () => {
      try {
        const response = await axios.get(`http://10.0.2.2:8080/api/quotations/${quotationId}`);
        setQuotationDetails(response.data);
      } catch (error) {
        console.error('Error fetching quotation details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotationDetails();
  }, [quotationId]);

  const handlePay = () => {
    if (quotationDetails) {
      console.log('Shipment Details:', quotationDetails.shipment); // Add this log to debug
      navigation.navigate('Payment', {
        amount: quotationDetails.quotedPrice.toString(),
        shipmentDetails: {
          shipmentId: quotationDetails.shipment.shipmentId, // Make sure this matches your API response structure
          manufacturerId: quotationDetails.manufacturer?.id || 2, // Try both possible paths
          transporterId: quotationDetails.transporter.id || 1,
          // driverId: quotationDetails.shipment.driverId ,
        },
        companyName: quotationDetails.transporter.companyName,
        cargoType: quotationDetails.shipment.cargoType,
        description: `Payment for ${quotationDetails.shipment.cargoType} shipment`
      });
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text style={styles.loaderText}>{t('QuotationDetails.loadingQuotationDetails')}</Text>
      </View>
    );
  }

  if (!quotationDetails) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{t('QuotationDetails.failedToLoadQuotationDetails')}</Text>
        </View>
    );
  }

  const { shipment, transporter, quotedPrice, quoteStatus, validityPeriod } = quotationDetails;

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
              <Text style={styles.header}>{t('QuotationDetails.heading')}</Text>
              </View>

      {/* <Text style={styles.header}>Quotation Details</Text> */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('QuotationDetails.transporterInformation')}</Text>
          <Text>{t('QuotationDetails.company')}: {transporter.companyName || t('QuotationDetails.notAvailable')}</Text>
          <Text>{t('QuotationDetails.email')}: {transporter.email || t('QuotationDetails.notAvailable')}</Text>
          <Text>{t('QuotationDetails.phone')}: {transporter.phoneNumber || t('QuotationDetails.notAvailable')}</Text>
          <Text>{t('QuotationDetails.registration')}: {transporter.registrationNumber || t('QuotationDetails.notAvailable')}</Text>
          <Text>{t('QuotationDetails.address')}: {transporter.address || t('QuotationDetails.notAvailable')}</Text>
        </View>
 

        <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('QuotationDetails.shipmentInformation')}</Text>
        <Text>{t('QuotationDetails.shipmentId')}: {shipment.shipmentId} </Text>
        <Text>{t('QuotationDetails.shipmentStatus')}: {shipment.shipmentStatus} </Text>
        <Text>{t('QuotationDetails.cargoType')}: {shipment.cargoType || t('QuotationDetails.notAvailable')}</Text>
          <Text>{t('QuotationDetails.dimensions')}: {shipment.dimensions || t('QuotationDetails.notAvailable')}</Text>
          <Text>{t('QuotationDetails.weight')}: {shipment.weight} {t('QuotationDetails.kg')}</Text>
          <Text>{t('QuotationDetails.vehicleTypeRequired')}: {shipment.vehicleTypeRequired || t('QuotationDetails.notAvailable')}</Text>
          <Text>{t('QuotationDetails.pickupPoint')}: {shipment.pickupPoint}, {shipment.pickupTown}</Text>
          <Text>{t('QuotationDetails.dropPoint')}: {shipment.dropPoint}, {shipment.dropTown}</Text>
          <Text>{t('QuotationDetails.distance')}: {shipment.distance} {t('QuotationDetails.km')}</Text>
          <Text>{t('QuotationDetails.pickupDate')}: {new Date(shipment.pickupDate).toLocaleString()}</Text>
          <Text>{t('QuotationDetails.deliveryDate')}: {new Date(shipment.deliveryDate).toLocaleString()}</Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('QuotationDetails.quotationInformation')}</Text>
        <Text>{t('QuotationDetails.quotedPrice')}: ₹{quotedPrice}</Text>
        <Text>{t('QuotationDetails.status')}: {quoteStatus}</Text>
        <Text>{t('QuotationDetails.validityPeriod')}: {new Date(validityPeriod).toLocaleString()}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.actionButton,
          quoteStatus === 'ACCEPTED' ? styles.payButton : styles.acceptButton,
        ]}
        onPress={quoteStatus === 'ACCEPTED' ? handlePay : handleAccept}
      >
        <Text style={styles.actionButtonText}>
        {quoteStatus === 'ACCEPTED' ? t('QuotationDetails.payNow') : t('QuotationDetails.accept')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  payButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  payButtonDisabled: {
    backgroundColor: '#cccccc',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
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

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
    padding: 8,
  },
  backButtonText: {
    fontSize: 32, // Large arrow size
    color: '#000', // Black color
    fontWeight: 'bold',
  },
});
export default QuotationDetailsScreen;