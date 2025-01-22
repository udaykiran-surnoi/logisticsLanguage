import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const TrackingApp = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const navigateToShipmentForm = () => {
    navigation.navigate('ShipmentForm');
  };

  const navigateToOldShipments = () =>{
    navigation.navigate('ShipmentList');
  }
  const navigateToInvoice = () => {
    navigation.navigate('SubmitQuotation');
  }

  const navigateToPayments = () =>{
    navigation.navigate('PaymentRecords');
  }
  const navigateToTracking = () => {
    navigation.navigate('ShipmentForm');
  }
  const navigateToInsurance = () => {
    navigation.navigate('ShipmentForm');
  }

  useEffect(() => {
    let scrollPosition = 0;
    let direction = 1; // 1 for right-to-left, -1 for left-to-right

    const autoScroll = () => {
      if (scrollViewRef.current) {
        scrollPosition += direction * 1; // Adjust speed here
        scrollViewRef.current.scrollTo({ x: scrollPosition, animated: false });

        if (scrollPosition >= 300) direction = -1; // Reverse when reaching the right end
        if (scrollPosition <= 0) direction = 1; // Reverse when reaching the left end
      }
    };

    const interval = setInterval(autoScroll, 20); // Adjust interval for smoothness
    return () => clearInterval(interval);
  }, []);


  const dummyShipments = [
    { id: '1', sender: 'Atlanta', receiver: 'Chicago', time: '2 days', status: 'Running' },
    { id: '2', sender: 'New York', receiver: 'Los Angeles', time: '3 days', status: 'Running' },
    { id: '3', sender: 'Houston', receiver: 'Seattle', time: '5 days', status: 'Running' },
    { id: '4', sender: 'Miami', receiver: 'Denver', time: '4 days', status: 'Running' },
  ];
  const dummyQuotations = [
    { id: '1', transporterName: 'ABC Logistics', quotationAmount: '$200', shipmentNumber: 'S001', time: '2 hours ago' },
    { id: '2', transporterName: 'FastTrack Movers', quotationAmount: '$150', shipmentNumber: 'S002', time: '4 hours ago' },
    { id: '3', transporterName: 'Global Express', quotationAmount: '$300', shipmentNumber: 'S003', time: '1 day ago' },
    { id: '4', transporterName: 'Swift Transport', quotationAmount: '$250', shipmentNumber: 'S004', time: '2 days ago' },
    { id: '5', transporterName: 'RoadRunner Delivery', quotationAmount: '$180', shipmentNumber: 'S005', time: '3 days ago' },
  ];


  return (
    <SafeAreaView style={styles.container}>
     

      <ScrollView >
         {/* Tracking Section */}
         <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.trackingScrollView}
        >
          {dummyShipments.map((shipment) => (
            <View key={shipment.id} style={styles.trackingCard}>
              <Text style={styles.shipmentNumber}>Shipment Number: {shipment.id}</Text>
              <View style={styles.trackingRow}>
                <Text style={styles.iconText}>📦</Text>
                <Text style={styles.trackingText}>Sender: {shipment.sender}</Text>
              </View>
              <View style={styles.trackingRow}>
                <Text style={styles.iconText}>📍</Text>
                <Text style={styles.trackingText}>Receiver: {shipment.receiver}</Text>
              </View>
              <View style={styles.trackingRow}>
                <Text style={styles.iconText}>⏳</Text>
                <Text style={styles.trackingText}>Time: {shipment.time}</Text>
              </View>
              <View style={styles.trackingRow}>
                <Text style={styles.iconText}>✔️</Text>
                <Text style={styles.trackingText}>Status: {shipment.status}</Text>
              </View>
              <TouchableOpacity style={styles.addStopButton}>
                <Text style={styles.addStopText}>View location</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Activities Section */}
       
         {/* Available Vehicles Section */}
         <View style={styles.vehiclesSection}>
          <Text style={styles.sectionHeader}>All Activities</Text>
          {/* First Row */}
          <View style={styles.vehicleOptions}>

            <TouchableOpacity
            onPress={navigateToShipmentForm}
              style={styles.vehicleCard}
              // 'ShipmentForm' must exist in the navigator
            >
              <Image source={require('../assets/delivery-truck.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Add Shipment</Text>
            </TouchableOpacity>
            {/* <View style={styles.vehicleCard}>
              
              <Image source={require('../assets/package.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Old Shipments</Text>
            </View> */}
             <TouchableOpacity
            onPress={navigateToOldShipments}
              style={styles.vehicleCard}
              // 'ShipmentForm' must exist in the navigator
            >
              <Image source={require('../assets/package.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Old Shipments</Text>
            </TouchableOpacity>
            {/* <View style={styles.vehicleCard}>
              <Image source={require('../assets/invoice.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Invoices</Text>
            </View> */}
             <TouchableOpacity
            onPress={navigateToInvoice}
              style={styles.vehicleCard}
              // 'ShipmentForm' must exist in the navigator
            >
              <Image source={require('../assets/invoice.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Invoices</Text>
            </TouchableOpacity>
          </View>
          {/* First Row */}
          <View style={styles.vehicleOptions}>
            {/* <View style={styles.vehicleCard}>
              <Image source={require('../assets/payment-method.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Payments</Text>
            </View> */}
            <TouchableOpacity
            onPress={navigateToPayments}
              style={styles.vehicleCard}
              // 'ShipmentForm' must exist in the navigator
            >
              <Image source={require('../assets/payment-method.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Payments</Text>
            </TouchableOpacity>

            {/* <View style={styles.vehicleCard}>
              <Image source={require('../assets/shipment-tracking.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Tracking</Text>
            </View> */}
            <TouchableOpacity
            onPress={navigateToTracking}
              style={styles.vehicleCard}
              // 'ShipmentForm' must exist in the navigator
            >
              <Image source={require('../assets/shipment-tracking.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Tracking</Text>
            </TouchableOpacity>
            
            {/* <View style={styles.vehicleCard}>
              <Image source={require('../assets/life-insurance.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Insurances</Text>
            </View> */}
            <TouchableOpacity
            onPress={navigateToInsurance}
              style={styles.vehicleCard}
              // 'ShipmentForm' must exist in the navigator
            >
              <Image source={require('../assets/life-insurance.png')} style={styles.vehicleImage} />
              <Text style={styles.vehicleText}>Insurances</Text>
            </TouchableOpacity>
            
          </View>
                  {/* Transporter Quotations Section */}
        <View style={styles.quotationsSection}>
          <Text style={styles.sectionHeader}>Transporters Quotations</Text>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.quotationScrollView}
          >
            {dummyQuotations.map((quotation) => (
              <View key={quotation.id} style={styles.quotationCard}>
                <Text style={styles.shipmentNumber}>Shipment Number: {quotation.shipmentNumber}</Text>
                <View style={styles.trackingRow}>
                  <Text style={styles.iconText}>🚛</Text>
                  <Text style={styles.trackingText}>Transporter: {quotation.transporterName}</Text>
                </View>
                <View style={styles.trackingRow}>
                  <Text style={styles.iconText}>💰</Text>
                  <Text style={styles.trackingText}>Amount: {quotation.quotationAmount}</Text>
                </View>
                <View style={styles.trackingRow}>
                  <Text style={styles.iconText}>⏰</Text>
                  <Text style={styles.trackingText}>Time: {quotation.time}</Text>
                </View>
                <TouchableOpacity style={styles.addStopButton}>
                  <Text style={styles.addStopText}>View Details</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        </View>
      </ScrollView>

     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  trackingSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  trackingCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  trackingHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shipmentNumber: {
    fontSize: 16,
    marginBottom: 10,
  },
  trackingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  trackingText: {
    fontSize: 14,
    marginLeft: 10,
  },
  addStopButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#ffb74d',
    borderRadius: 5,
    alignItems: 'center',
  },
  addStopText: {
    color: 'white',
    fontWeight: 'bold',
  },
  vehiclesSection: {
    margin: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vehicleOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30, // Add spacing between rows
  },

  vehicleCard: {
    alignItems: 'center',
    width: 80,
  },
  vehicleImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  vehicleText: {
    fontSize: 12,
    textAlign: 'center',
  },

  quotationsSection: {
    margin: 15,
  },
  quotationScrollView: {
    marginVertical: 10,
  },
  quotationCard: {
    backgroundColor: '#fff',
    marginRight: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    width: 250,
  },
  iconText: {
    fontSize: 18,
    marginRight: 10,
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerItem: {
    alignItems: 'center',
    flex: 1,
  },
  footerIcon: {
    fontSize: 22,
    color: '#aaa',
  },
  footerText: {
    fontSize: 14,
    color: '#00000',
    marginTop: 2,
  },
  activeIcon: {
    color: '#6200ee',
  },
  activeText: {
    color: '#6200ee',
    fontWeight: 'bold',
  },
});

export default TrackingApp;
