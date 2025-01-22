// Invoice.jsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';


const Invoice = ({ data }) => {
  const { t } = useTranslation();

  const calculateSubtotal = () => {
    return data.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.invoiceContainer}>
      <Text style={styles.header}>  {t('Invoice')} #{data.invoiceNumber}</Text>
      <Text> {t('Date')}: {data.date}</Text>

      <View style={styles.section}>
      <Text style={styles.sectionHeader}>{t('Bill To')}:</Text>
      <Text> {t('Name')}  : {data.customer.name}</Text>
        <Text> {t('Address')}: {data.customer.address}</Text>
        <Text>  {t('Phone')}: {data.customer.phone}</Text>
        <Text>   {t('Email')}: {data.customer.email}</Text>
      </View>

      <View style={styles.section}>
      <Text style={styles.sectionHeader}>{t('Items')}</Text>
      <View style={styles.tableHeader}>
      <Text style={styles.cell}>{t('Description')}</Text>
      <Text style={styles.cell}>{t('Qty')}</Text>
      <Text style={styles.cell}>{t('Price')}</Text>
      <Text style={styles.cell}>{t('Total')}</Text>
        </View>
        <FlatList
          data={data.items}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.cell}>{item.description}</Text>
              <Text style={styles.cell}>{item.quantity}</Text>
              <Text style={styles.cell}>${item.price}</Text>
              <Text style={styles.cell}>${item.price * item.quantity}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  invoiceContainer: {
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    marginVertical: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Invoice;
