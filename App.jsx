// import React, { useState } from 'react';
// import { SafeAreaView, View, Button } from 'react-native';
// import Invoice from './src/Billing/Invoice';
// import Payment from './src/Billing/Payment';

// export default function App() {
//   const [isPaymentComplete, setIsPaymentComplete] = useState(false);

//   const invoiceData = {
//     invoiceNumber: "INV-2024001",
//     date: "2024-11-13",
//     customer: {
//       name: "subhash",
//       address: "hyderabad",
//       phone: "123-456-7890",
//       email: "subhash@hotmail.com"
//     },
//     items: [
//       { description: "Product A", quantity: 2, price: 30 },
//       { description: "Product B", quantity: 1, price: 45 },
//       { description: "Product C", quantity: 3, price: 20 }
//     ],
//     serviceFee: 5,
//     tax: 0.1, // 10% tax
//   };

//   const handlePaymentComplete = () => {
//     setIsPaymentComplete(true);
//   };

//   return (
//     <SafeAreaView>
//       <View style={{ padding: 20 }}>
//         {!isPaymentComplete ? (
//           <>
//             <Payment data={invoiceData} />
//             <Button title="Complete Payment" onPress={handlePaymentComplete} />
//           </>
//         ) : (
//           <Invoice data={invoiceData} />
//         )}
//       </View>
//     </SafeAreaView>
//   );
// }
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import TrackingApp from "./src/dashboards/TrackingApp";

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <TrackingApp/> */}
    </NavigationContainer>
    
  );
};

export default App;
