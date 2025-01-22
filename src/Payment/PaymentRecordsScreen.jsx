import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';


const API_BASE_URL = 'http://10.0.2.2:8080/api';

const PaymentRecordsScreen = ({ navigation }) => {
    const { t } = useTranslation();
  
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const MANUFACTURER_ID = 2;

  const fetchPayments = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const url = `${API_BASE_URL}/payments/manufacturer/${MANUFACTURER_ID}`;
      console.log('Fetching payments from:', url);
      
      const response = await axios.get(url);
      
      if (response.data && typeof response.data === 'string') {
        setError(response.data);
        setPayments([]);
        return;
      }
      
      const paymentsData = Array.isArray(response.data) ? response.data : [response.data];
      const sortedPayments = paymentsData.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPayments(sortedPayments);
    } catch (error) {
      console.error('Error fetching payments:', error);
      setError(error.response?.data || error.message || 'Failed to fetch payments');
      setPayments([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchPayments();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING':
        return '#FFA500';
      case 'RELEASED':
        return '#4CAF50';
      case 'FAILED':
        return '#FF0000';
      default:
        return '#000000';
    }
  };

  const getAmountColor = (status) => {
    switch (status) {
      case 'RELEASED':
      case 'REFUND':
        return '#4CAF50'; // Green for received and refund
      case 'FAILED':
        return '#FF0000'; // Red for failed
      default:
        return '#000000'; // Black for other statuses
    }
  };

  const renderPaymentItem = ({ item }) => {
    if (!item) return null;

    return (
      <TouchableOpacity
        style={styles.paymentCard}
        onPress={() => navigation.navigate('PaymentDetails', { paymentId: item.paymentId })}
      >
        <View style={styles.paymentHeader}>
          <Text style={styles.shipmentId}>
          {t('shipmentId')}: {item.shipment?.shipmentId || 'N/A'}
          </Text>
          <Text style={[styles.status, { color: getStatusColor(item.paymentStatus) }]}>
          {item.paymentStatus || t('unknownStatus')}
          </Text>
        </View>

        <View style={styles.paymentInfo}>
          <Text style={[
            styles.amount,
            { color: getAmountColor(item.paymentStatus) }
          ]}>
            ₹{item.amount?.toFixed(2) || '0.00'}
          </Text>
          <Text style={styles.date}>
            {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}
          </Text>
        </View>

        <View style={styles.parties}>
          <Text style={styles.partyText}>
          {t('from')}: {item.manufacturer?.companyName || 'N/A'}
          </Text>
          <Text style={styles.partyText}>
          {t('to')}: {item.transporter?.companyName || 'N/A'}
          </Text>
        </View>

        {item.razorpayOrderId && (
          <Text style={styles.orderIdText}>{t('orderId')}: {item.razorpayOrderId}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading && !refreshing ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#53a20e" />
          <Text style={styles.loadingText}>{t('loadingPayments')}...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchPayments}>
          <Text style={styles.retryButtonText}>{t('retry')}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={payments}
          renderItem={renderPaymentItem}
          keyExtractor={(item) => item.paymentId?.toString() || Math.random().toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#53a20e']} />
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>{t('noPaymentsFound')}</Text>
              </View>
          }
          contentContainerStyle={payments.length === 0 ? styles.emptyList : null}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  paymentCard: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  shipmentId: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    fontWeight: '500',
    fontSize: 14,
  },
  paymentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#666',
    fontSize: 14,
  },
  parties: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  partyText: {
    color: '#666',
    marginBottom: 5,
    fontSize: 14,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#53a20e',
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderIdText: {
    color: '#666',
    fontSize: 12,
    marginTop: 5,
  }
});

export default PaymentRecordsScreen;