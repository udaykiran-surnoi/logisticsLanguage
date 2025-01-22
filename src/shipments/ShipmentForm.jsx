import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const ShipmentForm = () => {
      const { t } = useTranslation();
    
    const navigation = useNavigation();

    const [cargoType, setCargoType] = useState('');
    const [weight, setWeight] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [vehicleTypeRequired, setVehicleTypeRequired] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [pickupPoint, setPickUpPoint] = useState('');
    const [pickupHouseNo, setPickUpHouseNo] = useState('');
    const [pickupStreetName, setPickUpStreetName] = useState('');
    const [pickupTown, setPickUpTown] = useState('');
    const [pickupState, setPickupState] = useState('');
    const [pickupPostalCode, setPickupPostalCode] = useState('');
    const [pickupCountry, setPickupCountry] = useState('');
    const [dropPoint, setDropPoint] = useState('');
    const [dropHouseNo, setDropHouseNo] = useState('');
    const [dropStreetName, setDropStreetName] = useState('');
    const [dropTown, setDropTown] = useState('');
    const [dropState, setDropState] = useState('');
    const [dropPostalCode, setDropPostalCode] = useState('');
    const [dropCountry, setDropCountry] = useState('');

    const [pickupLatitude, setPickupLatitude] = useState('');
    const [pickupLongitude, setPickupLongitude] = useState('');
    const [dropLatitude, setDropLatitude] = useState('');
    const [dropLongitude, setDropLongitude] = useState('');

    // Date pickers state
    const [showPickupDatePicker, setShowPickupDatePicker] = useState(false);
    const [showDeliveryDatePicker, setShowDeliveryDatePicker] = useState(false);

    const handlePickupDateChange = (event, selectedDate) => {
        setShowPickupDatePicker(false);
        if (selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
            setPickupDate(formattedDate);
        }
    };

    const handleDeliveryDateChange = (event, selectedDate) => {
        setShowDeliveryDatePicker(false);
        if (selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
            setDeliveryDate(formattedDate);
        }
    };

    // Geocoding function to get latitude and longitude from an address
    const geocodeAddress = async (address) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
            );
            if (response.data.length > 0) {
                return {
                    latitude: response.data[0].lat,
                    longitude: response.data[0].lon
                };
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error geocoding address:", error);
            return null;
        }
    };

    const handleSubmit = async () => {
        // Combine pickup and drop address into a full address for geocoding
        const pickupAddress = `${pickupHouseNo} ${pickupStreetName} ${pickupTown} ${pickupState} ${pickupPostalCode} ${pickupCountry}`;
        const dropAddress = `${dropHouseNo} ${dropStreetName} ${dropTown} ${dropState} ${dropPostalCode} ${dropCountry}`;
    
        // Geocode addresses to get latitude and longitude
        const pickupCoords = await geocodeAddress(pickupAddress);
        const dropCoords = await geocodeAddress(dropAddress);
    
        // Check that both geocoding requests returned valid coordinates
        if (pickupCoords && dropCoords) {
            const shipmentData = {
                cargoType,
                weight: parseFloat(weight),
                dimensions,
                vehicleTypeRequired,
                pickupDate: pickupDate ? new Date(pickupDate).toISOString() : null,
                deliveryDate: deliveryDate ? new Date(deliveryDate).toISOString() : null,
                contactName,
                contactNumber,
                pickupPoint,
                pickupHouseNo,
                pickupStreetName,
                pickupTown,
                pickupState,
                pickupPostalCode,
                pickupCountry,
                dropPoint,
                dropHouseNo,
                dropStreetName,
                dropTown,
                dropState,
                dropPostalCode,
                dropCountry,
                pickupLatitude: pickupCoords.latitude,  // Use geocoded latitude directly
                pickupLongitude: pickupCoords.longitude,  // Use geocoded longitude directly
                droppingLatitude: dropCoords.latitude,  // Use geocoded latitude directly
                droppingLongitude: dropCoords.longitude,  // Use geocoded longitude directly
                shipmentStatus: "PENDING"
            };
    
            try {
                const response = await axios.post('http://10.0.2.2:8080/api/shipments/manufacturer/2', shipmentData);
                Alert.alert(t("Success"), t("shipmentForm.shipmentDataSubmitted"));
                console.log(response.data);
                const shipmentId = response.data.shipmentId;
                navigation.navigate('SubmitQuotation', { shipmentId });
            } catch (error) {
            Alert.alert(t("error"), t("shipmentForm.shipmentDataFailed"));
                console.error(error);
            }
        } else {
            Alert.alert(t("error"), t("shipmentForm.geocodeFailure"));
            console.error(error);
        }
    };
    
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>{t('shipmentForm.title')}</Text>

            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.cargoType')}
                value={cargoType}
                onChangeText={setCargoType}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.cargoWeight')}
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.cargoDimensions')}
                value={dimensions}
                onChangeText={setDimensions}
            />

<Text style={styles.label}>{t('shipmentForm.pickupDate')}:</Text>
<TouchableOpacity onPress={() => setShowPickupDatePicker(true)}>
<Text style={styles.dateInput}>{pickupDate || t('shipmentForm.pickupDate')}</Text>
</TouchableOpacity>
            {showPickupDatePicker && (
                <DateTimePicker
                    value={pickupDate ? new Date(pickupDate) : new Date()}
                    mode="date"
                    display="default"
                    onChange={handlePickupDateChange}
                />
            )}

<Text style={styles.label}>{t('shipmentForm.deliveryDate')}:</Text>
            <TouchableOpacity onPress={() => setShowDeliveryDatePicker(true)}>
            <Text style={styles.dateInput}>{deliveryDate || t('shipmentForm.deliveryDate')}</Text>
            </TouchableOpacity>
            {showDeliveryDatePicker && (
                <DateTimePicker
                    value={deliveryDate ? new Date(deliveryDate) : new Date()}
                    mode="date"
                    display="default"
                    onChange={handleDeliveryDateChange}
                />
            )}

<Text style={styles.subHeading}>{t('shipmentForm.contactDetails')}</Text>
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.contactName')}
                value={contactName}
                onChangeText={setContactName}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.contactPhone')}
                keyboardType="phone-pad"
                value={contactNumber}
                onChangeText={setContactNumber}
            />

<Text style={styles.subHeading}>{t('shipmentForm.pickupAddress')}</Text>
<TextInput
                style={styles.input}
                placeholder={t('shipmentForm.pickupPoint')}
                value={pickupPoint}
                onChangeText={setPickUpPoint}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.pickupHouseNo')}
                value={pickupHouseNo}
                onChangeText={setPickUpHouseNo}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.pickupStreetName')}
                value={pickupStreetName}
                onChangeText={setPickUpStreetName}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.townName')}
                value={pickupTown}
                onChangeText={setPickUpTown}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.pickupState')}
                value={pickupState}
                onChangeText={setPickupState}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.pickupPostalCode')}
                value={pickupPostalCode}
                onChangeText={setPickupPostalCode}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.pickupCountry')}
                value={pickupCountry}
                onChangeText={setPickupCountry}
            />

<Text style={styles.subHeading}>{t('shipmentForm.dropAddress')}</Text>
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.dropPoint')}
                value={dropPoint}
                onChangeText={setDropPoint}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.dropHouseNo')}
                value={dropHouseNo}
                onChangeText={setDropHouseNo}
            />
           
             <TextInput
                style={styles.input}    
                placeholder={t('shipmentForm.dropStreetName')}
                value={dropStreetName}
                onChangeText={setDropStreetName}
            />
             <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.townName')}
                value={dropTown}
                onChangeText={setDropTown}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.dropState')}
                value={dropState}
                onChangeText={setDropState}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.dropPostalCode')}
                value={dropPostalCode}
                onChangeText={setDropPostalCode}
            />
            <TextInput
                style={styles.input}
                placeholder={t('shipmentForm.dropCountry')}
                value={dropCountry}
                onChangeText={setDropCountry}
            />

<Button title={t('submit')} onPress={handleSubmit} />
</ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        flexGrow: 1,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    dateInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        textAlignVertical: 'center',
        justifyContent: 'center',
        color: '#555',
    },
});

export default ShipmentForm;
