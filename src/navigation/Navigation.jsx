import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../User/LoginScreen";
import RegisterScreen from "../User/RegisterScreen";
import WelcomeScreen from "../User/WelcomeScreen";
import TrackingApp from "../dashboards/TrackingApp";
import Dashboard from "../transportation/Dashboard";
import DriverDashboard from "../driver/DriverDashboard";
import ShipmentForm from "../shipments/ShipmentForm";
import DetailsPage from "../settings/DetailsPage";
import PersonalDetailsForm from "../settings/PersonalDetailsForm";
import AccountDetailsForm from "../settings/AccountDetailsForm";
import VehicleInfoForm from "../settings/VehicleInfoForm";
import ConfirmInvitation from "../driver/ConfirmInvitation";


import Header from "../header/Header";
import Footer from "../footer/Footer";
import CompletedTrips from "../driver/CompletedTrips";
import DriverFeedback from "../driver/DriverFeedback";
import DriverInvoices from "../driver/DriverInvoices";
import DriverRewards from "../driver/DriverRewards";
import DriverShipment from "../driver/DriverShipment";
import DocumentsForm from "../settings/DocumentsForm" ;
import ShipmentDetails from "../shipments/ShipmentDetails";
import ShipmentList from "../shipments/ShipmentList";
import TransporterShipmentScreen from "../transportation/TransporterShipmentScreen";
import ShipmentCompletedScreen from "../transportation/ShipmentCompletedScreen";
import TransporterInvoicesScreen from "../transportation/TransporterInvoicesScreen";
import TransporterFeedbackScreen from "../transportation/TransporterFeedbackScreen";
import QuoteFormScreen from "../transportation/QuoteFormScreen";
import AssignDriverScreen from "../transportation/AssignDriverScreen";
import SubmitQuotation from "../shipments/SubmitQuotation";
import DriverShipmentDetails from "../driver/DriverShipmentDetails";
import CompanyDetailsForm from "../settings/CompanyDetailsForm";
import AssignVehicleScreen from "../transportation/AssignVehicleScreen";
import DriverTracking from "../driver/DriverTracking";
import UpdatePasswordScreen from "../settings/UpdatePasswordScreen";
import OTPVerificationScreen from "../User/OTPVerificationScreen";
// import SubmitQuotation from "../shipments/SubmitQuotation";
// import DriverShipmentDetails from "../driver/DriverShipmentDetails";
// import CompanyDetailsForm from "../settings/CompanyDetailsForm";
import ShipmentQuotation from "../shipments/ShipmentQuotation";
import ShipmentsQuotation from "../Quotations/ShipmentsQuotation";
import QuotationsListScreen from "../Quotations/QuotationsListScreen";
import QuotationDetailsScreen from "../Quotations/QuotationDetailsScreen";
import PaymentScreen from "../Payment/PaymentScreen";
import PaymentRecordsScreen from "../Payment/PaymentRecordsScreen";





const Stack = createStackNavigator();

// Custom Layout with Header and Footer
const ScreenWithLayout = ({ Component, navigation, route }) => {
  return (
    <>
      <Header navigation={navigation} />
      <Component navigation={navigation} route={route} />
      <Footer navigation={navigation} />
    </>
  );
};

// Helper to render screens with the layout
const renderScreenWithLayout = (Component) => ({ navigation, route }) =>
  <ScreenWithLayout Component={Component} navigation={navigation} route={route} />;

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Screens without Header and Footer */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />

      {/* Screens with Header and Footer */}
      <Stack.Screen
        name="TrackingApp"
        component={renderScreenWithLayout(TrackingApp)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={renderScreenWithLayout(Dashboard)}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="DriverDashboard"
        component={renderScreenWithLayout(DriverDashboard)}
        options={{ headerShown: false }}
      />
     
      <Stack.Screen
        name="ShipmentForm"
        component={renderScreenWithLayout(ShipmentForm)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailsPage"
        component={renderScreenWithLayout(DetailsPage)}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="DocumentsForm"
        component={renderScreenWithLayout(DocumentsForm)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonalDetailsForm"
        component={renderScreenWithLayout(PersonalDetailsForm)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountDetailsForm"
        component={renderScreenWithLayout(AccountDetailsForm)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VehicleInfoForm"
        component={renderScreenWithLayout(VehicleInfoForm)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmInvitation"
        component={renderScreenWithLayout(ConfirmInvitation)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompletedTrips"
        component={renderScreenWithLayout(CompletedTrips)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DriverFeedback"
        component={renderScreenWithLayout(DriverFeedback)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DriverInvoices"
        component={renderScreenWithLayout(DriverInvoices)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DriverRewards"
        component={renderScreenWithLayout(DriverRewards)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DriverShipment"
        component={renderScreenWithLayout(DriverShipment)}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="ShipmentDetails"
      component={renderScreenWithLayout(ShipmentDetails)}
      options={{headerShown:false}}

      />

      <Stack.Screen
      name="ShipmentList"
      component={renderScreenWithLayout(ShipmentList)}
      options={{headerShown:false}}
      />

      <Stack.Screen
      name="TransporterShipmentScreen"
      component={renderScreenWithLayout(TransporterShipmentScreen)}
      options={{headerShown:false}}

      />
      <Stack.Screen
      name="ShipmentCompletedScreen"
      component={renderScreenWithLayout(ShipmentCompletedScreen)}
      options={{headerShown:false}}

      />
      <Stack.Screen
      name="TransporterInvoicesScreen"
      component={renderScreenWithLayout(TransporterInvoicesScreen)}
      options={{headerShown:false}}

      />
      <Stack.Screen
      name="TransporterFeedbackScreen"
      component={renderScreenWithLayout(TransporterFeedbackScreen)}
      options={{headerShown:false}}

      />

      <Stack.Screen
      name="QuoteFormScreen"
      component={renderScreenWithLayout(QuoteFormScreen)}
      options={{headerShown:false}}

      />
      <Stack.Screen
      name="AssignDriverScreen"
      component={renderScreenWithLayout(AssignDriverScreen)}
      />
    <Stack.Screen
      name="UpdatePasswordScreen"
      component={UpdatePasswordScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
    name="OTPVerification" 
    component={OTPVerificationScreen} 
    options={{ headerShown: false }}
    />
      <Stack.Screen
      name="SubmitQuotation"
      component={renderScreenWithLayout(SubmitQuotation)}
      options={{headerShown:false}}

      />
      <Stack.Screen
      name="DriverShipmentDetails"
      component={renderScreenWithLayout(DriverShipmentDetails)}
      options={{headerShown:false}}

      />
       <Stack.Screen
      name="CompanyDetailsForm"
      component={renderScreenWithLayout(CompanyDetailsForm)}
      options={{headerShown:false}}

      />

      <Stack.Screen
      name="AssignVehicleScreen"
      component={renderScreenWithLayout(AssignVehicleScreen)}
      />
      <Stack.Screen
      name="ShipmentsQuotation"
      component={renderScreenWithLayout(ShipmentsQuotation)}
      options={{headerShown:false}}

      />
      <Stack.Screen
      name="QuotationsListScreen"
      component={renderScreenWithLayout(QuotationsListScreen)}
      options={{headerShown:false}}

      />
      <Stack.Screen
      name="QuotationDetailsScreen"
      component={renderScreenWithLayout(QuotationDetailsScreen)}
      options={{headerShown:false}}

      />

      <Stack.Screen
      name="DriverTracking"
      component={renderScreenWithLayout(DriverTracking)}
      options={{headerShown:false}}

      />
      
       <Stack.Screen
        name="Payment"
        component={renderScreenWithLayout(PaymentScreen)}
        options={{ headerShown: false }}
      />
       <Stack.Screen 
          name="PaymentRecords" 
          component={PaymentRecordsScreen}
          options={{ title: 'Payment Records' }}
        />
        

    </Stack.Navigator>
  );
};

export default Navigation;
