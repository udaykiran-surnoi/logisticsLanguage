import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const TransporterInvoicesScreen = ({ route }) => {
  const { t } = useTranslation(); 

  const { invoices } = route.params || { invoices: [] };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('invoicesScreen.heading')}</Text>
      <FlatList
        data={invoices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
           <Text style={styles.label}>{t('invoicesScreen.invoice')}: {item.invoiceNumber}</Text>
           <Text style={styles.label}>{t('invoicesScreen.amount')}: {item.amount}</Text>
           <Text style={styles.label}>{t('invoicesScreen.status')}: {item.status}</Text>
           </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, elevation: 3 },
  label: { fontSize: 16, marginBottom: 5 },
});

export default TransporterInvoicesScreen;
