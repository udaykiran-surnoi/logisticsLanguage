// PaymentScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import RazorpayCheckout from 'react-native-razorpay';
import { useRoute } from '@react-navigation/native';
import { paymentService } from '../service/paymentService';

const PaymentScreen = ({ navigation }) => {
    const { t } = useTranslation();
  
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const { amount, shipmentDetails, companyName, cargoType } = route.params;

  const handlePayment = async () => {
    try {
      setLoading(true);
      console.log('Starting payment process with details:', {
        amount,
        shipmentDetails,
        companyName,
        cargoType
      });

      // Create payment
      const { orderId, paymentId } = await paymentService.createPayment({
        shipmentId: shipmentDetails.shipmentId,
        manufacturerId: shipmentDetails.manufacturerId,
        transporterId: shipmentDetails.transporterId,
        amount,
      });

      // Get Razorpay options
      const options = paymentService.getRazorpayOptions({
        orderId,
        paymentId,
        amount,
        companyName,
        cargoType,
        shipmentId: shipmentDetails.shipmentId
      });

      // Open Razorpay
      console.log('Opening Razorpay with options:', options);
      const razorpayResponse = await RazorpayCheckout.open(options);
      console.log('Razorpay Response:', razorpayResponse);

      // Confirm payment
      const confirmationResponse = await paymentService.confirmPayment({
        paymentId,
        razorpayPaymentId: razorpayResponse.razorpay_payment_id,
        razorpayOrderId: orderId,
        razorpaySignature: razorpayResponse.razorpay_signature,
      });

      if (confirmationResponse) {
        Alert.alert(
          t('payment.success'),
          t('payment.completedSuccessfully'),
          [
            {
              text: 'OK',
              onPress: () => navigation.reset({
                index: 0,
                routes: [{ name: 'PaymentRecords' }],
              })
            }
          ]
        );
      } else {
        throw new Error('Payment confirmation failed: No response data');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      
      let errorMessage = error.message;
      try {
        if (typeof error.description === 'string' && error.description.startsWith('{')) {
          const parsedError = JSON.parse(error.description);
          errorMessage = parsedError.error?.description || errorMessage;
        }
      } catch (e) {
        console.log('Error parsing error message:', e);
      }

      Alert.alert(
        t('payment.paymentFailed'),
        errorMessage || t('payment.failedProcessing'),
        [
          {
            text: 'OK',
            onPress: () => setLoading(false)
          }
        ]
      );
    } finally {
      setLoading(false);
    }
  };

  // Input validation
  if (!amount || !shipmentDetails || !shipmentDetails.shipmentId || !companyName || !cargoType) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{t('payment.invalidDetails')}</Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{t('payment.goBack')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>{t('payment.title')}</Text>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>{t('payment.amountLabel')}</Text>
          <Text style={styles.amount}>₹{parseFloat(amount).toLocaleString('en-IN')}</Text>
          
          <Text style={styles.label}>{t('payment.shipmentIdLabel')}</Text>
          <Text style={styles.detail}>#{shipmentDetails.shipmentId}</Text>
          
          <Text style={styles.label}>{t('payment.transporterLabel')}</Text>
          <Text style={styles.detail}>{companyName}</Text>
          
          <Text style={styles.label}>{t('payment.cargoTypeLabel')}</Text>
          <Text style={styles.detail}>{cargoType}</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handlePayment}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>{t('payment.proceedToPay')}</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#53a20e',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PaymentScreen;
