// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import axios from 'axios';

// const AddDriverForm = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [drivers, setDrivers] = useState([]);
//   const [filteredDrivers, setFilteredDrivers] = useState([]);

//   useEffect(() => {
//     // Fetch all drivers
//     axios.get('http://10.0.2.2:8080/user/drivers')
//       .then((response) => {
//         setDrivers(response.data);
//         setFilteredDrivers(response.data);
//       })
//       .catch((error) => {
//         Alert.alert('Error', 'Failed to fetch drivers');
//       });
//   }, []);

//   // Filter drivers based on search query
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     const filtered = drivers.filter(driver =>
//       driver.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredDrivers(filtered);
//   };

//   // Handle adding a driver
//   const handleAddDriver = (driverId, driverName) => {
//     Alert.alert(
//       'Confirm',
//       `Are you sure you want to add ${driverName} as a driver?`,
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Confirm',
//           onPress: async () => {
//             try {
//               await axios.post(`http://10.0.2.2:8080/api/drivers/transporter/7/add-driver`, {
//                 driverId,
//               });
//               Alert.alert('Success', `${driverName} has been added successfully.`);
//             } catch (error) {
//               Alert.alert('Error', error.response?.data?.message || 'Failed to add driver.');
//             }
//           },
//         },
//       ]
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Add Driver</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Search drivers"
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />
//       <FlatList
//   data={filteredDrivers}
//   keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
//   renderItem={({ item }) => {
//     if (!item || !item.name || !item.id) return null;
//     return (
//       <TouchableOpacity
//         style={styles.driverItem}
//         onPress={() => handleAddDriver(item.id, item.name)}
//       >
//         <Text style={styles.driverText}>{item.name}</Text>
//       </TouchableOpacity>
//     );
//   }}
// />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//   },
//   driverItem: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   driverText: {
//     fontSize: 16,
//   },
// });

// export default AddDriverForm;
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';


const AddDriverForm = () => {
        const { t } = useTranslation();
  
  const [drivers, setDrivers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:8080/user/drivers');
        setDrivers(response.data); // Ensure this is an array
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }
    };

    fetchDrivers();
  }, []);

  const filteredDrivers = Array.isArray(drivers)
    ? drivers.filter((driver) =>
        driver.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={t('searchDrivers')}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredDrivers}
        keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => console.log('Add Driver', item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
});

export default AddDriverForm;
