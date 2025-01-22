// Payment.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';


const Payment = ({ data }) => {
  const { t } = useTranslation();

  const calculateSubtotal = () => {
    return data.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const taxAmount = subtotal * data.tax;
    return subtotal + taxAmount + data.serviceFee;
  };

  return (
    <View style={styles.paymentContainer}>
      <Text style={styles.sectionHeader}>{t('Payment Summary')}</Text>
      <View style={styles.summaryRow}>
      <Text style={styles.cell}>{t('Subtotal')}:</Text>
      <Text style={styles.cell}>${calculateSubtotal()}</Text>
      </View>
      <View style={styles.summaryRow}>
      <Text style={styles.cell}>{t('Service Fee')}:</Text>
      <Text style={styles.cell}>${data.serviceFee}</Text>
      </View>
      <View style={styles.summaryRow}>
      <Text style={styles.cell}>{t('Tax')}:</Text>
      <Text style={styles.cell}>${(calculateSubtotal() * data.tax).toFixed(2)}</Text>
      </View>
      <View style={styles.summaryRow}>
      <Text style={styles.cell}>{t('Total')}:</Text>
        <Text style={styles.cell}>${calculateTotal().toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Payment;
