import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const DocumentsForm = () => {
  const [profileDocuments, setProfileDocuments] = useState({
    panCard: null,
    aadhaarCard: null,
    profilePicture: null,
    license: null,
  });

  const [companyDocuments, setCompanyDocuments] = useState({
    companyPanCard: null,
    gstCard: null,
  });

  const [vehicleDocuments, setVehicleDocuments] = useState({
    rcFront: null,
    rcBack: null,
    vehicleInsurance: null,
    vehiclePollution: null,
    vehicleHealth: null,
  });

  const handleSingleDocumentUpload = async (docType, currentDocs, setDocs) => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });

      setDocs({
        ...currentDocs,
        [docType]: result,
      });

      Alert.alert(t('documents.success'), t('documents.allDocumentsSubmitted'));
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        Alert.alert(t('documents.cancelled'), t('documents.noFilesSelected'));
      } else {
        console.error(error);
        Alert.alert(t('documents.error'), t('documents.failedToUpload'));
      }
    }
  };

  const handleSectionUpload = (section) => {
    Alert.alert(t('documents.uploadDocuments'), `${t('documents.uploadingAll')} ${section} ${t('documents.documentsUnderConstruction')}`);
  };

  const handleEdit = () => {
    Alert.alert(t('documents.edit'), t('documents.editFunctionalityUnderConstruction'));
  };

  const handleSubmit = () => {
    const missingProfileDocs = Object.keys(profileDocuments).filter(
      (key) => !profileDocuments[key]
    );
    const missingCompanyDocs = Object.keys(companyDocuments).filter(
      (key) => !companyDocuments[key]
    );
    const missingVehicleDocs = Object.keys(vehicleDocuments).filter(
      (key) => !vehicleDocuments[key]
    );

    if (missingProfileDocs.length > 0 || missingCompanyDocs.length > 0 || missingVehicleDocs.length > 0) {
      Alert.alert(
        t('documents.missingDocuments'),
        t('documents.missingDocumentsMessage', {
          profileDocuments: missingProfileDocs.join(', '),
          companyDocuments: missingCompanyDocs.join(', '),
          vehicleDocuments: missingVehicleDocs.join(', '),
        })
      );
      return;
    }

    Alert.alert(t('documents.success'), t('documents.allDocumentsSubmitted'));
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      {/* Profile Documents */}
      <Text style={styles.heading}>{t('documents.profileDocuments')}</Text>
      {Object.keys(profileDocuments).map((docType) => (
        <View key={docType} style={styles.documentRow}>
          <Text style={styles.documentLabel}>{formatLabel(docType)}</Text>
          <TouchableOpacity
            style={styles.fileSelectButton}
            onPress={() => handleSingleDocumentUpload(docType, profileDocuments, setProfileDocuments)}
          >
            <Text style={styles.fileSelectButtonText}>
              {profileDocuments[docType] ? profileDocuments[docType].name : t('documents.selectFile')}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleSectionUpload('Profile')}
      >
<Text style={styles.uploadButtonText}>
          {t('documents.upload', { documentType: t('documents.profileDocuments') })}</Text>
                   </TouchableOpacity>
      <TouchableOpacity style={styles.editButtonYellow} onPress={handleEdit}>
      <Text style={styles.editButtonText}>{t('edit')}</Text>
      </TouchableOpacity>

      {/* Company Documents */}
      <Text style={styles.heading}>{t('documents.companyDocuments')}</Text>
      {Object.keys(companyDocuments).map((docType) => (
        <View key={docType} style={styles.documentRow}>
          <Text style={styles.documentLabel}>{formatLabel(docType)}</Text>
          <TouchableOpacity
            style={styles.fileSelectButton}
            onPress={() => handleSingleDocumentUpload(docType, companyDocuments, setCompanyDocuments)}
          >
            <Text style={styles.fileSelectButtonText}>
              {companyDocuments[docType] ? companyDocuments[docType].name : t('documents.selectFile')}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleSectionUpload('Company')}
      >
<Text style={styles.uploadButtonText}>{t('documents.upload', { documentType: t('documents.companyDocuments') })}
</Text>      </TouchableOpacity>
      <TouchableOpacity style={styles.editButtonYellow} onPress={handleEdit}>
      <Text style={styles.editButtonText}>{t('edit')}</Text>
      </TouchableOpacity>

      {/* Vehicle Documents */}
      <Text style={styles.heading}>{t('documents.vehicleDocuments')}</Text>
      {Object.keys(vehicleDocuments).map((docType) => (
        <View key={docType} style={styles.documentRow}>
          <Text style={styles.documentLabel}>{formatLabel(docType)}</Text>
          <TouchableOpacity
            style={styles.fileSelectButton}
            onPress={() => handleSingleDocumentUpload(docType, vehicleDocuments, setVehicleDocuments)}
          >
            <Text style={styles.fileSelectButtonText}>
              {vehicleDocuments[docType] ? vehicleDocuments[docType].name :t('documents.selectFile')}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleSectionUpload('Vehicle')}
      >
 <Text style={styles.uploadButtonText}>
          {t('documents.upload', { documentType: t('documents.vehicleDocuments') })}
        </Text> 
              </TouchableOpacity>
      <TouchableOpacity style={styles.editButtonYellow} onPress={handleEdit}>
      <Text style={styles.editButtonText}>{t('edit')}</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>{t('submit')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const formatLabel = (key) => {
  return key
    .replace(/([A-Z])/g, ' $1') // Add spaces before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: '#4b0082',
  },
  documentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  documentLabel: {
    fontSize: 16,
    color: '#333',
    flex: 2,
  },
  fileSelectButton: {
    backgroundColor: '#4b0082',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
    flex: 1,
  },
  fileSelectButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  uploadButton: {
    backgroundColor: '#4b0082',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#ffd700',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButtonYellow: {
    backgroundColor: '#ffd700',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 10,
  },
  editButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DocumentsForm;
