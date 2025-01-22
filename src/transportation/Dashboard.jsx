import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const Dashboard = () => {
  const { t } = useTranslation();

  const navigation = useNavigation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const sections = [
    {
      key: 'shipments',
      title: t('shipments'),
      image: require('../assets/TShipments.png'),
      navigateTo: 'TransporterShipmentScreen',
      data: [
        { id: 1, cargoType: 'Electronics', pickup: 'New York', drop: 'Los Angeles' },
        { id: 2, cargoType: 'Furniture', pickup: 'Chicago', drop: 'Houston' },
      ],
    },
    {
      key: 'completedTrips',
      title: t('completedTrips'),
      image: require('../assets/TCompleted.png'),
      navigateTo: 'ShipmentCompletedScreen',
      data: [
        { id: 1, cargoType: 'Electronics', pickup: 'Seattle', drop: 'San Francisco' },
        { id: 2, cargoType: 'Furniture', pickup: 'Denver', drop: 'Phoenix' },
      ],
    },
    {
      key: 'invoices',
      title: t('invoices'),
      image: require('../assets/TInvoice.png'),
      navigateTo: 'TransporterInvoicesScreen',
      data: [
        { id: 1, invoiceNumber: 'INV-1001', amount: '$5000', status: 'Paid' },
        { id: 2, invoiceNumber: 'INV-1002', amount: '$4500', status: 'Pending' },
      ],
    },
    {
      key: 'feedback',
      title: t('feedback'),
      image: require('../assets/TFeedback.png'),
      navigateTo: 'TransporterFeedbackScreen',
      data: [
        { id: 1, reviewer: 'John Doe', rating: '5/5', comment: 'Great service!' },
        { id: 2, reviewer: 'Jane Smith', rating: '4/5', comment: 'Quick delivery!' },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('Dashboard.heading')}</Text>
      <View style={styles.grid}>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.key}
            style={[
              styles.card,
              hoveredCard === section.key && styles.hoveredCard,
            ]}
            onPress={() => navigation.navigate(section.navigateTo, { [section.key]: section.data })}
            onPressIn={() => setHoveredCard(section.key)}
            onPressOut={() => setHoveredCard(null)}
          >
            <Image source={section.image} style={styles.image} />
            <Text style={styles.cardText}>{section.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfbe1',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    width: '45%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition
  },
  hoveredCard: {
    transform: [{ scale: 1.05 }],
    borderColor: '#007bff',
    borderWidth: 2,
    backgroundColor: '#f0f8ff',
    elevation: 8,
    shadowColor: '#007bff',
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default Dashboard;
