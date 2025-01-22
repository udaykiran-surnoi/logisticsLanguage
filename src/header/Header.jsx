import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = ({ location, onSearch }) => {
  const { t, i18n } = useTranslation();
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem('appLanguage');
      if (storedLanguage) {
        i18n.changeLanguage(storedLanguage);
        setSelectedLanguage(storedLanguage);
      }
    };
    loadLanguage();
  }, []);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setSelectedLanguage(languageCode);
    AsyncStorage.setItem('appLanguage', languageCode);
    setIsLanguageModalVisible(false);
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        {/* User Image */}
        <Image source={require('../assets/user.png')} style={styles.userImage} />
        {/* Location Section */}
        <View style={styles.locationContainer}>
              <Text style={styles.locationLabel}>{t('header.yourLocation')}</Text>
              <View style={styles.locationRow}>
                <Text style={styles.locationText}>{t('header.locationExample')}</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
              </View>
            </View>
        {/* Notification Icon */}
        <TouchableOpacity style={styles.notificationIcon}>
          <Text style={styles.notificationText}>🔔</Text>
        </TouchableOpacity>
        {/* Language Selector */}
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => setIsLanguageModalVisible(true)}
        >
          <Text style={styles.languageButtonText}>{t('header.language')}</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter the receipt number ..."
          placeholderTextColor="#aaa"
          onChangeText={onSearch}
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Language Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLanguageModalVisible}
        onRequestClose={() => setIsLanguageModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('chooseLanguage')}</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => changeLanguage(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="English" value="en" />
              <Picker.Item label="Français" value="fr" />
              <Picker.Item label="हिन्दी" value="hi" />
              <Picker.Item label="తెలుగు" value="te" />
              <Picker.Item label="ಕನ್ನಡ" value="kn" />
              <Picker.Item label="தமிழ்" value="ta" />
              <Picker.Item label="മലയാളം" value="ml" />
            </Picker>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setIsLanguageModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>{t('close')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  locationContainer: {
    flex: 1,
    marginLeft: 10,
  },
  locationLabel: {
    color: '#ddd',
    fontSize: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  locationText: {
    color: 'white',
    fontSize: 16,
  },
  dropdownIcon: {
    color: 'white',
    marginLeft: 5,
    fontSize: 12,
  },
  notificationIcon: {
    padding: 10,
  },
  notificationText: {
    fontSize: 20,
    color: 'white',
  },
  languageButton: {
    padding: 10,
    backgroundColor: '#6200ee',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageButtonText: {
    color: 'white',
    fontSize: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    color: '#000',
  },
  searchIconContainer: {
    padding: 10,
    backgroundColor: '#ffb74d',
    borderRadius: 20,
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 18,
    color: 'white',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  picker: {
    width: '100%',
  },
  modalCloseButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#6200ee',
    borderRadius: 20,
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Header;
