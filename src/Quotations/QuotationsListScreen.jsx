import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';

// Define a Quotation Card Component
const QuotationCard = ({ quotation }) => {
  const navigation = useNavigation();

  const handleViewDetailsforPayment = () => {
    navigation.navigate('QuotationDetailsScreen', { quotationId: quotation.quotationId });
  };

  return (
    <View style={styles.card}>
        {t('QuotationList.transporter')}: {quotation.transporter.companyName || t('QuotationList.notAvailable')}
        <Text>
        {t('QuotationList.registration')}: {quotation.transporter.registrationNumber || t('QuotationList.notAvailable')}
      </Text>      
      <Text>{t('QuotationList.status')}: {quotation.quoteStatus || t('QuotationList.notAvailable')}</Text>
      <Text>
        {t('QuotationList.price')}: ₹{quotation.quotedPrice || t('QuotationList.notAvailable')}
      </Text>
            <TouchableOpacity style={styles.button} onPress={handleViewDetailsforPayment}>
        <Text style={styles.buttonText}>{t('QuotationList.viewDetails')}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define the main component
const QuotationsListScreen = () => {
  const [quotations, setQuotations] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const navigation = useNavigation();
  const shipmentId = route.params.shipmentId;

  useEffect(() => {
    // Fetch quotations for the given shipment ID
    const fetchQuotations = async () => {
      try {
        const response = await axios.get(`http://10.0.2.2:8080/api/quotations/withTransporter?shipmentId=${shipmentId}`);
        setQuotations(response.data);
      } catch (error) {
        console.error('Error fetching quotations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotations();
  }, [shipmentId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text style={styles.loaderText}>{t('QuotationList.loadingQuotations')}</Text>
        </View>
    );
  }

  if (!quotations.length) {
    return (
      <View style={styles.errorContainer}>
<Text style={styles.errorText}>{t('QuotationList.noQuotationsAvailable')}</Text>
</View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>{t('QuotationList.quotationsForShipmentId')}: {shipmentId}</Text>





</View>

      {/* Quotation List */}
      <FlatList
        data={quotations}
        keyExtractor={(item) => item.quotationId.toString()}
        renderItem={({ item }) => <QuotationCard quotation={item} />}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
  },
  backButtonText: {
    fontSize: 32, // Large arrow size
    color: '#000', // Black color
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

export default QuotationsListScreen;
