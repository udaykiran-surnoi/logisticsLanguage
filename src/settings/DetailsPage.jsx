




// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// // import PersonalDetailsForm from './PersonalDetailsForm';
// // import AccountDetailsForm from './AccountDetailsForm';
// // import VehicleInfoForm from './VehicleInfoForm';
// // import AddDriverForm from './AddDriverForm'; // Import Add Driver form

// // const DetailsPage = () => {
// //   const [activeTab, setActiveTab] = useState('PersonalDetails');

// //   return (
// //     <View style={styles.container}>
// //       {/* Tabs */}
// //       <View style={styles.tabsContainer}>
// //         <TouchableOpacity
// //           style={[
// //             styles.tabButton,
// //             activeTab === 'PersonalDetails' && styles.activeTab,
// //           ]}
// //           onPress={() => setActiveTab('PersonalDetails')}
// //         >
// //           <Text style={styles.tabText}>Personal Details</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[
// //             styles.tabButton,
// //             activeTab === 'AccountDetails' && styles.activeTab,
// //           ]}
// //           onPress={() => setActiveTab('AccountDetails')}
// //         >
// //           <Text style={styles.tabText}>Account Details</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[
// //             styles.tabButton,
// //             activeTab === 'VehicleInfo' && styles.activeTab,
// //           ]}
// //           onPress={() => setActiveTab('VehicleInfo')}
// //         >
// //           <Text style={styles.tabText}>Vehicle Info</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[
// //             styles.tabButton,
// //             activeTab === 'AddDriver' && styles.activeTab,
// //           ]}
// //           onPress={() => setActiveTab('AddDriver')}
// //         >
// //           <Text style={styles.tabText}>Add Driver</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Forms */}
// //       <View style={styles.formContainer}>
// //         {activeTab === 'PersonalDetails' && <PersonalDetailsForm />}
// //         {activeTab === 'AccountDetails' && <AccountDetailsForm />}
// //         {activeTab === 'VehicleInfo' && <VehicleInfoForm />}
// //         {activeTab === 'AddDriver' && <AddDriverForm />}
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f8f9fa',
// //   },
// //   tabsContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-evenly',
// //     backgroundColor: '#4b0082',
// //     paddingVertical: 10,
// //   },
// //   tabButton: {
// //     padding: 10,
// //   },
// //   activeTab: {
// //     borderBottomWidth: 2,
// //     borderBottomColor: '#fff',
// //   },
// //   tabText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   formContainer: {
// //     flex: 1,
// //     padding: 16,
// //   },
// // });

// // export default DetailsPage;

// // ===============================


// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// import PersonalDetailsForm from './PersonalDetailsForm';
// import AccountDetailsForm from './AccountDetailsForm';
// import VehicleInfoForm from './VehicleInfoForm';
// import AddDriverForm from './AddDriverForm';
// import DocumentsForm from './DocumentsForm'; // Import DocumentsForm component

// const { width } = Dimensions.get('window');

// const DetailsPage = () => {
//   const [activeTab, setActiveTab] = useState('PersonalDetails');
//   const scrollViewRef = useRef(null);

//   useEffect(() => {
//     // Auto-scroll the tabs horizontally
//     let scrollX = 0;
//     const scrollInterval = setInterval(() => {
//       if (scrollViewRef.current) {
//         scrollX += 10; // Adjust speed here
//         scrollViewRef.current.scrollTo({ x: scrollX, animated: true });

//         if (scrollX > width * 2) {
//           scrollX = 0; // Reset after reaching the end
//         }
//       }
//     }, 100); // Adjust interval here for smoothness

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* Tabs */}
//       <View style={styles.tabsContainerWrapper}>
//         <ScrollView
//           horizontal
//           ref={scrollViewRef}
//           showsHorizontalScrollIndicator={false}
//           style={styles.tabsContainer}
//         >
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'PersonalDetails' && styles.activeTab]}
//             onPress={() => setActiveTab('PersonalDetails')}
//           >
//             <Text style={styles.tabText}>Personal Details</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'AccountDetails' && styles.activeTab]}
//             onPress={() => setActiveTab('AccountDetails')}
//           >
//             <Text style={styles.tabText}>Account Details</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'VehicleInfo' && styles.activeTab]}
//             onPress={() => setActiveTab('VehicleInfo')}
//           >
//             <Text style={styles.tabText}>Vehicle Info</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'AddDriver' && styles.activeTab]}
//             onPress={() => setActiveTab('AddDriver')}
//           >
//             <Text style={styles.tabText}>Add Driver</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Documents' && styles.activeTab]}
//             onPress={() => setActiveTab('Documents')}
//           >
//             <Text style={styles.tabText}>Documents</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>

//       {/* Forms */}
//       <View style={styles.formContainer}>
//         {activeTab === 'PersonalDetails' && <PersonalDetailsForm />}
//         {activeTab === 'AccountDetails' && <AccountDetailsForm />}
//         {activeTab === 'VehicleInfo' && <VehicleInfoForm />}
//         {activeTab === 'AddDriver' && <AddDriverForm />}
//         {activeTab === 'Documents' && <DocumentsForm />}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   tabsContainerWrapper: {
//     height: 50, // Reduce the height of the purple bar
//     backgroundColor: '#4b0082',
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//   },
//   tabButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#fff',
//   },
//   tabText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   formContainer: {
//     flex: 1,
//     padding: 16,
//   },
// });

// export default DetailsPage;

// ===============================
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import PersonalDetailsForm from './PersonalDetailsForm';
import AccountDetailsForm from './AccountDetailsForm';
import VehicleInfoForm from './VehicleInfoForm';
import AddDriverForm from './AddDriverForm';
// import DocumentsForm from './DocumentsForm';
// import DocumentsForm from './DocumentsForm';
import UpdatePasswordForm from './UpdatePasswordScreen'; // Import Update Password form
import DocumentsForm from './DocumentsForm'; // Import DocumentsForm component
import { useTranslation } from 'react-i18next';
import CompanyDetailsForm from './CompanyDetailsForm';
import DriverDetailsForm from './DriverDetailsForm'; // Import DriverDetailsForm component

const { width } = Dimensions.get('window');

const DetailsPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('PersonalDetails');
  const scrollViewRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabsContainerWrapper}>
        <ScrollView
          horizontal
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
        >
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'PersonalDetails' && styles.activeTab]}
            onPress={() => setActiveTab('PersonalDetails')}
          >
            <Text style={styles.tabText}>{t('personalDetails')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'AccountDetails' && styles.activeTab]}
            onPress={() => setActiveTab('AccountDetails')}
          >
            <Text style={styles.tabText}>{t('accountDetailss')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'VehicleInfo' && styles.activeTab]}
            onPress={() => setActiveTab('VehicleInfo')}
          >
            <Text style={styles.tabText}>{t('vehicleInfo')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'AddDriver' && styles.activeTab]}
            onPress={() => setActiveTab('AddDriver')}
          >
            <Text style={styles.tabText}>{t('addDriver')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Documents' && styles.activeTab]}
            onPress={() => setActiveTab('Documents')}
          >
            <Text style={styles.tabText}>{t('document')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'UpdatePassword' && styles.activeTab]}
            onPress={() => setActiveTab('UpdatePassword')}
          >
            <Text style={styles.tabText}>Update Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.tabButton, activeTab === 'CompanyDetails' && styles.activeTab]}
            onPress={() => setActiveTab('CompanyDetails')}
          >
            <Text style={styles.tabText}>{t('companyDetails')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'DriverDetails' && styles.activeTab]}
            onPress={() => setActiveTab('DriverDetails')}
          >
            <Text style={styles.tabText}>Driver Details</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Forms */}
      <View style={styles.formContainer}>
        {activeTab === 'PersonalDetails' && <PersonalDetailsForm />}
        {activeTab === 'AccountDetails' && <AccountDetailsForm />}
        {activeTab === 'VehicleInfo' && <VehicleInfoForm />}
        {activeTab === 'AddDriver' && <AddDriverForm />}
        {activeTab === 'Documents' && <DocumentsForm />}
        {activeTab === 'UpdatePassword' && <UpdatePasswordForm />}
        {activeTab === 'CompanyDetails' && <CompanyDetailsForm />}
        {activeTab === 'DriverDetails' && <DriverDetailsForm />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  tabsContainerWrapper: {
    height: 50,
    backgroundColor: '#4b0082',
  },
  tabsContainer: {
    flexDirection: 'row',
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    flex: 1,
    padding: 16,
  },
});

export default DetailsPage;

