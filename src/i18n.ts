import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "ecoFriendlyTransport": "Eco-Friendly Transport",
      "chooseYourOption": "Choose your transport option",
      "electricTruck": "Electric Trucks",
      "shared": "Shared Transport",
      "public": "Public Transport",
      "electricTruckDescription": "Zero-emission trucks for sustainable logistics",
      "sharedDescription": "Reduce carbon footprint through carpooling",
      "publicDescription": "Efficient mass transportation solutions",
      "electricTruck1": "Electric Truck 1",
      "electricTruck2": "Electric Truck 2",
      "electricTruck3": "Electric Truck 3",
      "electricTruck4": "Electric Truck 4",
      "electricTruck5": "Electric Truck 5",
      "sharedCar1": "Shared Car 1",
      "sharedCar2": "Shared Car 2",
      "sharedCar3": "Shared Car 3",
      "sharedCar4": "Shared Car 4",
      "sharedCar5": "Shared Car 5",
      "bus1": "Bus 1",
      "metro1": "Metro 1",
      "tram1": "Tram 1",
      "bus2": "Bus 2",
      "metro2": "Metro 2",
      "range": "Range",
      "type": "Vehicle Type",

      "large": "Large",
      "medium": "Medium",
      "small": "Small",
      "km": "km",
      "back": "Back",


      "na": "N/A",
      "bookNow": "Book Now",
      // ================================================================================
      "login": "Login",
      "email": "Email",
      "password": "Password",
      "forgotAccount": "Forgot your account?",
      "dontHaveAccount": "Don't have an account? Register",
      "welcomeBack": "Welcome Back!",
      "success": "Success",
      "error": "Error",
      "pleaseEnterEmailPassword": "Please enter both email and password.",
      "pleaseEnterEmail": "Please enter your email address.",
      "loginSuccessful": "Login successful!",
      "loginFailed": "Login failed.",
      "unknownRole": "Unknown role.",
      "passwordResetLinkSent": "Password reset link sent to your email.",
      "resetPassword": "Reset Password",
      "loginError": "An error occurred during login. Please try again.",
      "resetLinkError": "Failed to send reset link. Please try again.",
      "selectLanguage": "Select Language",
      "chooseLanguage": "Choose your language",
      "close": "Close",

      "welcome": "Welcome!",
      "message": "You have successfully logged in.",

      "createAccount": "Create Account",
      "name": "Name",

      "selectRole": "Select Role",
      "driver": "Driver",
      "transporter": "Transporter",
      "manufacturer": "Manufacturer",
      "register": "Register",
      "alreadyHaveAccount": "Already have an account?",

      "allFieldsRequired": "All fields are required.",
      "registrationSuccess": "Registration Successful",
      "registrationFailed": "Registration Failed",
      "errorOccurred": "An error occurred",
      "companyDetails": "Company Details",


      // =================driver Dashboard=========================
      "Updating shipment status for ID": "Updating shipment status for ID",
      "Success": "Success",
      "Shipment status updated to IN_TRANSIT.": "Shipment status updated to IN_TRANSIT.",
      "Error updating shipment status:": "Error updating shipment status:",
      "Failed to update shipment status": "Failed to update shipment status",
      "Error": "Error",
      "Shipment or Transporter details are missing.": "Shipment or Transporter details are missing.",
      "Pick-up Location": "Pick-up Location",
      "Drop Location": "Drop Location",
      "Cargo Type": "Cargo Type",
      "Weight": "Weight",
      "Vehicle Type": "Vehicle Type",
      "Pick-up Date": "Pick-up Date",
      "Delivery Date": "Delivery Date",
      "Transporter Details": "Transporter Details",
      "Company Name": "Company Name",
      "Contact": "Contact",
      "Email": "Email",
      "Accept": "Accept",
      "Decline": "Decline",
      "shipmentRequests": "Shipment Requests",
      "completedTrips": "Completed Trips",
      "driverInvoices": "Driver Invoices",
      "driverRewards": "Driver Rewards",
      "driverFeedback": "Driver Feedback",

      "personalDetails": "Personal Detailss",
      "accountDetailss": "Account Details",
      "vehicleInfo": "Vehicle Info",
      "addDriver": "Add Driver",

      "pickupLocation": "Pick-up Location",
      "dropLocation": "Drop Location",
      "cargoType": "Cargo Type",
      "viewMore": "View More",
      "viewingMoreDetails": "Viewing more details:",
      "No completed trips available.": "No completed trips available.",
      "Details for Trip ID: {{id}}": "Details for Trip ID: {{id}}",
      "Trip ID": "Trip ID",

      "rewards": "Rewards",
      "rewardType": "Reward Type",
      "rewardAmount": "Reward Amount",

      "invoices": "Invoices",

      "feedback": "Feedback",
      "feedbackLabel": "Feedback",
      "rating": "Rating",

      "transporterInvitation": "Transporter Invitation",
      "invitationMessage": "You have been invited to join a transporter. Do you accept?",
      "accept": "Accept",
      "reject": "Reject",
      "accepted": "You have accepted the invitation.",
      "rejected": "You have rejected the invitation.",

      "itemDelivered": "Item Delivered",
      "price": "Price",


      "home": "Home",
      "quotations": "Quotations",
      "shipments": "Shipments",
      "profile": "Profile",

      // "User ID not found. Please log in again.": "User ID not found. Please log in again.",
      // "Failed to fetch Driver ID.": "Failed to fetch Driver ID.",
      // "Driver ID not found for the logged-in user.": "Driver ID not found for the logged-in user.",
      // "Error fetching Driver ID:": "Error fetching Driver ID:",

      "Driver ID is missing. Please save your driver details.": "Driver ID is missing. Please save your driver details.",
      "HTTP Error": "HTTP Error",
      "Failed to fetch shipment details: {{message}}": "Failed to fetch shipment details: {{message}}",
      "Failed to fetch completed trips: {{message}}": "Failed to fetch completed trips: {{message}}",
      "Feature not implemented": "Feature not implemented",
      "Section": "Section",
      "Loading...": "Loading...",
      "No pending shipments available.": "No pending shipments available.",


      "title": "Error",
      "failed_to_accept_shipment": "Failed to accept shipment",
      "pickup_location_missing": "Pickup location details are missing",


      "waiting_for_payment": "Waiting For Payment",
      "shipment_status": "Shipment Status",

      "navigate_to_pickup": "Navigate to Pickup",
      "map": "Loading map...",
      "failed_to_retrieve_data": "Failed to retrieve data.",
      "loading_map_details": "Error loading map details. Please try again.",
      "driver_location_title": "Driver Location",
      "driver_location_description": "This is the current location of the driver.",
      "estimated_time": "Estimated Time",
      "minutes": "mins",
      "distance": "Distance",
      "kilometers": "km",
      "pickup_location_title": "Pickup Location",
      "start": "Start",
      "pickup_location_description": "This is the shipment pickup location.",




      "accountDetails": {
        "accountHolderName": "Account Holder Name",
        "accountType": "Account Type",
        "validationError": "Validation Error",
        "accountHolderNameRequired": "Account Holder Name is required.",
        "selectAccountType": "Select Account Type",
        "savings": "Savings",
        "current": "Current",
        "fixedDeposit": "Fixed Deposit",
        "heading": "Account Details",
        "bankName": "Bank Name",
        "ifscCode": "IFSC Code",
        "accountNumber": "Account Number",
        "submit": "Submit",
        "validation": {
          "bankNameRequired": "Bank Name is required.",
          "ifscCodeRequired": "IFSC Code is required.",
          "invalidIfscCode": "Enter a valid IFSC Code (11 characters, e.g., ABCD0123456).",
          "accountNumberRequired": "Enter a valid Account Number (9-18 digits)."
        },
        "success": "Account details submitted successfully!",
        "error": "Failed to update account details. Please try again."
      },

      "validationError": "Validation Error",
      "validPanError": "Please enter a valid PAN Number (e.g., ABCDE1234F).",
      "validAadharError": "Please enter a valid Aadhaar Number (12 digits).",
      "dobError": "Please select your Date of Birth.",
      "genderError": "Please select your gender.",
      "personalDetailsSuccess": "Personal details Submitted Successfully!",
      "personalDetailsError": "Failed to update personal details.",
      "panNumber": "PAN Number",
      "aadharNumber": "Aadhaar Number",
      "selectDob": "Select Date of Birth",
      "gender": "Gender",
      "selectGender": "Select Gender",
      "male": "Male",
      "female": "Female",
      "other": "Other",
      "submit": "Submit",
      "edit": "Edit",


      "searchDrivers": "Search drivers",
      "document": "Documents",





      "vehicleInformation": "Vehicle Information",
      "vehicleNumberPlaceholder": "Vehicle Number (e.g., KA05MN1234)",
      "vehicleType": "Vehicle Type",
      "selectVehicleType": "Select Vehicle Type",
      "twoWheeler": "2 Wheeler",
      "threeWheeler": "3 Wheeler",
      "fourWheeler": "4 Wheeler",
      "heavyVehicle": "Heavy Vehicle",
      "capacityPlaceholder": "Capacity (in KG)",
      "dimensionsPlaceholder": "Dimensions (e.g., 22x8x10)",
      "selectInsuranceValidity": "Select Insurance Validity",
      "selectFitnessValidity": "Select Fitness Certificate Validity",

      "vehicleInfoSubmitted": "Vehicle Info Submitted Successfully!",
      "networkError": "Network error: Unable to connect to the server.",

      "documents": {
        "panCard": "PAN Card",
        "aadhaarCard": "Aadhaar Card",
        "profilePicture": "Profile Picture",
        "license": "License",
        "companyPanCard": "Company PAN Card",
        "gstCard": "GST Card",
        "rcFront": "RC Front",
        "rcBack": "RC Back",
        "vehicleInsurance": "Vehicle Insurance",
        "vehiclePollution": "Vehicle Pollution",
        "vehicleHealth": "Vehicle Health",


        "profileDocuments": "Profile Documents",
        "companyDocuments": "Company Documents",
        "vehicleDocuments": "Vehicle Documents",
        "upload": "{{documentType}} Upload",
        "notUploaded": "Not Uploaded",
        "submit": "Submit",
        "success": "Success",
        "cancelled": "Cancelled",
        "failedToUpload": "Failed to upload documents",
        "missingDocuments": "Missing Documents",
        "missingDocumentsMessage": "The following documents are missing:\n\nProfile Documents: {{profileDocuments}}\nCompany Documents: {{companyDocuments}}\nVehicle Documents: {{vehicleDocuments}}",
        "allDocumentsSubmitted": "All documents have been successfully submitted.",
        "noFilesSelected": "No files were selected.",
        "error": "Error",
        "uploadSuccess": "Documents uploaded successfully!",
        "uploadError": "Failed to upload documents",
        "uploadDocuments": "Upload Documents",
        "uploadingAll": "Uploading all",
        "documentsUnderConstruction": "documents is currently under construction.",
        "edit": "Edit",
        "editFunctionalityUnderConstruction": "Edit functionality is currently under construction.",
        "selectFile": "Select File"
      },
      "companyName": 'Company Name',
      "enterCompanyName": 'Enter Company Name',
      "enterEmail": 'Enter Email',
      "phoneNumber": 'Phone Number',
      "enterPhoneNumber": 'Enter Phone Number',
      "address": 'Address',
      "enterAddress": 'Enter Address',
      "registrationNumber": 'Registration Number',
      "enterRegistrationNumber": 'Enter Registration Number',

      "pleaseFillAllFields": 'Please fill all the fields.',
      "detailsSubmittedSuccessfully": 'Company details submitted successfully!',

      // ===============================TRACKING-APP============================

      "shipmentNumber": "Shipment Number",
      "sender": "Sender",
      "receiver": "Receiver",
      "time": "Time",
      "status": "Status",
      "viewLocation": "View Location",
      "allActivities": "All Activities",
      "addShipment": "Add Shipment",
      "oldShipments": "Old Shipments",
      "payments": "Payments",
      "tracking": "Tracking",
      "insurances": "Insurances",
      "shipmentID": "Shipment ID",
      "contactName": "Contact Name",
      "cargoWeight": "Cargo Weight",
      "pickupDate": "Pickup Date",
      "dropDate": "Drop Date",
      "contactPhone": "Contact Phone",
      "errorFetchingDetails": "Error fetching shipment details",


      "shipmentForm": {
        "title": "Shipment Details Form",
        "cargoType": "Cargo Type",
        "cargoWeight": "Cargo Weight",
        "cargoDimensions": "Cargo Dimensions",
        "distance": "Distance",
        "quotedPrice": "Quoted Price",
        "estimatedPrice": "Estimated Price",
        "pickupDate": "Pickup Date",
        "deliveryDate": "Delivery Date",
        "contactDetails": "Contact Details",
        "contactName": "Contact Name",
        "contactPhone": "Contact Phone",
        "pickupAddress": "Pickup Address",
        "pickupPoint": "Pickup Point",
        "pickupHouseNo": "House Number",
        "pickupStreetName": "Street Name",
        "pickupState": "State",
        "pickupPostalCode": "Postal Code",
        "pickupCountry": "Country",
        "dropAddress": "Drop Address",
        "dropPoint": "Drop Point",
        "dropHouseNo": "House Number",
        "dropStreetName": "Street Name",
        "dropState": "State",
        "dropPostalCode": "Postal Code",
        "dropCountry": "Country",
        "submitButton": "Submit",
        "shipmentDataSubmitted": "Shipment data submitted successfully",
        "shipmentDataFailed": "Failed to submit shipment data",
        "geocodeFailure": "Failed to geocode pickup or drop address.",
        "townName": "Town Name"
      },

      "ShipmentDetailsForm": {
        "title": "Shipment Details Form",
        "cargoType": "Cargo Type",
        "cargoWeight": "Cargo Weight",
        "cargoDimensions": "Cargo Dimensions",
        "distance": "Distance",
        "quotedPrice": "Quoted Price",
        "estimatedPrice": "Estimated Price",
        "pickupDate": "Pickup Date",
        "deliveryDate": "Delivery Date",
        "contactDetails": "Contact Details",
        "contactName": "Contact Name",
        "contactPhone": "Contact Phone",
        "pickupAddress": "Pickup Address",
        "pickupPoint": "PickUp Point",
        "pickupHouseNo": "House Number",
        "pickupStreetName": "Street Name",
        "pickupState": "State",
        "pickupPostalCode": "Postal Code",
        "pickupCountry": "Country",
        "dropAddress": "Drop Address",
        "dropPoint": "Drop Point",
        "dropHouseNo": "House Number",
        "dropStreetName": "Street Name",
        "dropState": "State",
        "dropPostalCode": "Postal Code",
        "dropCountry": "Country",
        "submitButton": "Submit",
        "shipmentDataSubmitted": "Shipment data submitted successfully",
        "shipmentDataFailed": "Failed to submit shipment data"

        ,





        // ===============================TRANSPORT DASHBOARD============================
        "Dashboard": {
          "heading": "Dashboard",
          "shipments": "Shipments",
          "completedTrips": "Completed Trips",
          "invoices": "Invoices",
          "feedback": "Feedback",
        },
        "SubmitQuotation": {
          "header": "Submit Quotation",
          "placeholder": {
            "quotedPrice": "Quoted Price",
            "validityPeriod": "Validity Period (yyyy-MM-ddTHH:mm:ss)"
          },
          "quoteStatus": "Quote Status:",
          "status": {
            "pending": "PENDING",
            "accepted": "ACCEPTED",
            "rejected": "REJECTED"
          },
          "submitButton": "Submit Quotation",
          "success": "Quotation created successfully!",
          "failure": "Failed to create quotation",
          "error": "An error occurred. Please try again."
        },

        "quoteForm": {
          "manufacturerDetails": "Manufacturer Details",
          "shipmentDetails": "Shipment Details",
          "quoteFormTitle": "Quote Form",
          "name": "Name",
          "company": "Company",
          "phone": "Phone",
          "email": "Email",
          "cargoType": "Cargo Type",
          "pickup": "Pickup",
          "drop": "Drop",
          "dimensions": "Dimensions",
          "weight": "Weight",
          "vehicleType": "Vehicle Type",
          "quotedPricePlaceholder": "Quoted Price",
          "validityPeriodPlaceholder": "Validity Period (in days)",
          "sendQuoteButton": "Send Quote",
          "errorTitle": "Error",
          "errorMessage": "Please fill out all fields before sending the quote.",
          "successTitle": "Quote Sent",
          "successMessage": "Your quote of {{quotedPrice}} is valid for {{validityPeriod}} days.",
          "ok": "OK",

          "validityDate": "Validity Date",
    "assignDriver": "Assign Driver",
    "pendingApproval": "Pending Approval",
    "sendQuote": "Send Quote",
    "decline": "Decline",
    "transporterIdMissing": "Transporter ID is missing. Please try again.",
    "sendFailure": "Failed to send quote. Please try again."
        },






      },
      "invoicesScreen": {
        "heading": "Invoices",
        "invoice": "Invoice",
        "amount": "Amount",
        "status": "Status"
      },
      "feedbackScreen": {
        "heading": "Feedback",
        "reviewer": "Reviewer",
        "rating": "Rating",
        "comment": "Comment"
      },

      "completedTrip": {
        "heading": "Completed Trips",
        "cargo": "Cargo",
        "pickup": "Pickup",
        "drop": "Drop"
      },

      "shipmentScreen": {
        "heading": "Shipment Requests",
        "cargoType": "Cargo Type",
        "pickup": "Pickup",
        "drop": "Drop",
        "quoteButton": "Quote",
        "quote": "Quote",
  "waitingForApproval": "Waiting for Approval",
  "quoteAccepted": "Quote Accepted",
  "noPendingShipments": "No pending shipments found."
      },


      "AssignDriverScreen": {
        "heading": "Shipment and Driver Details",
        "shipmentDetails": {
          "cargoType": "Cargo Type",
          "pickupPoint": "Pickup Point",
          "dropPoint": "Drop Point",
          "status": "Status"
        },
        "driverDetails": {
          "driverName": "Driver Name:",
          "phone": "Phone:"
        },
        "status": {
          "accepted": "ACCEPTED",
          "pending": "Waiting for Driver..."
        },
        "buttons": {
          "sendRequest": "Send Request",
          "assignVehicle": "Assign Vehicle"
        },
        "errors": {
          "fetchDrivers": "Failed to fetch drivers. Please try again later.",
          "fetchAssignment": "Failed to fetch assignment status and driver details. Please try again later.",
          "assignDrivers": "Failed to assign drivers. Please try again later.",
          "selectDrivers": "Please select at least one driver."
        }
      },


      "AssignVehicleScreen": {
    "heading": "Shipment Details",
    "shipmentDetails": "Shipment Details",
    "cargoType": "Cargo Type",
    "pickupPoint": "Pickup Point",
    "dropPoint": "Drop Point",
    "driverDetails": "Driver Details",
    "name": "Name",
    "phone": "Phone",
    "vehicleDetails": "Vehicle Details",
    "vehicleNumber": "Vehicle Number",
    "vehicleType": "Vehicle Type",
    "payNow": "Pay Now",
    "fetchDetails": "Failed to fetch details. Please try again later."
    
  },

      // =================INVOICE========================= 

      "Invoice": "Invoice",
      "Date": "Date",
      "Bill To": "Bill To",
      "Name": "Name",
      "Address": "Address",
      "Phone": "Phone",
      "Items": "Items",
      "Description": "Description",
      "Qty": "Qty",
      "Price": "Price",
      "Total": "Total",

      "Payment Summary": "Payment Summary",
      "Subtotal": "Subtotal",
      "Service Fee": "Service Fee",
      "Tax": "Tax",

      "loadingPayments": "Loading payments",
      "failedToFetchPayments": "Failed to fetch payments",
      "shipmentId": "Shipment ID",
      "unknownStatus": "Unknown",
      "from": "From",
      "to": "To",
      "orderId": "Order ID",
      "retry": "Retry",
      "noPaymentsFound": "No payments found",


      "payment": {
        "title": "Payment Details",
        "amountLabel": "Amount to Pay:",
        "shipmentIdLabel": "Shipment ID:",
        "transporterLabel": "Transporter:",
        "cargoTypeLabel": "Cargo Type:",
        "proceedToPay": "Proceed to Pay",
        "paymentFailed": "Payment Failed",
        "invalidDetails": "Invalid payment details. Please try again.",
        "goBack": "Go Back",
        "success": "Payment completed successfully!"
      },


      // =================QuotationDetailsScreen=========================


      "QuotationDetails": {
        "heading": "Quotation Details",
        "quotationInformation": "Quotation Information",
        "companyName": "Company Name",
        "quotationNumber": "Quotation Number",
        "date": "Date",
        "remarks": "Remarks",
        "transporterInformation": "Transporter Information",
        "company": "Company",
        "email": "Email",
        "phone": "Phone",
        "registration": "Registration",
        "address": "Address",
        "shipmentInformation": "Shipment Information",
        "cargoType": "Cargo Type",
        "dimensions": "Dimensions",
        "weight": "Weight",
        "kg": "kg",
        "vehicleTypeRequired": "Vehicle Type Required",
        "pickupPoint": "Pickup Point",
        "dropPoint": "Drop Point",
        "distance": "Distance",
        "km": "km",
        "pickupDate": "Pickup Date",
        "deliveryDate": "Delivery Date",
        "quotedPrice": "Quoted Price",
        "status": "Status",
        "validityPeriod": "Validity Period",
        "payNow": "Pay Now",
        "loadingQuotationDetails": "Loading Quotation Details...",
        "failedToLoadQuotationDetails": "Failed to load quotation details. Please try again.",
        "errorFetchingQuotationDetails": "Error fetching quotation details.",
        "initiatingPayment": "Initiating payment for Quotation ID: {{id}}",
        "notAvailable": "Not Available",
        "shipmentId": "Shipment ID",
        "shipmentStatus": "Shipment Status",
        "accept": "Accept"
      },
      "QuotationList": {
        "transporter": "Transporter",
        "registration": "Registration",
        "status": "Status",
        "price": "Price",
        "viewDetails": "View Details for Payment",
        "loadingQuotations": "Loading quotations...",
        "noQuotations": "No quotations available.",
        "errorFetchingQuotations": "Error fetching quotations.",
        "noQuotationsAvailable": "No quotations available for this shipment.",
        "quotationsForShipmentId": "Quotations for Shipment ID"
      },
      "ShipmentList": {
        "status": "Status",
        "createdAt": "Created At",
        "viewQuotations": "View Quotations",
        "loadingShipments": "Loading shipments...",
        "noShipments": "No shipments available.",
        "errorFetchingShipments": "Error fetching shipments.",
        "transportersQuotations": "Transporters Quotations"

      },


      "shipmentDetails": {
        "shipmentDetails": "Shipment Details",
        "basicInformation": "Basic Information",
        "shipmentID": "Shipment ID",
        "cargoType": "Cargo Type",
        "dimensions": "Dimensions",
        "cargoWeight": "Cargo Weight",
        "statusPricing": "Status & Pricing",
        "shipmentStatus": "Shipment Status",
        "quotedPrice": "Quoted Price",
        "estimatedPrice": "Estimated Price",
        "distance": "Distance",
        "pickupDelivery": "Pickup & Delivery",
        "pickupPoint": "Pickup Point",
        "dropPoint": "Drop Point",
        "pickupDate": "Pickup Date",
        "deliveryDate": "Delivery Date",
        "contactDetails": "Contact Details",
        "contactName": "Contact Name",
        "contactNumber": "Contact Number",
        "additionalInformation": "Additional Information",
        "createdAt": "Created At",
        "updatedAt": "Updated At",
        "notAvailable": "N/A",
        "loadingShipmentDetails": "Loading Shipment Details...",
        "noShipmentDetails": "No shipment details available"
      },
      "shipmentDetail": {
        "loadingShipments": "Loading Shipments...",
        "noShipmentDetails": "No shipment details available.",
        "transportersQuotations": "Transporters Quotations",
        "viewQuotations": "View Quotations",
        "status": "Status",
        "createdAt": "Created At"
      },

      "Quotations": {
        "error": "Error",
        "enterQuotedPrice": "Enter quoted price",
        "selectValidityPeriod": "Select Validity Period",
        "quotedPrice": "Quoted Price",
        "validityPeriod": "Validity Period",
        "submitQuotation": "Submit Quotation",
        "success": "Success",
        "quotationSubmitted": "Quotation submitted successfully.",
        "failedSubmitQuotation": "Failed to submit quotation",
        "anErrorOccurred": "An error occurred",


      },
      "Dashboard": {
        "heading": "Dashboard"
      },

      "header": {
        "yourLocation": "Your location",
        "locationExample": "Kukatpally, Hyderabad",
        "language": "Language"
      },

      // ===============================================SETTINGS===============================================
      "gstNumber": "GST Number",
      "enterGstNumber": "Enter GST Number",
      "cinNumber": "CIN Number",
      "enterCinNumber": "Enter CIN Number",
      "companyNameRequired": "Company Name is required.",
      "enterValidEmail": "Enter a valid Email address.",
      "enterValidPhoneNumber": "Enter a valid Phone Number (10-15 digits).",
      "addressRequired": "Address is required.",
      "enterValidGst": "Enter a valid GST Number (e.g., 22ABCDE1234F1Z5).",
      "enterValidCin": "Enter a valid CIN Number (e.g., L12345AB1234XYZ123456).",
      "companyDetailsSubmitted": "Company details submitted successfully!",
      "failedToSubmitDetails": "Failed to submit company details. Please try again.",

      "userIdRetrieved": "User ID retrieved from AsyncStorage:",
      "userIdNotFound": "User ID not found. Please log in again.",
      "errorRetrievingUserId": "Error retrieving User ID",
      "failedToRetrieveUserId": "Failed to retrieve User ID.",
      "fillAllFieldsBeforeSaving": "Please fill all fields before saving.",
      "userIdNotAvailable": "User ID not available. Please log in again.",
      "driverIdSaved": "Driver ID saved to AsyncStorage:",
      "driverDetailsSavedSuccessfully": "Driver details saved successfully!",
      "errorSavingDriverDetails": "Error saving driver details",
      "failedToSaveDriverDetails": "Failed to save driver details",
      "loading": "Loading...",
      "nameAsPerLicence": "Name (as per licence)",
      "enterNameAsPerLicence": "Enter name as per licence",
      "phoneNumberWork": "Phone Number (work)",
      "experience": "Experience",
      "enterExperience": "Enter experience (e.g., 5 years)",
      "save": "Save",

      "newPasswordsDoNotMatch": "New passwords do not match.",
      "passwordValidationError": "Password must be at least 6 characters long, and include one uppercase letter, one lowercase letter, and one number.",
      "anErrorOccurred": "An error occurred",
      "updatePassword": "Update Password",
      "currentPassword": "Current Password",
      "newPassword": "New Password",
      "reenterNewPassword": "Re-enter New Password",


      "brand": "Brand",
      "model": "Model",
      "refrigerator": "Refrigerator",
      "selectBrand": "Select Brand",
      "selectModel": "Select Model",
      "selectOption": "Select Option",
      "yes": "Yes",
      "no": "No",
      "selectRegistrationDate": "Select Registration Date",



      "createdAt": "Created At",
      "viewDetails": "View Details",
      "fetchError": "Error fetching shipments",
      "loadingShipments": "Loading Shipments...",
      "shipmentsList": "Shipments List",
      "filter": "Filter",
      "all": "All",
      "pending": "Pending",
      "inTransit": "In Transit",
      "delivered": "Delivered",
      "cancelled": "Cancelled",
      "noShipmentsForStatus": "No shipments available for the selected status.",


      "fillAllFields": "Please fill all fields",
      "passwordResetSuccess": "Password reset successfully",
      "unexpectedError": "An unexpected error occurred",
      "enterOTP": "Enter OTP",
      "otpPlaceholder": "OTP",
      "newPasswordPlaceholder": "New Password",
      






    },
  },
  fr: {
    translation: {
      "ecoFriendlyTransport": "Transport respectueux de l'environnement",


    },
  },
  hi: {
    translation: {
      "ecoFriendlyTransport": "पर्यावरण के अनुकूल परिवहन",
      "chooseYourOption": "अपना परिवहन विकल्प चुनें",
      "electricTruck": "इलेक्ट्रिक ट्रक",
      "shared": "साझा परिवहन",
      "public": "सार्वजनिक परिवहन",
      "electricTruckDescription": "सतत लॉजिस्टिक्स के लिए शून्य-उत्सर्जन ट्रक",
      "sharedDescription": "कारपूलिंग के माध्यम से कार्बन फुटप्रिंट कम करें",
      "publicDescription": "कुशल जन परिवहन समाधान",
      "electricTruck1": "इलेक्ट्रिक ट्रक 1",
      "electricTruck2": "इलेक्ट्रिक ट्रक 2",
      "electricTruck3": "इलेक्ट्रिक ट्रक 3",
      "electricTruck4": "इलेक्ट्रिक ट्रक 4",
      "electricTruck5": "इलेक्ट्रिक ट्रक 5",
      "sharedCar1": "साझा कार 1",
      "sharedCar2": "साझा कार 2",
      "sharedCar3": "साझा कार 3",
      "sharedCar4": "साझा कार 4",
      "sharedCar5": "साझा कार 5",
      "bus1": "बस 1",
      "metro1": "मेट्रो 1",
      "tram1": "ट्राम 1",
      "bus2": "बस 2",
      "metro2": "मेट्रो 2",
      "size": "आकार",
      "range": "सीमा",
      "type": "वाहन प्रकार",



      "large": "बड़ा",
      "medium": "मध्यम",
      "small": "छोटा",
      "km": "किमी",
      "na": "N/A",
      "bookNow": "अभी बुक करें",
      "back": "पीछे जाएं",
      // ===========================================================================
      "login": "लॉगिन",
      "email": "ईमेल",
      "password": "पासवर्ड",
      "forgotAccount": "खाता भूल गए?",
      "dontHaveAccount": "खाता नहीं है? पंजीकरण करें",
      "welcomeBack": "वापसी पर स्वागत है!",
      "success": "सफलता",
      "error": "त्रुटि",
      "pleaseEnterEmailPassword": "कृपया ईमेल और पासवर्ड दर्ज करें।",
      "pleaseEnterEmail": "कृपया अपना ईमेल दर्ज करें।",
      "loginSuccessful": "लॉगिन सफल!",
      "loginFailed": "लॉगिन विफल।",
      "unknownRole": "अज्ञात भूमिका।",
      "passwordResetLinkSent": "आपके ईमेल पर पासवर्ड रीसेट लिंक भेजा गया।",
      "resetPassword": "पासवर्ड रीसेट करें",
      "loginError": "लॉगिन के दौरान त्रुटि हुई। कृपया पुनः प्रयास करें।",
      "resetLinkError": "रीसेट लिंक भेजने में विफल। कृपया पुनः प्रयास करें।",
      "selectLanguage": "भाषा चुनें",
      "chooseLanguage": "अपनी भाषा चुनें",
      "close": "बंद करें",


      "welcome": "स्वागत है!",
      "message": "आप सफलतापूर्वक लॉगिन कर चुके हैं।",

      "createAccount": "खाता बनाएं",
      "name": "नाम",
      "selectRole": "भूमिका चुनें",
      "driver": "चालक",
      "transporter": "परिवहनकर्ता",
      "manufacturer": "निर्माता",
      "register": "पंजीकरण करें",
      "alreadyHaveAccount": "क्या पहले से खाता है?",
      "allFieldsRequired": "सभी फ़ील्ड आवश्यक हैं।",
      "registrationSuccess": "पंजीकरण सफल",
      "registrationFailed": "पंजीकरण विफल",
      "errorOccurred": "एक त्रुटि हुई",
      "companyDetails": "कंपनी का विवरण",


      // =================driver Dashboard=========================

      "Updating shipment status for ID": "आईडी के लिए शिपमेंट स्थिति अपडेट हो रही है",
      "Success": "सफलता",
      "Shipment status updated to IN_TRANSIT.": "शिपमेंट स्थिति IN_TRANSIT पर अपडेट की गई।",
      "Error updating shipment status:": "शिपमेंट स्थिति अपडेट करने में त्रुटि:",
      "Failed to update shipment status": "शिपमेंट स्थिति अपडेट करने में विफल",
      "Error": "त्रुटि",
      "Shipment or Transporter details are missing.": "शिपमेंट या ट्रांसपोर्टर विवरण गायब हैं।",
      "Pick-up Location": "पिकअप स्थान",
      "Drop Location": "ड्रॉप स्थान",
      "Cargo Type": "कार्गो प्रकार",
      "Weight": "वजन",
      "Vehicle Type": "वाहन प्रकार",
      "Pick-up Date": "पिकअप तिथि",
      "Delivery Date": "डिलीवरी तिथि",
      "Transporter Details": "ट्रांसपोर्टर विवरण",
      "Company Name": "कंपनी का नाम",
      "Contact": "संपर्क",
      "Email": "ईमेल",
      "Accept": "स्वीकार करें",
      "Decline": "अस्वीकार करें",

      "shipmentRequests": "शिपमेंट अनुरोध",
      "completedTrips": "संपन्न यात्राएँ",
      "driverInvoices": "ड्राइवर चालान",
      "driverRewards": "ड्राइवर पुरस्कार",
      "driverFeedback": "ड्राइवर प्रतिक्रिया",

      "personalDetails": "व्यक्तिगत विवरण",
      "accountDetailss": "खाता विवरण",
      "vehicleInfo": "वाहन जानकारी",
      "addDriver": "ड्राइवर जोड़ें",

      "pickupLocation": "पिकअप स्थान",
      "dropLocation": "ड्रॉप स्थान",
      "cargoType": "कार्गो प्रकार",
      "viewMore": "अधिक देखें",
      "viewingMoreDetails": "अधिक विवरण देख रहे हैं:",

      "Driver ID is missing. Please save your driver details.": "ड्राइवर आईडी गायब है। कृपया अपने ड्राइवर का विवरण सहेजें।",
      "HTTP Error": "HTTP त्रुटि",
      "Failed to fetch shipment details: {{message}}": "शिपमेंट विवरण प्राप्त करने में विफल: {{message}}",
      "Failed to fetch completed trips: {{message}}": "पूर्ण की गई यात्राओं को प्राप्त करने में विफल: {{message}}",
      "Feature not implemented": "सुविधा लागू नहीं की गई है",
      "Section": "अनुभाग",
      "Loading...": "लोड हो रहा है...",
      "No pending shipments available.": "कोई लंबित शिपमेंट उपलब्ध नहीं है।",



      "No completed trips available.": "कोई पूरी की गई यात्राएं उपलब्ध नहीं हैं।",
      "Details for Trip ID: {{id}}": "यात्रा आईडी के लिए विवरण: {{id}}",
      "Trip ID": "यात्रा आईडी",

      "title": "त्रुटि",
      "failed_to_accept_shipment": "शिपमेंट स्वीकार करने में विफल",
      "pickup_location_missing": "पिकअप स्थान विवरण उपलब्ध नहीं है",
      "waiting_for_payment": "भुगतान की प्रतीक्षा कर रहा है",
      "shipment_status": "शिपमेंट की स्थिति",
      "navigate_to_pickup": "पिकअप के लिए नेविगेट करें",


      "map": "मानचित्र लोड हो रहा है...",
      "failed_to_retrieve_data": "डेटा प्राप्त करने में विफल",
      "loading_map_details": "मानचित्र विवरण लोड करने में त्रुटि। कृपया पुनः प्रयास करें।",
      "driver_location_title": "चालक स्थान",
      "driver_location_description": "यह चालक का वर्तमान स्थान है।",
      "estimated_time": "अनुमानित समय",
      "minutes": "मिनट",
      "distance": "दूरी",
      "kilometers": "किमी",
      "pickup_location_title": "पिकअप स्थान",
      "start": "शुरू करें",
      "pickup_location_description": "यह शिपमेंट पिकअप स्थान है।",



      "rewards": "इनाम",
      "rewardType": "इनाम प्रकार",
      "rewardAmount": "इनाम राशि",

      "invoices": "चालान",

      "feedback": "प्रतिक्रिया",
      "feedbackLabel": "प्रतिक्रिया",
      "rating": "रेटिंग",

      "transporterInvitation": "परिवहन निमंत्रण",
      "invitationMessage": "आपको एक परिवहनकर्ता में शामिल होने के लिए आमंत्रित किया गया है। क्या आप स्वीकार करते हैं?",
      "accept": "स्वीकार करें",
      "reject": "अस्वीकार करें",
      "accepted": "आपने निमंत्रण को स्वीकार कर लिया है।",
      "rejected": "आपने निमंत्रण को अस्वीकार कर दिया है।",

      "itemDelivered": "आइटम वितरित किया गया",
      "price": "कीमत",

      "home": "होम",
      "quotations": "उद्धरण",
      "shipments": "शिपमेंट्स",
      "profile": "प्रोफ़ाइल",
      "edit": "संपादित करें",


      "accountDetails": {
        "accountHolderName": "खाता धारक का नाम",
        "accountType": "खाते का प्रकार",
        "validationError": "मान्यता त्रुटि",
        "accountHolderNameRequired": "खाता धारक का नाम आवश्यक है।",
        "selectAccountType": "खाते का प्रकार चुनें",
        "savings": "बचत",
        "current": "चालू खाता",
        "fixedDeposit": "सावधि जमा",
        "heading": "खाता विवरण",
        "bankName": "बैंक का नाम",
        "ifscCode": "IFSC कोड",
        "accountNumber": "खाता संख्या",
        "submit": "जमा करें",
        "validation": {
          "bankNameRequired": "बैंक का नाम आवश्यक है।",
          "ifscCodeRequired": "IFSC कोड आवश्यक है।",
          "invalidIfscCode": "सही IFSC कोड दर्ज करें (11 अक्षर, उदाहरण: ABCD0123456)।",
          "accountNumberRequired": "सही खाता संख्या दर्ज करें (9-18 अंकों की)।"
        },
        "success": "खाता विवरण सफलतापूर्वक सबमिट किया गया!",
        "error": "खाता विवरण अपडेट करने में विफल। कृपया पुनः प्रयास करें।"
      },
      "validationError": "मान्यता त्रुटि",
      "validPanError": "कृपया एक वैध पैन नंबर दर्ज करें (जैसे ABCDE1234F)।",
      "validAadharError": "कृपया एक वैध आधार नंबर दर्ज करें (12 अंक)।",
      "dobError": "कृपया अपनी जन्मतिथि चुनें।",
      "genderError": "कृपया अपना लिंग चुनें।",
      "personalDetailsSuccess": "व्यक्तिगत विवरण सफलतापूर्वक जमा किया गया!",
      "personalDetailsError": "व्यक्तिगत विवरण अपडेट करने में विफल।",
      "panNumber": "पैन नंबर",
      "aadharNumber": "आधार नंबर",
      "selectDob": "जन्म तिथि चुनें",
      "gender": "लिंग",
      "selectGender": "लिंग चुनें",
      "male": "पुरुष",
      "female": "महिला",
      "other": "अन्य",
      "submit": "जमा करें",


      "vehicleInformation": "वाहन जानकारी",
      "vehicleNumberPlaceholder": "वाहन नंबर (जैसे, KA05MN1234)",
      "vehicleType": "वाहन प्रकार",
      "selectVehicleType": "वाहन प्रकार चुनें",
      "twoWheeler": "2 पहिया",
      "threeWheeler": "3 पहिया",
      "fourWheeler": "4 पहिया",
      "heavyVehicle": "भारी वाहन",
      "capacityPlaceholder": "क्षमता (किलोग्राम में)",
      "dimensionsPlaceholder": "आयाम (जैसे, 22x8x10)",
      "selectInsuranceValidity": "बीमा वैधता चुनें",
      "selectFitnessValidity": "फिटनेस प्रमाण पत्र वैधता चुनें",

      "vehicleInfoSubmitted": "वाहन जानकारी सफलतापूर्वक सबमिट हुई!",
      "networkError": "नेटवर्क त्रुटि: सर्वर से कनेक्ट नहीं हो सका।",

      "searchDrivers": "चालकों की खोज करें",
      "document": "दस्तावेज़",

      "documents": {
        "panCard": "पैन कार्ड",
        "aadhaarCard": "आधार कार्ड",
        "profilePicture": "प्रोफाइल चित्र",
        "license": "लाइसेंस",
        "companyPanCard": "कंपनी पैन कार्ड",
        "gstCard": "जीएसटी कार्ड",
        "rcFront": "आरसी फ्रंट",
        "rcBack": "आरसी बैक",
        "vehicleInsurance": "वाहन बीमा",
        "vehiclePollution": "वाहन प्रदूषण",
        "vehicleHealth": "वाहन स्वास्थ्य",


        "profileDocuments": "प्रोफाइल दस्तावेज़",
        "companyDocuments": "कंपनी दस्तावेज़",
        "vehicleDocuments": "वाहन दस्तावेज़",
        "upload": "{{documentType}} अपलोड",
        "notUploaded": "अपलोड नहीं किया गया",
        "submit": "जमा करें",
        "success": "सफलता",
        "cancelled": "रद्द कर दिया गया",
        "failedToUpload": "दस्तावेज़ अपलोड करने में विफल",
        "missingDocuments": "लापता दस्तावेज़",
        "missingDocumentsMessage": "निम्नलिखित दस्तावेज़ गायब हैं:\n\nप्रोफाइल दस्तावेज़: {{profileDocuments}}\nकंपनी दस्तावेज़: {{companyDocuments}}\nवाहन दस्तावेज़: {{vehicleDocuments}}",
        "allDocumentsSubmitted": "सभी दस्तावेज़ सफलतापूर्वक जमा कर दिए गए हैं।",
        "noFilesSelected": "कोई फ़ाइल चयनित नहीं की गई।",
        "error": "त्रुटि",
        "uploadSuccess": "दस्तावेज़ सफलतापूर्वक अपलोड किए गए!",
        "uploadError": "दस्तावेज़ अपलोड करने में विफल",
        "uploadDocuments": "दस्तावेज़ अपलोड करें",
        "uploadingAll": "सभी अपलोड हो रहे हैं",
        "documentsUnderConstruction": "दस्तावेज़ वर्तमान में निर्माणाधीन हैं।",
        "edit": "संपादित करें",
        "editFunctionalityUnderConstruction": "संपादन कार्यक्षमता वर्तमान में निर्माणाधीन है।",
        "selectFile": "फ़ाइल चयन करें"
      },

      "companyName": "कंपनी का नाम",
      "enterCompanyName": "कंपनी का नाम दर्ज करें",
      "enterEmail": "ईमेल दर्ज करें",
      "phoneNumber": "फ़ोन नंबर",
      "enterPhoneNumber": "फ़ोन नंबर दर्ज करें",
      "address": "पता",
      "enterAddress": "पता दर्ज करें",
      "registrationNumber": "पंजीकरण संख्या",
      "enterRegistrationNumber": "पंजीकरण संख्या दर्ज करें",
      "pleaseFillAllFields": "कृपया सभी फ़ील्ड भरें।",
      "detailsSubmittedSuccessfully": "कंपनी का विवरण सफलतापूर्वक जमा किया गया!",

      // ===============================TRACKING-APP============================

      "shipmentNumber": "शिपमेंट नंबर",
      "sender": "प्रेषक",
      "receiver": "प्राप्तकर्ता",
      "time": "समय",
      "status": "स्थिति",
      "viewLocation": "स्थान देखें",
      "allActivities": "सभी गतिविधियाँ",
      "addShipment": "शिपमेंट जोड़ें",
      "oldShipments": "पुरानी शिपमेंट्स",
      "payments": "भुगतान",
      "tracking": "ट्रैकिंग",
      "insurances": "बीमा",

      "shipmentID": "शिपमेंट आईडी",
      "contactName": "संपर्क नाम",
      "cargoWeight": "कार्गो वजन",
      "pickupDate": "पिकअप की तारीख",
      "dropDate": "ड्रॉप की तारीख",
      "contactPhone": "संपर्क फोन",

      "errorFetchingDetails": "शिपमेंट विवरण प्राप्त करने में त्रुटि",

      "shipmentForm": {
        "title": "शिपमेंट विवरण फ़ॉर्म",
        "cargoType": "कार्गो प्रकार",
        "cargoWeight": "कार्गो वजन",
        "cargoDimensions": "कार्गो आयाम",
        "distance": "दूरी",
        "quotedPrice": "उद्धृत मूल्य",
        "estimatedPrice": "अनुमानित मूल्य",
        "pickupDate": "पिकअप तिथि",
        "deliveryDate": "वितरण तिथि",
        "contactDetails": "संपर्क विवरण",
        "contactName": "संपर्क नाम",
        "contactPhone": "संपर्क फोन",
        "pickupAddress": "पिकअप पता",
        "pickupPoint": "पिकअप प्वाइंट",
        "pickupHouseNo": "घर नंबर",
        "pickupStreetName": "सड़क का नाम",
        "pickupState": "राज्य",
        "pickupPostalCode": "पिन कोड",
        "pickupCountry": "देश",
        "dropAddress": "ड्रॉप पता",
        "dropPoint": "ड्रॉप प्वाइंट",
        "dropHouseNo": "घर नंबर",
        "dropStreetName": "सड़क का नाम",
        "dropState": "राज्य",
        "dropPostalCode": "पिन कोड",
        "dropCountry": "देश",
        "submitButton": "सबमिट करें",
        "shipmentDataSubmitted": "शिपमेंट डेटा सफलतापूर्वक सबमिट किया गया",
        "shipmentDataFailed": "शिपमेंट डेटा सबमिट करने में विफल",
        "geocodeFailure": "पिकअप या ड्रॉप पते का जियोकोड विफल हुआ।",
        "townName": "शहर का नाम"
      },

      // ===============================TRANSPORT DASHBOARD============================



      "Dashboard": {
        "heading": "डैशबोर्ड",
        "shipments": "शिपमेंट्स",
        "completedTrips": "पूरा किए गए यात्रा",
        "invoices": "चालान",
        "feedback": "प्रतिपुष्टि"
      },
      "SubmitQuotation": {
        "header": "कोटेशन जमा करें",
        "placeholder": {
          "quotedPrice": "उल्लिखित मूल्य",
          "validityPeriod": "वैधता अवधि (yyyy-MM-ddTHH:mm:ss)"
        },
        "quoteStatus": "कोटेशन स्थिति:",
        "status": {
          "pending": "लंबित",
          "accepted": "स्वीकृत",
          "rejected": "अस्वीकृत"
        },
        "submitButton": "कोटेशन जमा करें",
        "success": "कोटेशन सफलतापूर्वक बनाया गया!",
        "failure": "कोटेशन बनाने में विफल",
        "error": "एक त्रुटि हुई। कृपया पुनः प्रयास करें।"
      },
      "completedTrip": {
        "heading": "पूर्ण यात्राएँ",
        "cargo": "कार्गो",
        "pickup": "पिकअप",
        "drop": "ड्रॉप"
      },

      "quoteForm": {
        "manufacturerDetails": "निर्माता विवरण",
        "shipmentDetails": "शिपमेंट विवरण",
        "quoteFormTitle": "कोट फॉर्म",
        "name": "नाम",
        "company": "कंपनी",
        "phone": "फ़ोन",
        "email": "ईमेल",
        "cargoType": "कार्गो प्रकार",
        "pickup": "पिकअप",
        "drop": "ड्रॉप",
        "dimensions": "आयाम",
        "weight": "वजन",
        "vehicleType": "वाहन प्रकार",
        "quotedPricePlaceholder": "कोटेड प्राइस",
        "validityPeriodPlaceholder": "मान्य अवधि (दिनों में)",
        "sendQuoteButton": "कोट भेजें",
        "errorTitle": "त्रुटि",
        "errorMessage": "कोट भेजने से पहले सभी फ़ील्ड भरें।",
        "successTitle": "कोट भेजा गया",
        "successMessage": "आपका कोट {{quotedPrice}} {{validityPeriod}} दिनों के लिए मान्य है।",
        "ok": "ठीक है",

        "validityDate": "वैधता तिथि",
        "assignDriver": "ड्राइवर नियुक्त करें",
        "pendingApproval": "स्वीकृति के लिए लंबित",
        "sendQuote": "कोट भेजें",
        "decline": "अस्वीकार करें",
        "transporterIdMissing": "ट्रांसपोर्टर आईडी गायब है। कृपया पुनः प्रयास करें।",
        "sendFailure": "कोट भेजने में विफल। कृपया पुनः प्रयास करें।"
      },
      "feedbackScreen": {
        "heading": "प्रतिक्रिया",
        "reviewer": "समीक्षक",
        "rating": "रेटिंग",
        "comment": "टिप्पणी"
      },
      "invoicesScreen": {
        "heading": "चालान",
        "invoice": "चालान",
        "amount": "राशि",
        "status": "स्थिति"
      },
      "shipmentScreen": {
        "heading": "शिपमेंट अनुरोध",
        "cargoType": "कार्गो प्रकार",
        "pickup": "पिकअप",
        "drop": "ड्रॉप",
        "quoteButton": "उद्धरण",
        "quote": "कोट",
  "waitingForApproval": "स्वीकृति का इंतजार",
  "quoteAccepted": "कोट स्वीकार किया गया",
  "noPendingShipments": "कोई लंबित शिपमेंट नहीं मिली"
      },



      "Invoice": "चालान",
      "Date": "तिथि",
      "Bill To": "बिल प्राप्तकर्ता",
      "Name": "नाम",
      "Address": "पता",
      "Phone": "फ़ोन",
      "Items": "आइटम्स",
      "Description": "विवरण",
      "Qty": "मात्रा",
      "Price": "मूल्य",
      "Total": "कुल",

      "Payment Summary": "भुगतान सारांश",
      "Subtotal": "उप-योग",
      "Service Fee": "सेवा शुल्क",
      "Tax": "कर",


      "loadingPayments": "भुगतान लोड हो रहा है",
      "failedToFetchPayments": "भुगतान प्राप्त करने में विफल",
      "shipmentId": "शिपमेंट आईडी",
      "unknownStatus": "अज्ञात",
      "from": "से",
      "to": "को",
      "orderId": "आदेश आईडी",
      "retry": "फिर से प्रयास करें",
      "noPaymentsFound": "कोई भुगतान नहीं मिला",



      "payment": {
        "title": "भुगतान विवरण",
        "amountLabel": "भुगतान करने की राशि:",
        "shipmentIdLabel": "शिपमेंट आईडी:",
        "transporterLabel": "परिवहनकर्ता:",
        "cargoTypeLabel": "कार्गो प्रकार:",
        "proceedToPay": "भुगतान करने के लिए आगे बढ़ें",
        "paymentFailed": "भुगतान विफल",
        "invalidDetails": "अमान्य भुगतान विवरण। कृपया पुनः प्रयास करें।",
        "goBack": "वापस जाएं",
        "success": "भुगतान सफलतापूर्वक पूरा हुआ!"
      },

      "AssignDriverScreen": {
        "heading": "शिपमेंट और ड्राइवर विवरण",
        "shipmentDetails": {
          "cargoType": "कार्गो प्रकार",
          "pickupPoint": "पिकअप प्वाइंट",
          "dropPoint": "ड्रॉप प्वाइंट",
          "status": "स्थिति"
        },
        "driverDetails": {
          "driverName": "ड्राइवर का नाम:",
          "phone": "फोन:"
        },
        "status": {
          "accepted": "स्वीकृत",
          "pending": "ड्राइवर का इंतजार कर रहा है..."
        },
        "buttons": {
          "sendRequest": "अनुरोध भेजें",
          "assignVehicle": "वाहन सौंपें"
        },
        "errors": {
          "fetchDrivers": "ड्राइवर लाने में विफल। कृपया बाद में फिर से प्रयास करें।",
          "fetchAssignment": "असाइनमेंट स्थिति और ड्राइवर विवरण लाने में विफल। कृपया बाद में फिर से प्रयास करें।",
          "assignDrivers": "ड्राइवर असाइन करने में विफल। कृपया बाद में फिर से प्रयास करें।",
          "selectDrivers": "कृपया कम से कम एक ड्राइवर का चयन करें।"
        }
      },


      "AssignVehicleScreen": {
    "heading": "शिपमेंट विवरण",
    "shipmentDetails": "शिपमेंट विवरण",
    "cargoType": "कार्गो प्रकार",
    "pickupPoint": "पिकअप प्वाइंट",
    "dropPoint": "ड्रॉप प्वाइंट",
    "driverDetails": "ड्राइवर विवरण",
    "name": "नाम",
    "phone": "फोन",
    "vehicleDetails": "वाहन विवरण",
    "vehicleNumber": "वाहन नंबर",
    "vehicleType": "वाहन प्रकार",
    "payNow": "अभी भुगतान करें",
    "fetchDetails": "विवरण प्राप्त करने में विफल। कृपया बाद में फिर से प्रयास करें।"
  },



      // =================QuotationDetailsScreen=========================
      "QuotationDetails": {
        "heading": "उद्धरण विवरण",
        "quotationInformation": "उद्धरण जानकारी",
        "companyName": "कंपनी का नाम",
        "quotationNumber": "उद्धरण संख्या",
        "date": "तारीख",
        "remarks": "टिप्पणियां",
        "transporterInformation": "परिवहनकर्ता जानकारी",
        "company": "कंपनी",
        "email": "ईमेल",
        "phone": "फ़ोन",
        "registration": "पंजीकरण",
        "address": "पता",
        "shipmentInformation": "शिपमेंट जानकारी",
        "cargoType": "कार्गो प्रकार",
        "dimensions": "आयाम",
        "weight": "वजन",
        "kg": "किलो",
        "vehicleTypeRequired": "आवश्यक वाहन प्रकार",
        "pickupPoint": "पिकअप स्थान",
        "dropPoint": "ड्रॉप स्थान",
        "distance": "दूरी",
        "km": "किमी",
        "pickupDate": "पिकअप की तारीख",
        "deliveryDate": "डिलीवरी की तारीख",
        "quotedPrice": "उद्धृत मूल्य",
        "status": "स्थिति",
        "validityPeriod": "वैधता अवधि",
        "payNow": "अभी भुगतान करें",
        "loadingQuotationDetails": "उद्धरण विवरण लोड हो रहा है...",
        "failedToLoadQuotationDetails": "उद्धरण विवरण लोड करने में विफल। कृपया पुनः प्रयास करें।",
        "errorFetchingQuotationDetails": "उद्धरण विवरण प्राप्त करने में त्रुटि।",
        "initiatingPayment": "उद्धरण आईडी के लिए भुगतान प्रारंभ कर रहा है: {{id}}",
        "notAvailable": "उपलब्ध नहीं है",

        "shipmentId": "शिपमेंट आईडी",
        "shipmentStatus": "शिपमेंट की स्थिति",
        "accept": "स्वीकार करें",
      },

      "QuotationList": {
        "transporter": "परिवहनकर्ता",
        "registration": "पंजीकरण",
        "status": "स्थिति",
        "price": "मूल्य",
        "viewDetails": "भुगतान के लिए विवरण देखें",
        "loadingQuotations": "उल्लेख लोड हो रहे हैं...",
        "noQuotations": "कोई उद्धरण उपलब्ध नहीं है।",
        "errorFetchingQuotations": "उद्धरण प्राप्त करने में त्रुटि।",
        "noQuotationsAvailable": "इस शिपमेंट के लिए कोई कोटेशन उपलब्ध नहीं है।",
        "quotationsForShipmentId": "शिपमेंट आईडी के लिए कोटेशन"
      },

      "ShipmentList": {
        "status": "स्थिति",
        "createdAt": "निर्मित किया गया",
        "viewQuotations": "उद्धरण देखें",
        "loadingShipments": "शिपमेंट लोड हो रहे हैं...",
        "noShipments": "कोई शिपमेंट उपलब्ध नहीं है।",
        "errorFetchingShipments": "शिपमेंट प्राप्त करने में त्रुटि।",
        "transportersQuotations": "परिवाहकों के उद्धरण"

      },

      "shipmentDetails": {
        "shipmentDetails": "शिपमेंट विवरण",
        "basicInformation": "मूल जानकारी",
        "shipmentID": "शिपमेंट आईडी",
        "cargoType": "कार्गो प्रकार",
        "dimensions": "आयाम",
        "cargoWeight": "कार्गो वजन",
        "statusPricing": "स्थिति और मूल्य निर्धारण",
        "shipmentStatus": "शिपमेंट स्थिति",
        "quotedPrice": "उद्धृत मूल्य",
        "estimatedPrice": "अनुमानित मूल्य",
        "distance": "दूरी",
        "pickupDelivery": "पिकअप और डिलीवरी",
        "pickupPoint": "पिकअप बिंदु",
        "dropPoint": "ड्रॉप बिंदु",
        "pickupDate": "पिकअप तिथि",
        "deliveryDate": "डिलीवरी तिथि",
        "contactDetails": "संपर्क विवरण",
        "contactName": "संपर्क नाम",
        "contactNumber": "संपर्क नंबर",
        "additionalInformation": "अतिरिक्त जानकारी",
        "createdAt": "निर्मित तिथि",
        "updatedAt": "अपडेट तिथि",
        "notAvailable": "उपलब्ध नहीं",
        "loadingShipmentDetails": "शिपमेंट विवरण लोड हो रहा है...",
        "noShipmentDetails": "कोई शिपमेंट विवरण उपलब्ध नहीं"
      },

      "shipmentDetail": {
        "loadingShipments": "शिपमेंट लोड हो रहे हैं...",
        "noShipmentDetails": "कोई शिपमेंट विवरण उपलब्ध नहीं है।",
        "transportersQuotations": "परिवहनकर्ताओं के उद्धरण",
        "viewQuotations": "उद्धरण देखें",
        "status": "स्थिति",
        "createdAt": "निर्मित तिथि"
      },

      "Quotations": {
        "error": "त्रुटि",
        "enterQuotedPrice": "उद्धृत मूल्य दर्ज करें",
        "selectValidityPeriod": "मान्यतानुसार अवधि का चयन करें",
        "quotedPrice": "उद्धृत मूल्य",
        "validityPeriod": "मान्यतानुसार अवधि",
        "submitQuotation": "कोटेशन सबमिट करें",
        "success": "सफलता",
        "quotationSubmitted": "कोटेशन सफलतापूर्वक सबमिट किया गया।",
        "failedSubmitQuotation": "कोटेशन सबमिट करने में विफल",
        "anErrorOccurred": "एक त्रुटि हुई"
      },
      "header": {
        "yourLocation": "आपका स्थान",
        "locationExample": "कुकटपल्ली, हैदराबाद",
        "language": "भाषा"
      },
      // ===============================================SETTINGS===============================================


      "gstNumber": "GST नंबर",
      "enterGstNumber": "GST नंबर दर्ज करें",
      "cinNumber": "CIN नंबर",
      "enterCinNumber": "CIN नंबर दर्ज करें",
      "companyNameRequired": "कंपनी का नाम आवश्यक है।",
      "enterValidEmail": "कृपया एक वैध ईमेल पता दर्ज करें।",
      "enterValidPhoneNumber": "कृपया एक वैध फोन नंबर दर्ज करें (10-15 अंकों का)।",
      "addressRequired": "पता आवश्यक है।",
      "enterValidGst": "कृपया एक वैध GST नंबर दर्ज करें (जैसे, 22ABCDE1234F1Z5)।",
      "enterValidCin": "कृपया एक वैध CIN नंबर दर्ज करें (जैसे, L12345AB1234XYZ123456)।",
      "companyDetailsSubmitted": "कंपनी विवरण सफलतापूर्वक सबमिट किया गया!",
      "failedToSubmitDetails": "कंपनी विवरण सबमिट करने में विफल। कृपया फिर से प्रयास करें।",

      "userIdRetrieved": "AsyncStorage से उपयोगकर्ता आईडी प्राप्त हुई:",
      "userIdNotFound": "उपयोगकर्ता आईडी नहीं मिली। कृपया फिर से लॉग इन करें।",
      "errorRetrievingUserId": "उपयोगकर्ता आईडी प्राप्त करने में त्रुटि",
      "failedToRetrieveUserId": "उपयोगकर्ता आईडी प्राप्त करने में विफल",
      "fillAllFieldsBeforeSaving": "सहेजने से पहले सभी फ़ील्ड भरें।",
      "userIdNotAvailable": "उपयोगकर्ता आईडी उपलब्ध नहीं है। कृपया फिर से लॉग इन करें।",
      "driverIdSaved": "AsyncStorage में चालक आईडी सहेजी गई:",
      "driverDetailsSavedSuccessfully": "चालक विवरण सफलतापूर्वक सहेजा गया!",
      "errorSavingDriverDetails": "चालक विवरण सहेजने में त्रुटि",
      "failedToSaveDriverDetails": "चालक विवरण सहेजने में विफल",
      "loading": "लोड हो रहा है...",
      "nameAsPerLicence": "नाम (लाइसेंस के अनुसार)",
      "enterNameAsPerLicence": "लाइसेंस के अनुसार नाम दर्ज करें",
      "phoneNumberWork": "फोन नंबर (कार्य)",
      "experience": "अनुभव",
      "enterExperience": "अनुभव दर्ज करें (जैसे 5 साल)",
      "save": "सहेजें",

      "newPasswordsDoNotMatch": "नई पासवर्ड मेल नहीं खाते।",
      "passwordValidationError": "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए, और उसमें एक अपरकेस अक्षर, एक लोअरकेस अक्षर और एक अंक होना चाहिए।",
      "anErrorOccurred": "एक त्रुटि हुई",
      "updatePassword": "पासवर्ड अपडेट करें",
      "currentPassword": "वर्तमान पासवर्ड",
      "newPassword": "नया पासवर्ड",
      "reenterNewPassword": "नया पासवर्ड फिर से दर्ज करें",


      "brand": "ब्रांड",
      "model": "मॉडल",
      "refrigerator": "फ्रिज",
      "selectBrand": "ब्रांड चुनें",
      "selectModel": "मॉडल चुनें",
      "selectOption": "विकल्प चुनें",
      "yes": "हाँ",
      "no": "नहीं",
      "selectRegistrationDate": "पंजीकरण तिथि चुनें",


      "createdAt": "निर्माण तिथि",
      "viewDetails": "विवरण देखें",
      "fetchError": "शिपमेंट प्राप्त करने में त्रुटि",
      "loadingShipments": "शिपमेंट लोड हो रहे हैं...",
      "shipmentsList": "शिपमेंट की सूची",
      "filter": "फ़िल्टर",
      "all": "सभी",
      "pending": "लंबित",
      "inTransit": "यात्रा में",
      "delivered": "वितरित",
      "cancelled": "रद्द",
      "noShipmentsForStatus": "चयनित स्थिति के लिए कोई शिपमेंट उपलब्ध नहीं है",




      "fillAllFields": "कृपया सभी फ़ील्ड भरें",
      "passwordResetSuccess": "पासवर्ड सफलतापूर्वक रीसेट किया गया",
      "unexpectedError": "एक अप्रत्याशित त्रुटि हुई",
      "enterOTP": "OTP दर्ज करें",
      "otpPlaceholder": "OTP",
      "newPasswordPlaceholder": "नया पासवर्ड",





    },
  },
  te: {
    translation: {
      "ecoFriendlyTransport": "పర్యావరణ స్నేహి రవాణా",
      "chooseYourOption": "మీ రవాణా ఎంపికను ఎంచుకోండి",
      "electricTruck": "విద్యుత్ ట్రక్",
      "shared": "పంచుకున్న రవాణా",
      "public": "ప్రజా రవాణా",
      "electricTruckDescription": "సుస్థిర లోజిస్టిక్స్ కోసం జీరో-ఎమిషన్ ట్రక్కులు",
      "sharedDescription": "కార్పూలింగ్ ద్వారా కార్బన్ ఉద్గారాలను తగ్గించండి",
      "publicDescription": "కార్యక్షమయిన భారీ రవాణా పరిష్కారాలు",
      "transportTypeList": "రవాణా రకాలు",
      "electricTruckDetails": "ఈ ట్రక్కులు అనేక రకాల రవాణా అవసరాలకు సరిపోతాయి, వాటి శక్తి సామర్ధ్యం, సామర్థ్యంతో నిరంతర సేవలను అందించవచ్చు.",
      "sharedDetails": "ఈ రవాణా సేవలు అనేక మంది ప్రయాణీకులను ఒకేసారి ఒకే వాహనంలో తీసుకువెళ్లే విధంగా పనిచేస్తాయి.",
      "publicDetails": "ప్రజా రవాణా సేవలు చాలా ప్రజలకు అందుబాటులో ఉంటాయి, ఇక్కడ పెద్ద సంఖ్యలో ప్రయాణికులు ఒకే వాహనాన్ని ఉపయోగిస్తారు.",
      "electricTruck1": "విద్యుత్ ట్రక్ 1",
      "electricTruck2": "విద్యుత్ ట్రక్ 2",
      "electricTruck3": "విద్యుత్ ట్రక్ 3",
      "electricTruck4": "విద్యుత్ ట్రక్ 4",
      "electricTruck5": "విద్యుత్ ట్రక్ 5",
      "sharedCar1": "పంచుకున్న కార్ 1",
      "sharedCar2": "పంచుకున్న కార్ 2",
      "sharedCar3": "పంచుకున్న కార్ 3",
      "sharedCar4": "పంచుకున్న కార్ 4",
      "sharedCar5": "పంచుకున్న కార్ 5",
      "bus1": "బస్ 1",
      "size": "పరిమాణం",
      "range": "పరిధి",
      "bookNow": "ఇప్పుడు బుక్ చేయండి",
      "type": "వాహన రకం",
      "back": "వెనక్కి వెళ్ళు",




      "metro1": "మెట్రో 1",
      "tram1": "ట్రామ్ 1",
      "bus2": "బస్ 2",
      "metro2": "మెట్రో 2",
      // ==========================================================
      "selectLanguage": "భాషను ఎంచుకోండి",
      "chooseLanguage": "భాషను ఎంచుకోండి",
      "close": "మూసివేయి",
      "success": "విజయం",
      "error": "తప్పు",
      "pleaseEnterEmailPassword": "ఇమెయిల్ మరియు పాస్‌వర్డ్‌ను నమోదు చేయండి.",
      "pleaseEnterEmail": "మీ ఇమెయిల్ చిరునామాను నమోదు చేయండి.",
      "loginSuccessful": "లాగిన్ విజయవంతమైంది.",
      "loginFailed": "లాగిన్ విఫలమైంది.",
      "unknownRole": "తెలియని పాత్ర.",
      "loginError": "లాగిన్ సమయంలో లోపం సంభవించింది.",
      "passwordResetLinkSent": "పాస్‌వర్డ్ రీసెట్ లింక్ మీ ఇమెయిల్‌కు పంపబడింది.",
      "resetLinkError": "రీసెట్ లింక్ పంపడంలో విఫలమైంది.",
      "welcomeBack": "తిరిగి స్వాగతం!",
      "email": "ఇమెయిల్",
      "password": "పాస్‌వర్డ్",
      "login": "లాగిన్",
      "resetPassword": "పాస్‌వర్డ్ రీసెట్",
      "forgotAccount": "మీ ఖాతాను మర్చిపోయారా?",
      "dontHaveAccount": "ఖాతా లేదు? ఇక్కడ సైన్ అప్ చేయండి.",

      "welcome": "స్వాగతం!",
      "message": "మీరు విజయవంతంగా లాగిన్ అయ్యారు.",

      "createAccount": "ఖాతా సృష్టించండి",
      "name": "పేరు",

      "selectRole": "పాత్రను ఎంచుకోండి",
      "driver": "డ్రైవర్",
      "transporter": "రవాణాదారుడు",
      "manufacturer": "తయారకర్త",
      "register": "పదవి నమోదు చేయండి",
      "alreadyHaveAccount": "ముందే ఖాతా ఉందా?",
      "allFieldsRequired": "అన్ని ఫీల్డులు తప్పనిసరిగా ఉన్నాయి.",
      "registrationSuccess": "నమోదు విజయవంతం",
      "registrationFailed": "నమోదు విఫలమైంది",
      "errorOccurred": "పొరపాటు సంభవించింది",
      "companyDetails": "కంపెనీ వివరాలు",


      // =================driver Dashboard=========================
      "Updating shipment status for ID": "ID కోసం షిప్‌మెంట్ స్థితి అప్‌డేట్ చేస్తున్నారు",
      "Success": "విజయం",
      "Shipment status updated to IN_TRANSIT.": "షిప్‌మెంట్ స్థితి IN_TRANSIT కు అప్‌డేట్ చేయబడింది.",
      "Error updating shipment status:": "షిప్‌మెంట్ స్థితి అప్‌డేట్ చేయడంలో లోపం:",
      "Failed to update shipment status": "షిప్‌మెంట్ స్థితి అప్‌డేట్ చేయడంలో విఫలమైంది",
      "Error": "లోపం",
      "Shipment or Transporter details are missing.": "షిప్‌మెంట్ లేదా ట్రాన్స్‌పోర్టర్ వివరాలు మిస్సింగ్ ఉన్నాయి.",
      "Pick-up Location": "పికప్ లొకేషన్",
      "Drop Location": "డ్రాప్ లొకేషన్",
      "Cargo Type": "కార్గో రకం",
      "Weight": "భారం",
      "Vehicle Type": "వాహనం రకం",
      "Pick-up Date": "పికప్ తేదీ",
      "Delivery Date": "డెలివరీ తేదీ",
      "Transporter Details": "ట్రాన్స్‌పోర్టర్ వివరాలు",
      "Company Name": "కంపెనీ పేరు",
      "Contact": "సంప్రదించండి",
      "Email": "ఈమెయిల్",
      "Accept": "ఆమోదించు",
      "Decline": "తిరస్కరించు",
      "shipmentRequests": "రవాణా అభ్యర్థనలు",
      "completedTrips": "పూర్తయిన ప్రయాణాలు",
      "driverInvoices": "డ్రైవర్ ఇన్వాయిసులు",
      "driverRewards": "డ్రైవర్ బహుమతులు",
      "driverFeedback": "డ్రైవర్ అభిప్రాయం",

      "personalDetails": "వ్యక్తిగత వివరాలు",
      "accountDetailss": "ఖాతా వివరాలు",
      "vehicleInfo": "వాహన సమాచారం",
      "addDriver": "డ్రైవర్‌ను జోడించండి",


      "pickupLocation": "పికప్ స్థలం",
      "dropLocation": "డ్రాప్ స్థలం",
      "cargoType": "కార్గో రకం",
      "viewMore": "ఇంకా చూడండి",
      "viewingMoreDetails": "ఇంకా వివరాలు చూస్తున్నారు:",

      "No completed trips available.": "ఏ పూర్తయిన ప్రయాణాలు లభ్యం కావు.",
      "Details for Trip ID: {{id}}": "ప్రయాణ ఐడీకి సంబంధించిన వివరాలు: {{id}}",
      "Trip ID": "ప్రయాణ ఐడి",

      "No pending shipments available.": "ఎటువంటి పెండింగ్ షిప్‌మెంట్‌లు అందుబాటులో లేవు.",

      "Driver ID is missing. Please save your driver details.": "డ్రైవర్ ఐడి లేదు. దయచేసి మీ డ్రైవర్ వివరాలను సేవ్ చేయండి.",
      "HTTP Error": "HTTP లోపం",
      "Failed to fetch shipment details: {{message}}": "షిప్‌మెంట్ వివరాలను తీసుకురావడంలో విఫలమైంది: {{message}}",
      "Failed to fetch completed trips: {{message}}": "పూర్తయిన ప్రయాణాలను తీసుకురావడంలో విఫలమైంది: {{message}}",
      "Feature not implemented": "ఫీచర్ అమలు చేయబడలేదు",
      "Section": "విభాగం",
      "Loading...": "లోడ్ అవుతోంది...",

      "title": "లోపం",
      "failed_to_accept_shipment": "షిప్‌మెంట్‌ను ఆమోదించడంలో విఫలమైంది",
      "pickup_location_missing": "పికప్ స్థానం వివరాలు లేవు",
      "waiting_for_payment": "చెల్లింపు కోసం వేచి ఉంది",
      "shipment_status": "షిప్‌మెంట్ స్థితి",
      "navigate_to_pickup": "పికప్‌కు నావిగేట్ చేయండి",

      "rewards": "పరిహారాలు",
      "rewardType": "పరిహారం రకం",
      "rewardAmount": "పరిహారం మొత్తం",

      "invoices": "ఇన్వాయిస్‌లు",

      "feedback": "ప్రతిస్పందన",
      "feedbackLabel": "ప్రతిస్పందన",
      "rating": "రేటింగ్",

      "transporterInvitation": "ట్రాన్స్‌పోర్టర్‌ ఆహ్వానం",
      "invitationMessage": "మీరు ఒక ట్రాన్స్‌పోర్టర్‌లో చేరడానికి ఆహ్వానించబడ్డారు. మీరు అంగీకరిస్తారా?",
      "accept": "అంగీకరించండి",
      "reject": "నిరాకరించండి",
      "accepted": "మీరు ఆహ్వానాన్ని అంగీకరించారు.",
      "rejected": "మీరు ఆహ్వానాన్ని నిరాకరించారు.",

      "itemDelivered": "చెల్లించిన వస్తువు",
      "price": "ధర",

      "home": "హోమ్",
      "quotations": "ఉత్తరవాదాలు",
      "shipments": "షిప్‌మెంట్‌లు",
      "profile": "ప్రొఫైల్",
      "edit": "సవరించండి",


      "map": "మ్యాప్ లోడ్ అవుతోంది...",
      "failed_to_retrieve_data": "డేటా పొందడంలో విఫలమైంది.",
      "loading_map_details": "మ్యాప్ వివరాలను లోడ్ చేయడంలో పొరపాటు. దయచేసి మళ్ళీ ప్రయత్నించండి.",
      "driver_location_title": "డ్రైవర్ యొక్క స్థానం",
      "driver_location_description": "ఇది డ్రైవర్ యొక్క ప్రస్తుత స్థానం.",
      "estimated_time": "అంచనా సమయం",
      "minutes": "నిమిషాలు",
      "distance": "దూరం",
      "kilometers": "కిమీ",
      "pickup_location_title": "పికప్ స్థలం",
      "start": "ప్రారంభించండి",
      "pickup_location_description": "ఇది షిప్‌మెంట్ పికప్ స్థలం.",


      "accountDetails": {
        "accountHolderName": "ఖాతా హోల్డర్ పేరు",
        "accountType": "ఖాతా రకం",
        "validationError": "ధృవీకరణ లోపం",
        "accountHolderNameRequired": "ఖాతా హోల్డర్ పేరు అవసరం.",
        "selectAccountType": "ఖాతా రకం ఎంచుకోండి",
        "savings": "బాచత్",
        "current": "ప్రస్తుత ఖాతా",
        "fixedDeposit": "నిలువు డిపాజిట్",
        "heading": "ఖాతా వివరాలు",
        "bankName": "బ్యాంకు పేరు",
        "ifscCode": "IFSC కోడ్",
        "accountNumber": "ఖాతా సంఖ్య",
        "submit": "సమర్పించండి",
        "validation": {
          "bankNameRequired": "బ్యాంకు పేరు అవసరం.",
          "ifscCodeRequired": "IFSC కోడ్ అవసరం.",
          "invalidIfscCode": "సరైన IFSC కోడ్ నమోదు చేయండి (11 అక్షరాలు, ఉదాహరణ: ABCD0123456).",
          "accountNumberRequired": "సరైన ఖాతా సంఖ్య నమోదు చేయండి (9-18 అంకెలు)."
        },
        "success": "ఖాతా వివరాలు విజయవంతంగా సమర్పించబడ్డాయి!",
        "error": "ఖాతా వివరాలను అప్‌డేట్ చేయడంలో విఫలమయ్యింది. దయచేసి మళ్ళీ ప్రయత్నించండి."
      },

      "validationError": "వాలిడేషన్ లోపం",
      "validPanError": "దయచేసి సరైన PAN నంబర్ (ఉదాహరణ: ABCDE1234F) నమోదు చేయండి.",
      "validAadharError": "దయచేసి సరైన Aadhaar నంబర్ (12 అంకెలు) నమోదు చేయండి.",
      "dobError": "దయచేసి మీ జననతేదీని ఎంచుకోండి.",
      "genderError": "దయచేసి మీ లింగాన్ని ఎంచుకోండి.",
      "personalDetailsSuccess": "వ్యక్తిగత వివరాలు విజయవంతంగా సమర్పించబడ్డాయి!",
      "personalDetailsError": "వ్యక్తిగత వివరాలను నవీకరించడంలో విఫలమైంది.",
      "panNumber": "PAN నంబర్",
      "aadharNumber": "Aadhaar నంబర్",
      "selectDob": "జననతేదీ ఎంచుకోండి",
      "gender": "లింగం",
      "selectGender": "లింగం ఎంచుకోండి",
      "male": "పురుషుడు",
      "female": "మహిళ",
      "other": "ఇతర",
      "submit": "సమర్పించండి",
      "document": "పత్రాలు",



      "vehicleInformation": "వాహన సమాచారం",
      "vehicleNumberPlaceholder": "వాహన నంబర్ (ఉదా: KA05MN1234)",
      "vehicleType": "వాహన రకం",
      "selectVehicleType": "వాహన రకాన్ని ఎంచుకోండి",
      "twoWheeler": "2 చక్రాలు",
      "threeWheeler": "3 చక్రాలు",
      "fourWheeler": "4 చక్రాలు",
      "heavyVehicle": "భారీ వాహనం",
      "capacityPlaceholder": "సామర్థ్యం (KGలో)",
      "dimensionsPlaceholder": "కొలతలు (ఉదా: 22x8x10)",
      "selectInsuranceValidity": "భీమా చెల్లుబాటు తేదీని ఎంచుకోండి",
      "selectFitnessValidity": "ఫిట్‌నెస్ సర్టిఫికేట్ చెల్లుబాటు తేదీని ఎంచుకోండి",
      "vehicleInfoSubmitted": "వాహన సమాచారం విజయవంతంగా సమర్పించబడింది!",
      "networkError": "నెట్‌వర్క్ లోపం: సర్వర్‌తో కనెక్ట్ చేయలేకపోయాం.",

      "searchDrivers": "డ్రైవర్లను వెతకండి",

      "documents": {

        "panCard": "ಪ್ಯಾನ್ ಕಾರ್ಡ್",
        "aadhaarCard": "ಆಧಾರ್ ಕಾರ್ಡ್",
        "profilePicture": "ಪ್ರೊಫೈಲ್ ಚಿತ್ರ",
        "license": "ಲೈಸೆನ್ಸ್",
        "companyPanCard": "ಕಂಪನಿಯ ಪ್ಯಾನ್ ಕಾರ್ಡ್",
        "gstCard": "ಜಿಎಸ್‌ಟಿ ಕಾರ್ಡ್",
        "rcFront": "ಆರ್‌ಸೀ ಫ್ರಂಟ್",
        "rcBack": "ಆರ್‌ಸೀ ಬ್ಯಾಕ್",
        "vehicleInsurance": "ವಾಹನ ವಿಮೆ",
        "vehiclePollution": "ವಾಹನ ಮಾಲಿನ್ಯ",
        "vehicleHealth": "ವಾಹನ ಆರೋಗ್ಯ",


        "profileDocuments": "ప్రొఫైల్ డాక్యుమెంట్లు",
        "companyDocuments": "కంపెనీ డాక్యుమెంట్లు",
        "vehicleDocuments": "వాహన డాక్యుమెంట్లు",
        "upload": "{{documentType}} అప్‌లోడ్",
        "notUploaded": "అప్‌లోడ్ చేయబడలేదు",
        "submit": "సమర్పించు",
        "success": "విజయవంతం",
        "cancelled": "రద్దు చేయబడింది",
        "failedToUpload": "డాక్యుమెంట్లను అప్‌లోడ్ చేయడంలో విఫలమయ్యారు",
        "missingDocuments": "చెరిపోయిన డాక్యుమెంట్లు",
        "missingDocumentsMessage": "కింది డాక్యుమెంట్లు మిస్ అయ్యాయి:\n\nప్రొఫైల్ డాక్యుమెంట్లు: {{profileDocuments}}\nకంపెనీ డాక్యుమెంట్లు: {{companyDocuments}}\nవాహన డాక్యుమెంట్లు: {{vehicleDocuments}}",
        "allDocumentsSubmitted": "అన్ని డాక్యుమెంట్లు విజయవంతంగా సమర్పించబడ్డాయి.",
        "noFilesSelected": "ఎలాంటి ఫైల్స్ ఎంచుకోలేదు.",
        "error": "లోపం",
        "uploadSuccess": "డాక్యుమెంట్లు విజయవంతంగా అప్‌లోడ్ అయ్యాయి!",
        "uploadError": "డాక్యుమెంట్లను అప్‌లోడ్ చేయడంలో విఫలమయ్యారు",
        "uploadDocuments": "పత్రాలు అప్‌లోడ్ చేయండి",
        "uploadingAll": "అన్ని అప్‌లోడ్ చేయబడుతున్నాయి",
        "documentsUnderConstruction": "పత్రాలు ప్రస్తుతమై నిర్మాణంలో ఉన్నాయి.",
        "edit": "ఎడిట్ చేయండి",
        "editFunctionalityUnderConstruction": "ఎడిట్ ఫంక్షనాలిటీ ప్రస్తుతమై నిర్మాణంలో ఉంది.",
        "selectFile": "ఫైల్ ఎంపిక చేయండి"
      },

      "companyName": "కంపెనీ పేరు",
      "enterCompanyName": "కంపెనీ పేరు నమోదు చేయండి",
      "enterEmail": "ఇమెయిల్ నమోదు చేయండి",
      "phoneNumber": "ఫోన్ నంబర్",
      "enterPhoneNumber": "ఫోన్ నంబర్ నమోదు చేయండి",
      "address": "చిరునామా",
      "enterAddress": "చిరునామా నమోదు చేయండి",
      "registrationNumber": "నమోదు సంఖ్య",
      "enterRegistrationNumber": "నమోదు సంఖ్య నమోదు చేయండి",
      "pleaseFillAllFields": "దయచేసి అన్ని ఫీల్డ్స్ నింపండి.",
      "detailsSubmittedSuccessfully": "కంపెనీ వివరాలు విజయవంతంగా సమర్పించబడ్డాయి!",


      // ===============================TRACKING-APP============================

      "shipmentNumber": "షిప్మెంట్ సంఖ్య",
      "sender": "పంపినవారు",
      "receiver": "అందుకున్నవారు",
      "time": "సమయం",
      "status": "స్థితి",
      "viewLocation": "ప్రాంతం చూడండి",
      "allActivities": "అన్ని చర్యలు",
      "addShipment": "షిప్మెంట్ జోడించు",
      "oldShipments": "పాత షిప్మెంట్లు",
      "payments": "చెల్లింపులు",
      "tracking": "ట్రాకింగ్",
      "insurances": "భీమా",

      "shipmentID": "షిప్మెంట్ ఐడి",
      "contactName": "సంప్రదింపు పేరు",
      "cargoWeight": "సరుకు బరువు",
      "pickupDate": "పికప్ తేది",
      "dropDate": "డ్రాప్ తేది",
      "contactPhone": "సంప్రదింపు ఫోన్",
      "errorFetchingDetails": "షిప్మెంట్ వివరాలు పొందడంలో లోపం",

      "shipmentForm": {
        "title": "షిప్మెంట్ వివరాలు ఫారమ్",
        "cargoType": "సరుకు రకం",
        "cargoWeight": "సరుకు బరువు",
        "cargoDimensions": "సరుకు కొలతలు",
        "distance": "దూరం",
        "quotedPrice": "ఉదహరించబడిన ధర",
        "estimatedPrice": "అంచనా ధర",
        "pickupDate": "పికప్ తేదీ",
        "deliveryDate": "డెలివరీ తేదీ",
        "contactDetails": "సంప్రదింపు వివరాలు",
        "contactName": "సంప్రదింపు పేరు",
        "contactPhone": "సంప్రదింపు ఫోన్",
        "pickupAddress": "పికప్ చిరునామా",
        "pickupPoint": "పికప్ పాయింట్",
        "pickupHouseNo": "ఇంటి సంఖ్య",
        "pickupStreetName": "వీధి పేరు",
        "pickupState": "రాష్ట్రం",
        "pickupPostalCode": "పోస్టల్ కోడ్",
        "pickupCountry": "దేశం",
        "dropAddress": "డ్రాప్ చిరునామా",
        "dropPoint": "డ్రాప్ పాయింట్",
        "dropHouseNo": "ఇంటి సంఖ్య",
        "dropStreetName": "వీధి పేరు",
        "dropState": "రాష్ట్రం",
        "dropPostalCode": "పోస్టల్ కోడ్",
        "dropCountry": "దేశం",
        "submitButton": "సబ్మిట్ చేయండి",
        "shipmentDataSubmitted": "షిప్మెంట్ డేటా విజయవంతంగా సమర్పించబడింది",
        "shipmentDataFailed": "షిప్మెంట్ డేటా సమర్పించడంలో విఫలమైంది",
        "geocodeFailure": "పికప్ లేదా డ్రాప్ చిరునామాను జియోకోడ్ చేయడంలో విఫలమయ్యింది.",
        "townName": "టౌన్ పేరు"
      },
      // ===============================TRANSPORT DASHBOARD============================

      "Dashboard": {
        "heading": "డ్యాష్‌బోర్డ్",
        "shipments": "షిప్మెంట్‌లు",
        "completedTrips": "పూర్తయిన ప్రయాణాలు",
        "invoices": "ఇన్వాయిస్‌లు",
        "feedback": "ఫీడ్‌బ్యాక్"
      },
      "SubmitQuotation": {
        "header": "ప్రస్తావన సమర్పించండి",
        "placeholder": {
          "quotedPrice": "కొటేషన్ ధర",
          "validityPeriod": "చెల్లుబాటు గడువు (yyyy-MM-ddTHH:mm:ss)"
        },
        "quoteStatus": "కొటేషన్ స్థితి:",
        "status": {
          "pending": "పెండింగ్",
          "accepted": "ఆమోదించబడింది",
          "rejected": "తిరస్కరించబడింది"
        },
        "submitButton": "కొటేషన్ సమర్పించండి",
        "success": "కొటేషన్ విజయవంతంగా సృష్టించబడింది!",
        "failure": "కొటేషన్ సృష్టించడంలో విఫలమైంది",
        "error": "లోపం జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి."
      },
      "completedTrip": {
        "heading": "పూర్తయిన ప్రయాణాలు",
        "cargo": "సరుకు",
        "pickup": "ఎత్తడం",
        "drop": "డ్రాప్"
      },
      "quoteForm": {
        "manufacturerDetails": "తయారీదారు వివరాలు",
        "shipmentDetails": "షిప్‌మెంట్ వివరాలు",
        "quoteFormTitle": "కోట్ ఫారం",
        "name": "పేరు",
        "company": "కంపెనీ",
        "phone": "ఫోన్",
        "email": "ఈమెయిల్",
        "cargoType": "సరుకు రకం",
        "pickup": "పికప్",
        "drop": "డ్రాప్",
        "dimensions": "అంశాలు",
        "weight": "బరువు",
        "vehicleType": "వాహన రకం",
        "quotedPricePlaceholder": "కోట్ చేసిన ధర",
        "validityPeriodPlaceholder": "వేలిడిటీ కాలం (రోజుల్లో)",
        "sendQuoteButton": "కోట్ పంపించండి",
        "errorTitle": "లోపం",
        "errorMessage": "కోట్ పంపే ముందు అన్ని ఫీల్డ్‌లు పూరించండి.",
        "successTitle": "కోట్ పంపబడింది",
        "successMessage": "మీ కోట్ {{quotedPrice}} {{validityPeriod}} రోజులకు సరైనది.",
        "ok": "సరే",
        "validityDate": "వర్తకత తేదీ",
  "assignDriver": "డ్రైవర్ నియమించండి",
  "pendingApproval": "ఆమోదం కోసం పెండింగ్",
  "sendQuote": "కోట్ పంపండి",
  "decline": "అంగీకరించలేదు",
  "transporterIdMissing": "ట్రాన్స్‌పోర్టర్ ఐడీ గాయబోయింది. దయచేసి మరల ప్రయత్నించండి.",
  "sendFailure": "కోట్ పంపడంలో విఫలమయ్యింది. దయచేసి మరల ప్రయత్నించండి."
      },

      "feedbackScreen": {
        "heading": "ప్రతిస్పందన",
        "reviewer": "సమీక్షకుడు",
        "rating": "రేటింగ్",
        "comment": "వ్యాఖ్య"
      },
      "invoicesScreen": {
        "heading": "బిల్లు",
        "invoice": "బిల్లు",
        "amount": "రెక్క",
        "status": "పరిస్థితి"
      },
      "shipmentScreen": {
        "heading": "షిప్‌మెంట్ అభ్యర్థనలు",
        "cargoType": "కార్గో రకం",
        "pickup": "పికప్",
        "drop": "డ్రాప్",
        "quoteButton": "కోట్",
        "quote": "కోట్",
  "waitingForApproval": "ఆమోదం కోసం వేచి ఉంది",
  "quoteAccepted": "కోట్ ఆమోదించబడింది",
  "noPendingShipments": "ఎలాంటి పెండింగ్ షిప్మెంట్స్ లేవు"

      },


      "Invoice": "వాయిస్",
      "Date": "తేదీ",
      "Bill To": "బిల్లు అందించు",
      "Name": "పేరు",
      "Address": "చిరునామా",
      "Phone": "ఫోన్",
      "Items": "అంశాలు",
      "Description": "వివరణ",
      "Qty": "మోతాదు",
      "Price": "ధర",
      "Total": "మొత్తం",
      "Payment Summary": "చెల్లింపు సంగ్రహం",
      "Subtotal": "ఉపమొత్తం",
      "Service Fee": "సేవా రుసుము",
      "Tax": "పన్ను",


      "loadingPayments": "భూక్తాన్ లోడ్ అవుతోంది",
      "failedToFetchPayments": "భూక్తాన్ పొందడంలో విఫలం",
      "shipmentId": "షిప్మెంట్ ఐడీ",
      "unknownStatus": "తెలియదు",
      "from": "నుంచి",
      "to": "కు",
      "orderId": "ఆర్డర్ ఐడీ",
      "retry": "మళ్లీ ప్రయత్నించండి",
      "noPaymentsFound": "ఎలాంటి పేమెంట్స్ లేవు",


      "payment": {
        "title": "పేమెంట్ వివరాలు",
        "amountLabel": "చెల్లించాల్సిన మొత్తం:",
        "shipmentIdLabel": "షిప్మెంట్ ఐడి:",
        "transporterLabel": "రవాణా:",
        "cargoTypeLabel": "కార్గో రకం:",
        "proceedToPay": "చెల్లించడానికి కొనసాగించండి",
        "paymentFailed": "పేమెంట్ విఫలమైంది",
        "invalidDetails": "అవయవమైన పేమెంట్ వివరాలు. దయచేసి మళ్లీ ప్రయత్నించండి.",
        "goBack": "తిరిగి వెళ్ళండి",
        "success": "పేమెంట్ విజయవంతంగా పూర్తి చేయబడింది!"
      },


      "AssignDriverScreen": {
    "heading": "షిప్మెంట్ మరియు డ్రైవర్ వివరాలు",
    "shipmentDetails": {
      "cargoType": "కార్గో రకం",
      "pickupPoint": "పికప్ పాయింట్",
      "dropPoint": "డ్రాప్ పాయింట్",
      "status": "స్థితి"
    },
    "driverDetails": {
      "driverName": "డ్రైవర్ పేరు:",
      "phone": "ఫోన్:"
    },
    "status": {
      "accepted": "ఆమోదించబడింది",
      "pending": "డ్రైవర్ కోసం వేచిచూస్తున్నాం..."
    },
    "buttons": {
      "sendRequest": "అభ్యర్థన పంపండి",
      "assignVehicle": "వాహనాన్ని కేటాయించండి"
    },
    "errors": {
      "fetchDrivers": "డ్రైవర్స్ ను పొందడంలో విఫలమయ్యారు. దయచేసి తరువాత మళ్లీ ప్రయత్నించండి.",
      "fetchAssignment": "అసైన్‌మెంట్ స్థితి మరియు డ్రైవర్ వివరాలను పొందడంలో విఫలమయ్యారు. దయచేసి తరువాత మళ్లీ ప్రయత్నించండి.",
      "assignDrivers": "డ్రైవర్స్ ను కేటాయించడంలో విఫలమయ్యారు. దయచేసి తరువాత మళ్లీ ప్రయత్నించండి.",
      "selectDrivers": "దయచేసి కనీసం ఒక డ్రైవర్‌ను ఎంచుకోండి."
    }
  },

  "AssignVehicleScreen": {
    "heading": "షిప్‌మెంట్ వివరాలు",
    "shipmentDetails": "షిప్‌మెంట్ వివరాలు",
    "cargoType": "కార్గో రకం",
    "pickupPoint": "పికప్ పాయింట్",
    "dropPoint": "డ్రాప్ పాయింట్",
    "driverDetails": "డ్రైవర్ వివరాలు",
    "name": "పేరు",
    "phone": "ఫోన్",
    "vehicleDetails": "వాహన వివరాలు",
    "vehicleNumber": "వాహన సంఖ్య",
    "vehicleType": "వాహన రకం",
    "payNow": "ఇప్పుడు చెల్లించండి",
    "fetchDetails": "వివరాలు పొందడంలో విఫలమయ్యారు. దయచేసి తరువాత మళ్లీ ప్రయత్నించండి."
  },

      // =================QuotationDetailsScreen=========================


      "QuotationDetails": {
        "heading": "కొటేషన్ వివరాలు",
        "quotationInformation": "కొటేషన్ సమాచారం",
        "companyName": "కంపెనీ పేరు",
        "quotationNumber": "కొటేషన్ నంబర్",
        "date": "తేదీ",
        "remarks": "వ్యాఖ్యలు",
        "transporterInformation": "రవాణాదారు సమాచారం",
        "company": "కంపెనీ",
        "email": "ఈమెయిల్",
        "phone": "ఫోన్",
        "registration": "నమోదు",
        "address": "చిరునామా",
        "shipmentInformation": "శిప్మెంట్ సమాచారం",
        "cargoType": "సరకుల రకం",
        "dimensions": "కొలతలు",
        "weight": "బరువు",
        "kg": "కిలో",
        "vehicleTypeRequired": "అవసరమైన వాహన రకం",
        "pickupPoint": "పికప్ పాయింట్",
        "dropPoint": "డ్రాప్ పాయింట్",
        "distance": "దూరం",
        "km": "కిలోమీటర్లు",
        "pickupDate": "పికప్ తేదీ",
        "deliveryDate": "డెలివరీ తేదీ",
        "quotedPrice": "కొటేషన్ ధర",
        "status": "స్థితి",
        "validityPeriod": "వెల్‌ధత కాలం",
        "payNow": "ఇప్పుడు చెల్లించండి",
        "loadingQuotationDetails": "కొటేషన్ వివరాలు లోడ్ అవుతున్నాయి...",
        "failedToLoadQuotationDetails": "కొటేషన్ వివరాలు లోడ్ చేయడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.",
        "errorFetchingQuotationDetails": "కొటేషన్ వివరాలు తెచ్చే సమయంలో లోపం.",
        "initiatingPayment": "కొటేషన్ ఐడీ కోసం చెల్లింపును ప్రారంభిస్తోంది: {{id}}",
        "notAvailable": "లభ్యం లేదు",
        "shipmentId": "షిప్మెంట్ ఐడి",
        "shipmentStatus": "షిప్మెంట్ స్థితి",
        "accept": "స్వీకరించు",
      },

      "QuotationList": {
        "transporter": "రవాణాదారు",
        "registration": "నమోదు",
        "status": "స్థితి",
        "price": "ధర",
        "viewDetails": "చెల్లింపుల కోసం వివరాలు చూడండి",
        "loadingQuotations": "ఉल्लేఖనలు లోడ్ అవుతున్నాయి...",
        "noQuotations": "ఎటువంటి ఉల్లేఖనలు లభ్యం కావు.",
        "errorFetchingQuotations": "ఉల్లేఖనలు పొందడంలో లోపం.",
        "noQuotationsAvailable": "ఈ షిప్మెంట్ కోసం అందుబాటులో ఉన్న సూచనలు లేవు.",
        "quotationsForShipmentId": "షిప్మెంట్ ఐడి కోసం సూచనలు"
      },

      "ShipmentList": {
        "status": "స్థితి",
        "createdAt": "సృష్టించబడిన తేదీ",
        "viewQuotations": "ఉల్లేఖనలను చూడండి",
        "loadingShipments": "షిప్మెంట్స్ లోడ్ అవుతున్నాయి...",
        "noShipments": "ఏ షిప్మెంట్స్ అందుబాటులో లేవు.",
        "errorFetchingShipments": "షిప్మెంట్స్ పొందడంలో లోపం.",
        "transportersQuotations": "సముదాయదారుల ఉల్లేఖనాలు"

      },

      "shipmentDetails": {
        "shipmentDetails": "షిప్‌మెంట్ వివరాలు",
        "basicInformation": "ప్రాథమిక సమాచారం",
        "shipmentID": "షిప్‌మెంట్ ID",
        "cargoType": "కార్గో రకం",
        "dimensions": "గమనికలు",
        "cargoWeight": "కార్గో బరువు",
        "statusPricing": "స్థితి మరియు ధర",
        "shipmentStatus": "షిప్‌మెంట్ స్థితి",
        "quotedPrice": "ప్రతిపాదించిన ధర",
        "estimatedPrice": "అంచనా ధర",
        "distance": "దూరం",
        "pickupDelivery": "పికప్ మరియు డెలివరీ",
        "pickupPoint": "పికప్ పాయింట్",
        "dropPoint": "డ్రాప్ పాయింట్",
        "pickupDate": "పికప్ తేదీ",
        "deliveryDate": "డెలివరీ తేదీ",
        "contactDetails": "సంప్రదింపు వివరాలు",
        "contactName": "సంప్రదింపు పేరు",
        "contactNumber": "సంప్రదింపు నెంబర్",
        "additionalInformation": "అదనపు సమాచారం",
        "createdAt": "సృష్టించిన తేదీ",
        "updatedAt": "అప్‌డేట్ తేదీ",
        "notAvailable": "లభ్యం కాదు",
        "loadingShipmentDetails": "షిప్‌మెంట్ వివరాలు లోడ్ చేస్తున్నాయి...",
        "noShipmentDetails": "షిప్‌మెంట్ వివరాలు అందుబాటులో లేదు"
      },
      "shipmentDetail": {
        "loadingShipments": "షిప్‌మెంట్ లొడ్ అవుతుంది...",
        "noShipmentDetails": "షిప్‌మెంట్ వివరాలు అందుబాటులో లేదు.",
        "transportersQuotations": "మాలుగడాల యొక్క కోటేషన్లు",
        "viewQuotations": "కోటేషన్లు చూడండి",
        "status": "స్థితి",
        "createdAt": "సృష్టించిన తేదీ"
      },

      "Quotations": {
        "error": "పొరపాటు",
        "enterQuotedPrice": "గోలువ పెట్టిన ధరను నమోదు చేయండి",
        "selectValidityPeriod": "వాలిడిటీ కాలాన్ని ఎంచుకోండి",
        "quotedPrice": "గోలువ ధర",
        "validityPeriod": "వాలిడిటీ కాలం",
        "submitQuotation": "కోట్ సమర్పించండి",
        "success": "విజయం",
        "quotationSubmitted": "కోట్ విజయవంతంగా సమర్పించబడింది.",
        "failedSubmitQuotation": "కోట్ సమర్పించడంలో విఫలమైంది",
        "anErrorOccurred": "ఒక పొరపాటు సంభవించింది"
      },
      "header": {

        "yourLocation": "మీ స్థానం",
        "locationExample": "కుకట్‌పల్లీ, హైదరాబాద్",
        "language": "భాష"


      },
      // ===============================================SETTINGS===============================================

      "gstNumber": "GST సంఖ్య",
      "enterGstNumber": "GST సంఖ్య నమోదు చేయండి",
      "cinNumber": "CIN సంఖ్య",
      "enterCinNumber": "CIN సంఖ్య నమోదు చేయండి",
      "companyNameRequired": "కంపెనీ పేరు అవసరం.",
      "enterValidEmail": "దయచేసి సరైన ఈమెయిల్ చిరునామా నమోదు చేయండి.",
      "enterValidPhoneNumber": "దయచేసి సరైన ఫోన్ నంబర్ (10-15 అంకెలు) నమోదు చేయండి.",
      "addressRequired": "చిరునామా అవసరం.",
      "enterValidGst": "దయచేసి సరైన GST సంఖ్య నమోదు చేయండి (ఉదా: 22ABCDE1234F1Z5).",
      "enterValidCin": "దయచేసి సరైన CIN సంఖ్య నమోదు చేయండి (ఉదా: L12345AB1234XYZ123456).",
      "companyDetailsSubmitted": "కంపెనీ వివరాలు విజయవంతంగా సమర్పించబడ్డాయి!",
      "failedToSubmitDetails": "కంపెనీ వివరాలను సమర్పించడంలో విఫలమైంది. దయచేసి మళ్ళీ ప్రయత్నించండి.",

      "userIdRetrieved": "AsyncStorage నుండి వినియోగదారు ID పొందినది:",
      "userIdNotFound": "వినియోగదారు ID కనుగొనబడలేదు. దయచేసి మళ్ళీ లాగిన్ చేయండి.",
      "errorRetrievingUserId": "వినియోగదారు ID పొందడంలో లోపం",
      "failedToRetrieveUserId": "వినియోగదారు ID పొందడంలో విఫలమైంది.",
      "fillAllFieldsBeforeSaving": "దయచేసి సేవ్ చేయడానికి ముందు అన్ని ఫీల్డ్స్ పూరించండి.",
      "userIdNotAvailable": "వినియోగదారు ID అందుబాటులో లేదు. దయచేసి మళ్ళీ లాగిన్ చేయండి.",
      "driverIdSaved": "AsyncStorage లో డ్రైవర్ ID సేవ్ చేయబడింది:",
      "driverDetailsSavedSuccessfully": "డ్రైవర్ వివరాలు విజయవంతంగా సేవ్ చేయబడ్డాయి!",
      "errorSavingDriverDetails": "డ్రైవర్ వివరాలను సేవ్ చేయడంలో లోపం",
      "failedToSaveDriverDetails": "డ్రైవర్ వివరాలను సేవ్ చేయడంలో విఫలమైంది",
      "loading": "లోడ్ అవుతున్నది...",
      "nameAsPerLicence": "పేరు (లైసెన్సు ప్రకారం)",
      "enterNameAsPerLicence": "లైసెన్సు ప్రకారం పేరు నమోదు చేయండి",
      "phoneNumberWork": "ఫోన్ నంబర్ (పని)",
      "experience": "అనుభవం",
      "enterExperience": "అనుభవం నమోదు చేయండి (ఉదాహరణకు: 5 సంవత్సరాలు)",
      "save": "సేవ్ చేయండి",

      "newPasswordsDoNotMatch": "కొత్త పాస్వర్డులు సరిపోలడం లేదు.",
      "passwordValidationError": "పాస్వర్డులో కనీసం 6 అక్షరాలు ఉండాలి, ఒక అప్‌పర్‌కేస్ అక్షరం, ఒక లోవర్‌కేస్ అక్షరం మరియు ఒక సంఖ్య ఉండాలి.",
      "anErrorOccurred": "ఒక పొరపాటు జరిగింది",
      "updatePassword": "పాస్వర్డ్‌ను అప్‌డేట్ చేయండి",
      "currentPassword": "ప్రస్తుత పాస్వర్డ్",
      "newPassword": "కొత్త పాస్వర్డ్",
      "reenterNewPassword": "కొత్త పాస్వర్డును మళ్లీ నమోదు చేయండి",

      "brand": "బ్రాండ్",
      "model": "మోడల్",
      "refrigerator": "ఫ్రిజ్",
      "selectBrand": "బ్రాండ్‌ను ఎంచుకోండి",
      "selectModel": "మోడల్‌ను ఎంచుకోండి",
      "selectOption": "ఎంపికను ఎంచుకోండి",
      "yes": "అవును",
      "no": "కాదు",
      "selectRegistrationDate": "నమోదు తేదీని ఎంచుకోండి",

      "createdAt": "సృష్టించిన తేదీ",
    "viewDetails": "వివరాలు చూడండి",
    "fetchError": "రవాణా పొందడంలో లోపం",
    "loadingShipments": "రవాణాలను లోడ్ చేస్తోంది...",
    "shipmentsList": "రవాణా జాబితా",
    "filter": "ఫిల్టర్",
    "all": "అన్నీ",
    "pending": "ప్రతిహరణ",
    "inTransit": "ప్రవహించేలోగా",
    "delivered": "డెలివరీ",
    "cancelled": "రద్దు",
    "noShipmentsForStatus": "ఎంచుకున్న స్థితి కోసం ఎలాంటి రవాణాలు లేవు",


    "fillAllFields": "దయచేసి అన్ని ఫీల్డ్లను నింపండి",
  "passwordResetSuccess": "పాస్‌వర్డ్ విజయవంతంగా రీసెట్ చేయబడింది",
  "unexpectedError": "ఒక అప్రత్యాశిత పొరపాటు సంభవించింది",
  "enterOTP": "OTP నమోదు చేయండి",
  "otpPlaceholder": "OTP",
  "newPasswordPlaceholder": "కొత్త పాస్‌వర్డ్",








    },
  },
  kn: {
    translation: {
      "ecoFriendlyTransport": "ಪರಿಸರ ಸ್ನೇಹಿ ಸಾರಿಗೆ",
      "chooseYourOption": "ನೀವು ಬಯಸುವ ಸಾರಿಗೆ ಆಯ್ಕೆ ಮಾಡಿ",
      "electricTruck": "ವಿದ್ಯುತ್ ಟ್ರಕ್",
      "shared": "ಹಂಚಿಕೊಂಡ ಸಾರಿಗೆ",
      "public": "ಪಬ್ಲಿಕ್ ಸಾರಿಗೆ",
      "electricTruckDescription": "ತುಂಬಾ ಕಡಿಮೆ ವಿಷಮ ಸಂಚಯಗಳ ಜೊತೆಗೆ ಸ್ಥಿರ ಲಾಜಿಸ್ಟಿಕ್ಸ್‌ಗೆ ವಿದ್ಯುತ್ ಟ್ರಕ್ಕುಗಳು",
      "sharedDescription": "ಕಾರ್ಪೂಲ್ ಮೂಲಕ ಕಾರ್ಬನ್ ಉಳಿತಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡಿ",
      "publicDescription": "ಊರೀ ಸಮೃದ್ಧ ಸಾರಿಗೆ ಪರಿಹಾರಗಳು",
      "transportTypeList": "ಸಾರಿಗೆ ಪ್ರಕಾರಗಳು",
      "electricTruckDetails": "ಈ ಟ್ರಕ್ಕುಗಳು ವಿವಿಧ ಸಾರಿಗೆ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸಬಹುದು, ಅವುಗಳ ಶಕ್ತಿಯ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಬಳಸುವ ಮೂಲಕ ನಿರಂತರ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಬಹುದು.",
      "sharedDetails": "ಈ ಸಾರಿಗೆ ಸೇವೆಗಳು ಹಲವು ಪ್ರಯಾಣಿಕರನ್ನು ಒಂದೇ ವಾಹನದಲ್ಲಿ ತೆಗೆದುಕೊಂಡು ಹೋಗುತ್ತವೆ.",
      "publicDetails": "ಪಬ್ಲಿಕ್ ಸಾರಿಗೆ ಸೇವೆಗಳು ಬಹುತೆಕ ಜನರಿಗೆ ಲಭ್ಯವಿರುವ ಮತ್ತು ದೊಡ್ಡ ಸಂಖ್ಯೆಯಲ್ಲಿ ಪ್ರಯಾಣಿಕರನ್ನು ಒಂದೇ ವಾಹನದಲ್ಲಿ ಹೊತ್ತೊಯ್ಯುತ್ತದೆ.",
      "electricTruck1": "ವಿದ್ಯುತ್ ಟ್ರಕ್ 1",
      "electricTruck2": "ವಿದ್ಯುತ್ ಟ್ರಕ್ 2",
      "electricTruck3": "ವಿದ್ಯುತ್ ಟ್ರಕ್ 3",
      "electricTruck4": "ವಿದ್ಯುತ್ ಟ್ರಕ್ 4",
      "electricTruck5": "ವಿದ್ಯುತ್ ಟ್ರಕ್ 5",
      "sharedCar1": "ಹಂಚಿಕೊಂಡ ಕಾರು 1",
      "sharedCar2": "ಹಂಚಿಕೊಂಡ ಕಾರು 2",
      "sharedCar3": "ಹಂಚಿಕೊಂಡ ಕಾರು 3",
      "sharedCar4": "ಹಂಚಿಕೊಂಡ ಕಾರು 4",
      "sharedCar5": "ಹಂಚಿಕೊಂಡ ಕಾರು 5",
      "bus1": "ಬಸ್ 1",
      "metro1": "ಮೆಟ್ರೋ 1",
      "tram1": "ಟ್ರಾಮ್ 1",
      "bus2": "ಬಸ್ 2",
      "metro2": "ಮೆಟ್ರೋ 2",
      "size": "ಆಕಾರ",
      "range": "ವ്യാപ್ತಿ",
      "bookNow": "ಈಗ ಬುಕ್ ಮಾಡಿರಿ",
      "type": "ವಾಹನದ ಪ್ರಕಾರ",
      "back": "ಹಿಂತಿರುಗಿ",
      // =========================================================
      "selectLanguage": "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "chooseLanguage": "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "close": "ಮುಚ್ಚಿ",
      "success": "ಯಶಸ್ಸು",
      "error": "ದೋಷ",
      "pleaseEnterEmailPassword": "ದಯವಿಟ್ಟು ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ.",
      "pleaseEnterEmail": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ.",
      "loginSuccessful": "ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಗಿದೆ.",
      "loginFailed": "ಲಾಗಿನ್ ವಿಫಲವಾಗಿದೆ.",
      "unknownRole": "ಅಜ್ಞಾತ ಪಾತ್ರ.",
      "loginError": "ಲಾಗಿನ್ ಮಾಡುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ.",
      "passwordResetLinkSent": "ಪಾಸ್ವರ್ಡ್ ರಿಸೆಟ್ ಲಿಂಕ್ ನಿಮ್ಮ ಇಮೇಲ್ ಗೆ ಕಳುಹಿಸಲಾಗಿದೆ.",
      "resetLinkError": "ರಿಸೆಟ್ ಲಿಂಕ್ ಕಳುಹಿಸುವಲ್ಲಿ ವಿಫಲವಾಗಿದೆ.",
      "welcomeBack": "ಮರಳಿ ಸ್ವಾಗತ!",
      "email": "ಇಮೇಲ್",
      "password": "ಪಾಸ್ವರ್ಡ್",
      "login": "ಲಾಗಿನ್",
      "resetPassword": "ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ",
      "forgotAccount": "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಮರೆತಿರಾ?",
      "dontHaveAccount": "ಖಾತೆ ಇಲ್ಲವೇ? ಇಲ್ಲಿ ಸೈನ್ ಅಪ್ ಮಾಡಿ.",

      "welcome": "ಸ್ವಾಗತ!",
      "message": "ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಲಾಗಿನ್ ಆಗಿದ್ದೀರಿ.",

      "createAccount": "ಖಾತೆ ರಚಿಸು",
      "name": "ಹೆಸರು",

      "selectRole": "ಭೂಮಿಕೆಯನ್ನು ಆರಿಸಿ",
      "driver": "ಚಾಲಕ",
      "transporter": "ಆರೋಹಕ",
      "manufacturer": "ತಯಾರಕ",
      "register": "ನೋಂದಣಿ ಮಾಡಿ",
      "alreadyHaveAccount": "ಹೆಚ್ಚು ಖಾತೆ ಇದೆ?",
      "allFieldsRequired": "ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳು ಅಗತ್ಯವಿದೆ.",
      "registrationSuccess": "ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ",
      "registrationFailed": "ನೋಂದಣಿ ವಿಫಲವಾಗಿದೆ",
      "errorOccurred": "ಪೊರಪಟು ಸಂಭವಿಸಿತು",
      "companyDetails": "ಕಂಪನಿಯ ವಿವರಗಳು",

      // =================driver Dashboard=========================
      "Updating shipment status for ID": "ಐಡಿಗಾಗಿ ಸಾಗಾಟದ ಸ್ಥಿತಿಯನ್ನು تازه ಮಾಡಲಾಗುತ್ತಿದೆ",
      "Success": "ಯಶಸ್ಸು",
      "Shipment status updated to IN_TRANSIT.": "ಸಾಗಾಟದ ಸ್ಥಿತಿ IN_TRANSIT ಗೆ تازه ಮಾಡಲಾಗಿದೆ.",
      "Error updating shipment status:": "ಸಾಗಾಟದ ಸ್ಥಿತಿಯನ್ನು تازه ಮಾಡುವಲ್ಲಿ ದೋಷ:",
      "Failed to update shipment status": "ಸಾಗಾಟದ ಸ್ಥಿತಿಯನ್ನು تازه ಮಾಡಲು ವಿಫಲವಾಗಿದೆ",
      "Error": "ದೋಷ",
      "Shipment or Transporter details are missing.": "ಸಾಗಾಟ ಅಥವಾ ಸಾರಿಗೆದಾರರ ವಿವರಗಳು ಇಲ್ಲ.",
      "Pick-up Location": "ಪಿಕ್-ಅಪ್ ಸ್ಥಳ",
      "Drop Location": "ಡ್ರಾಪ್ ಸ್ಥಳ",
      "Cargo Type": "ಸರಕು ಪ್ರಕಾರ",
      "Weight": "ತೂಕ",
      "Vehicle Type": "ವಾಹನ ಪ್ರಕಾರ",
      "Pick-up Date": "ಪಿಕ್-ಅಪ್ ದಿನಾಂಕ",
      "Delivery Date": "ವಿತರಣಾ ದಿನಾಂಕ",
      "Transporter Details": "ಸಾರಿಗೆದಾರರ ವಿವರಗಳು",
      "Company Name": "ಕಂಪನಿಯ ಹೆಸರು",
      "Contact": "ಸಂಪರ್ಕ",
      "Email": "ಇಮೇಲ್",
      "Accept": "ಸ್ವೀಕರಿಸಿ",
      "Decline": "ನಿರಾಕರಿಸಿ",

      "shipmentRequests": "ಸಾಗಾಣಿಕೆ ವಿನಂತಿಗಳು",
      "completedTrips": "ಪೂರೈಸಿದ ಪ್ರಯಾಣಗಳು",
      "driverInvoices": "ಚಾಲಕನ ಬಿಲ್‌ಗಳು",
      "driverRewards": "ಚಾಲಕನ ಬಹುಮಾನಗಳು",
      "driverFeedback": "ಚಾಲಕನ ಪ್ರತಿಕ್ರಿಯೆ",

      "personalDetails": "ವೈಯಕ್ತಿಕ ವಿವರಗಳು",
      "accountDetailss": "ಖಾತೆ ವಿವರಗಳು",
      "vehicleInfo": "ವಾಹನ ಮಾಹಿತಿ",
      "addDriver": "ಚಾಲಕರನ್ನು ಸೇರಿಸಿ",


      "pickupLocation": "ಪಿಕಪ್ ಸ್ಥಳ",
      "dropLocation": "ಡ್ರಾಪ್ ಸ್ಥಳ",
      "cargoType": "ಕಾರ್ಗೋ ಪ್ರಕಾರ",
      "viewMore": "ಮತ್ತಷ್ಟು ವೀಕ್ಷಿಸಿ",
      "viewingMoreDetails": "ಹೆಚ್ಚಿನ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಲಾಗುತ್ತಿದೆ:",
      "No pending shipments available.": "ಯಾವುದೇ ಬಾಕಿಯ ಸರಕುಗಳೂ ಲಭ್ಯವಿಲ್ಲ.",


      "No completed trips available.": "ಯಾವುದೇ ಪೂರ್ಣಗೊಂಡ ಪ್ರಯಾಣಗಳು ಲಭ್ಯವಿಲ್ಲ.",
      "Details for Trip ID: {{id}}": "ಪ್ರಯಾಣ ಐಡಿಗಾಗಿ ವಿವರಗಳು: {{id}}",
      "Trip ID": "ಪ್ರಯಾಣ ಐಡಿ",

      "Driver ID is missing. Please save your driver details.": "ಡ್ರೈವರ್ ಐಡಿ ಇಲ್ಲ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಡ್ರೈವರ್ ವಿವರಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ.",
      "HTTP Error": "HTTP ದೋಷ",
      "Failed to fetch shipment details: {{message}}": "ಸರಕುಗಳ ವಿವರಗಳನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ: {{message}}",
      "Failed to fetch completed trips: {{message}}": "ಪೂರ್ಣಗೊಂಡ ಪ್ರವಾಸಗಳನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ: {{message}}",
      "Feature not implemented": "ವೈಶಿಷ್ಟ್ಯವನ್ನು ಅಳವಡಿಸಲಾಗಿಲ್ಲ",
      "Section": "ವಿಭಾಗ",
      "Loading...": "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",

      "title": "ದೋಷ",
      "failed_to_accept_shipment": "ಸರಕು ಸ್ವೀಕರಿಸಲು ವಿಫಲವಾಗಿದೆ",
      "pickup_location_missing": "ಪಿಕಪ್ ಸ್ಥಳದ ವಿವರಗಳು ಲಭ್ಯವಿಲ್ಲ",
      "waiting_for_payment": "ಪಾವತಿಗಾಗಿ ಕಾಯುತ್ತಿದೆ",
      "shipment_status": "ಸರಕು ಸ್ಥಿತಿ",
      "navigate_to_pickup": "ಪಿಕಪ್ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ",

      "rewards": " ಬಹುಮಾನಗಳು",
      "rewardType": "ಬಹುಮಾನ ಪ್ರಕಾರ",
      "rewardAmount": "ಬಹುಮಾನ ಮೊತ್ತ",

      "invoices": "ಅಂತರ್ಜ್ಞಾಪನೆಗಳು",

      "feedback": "ಪ್ರತಿಕ್ರಿಯೆ",
      "feedbackLabel": "ಪ್ರತಿಕ್ರಿಯೆ",
      "rating": "ರೇಟಿಂಗ್",
      "edit": "ಸಂಪಾದಿಸಿ",
      "document": "ಪತ್ರಗಳು",



      "transporterInvitation": "ಸಾರಿಗೆ ಆಹ್ವಾನ",
      "invitationMessage": "ನೀವು ಸರಕಿಗೋಸ್ಕರ ಆಹ್ವಾನಿತರಾಗಿದ್ದೀರಿ. ನೀವು ಒಪ್ಪಿಗೆಯಾದಿರಾ?",
      "accept": "ಒಪ್ಪಿಗೆ",
      "reject": "ನಿರಾಕರಿಸು",
      "accepted": "ನೀವು ಆಹ್ವಾನವನ್ನು ಒಪ್ಪಿಕೊಂಡಿದ್ದೀರಿ.",
      "rejected": "ನೀವು ಆಹ್ವಾನವನ್ನು ನಿರಾಕರಿಸಿದ್ದೀರಿ.",

      "itemDelivered": "ವಸ್ತು ವಿತರಿಸಲಾಗಿದೆ",
      "price": "ಬೆಲೆ",

      "home": "ಹೋಮ್",
      "quotations": "ಉತ್ತರಗಳು",
      "shipments": "ಶಿಪ್ಮೆಂಟ್‌ಗಳು",
      "profile": "ಪ್ರೊಫೈಲ್",

      "map": "ನಕ್ಷೆ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      "failed_to_retrieve_data": "ಡೇಟಾ ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ.",
      "loading_map_details": "ನಕ್ಷೆ ವಿವರಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ದೋಷ. ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ.",
      "driver_location_title": "ಚಾಲಕ ಸ್ಥಳ",
      "driver_location_description": "ಇದು ಚಾಲಕನ ಪ್ರಸ್ತುತ ಸ್ಥಳವಾಗಿದೆ.",
      "estimated_time": "ಅಂದಾಜು ಸಮಯ",
      "minutes": "ನಿಮಿಷಗಳು",
      "distance": "ದೂರ",
      "kilometers": "ಕಿಮೀ",
      "pickup_location_title": "ಪಿಕಪ್ ಸ್ಥಳ",
      "start": "ಆರಂಭಿಸಿ",
      "pickup_location_description": "ಇದು ಶಿಪ್‌ಮೆಂಟ್ ಪಿಕಪ್ ಸ್ಥಳವಾಗಿದೆ.",







      "accountDetails": {
        "accountHolderName": "ಖಾತೆದಾರರ ಹೆಸರು",
        "accountType": "ಖಾತೆ ಪ್ರಕಾರ",
        "validationError": "ಮಾನ್ಯತಾ ದೋಷ",
        "accountHolderNameRequired": "ಖಾತೆದಾರರ ಹೆಸರು ಅಗತ್ಯವಿದೆ.",
        "selectAccountType": "ಖಾತೆ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ",
        "savings": "ಸೇವಿಂಗ್ಸ್",
        "current": "ಪ್ರಸ್ತುತ ಖಾತೆ",
        "fixedDeposit": "ನಿಯಮಿತ ಠೇವಣಿ",
        "heading": "ಖಾತೆ ವಿವರಗಳು",
        "bankName": "ಬ್ಯಾಂಕ್ ಹೆಸರು",
        "ifscCode": "IFSC ಕೋಡ್",
        "accountNumber": "ಖಾತೆ ಸಂಖ್ಯೆ",
        "submit": "ಸಮರ್ಪಿಸು",

        "validation": {
          "bankNameRequired": "ಬ್ಯಾಂಕ್ ಹೆಸರು ಅಗತ್ಯವಿದೆ.",
          "ifscCodeRequired": "IFSC ಕೋಡ್ ಅಗತ್ಯವಿದೆ.",
          "invalidIfscCode": "ಸರಿಯಾದ IFSC ಕೋಡ್ ನಮೂದಿಸಿ (11 ಅಕ್ಷರಗಳು, ಉದಾಹರಣೆ: ABCD0123456).",
          "accountNumberRequired": "ಸರಿಯಾದ ಖಾತೆ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ (9-18 ಅಂಕಿಗಳು)."
        },
        "success": "ಖಾತೆ ವಿವರಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!",
        "error": "ಖಾತೆ ವಿವರಗಳನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡುವಲ್ಲಿ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮರುಪ್ರಯತ್ನಿಸಿ."
      },

      "validationError": "ಮಾನ್ಯತೆ ದೋಷ",
      "validPanError": "ದಯವಿಟ್ಟು ಸರಿಯಾದ PAN ಸಂಖ್ಯೆ ನಮೂದಿಸಿ (ಉದಾಹರಣೆಗೆ ABCDE1234F).",
      "validAadharError": "ದಯವಿಟ್ಟು ಸರಿಯಾದ Aadhaar ಸಂಖ್ಯೆ ನಮೂದಿಸಿ (12 ಅಂಕೆಗಳು).",
      "dobError": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಜನನ ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
      "genderError": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಲಿಂಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
      "personalDetailsSuccess": "ವೈಯಕ್ತಿಕ ವಿವರಗಳು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಯಿತು!",
      "personalDetailsError": "ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ನವೀಕರಿಸುವಲ್ಲಿ ವಿಫಲವಾಗಿದೆ.",
      "panNumber": "PAN ಸಂಖ್ಯೆ",
      "aadharNumber": "Aadhaar ಸಂಖ್ಯೆ",
      "selectDob": "ಜನನ ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ",
      "gender": "ಲಿಂಗ",
      "selectGender": "ಲಿಂಗ ಆಯ್ಕೆಮಾಡಿ",
      "male": "ಪುರುಷ",
      "female": "ಹೆಣ್ಣು",
      "other": "ಇತರೆ",
      "submit": "ಸಮರ್ಪಿಸು",

      "vehicleInformation": "ವಾಹನ ಮಾಹಿತಿ",
      "vehicleNumberPlaceholder": "ವಾಹನ ಸಂಖ್ಯೆ (ಉದಾ: KA05MN1234)",
      "vehicleType": "ವಾಹನದ ಪ್ರಕಾರ",
      "selectVehicleType": "ವಾಹನದ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "twoWheeler": "2 ಚಕ್ರಗಳು",
      "threeWheeler": "3 ಚಕ್ರಗಳು",
      "fourWheeler": "4 ಚಕ್ರಗಳು",
      "heavyVehicle": "ಭಾರವಾದ ವಾಹನ",
      "capacityPlaceholder": "ಕ್ಷಮತೆ (ಕೆಜಿಯಲ್ಲಿ)",
      "dimensionsPlaceholder": "ಗಾತ್ರಗಳು (ಉದಾ: 22x8x10)",
      "selectInsuranceValidity": "ವಿಮೆ ಮಾನ್ಯತೆ ಆಯ್ಕೆಮಾಡಿ",
      "selectFitnessValidity": "ಫಿಟ್ನೆಸ್ ಪ್ರಮಾಣಪತ್ರದ ಮಾನ್ಯತೆ ಆಯ್ಕೆಮಾಡಿ",

      "vehicleInfoSubmitted": "ವಾಹನ ಮಾಹಿತಿ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!",
      "networkError": "ನಿರಂತರ ದೋಷ: ಸರ್ವರ್‌ಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಲಾಗಿಲ್ಲ.",

      "searchDrivers": "ಚಾಲಕರನ್ನು ಹುಡುಕಿ",

      "documents": {
        "profileDocuments": "ಪ್ರೊಫೈಲ್ ದಾಖಲೆಗಳು",
        "companyDocuments": "ಕಂಪನೀ ದಾಖಲೆಗಳು",
        "vehicleDocuments": "ವಾಹನ ದಾಖಲೆಗಳು",
        "upload": "{{documentType}} ಅಪ್‌ಲೋಡ್",
        "notUploaded": "ಅಪ್‌ಲೋಡ್ ಆಗಿಲ್ಲ",
        "submit": "ಸಬ್ಮಿಟ್",
        "success": "ಯಶಸ್ಸು",
        "cancelled": "ರದ್ದು ಮಾಡಲಾಗಿದೆ",
        "failedToUpload": "ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ವಿಫಲವಾಯಿತು",
        "missingDocuments": "ಗೈವಾಗಿರುವ ದಾಖಲೆಗಳು",
        "missingDocumentsMessage": "ಕೆಳಗಿನ ದಾಖಲೆಗಳು ಗೈವಾಗಿದೆ:\n\nಪ್ರೊಫೈಲ್ ದಾಖಲೆಗಳು: {{profileDocuments}}\nಕಂಪನೀ ದಾಖಲೆಗಳು: {{companyDocuments}}\nವಾಹನ ದಾಖಲೆಗಳು: {{vehicleDocuments}}",
        "allDocumentsSubmitted": "ಎಲ್ಲಾ ದಾಖಲೆಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ.",
        "noFilesSelected": "ಯಾವುದೇ ಫೈಲುಗಳನ್ನು ಆರಿಸಿಲ್ಲ.",
        "error": "ದೋಷ",
        "uploadSuccess": "ದಾಖಲೆಗಳು ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಆಗಿದೆಯೆ!",
        "uploadError": "ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ವಿಫಲವಾಯಿತು",
        "uploadDocuments": "ಪತ್ರಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ",
        "uploadingAll": "ಎಲ್ಲವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ",
        "documentsUnderConstruction": "ಪತ್ರಗಳು ಪ್ರಸ್ತುತ ನಿರ್ಮಾಣದಡಿ ಇದ್ದವು.",
        "edit": "ಸಂಪಾದಿಸಿ",
        "editFunctionalityUnderConstruction": "ಸಂಪಾದನೆ ಕಾರ್ಯಚಟುವಟಿಕೆ ಪ್ರಸ್ತುತ ನಿರ್ಮಾಣದಲ್ಲಿದೆ.",
        "selectFile": "ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ"
      },

      "companyName": "ಕಂಪನಿಯ ಹೆಸರು",
      "enterCompanyName": "ಕಂಪನಿಯ ಹೆಸರು ನಮೂದಿಸಿ",
      "enterEmail": "ಇಮೇಲ್ ನಮೂದಿಸಿ",
      "phoneNumber": "ಫೋನ್ ಸಂಖ್ಯೆ",
      "enterPhoneNumber": "ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
      "address": "ವಿಳಾಸ",
      "enterAddress": "ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ",
      "registrationNumber": "ನೊಂದಣಿ ಸಂಖ್ಯೆ",
      "enterRegistrationNumber": "ನೊಂದಣಿ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
      "pleaseFillAllFields": "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ತುಂಬಿ.",
      "detailsSubmittedSuccessfully": "ಕಂಪನಿಯ ವಿವರಗಳು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!",


      // ===============================TRACKING-APP============================

      "shipmentNumber": "ಶಿಪ್‌ಮೆಂಟ್ ಸಂಖ್ಯೆ",
      "sender": "ಕಳುಹಿಸುವವರು",
      "receiver": "ಸ್ವೀಕರಿಸುವವರು",
      "time": "ಸಮಯ",
      "status": "ಸ್ಥಿತಿ",
      "viewLocation": "ಸ್ಥಳ ವೀಕ್ಷಿಸಿ",
      "allActivities": "ಎಲ್ಲಾ ಚಟುವಟಿಕೆಗಳು",
      "addShipment": "ಶಿಪ್‌ಮೆಂಟ್ ಸೇರಿಸಿ",
      "oldShipments": "ಹಳೆಯ ಶಿಪ್‌ಮೆಂಟ್‌ಗಳು",
      "payments": "ಪಾವತಿಗಳು",
      "tracking": "ಹುಡುಕಾಟ",
      "insurances": "ವಿಮೆ",

      "shipmentID": "ಶಿಪ್‌ಮೆಂಟ್ ಐಡಿ",
      "contactName": "ಸಂಪರ್ಕದ ಹೆಸರು",
      "cargoWeight": "ಸಾಗಾಣಿಕೆ ತೂಕ",
      "pickupDate": "ಪಿಕಪ್ ದಿನಾಂಕ",
      "dropDate": "ಡ್ರಾಪ್ ದಿನಾಂಕ",
      "contactPhone": "ಸಂಪರ್ಕದ ಫೋನ್",
      "errorFetchingDetails": "ಶಿಪ್‌ಮೆಂಟ್ ವಿವರಗಳನ್ನು ತೆಗೆದುಹಾಕುವಲ್ಲಿ ದೋಷ",

      "shipmentForm": {
        "title": "ಶಿಪ್‌ಮೆಂಟ್ ವಿವರಗಳು ಫಾರ್ಮ್",
        "cargoType": "ಸಾಗಾಣಿಕೆ ಪ್ರಕಾರ",
        "cargoWeight": "ಸಾಗಾಣಿಕೆ ತೂಕ",
        "cargoDimensions": "ಸಾಗಾಣಿಕೆ ಆಯಾಮಗಳು",
        "distance": "ದೂರ",
        "quotedPrice": "ಕೊಟ್ಟ ಬೆಲೆ",
        "estimatedPrice": "ಅಂದಾಜು ಬೆಲೆ",
        "pickupDate": "ಪಿಕಪ್ ದಿನಾಂಕ",
        "deliveryDate": "ವಿತರಣೆಯ ದಿನಾಂಕ",
        "contactDetails": "ಸಂಪರ್ಕ ವಿವರಗಳು",
        "contactName": "ಸಂಪರ್ಕದ ಹೆಸರು",
        "contactPhone": "ಸಂಪರ್ಕದ ಫೋನ್",
        "pickupAddress": "ಪಿಕಪ್ ವಿಳಾಸ",
        "pickupPoint": "ಪಿಕಪ್ ಪಾಯಿಂಟ್",
        "pickupHouseNo": "ಹೌಸ್ ನಂಬರ್",
        "pickupStreetName": "ಸಂಸ್ಕೃತಿಯ ಹೆಸರು",
        "pickupState": "ರಾಜ್ಯ",
        "pickupPostalCode": "ಪೋಸ್ಟಲ್ ಕೋಡ್",
        "pickupCountry": "ದೇಶ",
        "dropAddress": "ಡ್ರಾಪ್ ವಿಳಾಸ",
        "dropPoint": "ಡ್ರಾಪ್ ಪಾಯಿಂಟ್",
        "dropHouseNo": "ಹೌಸ್ ನಂಬರ್",
        "dropStreetName": "ವೀದಿ ಹೆಸರು",
        "dropState": "ರಾಜ್ಯ",
        "dropPostalCode": "ಪೋಸ್ಟಲ್ ಕೋಡ್",
        "dropCountry": "ದೇಶ",
        "submitButton": "ಸಬ್‌ಮಿಟ್ ಮಾಡಿ",
        "shipmentDataSubmitted": "ಶಿಪ್‌ಮೆಂಟ್ ಡೇಟಾ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ",
        "shipmentDataFailed": "ಶಿಪ್‌ಮೆಂಟ್ ಡೇಟಾ ಸಲ್ಲಿಸಲು ವಿಫಲವಾಗಿದೆ",
        "geocodeFailure": "ಪಿಕಪ್ ಅಥವಾ ಡ್ರಾಪ್ ವಿಳಾಸವನ್ನು ಜಿಯೋಕೋಡ್ ಮಾಡಲು ವಿಫಲವಾಗಿದೆ.",
        "townName": "ಪಟ್ಟಣದ ಹೆಸರು"
      },

      // ===============================TRANSPORT DASHBOARD============================

      "Dashboard": {
        "heading": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        "shipments": "ಶಿಪ್‌ಮೆಂಟ್‌ಗಳು",
        "completedTrips": "ಪೂರ್ಣಗೊಂಡ ಪ್ರಯಾಣಗಳು",
        "invoices": "ಸರಕುಪಟ್ಟಿಗಳು",
        "feedback": "ಫೀಡ್‌ಬ್ಯಾಕ್"
      },
      "SubmitQuotation": {
        "header": "ಉಲ್ಲೇಖವನ್ನು ಸಲ್ಲಿಸಿ",
        "placeholder": {
          "quotedPrice": "ಉಲ್ಲೇಖಿತ ಬೆಲೆ",
          "validityPeriod": "ವೈಧ್ಯಾವಧಿ (yyyy-MM-ddTHH:mm:ss)"
        },
        "quoteStatus": "ಉಲ್ಲೇಖ ಸ್ಥಿತಿ:",
        "status": {
          "pending": "ಬಾಕಿ",
          "accepted": "ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
          "rejected": "ನಿರಾಕರಿಸಲಾಗಿದೆ"
        },
        "submitButton": "ಉಲ್ಲೇಖವನ್ನು ಸಲ್ಲಿಸಿ",
        "success": "ಉಲ್ಲೇಖ ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ!",
        "failure": "ಉಲ್ಲೇಖ ರಚಿಸಲು ವಿಫಲವಾಗಿದೆ",
        "error": "ದೋಷವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ."
      },
      "completedTrip": {
        "heading": "ಪೂರ್ಣಗೊಂಡ ಪ್ರವಾಸಗಳು",
        "cargo": "ಸರಕು",
        "pickup": "ಪಿಕಪ್",
        "drop": "ಡ್ರಾಪ್"
      },

      "quoteForm": {
        "manufacturerDetails": "ಉತ್ಪಾದಕರ ವಿವರಗಳು",
        "shipmentDetails": "ಸರಕು ಸಾಗಣಾ ವಿವರಗಳು",
        "quoteFormTitle": "ಕೋಟು ಫಾರ್ಮ್",
        "name": "ಹೆಸರು",
        "company": "ಕಂಪನಿ",
        "phone": "ದೂರವಾಣಿ",
        "email": "ಇಮೇಲ್",
        "cargoType": "ಸರಕು ಪ್ರಕಾರ",
        "pickup": "ಪಿಕಪ್",
        "drop": "ಡ್ರಾಪ್",
        "dimensions": "ಗಾತ್ರಗಳು",
        "weight": "ತೂಕ",
        "vehicleType": "ವಾಹನ ಪ್ರಕಾರ",
        "quotedPricePlaceholder": "ಕೋಟ್ ಮಾಡಿದ ಬೆಲೆ",
        "validityPeriodPlaceholder": "ಮಾನ್ಯಾವಧಿ (ದಿನಗಳಲ್ಲಿ)",
        "sendQuoteButton": "ಕೋಟ್ ಕಳುಹಿಸಿ",
        "errorTitle": "ದೋಷ",
        "errorMessage": "ಕೋಟ್ ಕಳುಹಿಸುವ ಮೊದಲು ಎಲ್ಲಾ ವಿಭಾಗಗಳನ್ನು ಭರ್ತಿಮಾಡಿ.",
        "successTitle": "ಕೋಟ್ ಕಳುಹಿಸಲಾಗಿದೆ",
        "successMessage": "ನಿಮ್ಮ ಕೋಟ್ {{quotedPrice}} {{validityPeriod}} ದಿನಗಳಿಗೆ ಮಾನ್ಯವಾಗಿದೆ.",
        "ok": "ಸರಿ",
        "validityDate": "ಮಾನ್ಯತೆ ದಿನಾಂಕ",
  "assignDriver": "ಚಾಲಕನನ್ನು ನೇಮಿಸಿ",
  "pendingApproval": "ಮಂಜೂರಿಗಾಗಿ ಪೆಂಡಿಂಗ್",
  "sendQuote": "ಕೊಟ್ ಕಳುಹಿಸಿ",
  "decline": "ನಿಷೇಧಿಸಿ",
  "transporterIdMissing": "ಯਾਤ್ರಿ ಗುರುತಿನ ಸಂಖ್ಯೆ ಮಾಯವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ.",
  "sendFailure": "ಕೊಟ್ ಕಳುಹಿಸಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ."
      },

      "feedbackScreen": {
        "heading": "ಪ್ರತಿಕ್ರಿಯೆ",
        "reviewer": "ಸಮೀಕ್ಷಕ",
        "rating": "ರೇಟಿಂಗ್",
        "comment": "ಟಿಪ್ಪಣಿ"
      },
      "invoicesScreen": {
        "heading": "ಚಾಲಾನ",
        "invoice": "ಚಾಲಾನ",
        "amount": "ರಾಶಿ",
        "status": "ಹಾವಳಿ"
      },

      "shipmentScreen": {
        "heading": "ಶಿಪ್ಮೆಂಟ್ ವಿನಂತಿಗಳು",
        "cargoType": "ಕಾರ್ಗೋ ಪ್ರಕಾರ",
        "pickup": "ಪಿಕಪ್",
        "drop": "ಡ್ರಾಪ್",
        "quoteButton": "ಕೊಟು",
        "quote": "ಕೊಟ್",
        "waitingForApproval": "ಆಮೋದನೆಗಾಗಿ ಕಾಯುತ್ತಿದ್ದೇವೆ",
        "quoteAccepted": "ಕೊಟ್ ಅಂಗೀಕರಿಸಲಾಗಿದೆ",
        "noPendingShipments": "ಊಹಿಸಲಾದ ಯಾವುದೇ ಶಿಪ್ಮೆಂಟ್‌ಗಳನ್ನು ಕಂಡುಹಿಡಿಯಲಾಗುತ್ತಿಲ್ಲ"
      },

      "Invoice": "ಸರಕುಪಟ್ಟಿ",
      "Date": "ದಿನಾಂಕ",
      "Bill To": "ಬಿಲ್ ಕಳುಹಿಸು",
      "Name": "ಹೆಸರು",
      "Address": "ವಿಳಾಸ",
      "Phone": "ಫೋನ್",
      "Items": "ಐಟಂಗಳು",
      "Description": "ವಿವರಣೆ",
      "Qty": "ಪ್ರಮಾಣ",
      "Price": "ಬೆಲೆ",
      "Total": "ಒಟ್ಟು",

      "Payment Summary": "ಪಾವತಿ ಸಾರಾಂಶ",
      "Subtotal": "ಉಪಮೊತ್ತ",
      "Service Fee": "ಸೇವಾ ಶುಲ್ಕ",
      "Tax": "ತೆರಿಗೆ",

      "loadingPayments": "ಪಾವತಿಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ",
      "failedToFetchPayments": "ಪಾವತಿಗಳನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ",
      "shipmentId": "ಶಿಪ್ಮೆಂಟ್ ಐಡಿ",
      "unknownStatus": "ಅಜ್ಞಾತ",
      "from": "ಇಂದ",
      "to": "ಗೆ",
      "orderId": "ಆರ್ಡರ್ ಐಡಿ",
      "retry": "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
      "noPaymentsFound": "ಯಾವುದೇ ಪಾವತಿಗಳು ಇಲ್ಲ",

      "payment": {
        "title": "ಪಾವತಿ ವಿವರಗಳು",
        "amountLabel": "ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ:",
        "shipmentIdLabel": "ಶಿಪ್ಮೆಂಟ್ ಐಡಿ:",
        "transporterLabel": "ಆಯಾತಗಾರ:",
        "cargoTypeLabel": "ಕಾರ್ಗೋ ಪ್ರಕಾರ:",
        "proceedToPay": "ಪಾವತಿಸಲು ಮುಂದುವರಿಯಿರಿ",
        "paymentFailed": "ಪಾವತಿ ವಿಫಲವಾಗಿದೆ",
        "invalidDetails": "ಅಮಾನ್ಯ ಪಾವತಿ ವಿವರಗಳು. ದಯವಿಟ್ಟು ಪುನಃ ಪ್ರಯತ್ನಿಸಿ.",
        "goBack": "ಹಿಂತಿರುಗಿ ಹೋಗಿ",
        "success": "ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿ ಮುಕ್ತಾಯಗೊಂಡಿದೆ!"
      },

      "AssignDriverScreen": {
        "heading": "ಶಿಪ್‌ಮೆಂಟ್ ಮತ್ತು ಚಾಲಕ ವಿವರಗಳು",
        "shipmentDetails": {
          "cargoType": "ಕಾರ್ಗೋ ಪ್ರಕಾರ",
          "pickupPoint": "ಪಿಕಪ್ ಪಾಯಿಂಟ್",
          "dropPoint": "ಡ್ರಾಪ್ ಪಾಯಿಂಟ್",
          "status": "ಹಲ್ಲು"
        },
        "driverDetails": {
          "driverName": "ಚಾಲಕನ ಹೆಸರು:",
          "phone": "ಫೋನ್:"
        },
        "status": {
          "accepted": "ಆಮೋದಿತ",
          "pending": "ಚಾಲಕನಿಗಾಗಿ ಕಾಯುತ್ತಿದ್ದೇವೆ..."
        },
        "buttons": {
          "sendRequest": "ವಿನಂತಿಯನ್ನು ಕಳುಹಿಸಿ",
          "assignVehicle": "ವಾಹನವನ್ನು ನಿಯೋಜಿಸಿ"
        },
        "errors": {
          "fetchDrivers": "ಚಾಲಕರನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
          "fetchAssignment": "ಅಸೈನ್‌ಮೆಂಟ್ ಸ್ಥಿತಿ ಮತ್ತು ಚಾಲಕ ವಿವರಗಳನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
          "assignDrivers": "ಚಾಲಕರನ್ನು ನಿಯೋಜಿಸಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
          "selectDrivers": "ದಯವಿಟ್ಟು ಕನಿಷ್ಠ ಒಂದು ಚಾಲಕನನ್ನು ಆರಿಸಿ."
        }
      },
      "AssignVehicleScreen": {
        "heading": "ಶಿಪ್‌ಮೆಂಟ್ ವಿವರಗಳು",
        "shipmentDetails": "ಶಿಪ್‌ಮೆಂಟ್ ವಿವರಗಳು",
        "cargoType": "ಕಾರ್ಗೋ ಪ್ರಕಾರ",
        "pickupPoint": "ಪಿಕಪ್ ಪಾಯಿಂಟ್",
        "dropPoint": "ಡ್ರಾಪ್ ಪಾಯಿಂಟ್",
        "driverDetails": "ಚಾಲಕ ವಿವರಗಳು",
        "name": "ಹೆಸರು",
        "phone": "ಫೋನ್",
        "vehicleDetails": "ವಾಹನ ವಿವರಗಳು",
        "vehicleNumber": "ವಾಹನ ಸಂಖ್ಯೆ",
        "vehicleType": "ವಾಹನ ಪ್ರಕಾರ",
        "payNow": "ಈಗ ಪಾವತಿಸಿ",
        "fetchDetails": "ವಿವರಗಳನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ."
      },

      // =================QuotationDetailsScreen=========================

      "QuotationDetails": {
        "heading": "ಉಲ್ಲೇಖ ವಿವರಗಳು",
        "quotationInformation": "ಉಲ್ಲೇಖ ಮಾಹಿತಿ",
        "companyName": "ಕಂಪನಿಯ ಹೆಸರು",
        "quotationNumber": "ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ",
        "date": "ದಿನಾಂಕ",
        "remarks": "ಟಿಪ್ಪಣಿಗಳು",
        "transporterInformation": "ಸಾರಿಗೆದಾರರ ಮಾಹಿತಿ",
        "company": "ಕಂಪನಿ",
        "email": "ಇಮೇಲ್",
        "phone": "ಫೋನ್",
        "registration": "ನೋಂದಣಿ",
        "address": "ವಿಳಾಸ",
        "shipmentInformation": "ಸರಕು ಮಾಹಿತಿ",
        "cargoType": "ಸರಕು ಪ್ರಕಾರ",
        "dimensions": "ಗಾತ್ರಗಳು",
        "weight": "ತೂಕ",
        "kg": "ಕೆಜಿ",
        "vehicleTypeRequired": "ಅಗತ್ಯವಿರುವ ವಾಹನದ ಪ್ರಕಾರ",
        "pickupPoint": "ಪಿಕಪ್ ಸ್ಥಳ",
        "dropPoint": "ಡ್ರಾಪ್ ಸ್ಥಳ",
        "distance": "ಅಂತರ",
        "km": "ಕಿಮೀ",
        "pickupDate": "ಪಿಕಪ್ ದಿನಾಂಕ",
        "deliveryDate": "ವಿತರಣೆ ದಿನಾಂಕ",
        "quotedPrice": "ಉಲ್ಲೇಖಿತ ಬೆಲೆ",
        "status": "ಸ್ಥಿತಿ",
        "validityPeriod": "ಮಾನ್ಯತೆಯ ಅವಧಿ",
        "payNow": "ಈಗ ಪಾವತಿಸಿ",
        "loadingQuotationDetails": "ಉಲ್ಲೇಖ ವಿವರಗಳನ್ನು ಲೋಡ್ ಮಾಡುತ್ತಿದೆ...",
        "failedToLoadQuotationDetails": "ಉಲ್ಲೇಖ ವಿವರಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        "errorFetchingQuotationDetails": "ಉಲ್ಲೇಖ ವಿವರಗಳನ್ನು ಪಡೆಯುವಲ್ಲಿ ದೋಷ.",
        "initiatingPayment": "ಉಲ್ಲೇಖ ID: {{id}} ಗೆ ಪಾವತಿಯನ್ನು ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ",
        "notAvailable": "ಲಭ್ಯವಿಲ್ಲ",
        "shipmentId": "ಶಿಪ್ಮೆಂಟ್ ಐಡಿ",
        "shipmentStatus": "ಶಿಪ್ಮೆಂಟ್ ಸ್ಥಿತಿ",
        "accept": "ಸ್ವೀಕರಿಸಿ",
      },


      "QuotationList": {
        "transporter": "ಸಾರಿಗೆದಾರ",
        "registration": "ನೋಂದಣಿ",
        "status": "ಸ್ಥಿತಿ",
        "price": "ಬೆಲೆ",
        "viewDetails": "ಪಾವತಿಗಾಗಿ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        "loadingQuotations": "ಉಲ್ಲೇಖಗಳನ್ನು ಲೋಡ್ ಮಾಡುತ್ತಿದೆ...",
        "noQuotations": "ಯಾವುದೇ ಉಲ್ಲೇಖಗಳು ಲಭ್ಯವಿಲ್ಲ.",
        "errorFetchingQuotations": "ಉಲ್ಲೇಖಗಳನ್ನು ಪಡೆಯುವಲ್ಲಿ ದೋಷ.",
        "noQuotationsAvailable": "ಈ ಶಿಪ್ಮೆಂಟ್‌ಗೆ ಲಭ್ಯವಿರುವ ಉಲ್ಲೇಖಗಳು ಇಲ್ಲ.",
        "quotationsForShipmentId": "ಶಿಪ್ಮೆಂಟ್ ಐಡಿಗೆ ಉಲ್ಲೇಖಗಳು"
      },

      "ShipmentList": {
        "status": "ಹೆಸರು",
        "createdAt": "ರಚಿಸಲಾಗಿದೆಯಾದ",
        "viewQuotations": "ಅನ್ವಯವಿರುವ ಉಲ್ಲೇಖಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        "loadingShipments": "ಶಿಪ್ಮೆಂಟ್ ಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
        "noShipments": "ಯಾವುದೇ ಶಿಪ್ಮೆಂಟ್ ಗಳು ಲಭ್ಯವಿಲ್ಲ.",
        "errorFetchingShipments": "ಶಿಪ್ಮೆಂಟ್ ಗಳನ್ನು ಪಡೆಯುವಲ್ಲಿ ದೋಷ.",
        "transportersQuotations": "ಪರಿವಾಹಕರ ಉಲ್ಲೇಖಗಳು"

      },
      "shipmentDetails": {
        "shipmentDetails": "ಶಿಪ್ಮೆಂಟ್ ವಿವರಗಳು",
        "basicInformation": "ಮೂಲ ಮಾಹಿತಿ",
        "shipmentID": "ಶಿಪ್ಮೆಂಟ್ ID",
        "cargoType": "ಕಾರ್ಗೋ ಪ್ರಕಾರ",
        "dimensions": "ಮಾಪನಗಳು",
        "cargoWeight": "ಕಾರ್ಗೋ ತೂಕ",
        "statusPricing": "ಸ್ಥಿತಿ ಮತ್ತು ಬೆಲೆ ನಿಗದಿ",
        "shipmentStatus": "ಶಿಪ್ಮೆಂಟ್ ಸ್ಥಿತಿ",
        "quotedPrice": "ಹಾಕಲು ದರ",
        "estimatedPrice": "ಅಂದಾಜು ಬೆಲೆ",
        "distance": "ದೂರ",
        "pickupDelivery": "ಪಿಕಪ್ ಮತ್ತು ವಿತರಣಾ",
        "pickupPoint": "ಪಿಕಪ್ ಪಾಯಿಂಟ್",
        "dropPoint": "ಡ್ರಾಪ್ ಪಾಯಿಂಟ್",
        "pickupDate": "ಪಿಕಪ್ ದಿನಾಂಕ",
        "deliveryDate": "ವಿತರಣಾ ದಿನಾಂಕ",
        "contactDetails": "ಸಂಪರ್ಕ ವಿವರಗಳು",
        "contactName": "ಸಂಪರ್ಕ ಹೆಸರು",
        "contactNumber": "ಸಂಪರ್ಕ ನಂಬರ್",
        "additionalInformation": "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
        "createdAt": "ರಚಿಸಿದ ದಿನಾಂಕ",
        "updatedAt": "ನವೀಕರಣ ದಿನಾಂಕ",
        "notAvailable": "ಲಭ್ಯವಿಲ್ಲ",
        "loadingShipmentDetails": "ಶಿಪ್ಮೆಂಟ್ ವಿವರಗಳನ್ನು ಲೋಡ್ ಮಾಡುತ್ತಿವೆ...",
        "noShipmentDetails": "ಶಿಪ್ಮೆಂಟ್ ವಿವರಗಳು ಲಭ್ಯವಿಲ್ಲ"
      },
      "shipmentDetail": {
        "loadingShipments": "ಶಿಪ್ಮೆಂಟ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡುತ್ತಿದೆ...",
        "noShipmentDetails": "ಶಿಪ್ಮೆಂಟ್ ವಿವರಗಳು ಲಭ್ಯವಿಲ್ಲ.",
        "transportersQuotations": "ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟರ್‌ಗಳ ಕೋಟೇಷನ್ಗಳು",
        "viewQuotations": "ಕೋಟೇಷನ್ಗಳನ್ನು ನೋಡಿ",
        "status": "ಸ್ಥಿತಿ",
        "createdAt": "ಸೃಷ್ಟಿಸಿದ ದಿನಾಂಕ"
      },

      "Quotations": {
        "error": "ಪರಿಷ್ಕರಣೆ",
        "enterQuotedPrice": "ಉಲ್ಲೇಖಿತ ಬೆಲೆಯನ್ನು ನಮೂದಿಸಿ",
        "selectValidityPeriod": "ಮಾನ್ಯತಾ ಅವಧಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        "quotedPrice": "ಉಲ್ಲೇಖಿತ ಬೆಲೆ",
        "validityPeriod": "ಮಾನ್ಯತಾ ಅವಧಿ",
        "submitQuotation": "ಉತ್ತರವನ್ನು ಸಲ್ಲಿಸಿ",
        "success": "ಯಶಸ್ಸು",
        "quotationSubmitted": "ಉತ್ತರವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ.",
        "failedSubmitQuotation": "ಉತ್ತರವನ್ನು ಸಲ್ಲಿಸಲು ವಿಫಲವಾಗಿದೆ",
        "anErrorOccurred": "ಏನೋ ದೋಷ ಸಂಭವಿಸಿದೆ"
      },


      "header": {

        "yourLocation": "ನಿಮ್ಮ ಸ್ಥಳ",
        "locationExample": "ಕುಕಟಪಲ್ಲಿ, ಹೈದರಾಬಾದ್",
        "language": "ಭಾಷೆ"


      },
      // ===============================================SETTINGS===============================================

      "gstNumber": "GST ಸಂಖ್ಯೆ",
      "enterGstNumber": "GST ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
      "cinNumber": "CIN ಸಂಖ್ಯೆ",
      "enterCinNumber": "CIN ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
      "companyNameRequired": "ಕಂಪನಿಯ ಹೆಸರನ್ನು ನಮೂದಿಸಬೇಕು.",
      "enterValidEmail": "ದಯವಿಟ್ಟು ಒಂದು ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ.",
      "enterValidPhoneNumber": "ದಯವಿಟ್ಟು ಸರಿಯಾದ ಫೋನ್ ಸಂಖ್ಯೆ (10-15 ಅಂಕೆಗಳು) ನಮೂದಿಸಿ.",
      "addressRequired": "ವಿಳಾಸ ಅಗತ್ಯವಿದೆ.",
      "enterValidGst": "ದಯವಿಟ್ಟು ಮಾನ್ಯ GST ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ (ಉದಾಹರಣೆ: 22ABCDE1234F1Z5).",
      "enterValidCin": "ದಯವಿಟ್ಟು ಮಾನ್ಯ CIN ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ (ಉದಾಹರಣೆ: L12345AB1234XYZ123456).",
      "companyDetailsSubmitted": "ಕಂಪನಿಯ ವಿವರಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!",
      "failedToSubmitDetails": "ಕಂಪನಿಯ ವಿವರಗಳನ್ನು ಸಲ್ಲಿಸಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ.",

      "userIdRetrieved": "AsyncStorage ನಿಂದ ಬಳಕೆದಾರ ID ಪಡೆದುಕೊಂಡಿದೆ:",
      "userIdNotFound": "ಬಳಕೆದಾರ ID ಕಂಡುಬರಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಪುನಃ ಲಾಗಿನ್ ಮಾಡಿ.",
      "errorRetrievingUserId": "ಬಳಕೆದಾರ ID ಪಡೆಯುವಲ್ಲಿ ದೋಷ",
      "failedToRetrieveUserId": "ಬಳಕೆದಾರ ID ಪಡೆಯುವಲ್ಲಿ ವಿಫಲವಾಗಿದೆ.",
      "fillAllFieldsBeforeSaving": "ದಯವಿಟ್ಟು ಉಳಿಸು прежде ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಪೂರೈಸಿ.",
      "userIdNotAvailable": "ಬಳಕೆದಾರ ID ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಪುನಃ ಲಾಗಿನ್ ಮಾಡಿ.",
      "driverIdSaved": "AsyncStorage ನಲ್ಲಿ ಚಾಲಕ ID ಉಳಿಸಲಾಗಿದೆ:",
      "driverDetailsSavedSuccessfully": "ಚಾಲಕ ವಿವರಗಳು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲ್ಪಟ್ಟವು!",
      "errorSavingDriverDetails": "ಚಾಲಕ ವಿವರಗಳನ್ನು ಉಳಿಸುವಲ್ಲಿ ದೋಷ",
      "failedToSaveDriverDetails": "ಚಾಲಕ ವಿವರಗಳನ್ನು ಉಳಿಸಲು ವಿಫಲವಾಗಿದೆ",
      "loading": "ಲೋಡ್ ಮಾಡುತ್ತಿದೆ...",
      "nameAsPerLicence": "ಹೆಸರು (ಲೈಸೆನ್ಸ್ ಪ್ರಕಾರ)",
      "enterNameAsPerLicence": "ಲೈಸೆನ್ಸ್ ಪ್ರಕಾರ ಹೆಸರು ನಮೂದಿಸಿ",
      "phoneNumberWork": "ಫೋನ್ ನಂಬರ್ (ಕೆಲಸದ)",
      "experience": "ಅನुभವ",
      "enterExperience": "ಅನुभವವನ್ನು ನಮೂದಿಸಿ (ಉದಾಹರಣೆಗೆ, 5 ವರ್ಷ)",
      "save": "ಉಳಿಸಿ",

      "newPasswordsDoNotMatch": "ಹೊಸ ಪಾಸ್ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ.",
      "passwordValidationError": "ಪಾಸ್ವರ್ಡ್ ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳನ್ನು ಹೊಂದಿರಬೇಕು ಮತ್ತು ಒಂದು ಅಪರ್‌ಕೇಸ್ ಅಕ್ಷರ, ಒಂದು ಲೋಯರ್‌ಕೇಸ್ ಅಕ್ಷರ ಮತ್ತು ಒಂದು ಸಂಖ್ಯೆ ಇರಬೇಕು.",
      "anErrorOccurred": "ಒಂದು ದೋಷ ಸಂಭವಿಸಿತು",
      "updatePassword": "ಪಾಸ್ವರ್ಡ್ ನವೀಕರಿಸಿ",
      "currentPassword": "ಪ್ರಸ್ತುತ ಪಾಸ್ವರ್ಡ್",
      "newPassword": "ಹೊಸ ಪಾಸ್ವರ್ಡ್",
      "reenterNewPassword": "ಹೊಸ ಪಾಸ್ವರ್ಡ್ ಅನ್ನು ಮರುಪ್ರವೇಶಿಸಿ",

      "brand": "ಬ್ರಾಂಡ್",
      "model": "ಮಾಡೆಲ್",
      "refrigerator": "ಫ್ರಿಜ್",
      "selectBrand": "ಬ್ರಾಂಡ್ ಆಯ್ಕೆಮಾಡಿ",
      "selectModel": "ಮಾಡೆಲ್ ಆಯ್ಕೆಮಾಡಿ",
      "selectOption": "ಆಯ್ಕೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "yes": "ಹೌದು",
      "no": "ಇಲ್ಲ",
      "selectRegistrationDate": "ನೋಂದಣಿ ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆಮಾಡಿ",


      "createdAt": "ರಚಿಸಿದ ದಿನಾಂಕ",
    "viewDetails": "ವಿವರಗಳನ್ನು ನೋಡಿ",
    "fetchError": "ಸಾಗಾಟವನ್ನು ಪಡೆಯಲು ದೋಷವಿದೆ",
    "loadingShipments": "ಸಾಗಾಟಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    "shipmentsList": "ಸಾಗಾಟಗಳ ಪಟ್ಟಿ",
    "filter": "ಫಿಲ್ಟರ್",
    "all": "ಎಲ್ಲಾ",
    "pending": "ಪ್ರತೀಕ್ಷೆ",
    "inTransit": "ಪ್ರವಹಿಸು",
    "delivered": "ವಿತರಣಾ",
    "cancelled": "ರದ್ದುಗೊಳಿಸಲಾಗಿದೆ",
    "noShipmentsForStatus": "ಆಯ್ದ ಸ್ಥಿತಿಗೆ ಯಾವುದೇ ಸಾಗಾಟ ಲಭ್ಯವಿಲ್ಲ",


    "fillAllFields": "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ",
  "passwordResetSuccess": "ಪಾಸ್‌ವರ್ಡ್ ಯಶಸ್ವಿಯಾಗಿ ರೀಸೆಟ್ ಮಾಡಲಾಗಿದೆ",
  "unexpectedError": "ಒಂದು ಅಪರಿಷ್ಕೃತ ದೋಷ ಸಂಭವಿಸಿದೆ",
  "enterOTP": "OTP ನಮೂದಿಸಿ",
  "otpPlaceholder": "OTP",
  "newPasswordPlaceholder": "ಹೊಸ ಪಾಸ್‌ವರ್ಡ್",









    },
  },
  ta: {
    translation: {
      "panCard": "பான் கார்ட்",
      "aadhaarCard": "ஆதார் கார்ட்",
      "profilePicture": "ப்ரொபைல் புகைப்படம்",
      "license": "ライசென்ஸ்",
      "companyPanCard": "கம்பனி பான் கார்ட்",
      "gstCard": "ஜிஎஸ்டி கார்ட்",
      "rcFront": "ஆர்‌சி முன்னணி",
      "rcBack": "ஆர்‌சி பின்பக்கம்",
      "vehicleInsurance": "வாகன காப்பீடு",
      "vehiclePollution": "வாகன மாசு",
      "vehicleHealth": "வாகன ஆரோக்கியம்",


      "ecoFriendlyTransport": "சுற்றுச்சூழல் நட்பு போக்குவரத்து",
      "chooseYourOption": "உங்கள் போக்குவரத்து விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
      "electricTruck": "எலக்டிரிக் டிரக்",
      "shared": "பகிரப்பட்ட போக்குவரத்து",
      "public": "பொதுபோக்குவரத்து",
      "electricTruckDescription": "திறமையான லாஜிஸ்டிக்ஸ் க்கான சுமூகமற்ற எமிஷன் டிரக்",
      "sharedDescription": "கார்பூலிங் மூலம் கார்பன் கால் அடையாளத்தை குறைக்கவும்",
      "publicDescription": "பொதுத்துறை போக்குவரத்து தீர்வுகள்",
      "electricTruck1": "மின்சார டிரக் 1",
      "electricTruck2": "மின்சார டிரக் 2",
      "electricTruck3": "மின்சார டிரக் 3",
      "electricTruck4": "மின்சார டிரக் 4",
      "electricTruck5": "மின்சார டிரக் 5",
      "sharedCar1": "பகிரப்பட்ட கார் 1",
      "sharedCar2": "பகிரப்பட்ட கார் 2",
      "sharedCar3": "பகிரப்பட்ட கார் 3",
      "sharedCar4": "பகிரப்பட்ட கார் 4",
      "sharedCar5": "பகிரப்பட்ட கார் 5",
      "bus1": "பஸ் 1",
      "metro1": "மெட்ரோ 1",
      "tram1": "டிராம் 1",
      "bus2": "பஸ் 2",
      "metro2": "மெட்ரோ 2",
      "size": "அளவு",
      "range": "வரம்பு",
      "large": "பெரிய",
      "medium": "மத்திய",
      "small": "சிறிய",
      "km": "கிமீ",
      "na": "N/A",
      "bookNow": "இப்போது புக் செய்யவும்",
      "type": "வாகன வகை",
      "back": "பின்பு செல்லவும்",

      // ==============================================================================

      "selectLanguage": "மொழியை தேர்ந்தெடுக்கவும்",
      "chooseLanguage": "ஒரு மொழியை தேர்ந்தெடுக்கவும்",
      "close": "மூடு",
      "success": "வெற்றி",
      "error": "பிழை",
      "pleaseEnterEmailPassword": "தயவுசெய்து இமெயிலும் கடவுச்சொல்லையும் உள்ளிடவும்.",
      "pleaseEnterEmail": "உங்கள் இமெயில் முகவரியை உள்ளிடவும்.",
      "loginSuccessful": "உள்நுழைவு வெற்றிகரமாக முடிந்தது.",
      "loginFailed": "உள்நுழைவு தோல்வியடைந்தது.",
      "unknownRole": "அறியாத பாத்திரம்.",
      "loginError": "உள்நுழைவு செய்யும்போது பிழை ஏற்பட்டது.",
      "passwordResetLinkSent": "கடவுச்சொல் மீட்டமைப்பு இணைப்பு உங்கள் இமெயிலுக்கு அனுப்பப்பட்டது.",
      "resetLinkError": "மீட்டமைப்பு இணைப்பை அனுப்ப இயலவில்லை.",
      "welcomeBack": "மீண்டும் வருக!",
      "email": "இமெயில்",
      "password": "கடவுச்சொல்",
      "login": "உள்நுழைவு",
      "resetPassword": "கடவுச்சொல் மீட்டமை",
      "forgotAccount": "உங்கள் கணக்கை மறந்துவிட்டீர்களா?",
      "dontHaveAccount": "கணக்கு இல்லையா? இங்கே பதிவு செய்யவும்.",


      "welcome": "வரவேற்கின்றோம்!",
      "message": "நீங்கள் வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்.",

      "createAccount": "கணக்கை உருவாக்கவும்",
      "name": "பெயர்",

      "selectRole": "பங்கை தேர்வு செய்யவும்",
      "driver": "ஓட்டுனர்",
      "transporter": "பரிமாற்றி",
      "manufacturer": "தயாரிப்பாளர்",
      "register": "பதிவுசெய்க",
      "alreadyHaveAccount": "முந்தைய கணக்கு இருக்கிறதா?",
      "allFieldsRequired": "எல்லா புலங்களும் அவசியம்.",
      "registrationSuccess": "பதிவு வெற்றிகரமாக ஆனது",
      "registrationFailed": "பதிவு தோல்வி",
      "errorOccurred": "பிழை ஏற்பட்டது",

      // =================driver Dashboard=========================
      "Updating shipment status for ID": "ID க்கான கடன் நிலையை புதுப்பிக்கிறது",
      "Success": "வெற்றி",
      "Shipment status updated to IN_TRANSIT.": "கடன் நிலை IN_TRANSIT ஆக புதுப்பிக்கப்பட்டது.",
      "Error updating shipment status:": "கடன் நிலையை புதுப்பிக்க பிழை:",
      "Failed to update shipment status": "கடன் நிலையை புதுப்பிக்க முடியவில்லை",
      "Error": "பிழை",
      "Shipment or Transporter details are missing.": "கடன் அல்லது போக்குவரத்து விவரங்கள் இல்லை.",
      "Pick-up Location": "பிக்-அப் இடம்",
      "Drop Location": "கைவிடும் இடம்",
      "Cargo Type": "சரக்கு வகை",
      "Weight": "எடை",
      "Vehicle Type": "வாகன வகை",
      "Pick-up Date": "பிக்-அப் தேதி",
      "Delivery Date": "விநியோக தேதி",
      "Transporter Details": "போக்குவரத்து விவரங்கள்",
      "Company Name": "நிறுவனத்தின் பெயர்",
      "Contact": "தொடர்பு",
      "Email": "மின்னஞ்சல்",
      "Accept": "ஏற்கவும்",
      "Decline": "நிராகரிக்கவும்",
      "shipmentRequests": "கப்பல் கோரிக்கைகள்",
      "completedTrips": "நிறைவடைந்த பயணங்கள்",
      "driverInvoices": "ஓட்டுனர் ரசீதுகள்",
      "driverRewards": "ஓட்டுனர் விருதுகள்",
      "driverFeedback": "ஓட்டுனர் பின்னூட்டம்",

      "personalDetails": "தனிப்பட்ட விவரங்கள்",
      "accountDetailss": "கணக்கு விவரங்கள்",
      "vehicleInfo": "வாகனத் தகவல்",
      "addDriver": "டிரைவரை சேர்",

      "pickupLocation": "பிக்அப் இடம்",
      "dropLocation": "பிடி இடம்",
      "cargoType": "பொருள் வகை",
      "viewMore": "மேலும் காண்க",
      "viewingMoreDetails": "மேலும் விவரங்களை பார்க்கிறேன்:",

      "No completed trips available.": "நிறைவடைந்த பயணங்கள் எதுவும் கிடைக்கவில்லை.",
      "Details for Trip ID: {{id}}": "பயண ஐடியுக்கான விவரங்கள்: {{id}}",
      "Trip ID": "பயண ஐடி",

      "Driver ID is missing. Please save your driver details.": "டிரைவர் ஐடி இல்லை. தயவுசெய்து உங்கள் டிரைவர் விவரங்களை சேமிக்கவும்.",
      "HTTP Error": "HTTP பிழை",
      "Failed to fetch shipment details: {{message}}": "சேருகை விவரங்களை பெற முடியவில்லை: {{message}}",
      "Failed to fetch completed trips: {{message}}": "முடிக்கப்பட்ட பயணங்களை பெற முடியவில்லை: {{message}}",
      "Feature not implemented": "சிறப்பு அம்சம் செயல்படுத்தப்படவில்லை",
      "Section": "பகுதி",
      "Loading...": "ஏற்றுகிறது...",

      "title": "பிழை",
      "failed_to_accept_shipment": "சரக்கை ஏற்க முடியவில்லை",
      "pickup_location_missing": "பிக்கப் இருப்பிட விவரங்கள் கிடைக்கவில்லை",
      "waiting_for_payment": "கட்டணம் செலுத்த காத்திருக்கிறது",
      "shipment_status": "சரக்கு நிலை",
      "navigate_to_pickup": "பிக்கப்புக்கு வழிநடத்துங்கள்",

      "rewards": "பரிசுகள்",
      "rewardType": "பரிசு வகை",
      "rewardAmount": "பரிசு தொகை",

      "invoices": "பிலை",

      "feedback": "பின்வாங்கல்",
      "feedbackLabel": "பின்வாங்கல்",
      "rating": "ரேட்டிங்",
      "No pending shipments available.": "நிலுவையில் உள்ள எவ்வித சரக்குகளும் இல்லை.",


      "transporterInvitation": "போக்குவரத்து அழைப்பு",
      "invitationMessage": "உங்களை ஒரு போக்குவரத்து நிறுவனத்திற்கு சேர அழைக்கப்பட்டுள்ளது. நீங்கள் ஏற்கிறீர்களா?",
      "accept": "ஏற்கவும்",
      "reject": "எதிர்க்கவும்",
      "accepted": "நீங்கள் அழைப்பை ஏற்றுக் கொண்டீர்கள்.",
      "rejected": "நீங்கள் அழைப்பை நிராகரித்தீர்கள்.",

      "itemDelivered": "பொருள் வழங்கப்பட்டது",
      "price": "விலை",

      "home": "முகப்பு",
      "quotations": "மேற்கோள்கள்",
      "shipments": "பொருட்கள்",
      "profile": "சுயவிவரம்",
      "edit": "தொகு",
      "document": "ஆவணங்கள்",
      "companyDetails": "நிறுவன விவரங்கள்",



      "map": "படமேப்பை ஏற்றுகிறது...",
      "failed_to_retrieve_data": "தரவு பெற முடியவில்லை.",
      "loading_map_details": "படமேப்பின் விவரங்களை ஏற்றுவதில் பிழை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
      "driver_location_title": "ஊர்சந்தை இடம்",
      "driver_location_description": "இது சாரதி உள்ள இடம்.",
      "estimated_time": "கணிக்கப்பட்ட நேரம்",
      "minutes": "நிமிடங்கள்",
      "distance": "தூரம்",
      "kilometers": "கிமீ",
      "pickup_location_title": "பிகப் இடம்",
      "start": "துவக்கம்",
      "pickup_location_description": "இது சரக்கு பிகப் இடம்.",





      "accountDetails": {
        "accountHolderName": "கணக்கு வைத்திருப்பவரின் பெயர்",
        "accountType": "கணக்கு வகை",
        "validationError": "சரிபார்ப்பு பிழை",
        "accountHolderNameRequired": "கணக்கு வைத்திருப்பவரின் பெயர் அவசியமாகும்.",
        "selectAccountType": "கணக்கு வகையைத் தேர்ந்தெடுக்கவும்",
        "savings": "சேமிப்பு",
        "current": "தற்போதைய கணக்கு",
        "fixedDeposit": "நிலையான வைப்பு",
        "heading": "கணக்கு விவரங்கள்",
        "bankName": "வங்கியின் பெயர்",
        "ifscCode": "IFSC குறியீடு",
        "accountNumber": "கணக்கு எண்",
        "submit": "சமர்ப்பிக்கவும்",
        "validation": {
          "bankNameRequired": "வங்கியின் பெயர் தேவை.",
          "ifscCodeRequired": "IFSC குறியீடு தேவை.",
          "invalidIfscCode": "சரியான IFSC குறியீட்டை உள்ளிடவும் (11 எழுத்துகள், உதாரணம்: ABCD0123456).",
          "accountNumberRequired": "சரியான கணக்கு எண்ணை உள்ளிடவும் (9-18 எண்கள்)."
        },
        "success": "கணக்கு விவரங்கள் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டன!",
        "error": "கணக்கு விவரங்களை புதுப்பிக்க தோல்வி. தயவுசெய்து மறுபடியும் முயற்சிக்கவும்."
      },

      "validationError": "செல்லுபடியாக்குதல் பிழை",
      "validPanError": "தயவுசெய்து சரியான PAN எண்ணை உள்ளிடவும் (உதாரணம்: ABCDE1234F).",
      "validAadharError": "தயவுசெய்து சரியான Aadhaar எண்ணை உள்ளிடவும் (12 எண்கள்).",
      "dobError": "தயவுசெய்து உங்கள் பிறந்த நாளை தேர்ந்தெடுக்கவும்.",
      "genderError": "தயவுசெய்து உங்கள் பாலினத்தை தேர்ந்தெடுக்கவும்.",
      "personalDetailsSuccess": "பொதுவான விவரங்கள் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!",
      "personalDetailsError": "பொதுவான விவரங்களை புதுப்பிப்பதில் தோல்வி.",
      "panNumber": "PAN எண்",
      "aadharNumber": "Aadhaar எண்",
      "selectDob": "பிறந்த தேதி தேர்ந்தெடுக்கவும்",
      "gender": "பாலினம்",
      "selectGender": "பாலினம் தேர்ந்தெடுக்கவும்",
      "male": "ஆண்",
      "female": "பெண்",
      "other": "மற்றவை",
      "submit": "சமர்ப்பிக்கவும்",

      "vehicleInformation": "வாகன தகவல்",
      "vehicleNumberPlaceholder": "வாகன எண் (எ.கா., KA05MN1234)",
      "vehicleType": "வாகன வகை",
      "selectVehicleType": "வாகன வகையைத் தேர்ந்தெடுக்கவும்",
      "twoWheeler": "2 சக்கர வண்டி",
      "threeWheeler": "3 சக்கர வண்டி",
      "fourWheeler": "4 சக்கர வண்டி",
      "heavyVehicle": "பெரிய வாகனம்",
      "capacityPlaceholder": "திறன் (கிலோகிராம்களில்)",
      "dimensionsPlaceholder": "அளவுகள் (எ.கா., 22x8x10)",
      "selectInsuranceValidity": "காப்பீட்டு செல்லுபடியாகும் காலத்தைத் தேர்ந்தெடுக்கவும்",
      "selectFitnessValidity": "தகுதி சான்றிதழ் செல்லுபடியாகும் காலத்தைத் தேர்ந்தெடுக்கவும்",

      "vehicleInfoSubmitted": "வாகனத் தகவல் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!",
      "networkError": "பிணைய பிழை: சர்வருடன் இணைக்க முடியவில்லை.",

      "searchDrivers": "ஓட்டுநர்களை தேடவும்",

      "documents": {
        "profileDocuments": "ப்ரொபைல் ஆவணங்கள்",
        "companyDocuments": "கம்பெனி ஆவணங்கள்",
        "vehicleDocuments": "வாகன ஆவணங்கள்",
        "upload": "{{documentType}} பதிவேற்றம்",
        "notUploaded": "பதிவேற்றப்படவில்லை",
        "submit": "சமர்ப்பிக்கவும்",
        "success": "வெற்றி",
        "cancelled": "ரத்து செய்யப்பட்டது",
        "failedToUpload": "ஆவணங்களை பதிவேற்றுவதில் தோல்வி",
        "missingDocuments": "இல்லாத ஆவணங்கள்",
        "missingDocumentsMessage": "கீழ்காணும் ஆவணங்கள் இல்லாமல் இருக்கின்றன:\n\nப்ரொபைல் ஆவணங்கள்: {{profileDocuments}}\nகம்பெனி ஆவணங்கள்: {{companyDocuments}}\nவாகன ஆவணங்கள்: {{vehicleDocuments}}",
        "allDocumentsSubmitted": "எல்லா ஆவணங்களும் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டன.",
        "noFilesSelected": "ஏதும் கோப்புகள் தேர்வு செய்யப்படவில்லை.",
        "error": "பிழை",
        "uploadSuccess": "ஆவணங்கள் வெற்றிகரமாக பதிவேற்றப்பட்டன!",
        "uploadError": "ஆவணங்களை பதிவேற்றுவதில் தோல்வி",
        "uploadDocuments": "பத்திரங்களை பதிவேற்றுக",
        "uploadingAll": "அனைத்தையும் பதிவேற்றம் செய்கிறது",
        "documentsUnderConstruction": "பத்திரங்கள் தற்போது கட்டுமானத்தில் உள்ளன.",
        "edit": "திருத்தவும்",
        "editFunctionalityUnderConstruction": "திருத்த செயல்பாடு தற்போது கட்டுமானத்தில் உள்ளது.",
        "selectFile": "கோப்பு தேர்ந்தெடுக்கவும்"
      },

      "companyName": "நிறுவனத்தின் பெயர்",
      "enterCompanyName": "நிறுவனத்தின் பெயரை உள்ளிடவும்",
      "enterEmail": "மின்னஞ்சலை உள்ளிடவும்",
      "phoneNumber": "தொலைபேசி எண்",
      "enterPhoneNumber": "தொலைபேசி எண்ணை உள்ளிடவும்",
      "address": "முகவரி",
      "enterAddress": "முகவரியை உள்ளிடவும்",
      "registrationNumber": "பதிவு எண்",
      "enterRegistrationNumber": "பதிவு எண்ணை உள்ளிடவும்",
      "pleaseFillAllFields": "தயவுசெய்து அனைத்து புலங்களையும் நிரப்பவும்.",
      "detailsSubmittedSuccessfully": "நிறுவன விவரங்கள் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டன!",

      // ===============================TRACKING-APP============================

      "shipmentNumber": "சரக்கு எண்",
      "sender": "அனுப்புநர்",
      "receiver": "பெறுநர்",
      "time": "நேரம்",
      "status": "நிலை",
      "viewLocation": "இடத்தை பார்க்கவும்",
      "allActivities": "அனைத்து செயல்பாடுகள்",
      "addShipment": "சரக்கைச் சேர்க்கவும்",
      "oldShipments": "பழைய சரக்குகள்",
      "payments": "கொடுப்பனவுகள்",
      "tracking": "கண்காணிப்பு",
      "insurances": "காப்பீட்டுகள்",

      "shipmentID": "சரக்கு ஐடி",
      "contactName": "தொடர்பு பெயர்",
      "cargoWeight": "சரக்கு எடை",
      "pickupDate": "பிக்அப் தேதி",
      "dropDate": "கைவிடும் தேதி",
      "contactPhone": "தொடர்பு தொலைபேசி",

      "errorFetchingDetails": "சரக்கு விவரங்களை பெறுவதில் பிழை",

      "shipmentForm": {
        "title": "சரக்கு விவரங்கள் படிவம்",
        "cargoType": "சரக்கு வகை",
        "cargoWeight": "சரக்கு எடை",
        "cargoDimensions": "சரக்கு பரிமாணங்கள்",
        "distance": "தூரம்",
        "quotedPrice": "கூறிய விலை",
        "estimatedPrice": "மூலமான விலை",
        "pickupDate": "பிக்அப் தேதி",
        "deliveryDate": "வகுப்பு தேதி",
        "contactDetails": "தொடர்பு விவரங்கள்",
        "contactName": "தொடர்பு பெயர்",
        "contactPhone": "தொடர்பு தொலைபேசி",
        "pickupAddress": "பிக்அப் முகவரி",
        "pickupPoint": "பிக்அப் புள்ளி",
        "pickupHouseNo": "வீட்டின் எண்",
        "pickupStreetName": "வீதி பெயர்",
        "pickupState": "மாநிலம்",
        "pickupPostalCode": "பின்கோடு",
        "pickupCountry": "நாடு",
        "dropAddress": "வெளியேற்ற முகவரி",
        "dropPoint": "வெளியேற்ற புள்ளி",
        "dropHouseNo": "வீட்டின் எண்",
        "dropStreetName": "வீதி பெயர்",
        "dropState": "மாநிலம்",
        "dropPostalCode": "பின்கோடு",
        "dropCountry": "நாடு",
        "submitButton": "சமர்ப்பிக்கவும்",
        "shipmentDataSubmitted": "சரக்கு தரவு வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது",
        "shipmentDataFailed": "சரக்கு தரவை சமர்ப்பிக்க தவறியது",
        "geocodeFailure": "பிக்அப் அல்லது கைவிடும் முகவரியின் புவிசார் குறியீடு தோல்வியடைந்தது.",
        "townName": "நகரத்தின் பெயர்"
      },

      // ===============================TRANSPORT DASHBOARD============================

      "Dashboard": {
        "heading": "டாஷ்போர்டு",
        "shipments": "சரக்குகள்",
        "completedTrips": "முடிக்கப்பட்ட பயணங்கள்",
        "invoices": "விலைப்பட்டியல்",
        "feedback": "கருத்து"
      },
      "SubmitQuotation": {
        "header": "மேற்கோள்களை சமர்ப்பிக்கவும்",
        "placeholder": {
          "quotedPrice": "மேற்கோள் விலை",
          "validityPeriod": "சரியான காலம் (yyyy-MM-ddTHH:mm:ss)"
        },
        "quoteStatus": "மேற்கோள் நிலை:",
        "status": {
          "pending": "நிலுவையில் உள்ளது",
          "accepted": "ஏற்கப்பட்டது",
          "rejected": "நிராகரிக்கப்பட்டது"
        },
        "submitButton": "மேற்கோள்களை சமர்ப்பிக்கவும்",
        "success": "மேற்கோள் வெற்றிகரமாக உருவாக்கப்பட்டது!",
        "failure": "மேற்கோள் உருவாக்க முடியவில்லை",
        "error": "ஒரு பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்."
      },
      "completedTrip": {
        "heading": "நிறைவு செய்யப்பட்ட பயணங்கள்",
        "cargo": "சரக்கு",
        "pickup": "பிக்கப்",
        "drop": "கைவிடு"
      },

      "quoteForm": {
        "manufacturerDetails": "உற்பத்தியாளர் விவரங்கள்",
        "shipmentDetails": "கப்பல் விவரங்கள்",
        "quoteFormTitle": "மதிப்பீட்டு படிவம்",
        "name": "பெயர்",
        "company": "நிறுவனம்",
        "phone": "தொலைபேசி",
        "email": "மின்னஞ்சல்",
        "cargoType": "சரக்கு வகை",
        "pickup": "பிக்கப்",
        "drop": "கைவிடு",
        "dimensions": "பரிமாணங்கள்",
        "weight": "எடை",
        "vehicleType": "வாகன வகை",
        "quotedPricePlaceholder": "மதிப்பீட்டுக்கான விலை",
        "validityPeriodPlaceholder": "செல்லுபடியாகும் காலம் (நாட்களில்)",
        "sendQuoteButton": "மதிப்பீட்டை அனுப்பு",
        "errorTitle": "பிழை",
        "errorMessage": "மதிப்பீட்டை அனுப்புவதற்கு முன் அனைத்து புலங்களையும் நிரப்பவும்.",
        "successTitle": "மதிப்பீடு அனுப்பப்பட்டது",
        "successMessage": "உங்கள் மதிப்பீடு {{quotedPrice}} {{validityPeriod}} நாட்களுக்கு செல்லுபடியாகும்.",
        "ok": "சரி",
        "validityDate": "செல்லுதிகட்ட தேதி",
        "assignDriver": " ஓட்டுனரை நியமிக்கவும்",
        "pendingApproval": "அனுமதிக்க பாக்கி உள்ளது",
        "sendQuote": "கோட் அனுப்பு",
        "decline": "நிராகரிக்கவும்",
        "transporterIdMissing": "பொருள்தொடர்பாளர் ஐடி இல்லாமல் உள்ளது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
        "sendFailure": "கோட் அனுப்புவதில் தோல்வி. தயவுசெய்து மீண்டும் முயற்சிக்கவும்."
      
      },

      "feedbackScreen": {
        "heading": "பின்விளைவுகள்",
        "reviewer": "மூல்யமிடுபவர்",
        "rating": "ரேட்டிங்",
        "comment": "கருத்து"
      },
      "invoicesScreen": {
        "heading": "பில்",
        "invoice": "பில்",
        "amount": "ரூபாய்",
        "status": "நிலமை"
      },
      "shipmentScreen": {
        "heading": "கப்பல் கோரிக்கைகள்",
        "cargoType": "சேமிப்பு வகை",
        "pickup": "பிகப்",
        "drop": "இறக்கம்",
        "quoteButton": "கொடுக்கும்",
        "quote": "கோட்",
        "waitingForApproval": "அனுமதிக்க காத்திருப்பு",
        "quoteAccepted": "கோட் ஏற்கப்பட்டது",
        "noPendingShipments": "எந்த நேர்த்தியான விநியோகங்களும் இல்லை"
      },

      "Invoice": "இன்வாய்ஸ்",
      "Date": "தேதி",
      "Bill To": "பில் பெறுபவர்",
      "Name": "பெயர்",
      "Address": "முகவரி",
      "Phone": "தொலைபேசி",
      "Items": "பொருட்கள்",
      "Description": "விளக்கம்",
      "Qty": "அளவு",
      "Price": "விலை",
      "Total": "மொத்தம்",

      "Payment Summary": "கட்டண சுருக்கம்",
      "Subtotal": "கூட்டுத்தொகை",
      "Service Fee": "சேவை கட்டணம்",
      "Tax": "வரி",


      "loadingPayments": "பணம் ஏற்றப்படுகிறது",
      "failedToFetchPayments": "பணம் பெற முடியவில்லை",
      "shipmentId": "பரிவர்த்தனை ஐடி",
      "unknownStatus": "தெரியவில்லை",
      "from": "இப்போது",
      "to": "க்கு",
      "orderId": "ஆர்டர் ஐடி",
      "retry": "மீண்டும் முயற்சிக்கவும்",
      "noPaymentsFound": "பணம் கிடைக்கவில்லை",


      "payment": {
        "title": "பணம் விவரங்கள்",
        "amountLabel": "சிலுத்திய தொகை:",
        "shipmentIdLabel": "அறிகுறி ஐடி:",
        "transporterLabel": "போக்குவரத்து:",
        "cargoTypeLabel": "பொருட்களின் வகை:",
        "proceedToPay": "பணம் செலுத்த புறப்படவும்",
        "paymentFailed": "பணம் செலுத்துவதில் தோல்வி",
        "invalidDetails": "தவறான பணம் செலுத்தும் விவரங்கள். தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
        "goBack": "திரும்ப செல்லவும்",
        "success": "பணம் செலுத்தப்பட்டது வெற்றிகரமாக!"
      },


      "AssignDriverScreen": {
    "heading": "சிப்மென்ட் மற்றும் ஓட்டுனர் விவரங்கள்",
    "shipmentDetails": {
      "cargoType": "பொருள் வகை",
      "pickupPoint": "பிக்அப் பாயின்ட்",
      "dropPoint": "ட்ராப் பாயின்ட்",
      "status": "நிலை"
    },
    "driverDetails": {
      "driverName": "ஓட்டுனர் பெயர்:",
      "phone": "தொலைபேசி:"
    },
    "status": {
      "accepted": "ஒப்புக்கொள்ளப்பட்டது",
      "pending": "ஓட்டுனரை காத்திருக்கின்றனர்..."
    },
    "buttons": {
      "sendRequest": "கோரிக்கையை அனுப்பவும்",
      "assignVehicle": "வாகனத்தை ஒதுக்கவும்"
    },
    "errors": {
      "fetchDrivers": "ஓட்டுனர்களை பெற முடியவில்லை. தயவுசெய்து பிறகு மீண்டும் முயற்சிக்கவும்.",
      "fetchAssignment": "ஒதுக்கீடு நிலை மற்றும் ஓட்டுனர் விவரங்களை பெற முடியவில்லை. தயவுசெய்து பிறகு மீண்டும் முயற்சிக்கவும்.",
      "assignDrivers": "ஓட்டுனர்களை ஒதுக்க முடியவில்லை. தயவுசெய்து பிறகு மீண்டும் முயற்சிக்கவும்.",
      "selectDrivers": "தயவுசெய்து குறைந்தது ஒரு ஓட்டுனரை தேர்ந்தெடுக்கவும்."
    }
  },

  "AssignVehicleScreen": {
    "heading": "சிப்மெண்ட் விவரங்கள்",
    "shipmentDetails": "சிப்மெண்ட் விவரங்கள்",
    "cargoType": "பொருள் வகை",
    "pickupPoint": "பிக்அப் பாயின்ட்",
    "dropPoint": "ட்ராப் பாயின்ட்",
    "driverDetails": "ஓட்டுனர் விவரங்கள்",
    "name": "பெயர்",
    "phone": "தொலைபேசி",
    "vehicleDetails": "வாகன விவரங்கள்",
    "vehicleNumber": "வாகன எண்",
    "vehicleType": "வாகன வகை",
    "payNow": "இப்போது கட்டணம் செலுத்தவும்",
    "fetchDetails": "விவரங்களை பெற முடியவில்லை. தயவுசெய்து பிறகு மீண்டும் முயற்சிக்கவும்."
  },

      // =================QuotationDetailsScreen=========================
      "QuotationDetails": {
        "heading": "மேற்கோள் விவரங்கள்",
        "quotationInformation": "மேற்கோள் தகவல்",
        "companyName": "நிறுவனத்தின் பெயர்",
        "quotationNumber": "மேற்கோள் எண்",
        "date": "தேதி",
        "remarks": "கருத்துக்கள்",
        "transporterInformation": "போக்குவரத்து தகவல்",
        "company": "நிறுவனம்",
        "email": "மின்னஞ்சல்",
        "phone": "தொலைபேசி",
        "registration": "பதிவு",
        "address": "முகவரி",
        "shipmentInformation": "சரக்கு தகவல்",
        "cargoType": "சரக்கு வகை",
        "dimensions": "பரிமாணங்கள்",
        "weight": "எடை",
        "kg": "கிலோ",
        "vehicleTypeRequired": "தேவையான வாகன வகை",
        "pickupPoint": "பிக்கப் இடம்",
        "dropPoint": "கைவிடும் இடம்",
        "distance": "தூரம்",
        "km": "கி.மீ",
        "pickupDate": "பிக்கப் தேதி",
        "deliveryDate": "விநியோக தேதி",
        "quotedPrice": "மேற்கோள் விலை",
        "status": "நிலை",
        "validityPeriod": "செல்லுபடியாகும் காலம்",
        "payNow": "இப்போது செலுத்துங்கள்",
        "loadingQuotationDetails": "மேற்கோள் விவரங்களை ஏற்றுகிறது...",
        "failedToLoadQuotationDetails": "மேற்கோள் விவரங்களை ஏற்ற முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
        "errorFetchingQuotationDetails": "மேற்கோள் விவரங்களை பெறுவதில் பிழை.",
        "initiatingPayment": "மேற்கோள் ஐடி: {{id}} க்கு செலுத்துதல் தொடங்குகிறது",
        "notAvailable": "கிடைக்கவில்லை",
        "shipmentId": "அறிகுறி ஐடி",
        "shipmentStatus": "அறிகுறியின் நிலை",
        "accept": "ஏற்றுக்கொள்ளவும்"
      },

      "QuotationList": {
        "transporter": "போக்குவரத்தாளர்",
        "registration": "பதிவு",
        "status": "நிலை",
        "price": "விலை",
        "viewDetails": "கட்டணத்திற்கான விவரங்களைப் பார்க்கவும்",
        "loadingQuotations": "மேற்கோள்கள் ஏற்றுகிறது...",
        "noQuotations": "மேற்கோள்கள் இல்லை.",
        "errorFetchingQuotations": "மேற்கோள்களை பெறுவதில் பிழை.",
        "noQuotationsAvailable": "இந்த கப்பலுக்கு எந்த மேற்கோள்களும் இல்லை.",
        "quotationsForShipmentId": "அறிகுறி ஐடி-க்கான மேற்கோள்கள்"
      },

      "ShipmentList": {
        "status": "நிலையமைப்பு",
        "createdAt": "உருவாக்கப்பட்ட நாள்",
        "viewQuotations": "குறிப்புகளை பார்க்கவும்",
        "loadingShipments": "போட்டிகளை ஏற்றுகிறது...",
        "noShipments": "எந்த போக்குவரத்து இல்லை.",
        "errorFetchingShipments": "போக்குவரத்துகளை பெறுவதில் பிழை.",
        "transportersQuotations": "போக்குவரத்து நிறுவனங்களின் மேற்கோள்கள்"

      },

      "shipmentDetails": {
        "shipmentDetails": "சேனல் விவரங்கள்",
        "basicInformation": "அடிப்படை தகவல்கள்",
        "shipmentID": "சேனல் ஐடி",
        "cargoType": "பொருட்களின் வகை",
        "dimensions": "அளவைகள்",
        "cargoWeight": "பொருட்களின் எடை",
        "statusPricing": "நிலை மற்றும் விலை நிர்ணயம்",
        "shipmentStatus": "சேனல் நிலை",
        "quotedPrice": "கூறப்பட்ட விலை",
        "estimatedPrice": "கணிக்கப்பட்ட விலை",
        "distance": "தூரம்",
        "pickupDelivery": "பிக்அப் மற்றும் டெலிவரி",
        "pickupPoint": "பிக்அப் புள்ளி",
        "dropPoint": "டிராப் புள்ளி",
        "pickupDate": "பிக்அப் தேதி",
        "deliveryDate": "டெலிவரி தேதி",
        "contactDetails": "தொடர்பு விவரங்கள்",
        "contactName": "தொடர்பு பெயர்",
        "contactNumber": "தொடர்பு எண்",
        "additionalInformation": "கூடுதல் தகவல்",
        "createdAt": "சரிபார்க்கப்பட்டது",
        "updatedAt": "புதுப்பிக்கப்பட்டது",
        "notAvailable": "கிடைக்கவில்லை",
        "loadingShipmentDetails": "சேனல் விவரங்களை ஏற்றுகிறது...",
        "noShipmentDetails": "சேனல் விவரங்கள் கிடைக்கவில்லை"
      },

      "shipmentDetail": {
        "loadingShipments": "சேனல்களை ஏற்றுகிறது...",
        "noShipmentDetails": "சேனல் விவரங்கள் கிடைக்கவில்லை.",
        "transportersQuotations": "பொருளாதாரர்கள் குறித்த கோரிக்கைகள்",
        "viewQuotations": "கோரிக்கைகளை பார்க்கவும்",
        "status": "நிலை",
        "createdAt": "உருவாக்கப்பட்ட தேதி"
      },

      "Quotations": {
        "error": "பிழை",
        "enterQuotedPrice": "உள்ளீடு செய்யும் விலையை உள்ளிடவும்",
        "selectValidityPeriod": "சார்ந்த காலத்தை தேர்ந்தெடுக்கவும்",
        "quotedPrice": "குறிப்பு விலை",
        "validityPeriod": "சார்ந்த காலம்",
        "submitQuotation": "குறிப்பை சமர்ப்பிக்கவும்",
        "success": "வெற்றி",
        "quotationSubmitted": "குறிப்பு வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது.",
        "failedSubmitQuotation": "குறிப்பு சமர்ப்பிப்பதில் தோல்வி",
        "anErrorOccurred": "ஒரு பிழை ஏற்பட்டுள்ளது"
      },

      "header": {

        "yourLocation": "உங்கள் இடம்",
        "locationExample": "குகட்பள்ளி, ஹைதராபாத்",
        "language": "மொழி"


      },
      // ===============================================SETTINGS===============================================

      "gstNumber": "GST எண்",
      "enterGstNumber": "GST எண் உள்ளிடவும்",
      "cinNumber": "CIN எண்",
      "enterCinNumber": "CIN எண் உள்ளிடவும்",
      "companyNameRequired": "கம்பனியின் பெயர் தேவை.",
      "enterValidEmail": "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.",
      "enterValidPhoneNumber": "சரியான தொலைபேசி எண்மொன்றை உள்ளிடவும் (10-15 எண்கள்).",
      "addressRequired": "முகவரி தேவை.",
      "enterValidGst": "சரியான GST எண் உள்ளிடவும் (எ.கா: 22ABCDE1234F1Z5).",
      "enterValidCin": "சரியான CIN எண் உள்ளிடவும் (எ.கா: L12345AB1234XYZ123456).",
      "companyDetailsSubmitted": "கம்பனி விவரங்கள் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!",
      "failedToSubmitDetails": "கம்பனி விவரங்களை சமர்ப்பிக்க தவறியிருக்கின்றது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",


      "userIdRetrieved": "AsyncStorage இலிருந்து பயனர் ID பெற்றது:",
      "userIdNotFound": "பயனர் ID கிடைக்கவில்லை. தயவுசெய்து மீண்டும் புகுபதிகை செய்யவும்.",
      "errorRetrievingUserId": "பயனர் ID பெறுவதில் பிழை",
      "failedToRetrieveUserId": "பயனர் ID பெறுவதில் தோல்வி.",
      "fillAllFieldsBeforeSaving": "சேமிப்பதற்கு முன் அனைத்து புலங்களையும் பூர்த்தி செய்யவும்.",
      "userIdNotAvailable": "பயனர் ID கிடைக்கவில்லை. தயவுசெய்து மீண்டும் புகுபதிகை செய்யவும்.",
      "driverIdSaved": "AsyncStorage இல் ஓட்டுனர் ID சேமிக்கப்பட்டது:",
      "driverDetailsSavedSuccessfully": "ஓட்டுனர் விவரங்கள் வெற்றிகரமாக சேமிக்கப்பட்டது!",
      "errorSavingDriverDetails": "ஓட்டுனர் விவரங்களை சேமிப்பதில் பிழை",
      "failedToSaveDriverDetails": "ஓட்டுனர் விவரங்களை சேமிப்பதில் தோல்வி",
      "loading": "ஊடகம் செய்கிறது...",
      "nameAsPerLicence": "பெயர் (பட்டயப்படி)",
      "enterNameAsPerLicence": "பட்டயப்படி பெயரை உள்ளிடவும்",
      "phoneNumberWork": "போன் எண் (வேலை)",
      "experience": "பயனிருப்பு",
      "enterExperience": "பயனிருப்பை உள்ளிடவும் (எ.கா., 5 ஆண்டுகள்)",
      "save": "சேமிக்கவும்",
      "newPasswordsDoNotMatch": "புதிய கடவுச்சொற்கள் பொருந்தவில்லை.",
      "passwordValidationError": "கடவுச்சொல் குறைந்தபட்சம் 6 எழுத்துகளாக இருக்க வேண்டும், ஒரு மேல் எழுத்து, ஒரு கீழ் எழுத்து மற்றும் ஒரு எண் வேண்டும்.",
      "anErrorOccurred": "ஒரு பிழை ஏற்பட்டது",
      "updatePassword": "கடவுச்சொல்லை புதுப்பிக்கவும்",
      "currentPassword": "தற்போதைய கடவுச்சொல்",
      "newPassword": "புதிய கடவுச்சொல்",
      "reenterNewPassword": "புதிய கடவுச்சொல்லை மீண்டும் பதிவு செய்யவும்",

      "brand": "பிராண்ட்",
      "model": "மாதிரி",
      "refrigerator": "குளிர்சாதனப் பெட்டி",
      "selectBrand": "பிராண்டை தேர்ந்தெடுக்கவும்",
      "selectModel": "மாதிரியை தேர்ந்தெடுக்கவும்",
      "selectOption": "விருப்பத்தை தேர்ந்தெடுக்கவும்",
      "yes": "ஆம்",
      "no": "இல்லை",
      "selectRegistrationDate": "பதிவு தேதியைத் தேர்ந்தெடுக்கவும்",

      "createdAt": "உருவாக்கப்பட்ட தேதி",
    "viewDetails": "விவரங்களை காணவும்",
    "fetchError": "கடன் பெட்டிகளை பெறுவதில் பிழை",
    "loadingShipments": "சிறப்பம்சங்களை ஏற்று வருகிறது...",
    "shipmentsList": "சிறப்பம்சங்களின் பட்டியல்",
    "filter": "பரிசோதனை",
    "all": "அனைத்து",
    "pending": "நிலுவை",
    "inTransit": "பரிமாற்றம்",
    "delivered": "பரிமாற்றம்",
    "cancelled": "ரத்துசெய்யப்பட்டது",
    "noShipmentsForStatus": "தேர்ந்த நிலைக்கான கப்பல்கள் எதுவும் இல்லை",

    "fillAllFields": "தயவுசெய்து அனைத்து புலங்களையும் பூர்த்தி செய்யவும்",
    "passwordResetSuccess": "பாஸ்வேர்டு வெற்றிகரமாக மீட்டமைக்கப்பட்டது",
    "unexpectedError": "ஒரு எதிர்பாராத பிழை ஏற்பட்டது",
    "enterOTP": "OTP உள்ளிடவும்",
    "otpPlaceholder": "OTP",
    "newPasswordPlaceholder": "புதிய பாஸ்வேர்டு",





    },
  },
  ml: {
    translation: {
      "panCard": "പാൻ കാർഡ്",
      "aadhaarCard": "ആധാർ കാർഡ്",
      "profilePicture": "പ്രൊഫൈൽ ചിത്രം",
      "license": "ലൈസൻസ്",
      "companyPanCard": "കമ്പനി പാൻ കാർഡ്",
      "gstCard": "ജിഎസ്‌ടി കാർഡ്",
      "rcFront": "ആർ‌സി ഫ്രണ്ട്",
      "rcBack": "ആർ‌സി ബാക്ക്",
      "vehicleInsurance": "വാഹന ഇൻഷുറൻസ്",
      "vehiclePollution": "വാഹന മലിനീകരണം",
      "vehicleHealth": "വാഹന ആരോഗ്യം",


      "ecoFriendlyTransport": "പരിസ്ഥിതി സൗഹൃദ ഗതാഗതം",
      "chooseYourOption": "നിങ്ങളുടെ ഗതാഗത ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക",
      "electricTruck": "എലക്‌ട്രിക് ട്രക്കുകൾ",
      "shared": "പങ്കിടലായ ഗതാഗതം",
      "public": "പൊതു ഗതാഗതം",
      "electricTruckDescription": "സുസ്ഥിരമായ ലോജിസ്റ്റിക്ക്സിനായി ശൂന്യ-എമിഷൻ ട്രക്കുകൾ",
      "sharedDescription": "കാർപൂളിംഗ് മുഖേന കാർബൺ പാദചിഹ്നം കുറയ്ക്കുക",
      "publicDescription": "പൊതു ഗതാഗത പരിഹാരങ്ങൾ",
      "electricTruck1": "ഇലക്ട്രിക് ട്രക്ക് 1",
      "electricTruck2": "ഇലക്ട്രിക് ട്രക്ക് 2",
      "electricTruck3": "ഇലക്ട്രിക് ട്രക്ക് 3",
      "electricTruck4": "ഇലക്ട്രിക് ട്രക്ക് 4",
      "electricTruck5": "ഇലക്ട്രിക് ട്രക്ക് 5",
      "sharedCar1": "പങ്കിട്ട കാറ് 1",
      "sharedCar2": "പങ്കിട്ട കാറ് 2",
      "sharedCar3": "പങ്കിട്ട കാറ് 3",
      "sharedCar4": "പങ്കിട്ട കാറ് 4",
      "sharedCar5": "പങ്കിട്ട കാറ് 5",
      "bus1": "ബസ് 1",
      "metro1": "മെട്രോ 1",
      "tram1": "ട്രാം 1",
      "bus2": "ബസ് 2",
      "metro2": "മെട്രോ 2",
      "large": "പൊതുതായ",
      "medium": "മധ്യകലം",
      "small": "ചെറിയ",
      "km": "കി.മീ",
      "na": "N/A",
      "size": "വലുപ്പം",
      "range": "പരിധി",
      "bookNow": "ഇപ്പൊൾ ബുക്ക് ചെയ്യുക",
      "type": "വാഹന തരം",
      "back": "പിന്നോട്ടു പോകുക",

      // ===================================================

      "selectLanguage": "ഭാഷ തിരഞ്ഞെടുക്കുക",
      "chooseLanguage": "ഒരു ഭാഷ തിരഞ്ഞെടുക്കുക",
      "close": "അടയ്ക്കുക",
      "success": "വിജയം",
      "error": "പിശക്",
      "pleaseEnterEmailPassword": "ദയവായി ഇമെയിൽയും പാസ്വേഡും നൽകുക.",
      "pleaseEnterEmail": "നിങ്ങളുടെ ഇമെയിൽ വിലാസം നൽകുക.",
      "loginSuccessful": "ലോഗിൻ വിജയകരമായി.",
      "loginFailed": "ലോഗിൻ പരാജയപ്പെട്ടു.",
      "unknownRole": "അജ്ഞാത റോൾ.",
      "loginError": "ലോഗിൻ ചെയ്യുന്നതിനിടെ പിശക് സംഭവിച്ചു.",
      "passwordResetLinkSent": "പാസ്വേഡ് റീസെറ്റ് ലിങ്ക് നിങ്ങളുടെ ഇമെയിലിലേക്ക് അയച്ചു.",
      "resetLinkError": "റീസെറ്റ് ലിങ്ക് അയക്കുന്നതിൽ പരാജയപ്പെട്ടു.",
      "welcomeBack": "വെൽക്കം ബാക്ക്!",
      "email": "ഇമെയിൽ",
      "password": "പാസ്വേഡ്",
      "login": "ലോഗിൻ",
      "resetPassword": "പാസ്വേഡ് റീസെറ്റ് ചെയ്യുക",
      "forgotAccount": "നിങ്ങളുടെ അക്കൗണ്ട് മറന്നോ?",
      "dontHaveAccount": "അക്കൗണ്ട് ഇല്ലേ? ഇവിടെ സൈൻ അപ് ചെയ്യുക.",


      "welcome": "സ്വാഗതം!",
      "message": "നിങ്ങൾ വിജയകരമായി ലോഗിൻ ചെയ്തു.",

      "createAccount": "ഖാതਾ സൃഷ്‌ടിക്കുക",
      "name": "പേരു",

      "selectRole": "ഭാരവഹണം തിരഞ്ഞെടുക്കുക",
      "driver": "ഡ്രൈവർ",
      "transporter": "പങ്കാളി",
      "manufacturer": "തയാറാക്കുന്നവൻ",
      "register": "പதിവായിക്കുക",
      "alreadyHaveAccount": "മുമ്പേ അക്കൗണ്ട് ഉണ്ടോ?",
      "allFieldsRequired": "എല്ലാ ഫീൽഡുകളും ആവശ്യമാണ്.",
      "registrationSuccess": "പതിവാക്കൽ വിജയകരമായിരുന്നു",
      "registrationFailed": "പതിവാക്കൽ പരാജയപ്പെട്ടു",
      "errorOccurred": "പിഴവ് സംഭവിച്ചു",

      // =================driver Dashboard=========================
      "Updating shipment status for ID": "ഐഡിക്കായി കയറ്റുമതി നില പുതുക്കുന്നു",
      "Success": "വിജയം",
      "Shipment status updated to IN_TRANSIT.": "കയറ്റുമതി നില IN_TRANSIT ആയി പുതുക്കി.",
      "Error updating shipment status:": "കയറ്റുമതി നില പുതുക്കുന്നതിനിടെ പിശക്:",
      "Failed to update shipment status": "കയറ്റുമതി നില പുതുക്കൽ പരാജയപ്പെട്ടു",
      "Error": "പിശക്",
      "Shipment or Transporter details are missing.": "കയറ്റുമതി അല്ലെങ്കിൽ ഗതാഗതക്കാരന്റെ വിവരങ്ങൾ കാണില്ല.",
      "Pick-up Location": "പിക്കപ്പ് സ്ഥലം",
      "Drop Location": "ഡ്രോപ്പ് സ്ഥലം",
      "Cargo Type": "കാർഗോ തരം",
      "Weight": "ഭാരം",
      "Vehicle Type": "വാഹന തരം",
      "Pick-up Date": "പിക്കപ്പ് തീയതി",
      "Delivery Date": "ഡെലിവറി തീയതി",
      "Transporter Details": "ഗതാഗതക്കാരന്റെ വിശദാംശങ്ങൾ",
      "Company Name": "കമ്പനിയുടെ പേര്",
      "Contact": "സമ്പർക്കം",
      "Email": "ഇമെയിൽ",
      "Accept": "അംഗീകരിക്കുക",
      "Decline": "നിഷേധിക്കുക",

      "shipmentRequests": "കയറ്റം അഭ്യർത്ഥനകൾ",
      "completedTrips": "പൂർത്തിയാക്കിയ യാത്രകൾ",
      "driverInvoices": "ഡ്രൈവർ ഇൻവോയിസുകൾ",
      "driverRewards": "ഡ്രൈവർ റിവാർഡുകൾ",
      "driverFeedback": "ഡ്രൈവർ പ്രതികരണം",

      "personalDetails": "വ്യക്തിഗത വിവരങ്ങൾ",
      "accountDetailss": "അക്കൗണ്ട് വിശദാംശങ്ങൾ",
      "vehicleInfo": "വാഹന വിവരങ്ങൾ",
      "addDriver": "ഡ്രൈവർ ചേർക്കുക",

      "pickupLocation": "പിക്കപ്പ് സ്ഥലം",
      "dropLocation": "ഡ്രോപ്പ് സ്ഥലം",
      "cargoType": "കാർഗോ തരവ്",
      "viewMore": "കൂടുതൽ കാണുക",
      "viewingMoreDetails": "കൂടുതൽ വിശദാംശങ്ങൾ കാണുന്നു:",
      "No completed trips available.": "പൂർണ്ണമായ യാത്രകൾ ഒന്നും ലഭ്യമല്ല.",
      "Details for Trip ID: {{id}}": "യാത്രാ ഐഡിയുടെ വിശദാംശങ്ങൾ: {{id}}",
      "Trip ID": "യാത്രാ ഐഡി",

      "Driver ID is missing. Please save your driver details.": "ഡ്രൈവർ ഐഡി ഇല്ല. ദയവായി നിങ്ങളുടെ ഡ്രൈവർ വിവരങ്ങൾ സംരക്ഷിക്കുക.",
      "HTTP Error": "HTTP പിഴവ്",
      "Failed to fetch shipment details: {{message}}": "ഷിപ്പ്മെന്റ് വിശദാംശങ്ങൾ കൊണ്ടുവരാൻ പരാജയപ്പെട്ടു: {{message}}",
      "Failed to fetch completed trips: {{message}}": "പൂർണമായ യാത്രകൾ കൊണ്ടുവരാൻ പരാജയപ്പെട്ടു: {{message}}",
      "Feature not implemented": "ഫീച്ചർ നടപ്പിലാക്കിയിട്ടില്ല",
      "Section": "വിഭാഗം",
      "Loading...": "ലോഡാകുന്നു...",
      "title": "പിശക്",
      "failed_to_accept_shipment": "ഷിപ്പ്മെന്റ് സ്വീകരിക്കാൻ പരാജയപ്പെട്ടു",
      "pickup_location_missing": "പിക്‌അപ്പ് സ്ഥലത്തിന്റെ വിവരങ്ങൾ കാണുന്നില്ല",
      "waiting_for_payment": "പേയ്മെന്റിനായി കാത്തിരിക്കുന്നു",
      "shipment_status": "ഷിപ്പ്മെന്റ് നില",
      "navigate_to_pickup": "പിക്‌അപ്പിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക",

      "rewards": "ആനുകൂല്യങ്ങൾ",
      "rewardType": "ആനുകൂല്യത്തിന്റെ തരം",
      "rewardAmount": "ആനുകൂല്യത്തിന്റെ തുക",

      "invoices": "ഇൻവോയിസുകൾ",

      "feedback": "പ്രതികരണം",
      "feedbackLabel": "പ്രതികരണം",
      "rating": "റേറ്റിംഗ്",

      "No pending shipments available.": "ഇത്രയും ബാക്കിയുള്ള ഷിപ്പ്മെന്റുകൾ ലഭ്യമല്ല.",


      "transporterInvitation": "ട്രാൻസ്പോർട്ടർ ക്ഷണം",
      "invitationMessage": "നിങ്ങൾക്ക് ഒരു ട്രാൻസ്പോർട്ടറിലേക്ക് ചേർക്കാൻ ക്ഷണിച്ചിരിക്കുന്നു. നിങ്ങൾ అంగീకరిస్తോ?",
      "accept": "അంగീകാരം",
      "reject": "നിരാകരണം",
      "accepted": "നിങ്ങൾ ക്ഷണം అంగീകരിച്ചു.",
      "rejected": "നിങ്ങൾ ക്ഷണം നിരാകരിച്ചു.",

      "itemDelivered": "വസ്തു എത്തിച്ചത്",
      "price": "വില",

      "home": "ഹോം",
      "quotations": "ക്വോട്ടേഷൻസ്",
      "shipments": "ഷിപ്പ്മെന്റുകൾ",
      "profile": "പ്രൊഫൈൽ",
      "edit": "തിരുത്തുക",
      "document": "പത്രങ്ങൾ",

      "map": "മാപ്പ് ലോഡ് ചെയ്യുന്നു...",
      "failed_to_retrieve_data": "ഡാറ്റ നേടാൻ പരാജയപ്പെട്ടു.",
      "loading_map_details": "മാപ്പ് വിശദാംശങ്ങൾ ലോഡ് ചെയ്യുന്നതിൽ പിശക്. ദയവായി വീണ്ടും ശ്രമിക്കുക.",
      "driver_location_title": "ഡ്രൈവർ സ്ഥാനം",
      "driver_location_description": "ഇത് ഡ്രൈവർയുടെ നിലവിലെ സ്ഥാനം ആണ്.",
      "estimated_time": "അടുത്ത സമയം",
      "minutes": "മിനിറ്റ്",
      "distance": "ദൂരം",
      "kilometers": "കിമി",
      "pickup_location_title": "പിക്കപ്പ് സ്ഥലം",
      "start": "ആരംഭിക്കുക",
      "pickup_location_description": "ഇത് ഷിപ്പ്മെന്റ് പിക്കപ്പ് സ്ഥലം.",




      "accountDetails": {
        "accountHolderName": "അക്കൗണ്ട് ഉടമയുടെ പേര്",
        "accountType": "അക്കൗണ്ട് തരം",
        "validationError": "സാധുതാ പിശക്",
        "accountHolderNameRequired": "അക്കൗണ്ട് ഉടമയുടെ പേര് ആവശ്യമാണ്.",
        "selectAccountType": "അക്കൗണ്ട് തരം തിരഞ്ഞെടുക്കുക",
        "savings": "സേവിങ്‌സ്",
        "current": "നിലവിലെ അക്കൗണ്ട്",
        "fixedDeposit": "സ്ഥിരനിക്ഷേപം",
        "heading": "അക്കൗണ്ട് വിശദാംശങ്ങൾ",
        "bankName": "ബാങ്ക് പേര്",
        "ifscCode": "IFSC കോഡ്",
        "accountNumber": "അക്കൗണ്ട് നമ്പർ",
        "submit": "സമർപ്പിക്കുക",
        "validation": {
          "bankNameRequired": "ബാങ്ക് പേര് ആവശ്യമാണ്.",
          "ifscCodeRequired": "IFSC കോഡ് ആവശ്യമാണ്.",
          "invalidIfscCode": "സരിയായ IFSC കോഡ് നൽകുക (11 അക്ഷരങ്ങൾ, ഉദാഹരണം: ABCD0123456).",
          "accountNumberRequired": "സരിയായ അക്കൗണ്ട് നമ്പർ നൽകുക (9-18 അക്കങ്ങൾ)."
        },
        "success": "അക്കൗണ്ട് വിശദാംശങ്ങൾ വിജയകരമായി സമർപ്പിച്ചു!",
        "error": "അക്കൗണ്ട് വിശദാംശങ്ങൾ അപ്ഡേറ്റ് ചെയ്യുന്നത് പരാജയപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക."
      },
      "validationError": "സമ്മതത്തിലെ പിശക്",
      "validPanError": "ദയവായി ശരിയായ PAN നമ്പർ നൽകുക (ഉദാഹരണം: ABCDE1234F).",
      "validAadharError": "ദയവായി ശരിയായ Aadhaar നമ്പർ നൽകുക (12 അക്കങ്ങൾ).",
      "dobError": "ദയവായി നിങ്ങളുടെ ജനനതീയതി തിരഞ്ഞെടുക്കുക.",
      "genderError": "ദയവായി നിങ്ങളുടെ ലിംഗം തിരഞ്ഞെടുക്കുക.",
      "personalDetailsSuccess": "വ്യക്തിഗത വിവരങ്ങൾ വിജയകരമായി സമർപ്പിക്കപ്പെട്ടു!",
      "personalDetailsError": "വ്യക്തിഗത വിവരങ്ങൾ പുതുക്കാൻ പരാജയപ്പെട്ടു.",
      "panNumber": "PAN നമ്പർ",
      "aadharNumber": "Aadhaar നമ്പർ",
      "selectDob": "ജനന തീയതി തിരഞ്ഞെടുക്കുക",
      "gender": "ലിംഗം",
      "selectGender": "ലിംഗം തിരഞ്ഞെടുക്കുക",
      "male": "ആൺ",
      "female": "പെൺ",
      "other": "മറ്റുള്ളവ",
      "submit": "സമർപ്പിക്കുക",

      "vehicleInformation": "വാഹന വിവരങ്ങൾ",
      "vehicleNumberPlaceholder": "വാഹന നമ്പർ (ഉദാ: KA05MN1234)",
      "vehicleType": "വാഹന തരം",
      "selectVehicleType": "വാഹന തരം തിരഞ്ഞെടുക്കുക",
      "twoWheeler": "2 ചക്രവണ്ടി",
      "threeWheeler": "3 ചക്രവണ്ടി",
      "fourWheeler": "4 ചക്രവണ്ടി",
      "heavyVehicle": "ഭാരം കൂടിയ വാഹനങ്ങൾ",
      "capacityPlaceholder": "ശേഷി (കിലോയിൽ)",
      "dimensionsPlaceholder": "പരിമാണങ്ങൾ (ഉദാ: 22x8x10)",
      "selectInsuranceValidity": "ഇൻഷുറൻസ് സാധുത തിരഞ്ഞെടുക്കുക",
      "selectFitnessValidity": "ഫിറ്റ്നസ് സർട്ടിഫിക്കറ്റ് സാധുത തിരഞ്ഞെടുക്കുക",

      "vehicleInfoSubmitted": "വാഹന വിവരങ്ങൾ വിജയകരമായി സമർപ്പിച്ചു!",
      "networkError": "നെട്വർക്ക് പിശക്: സർവറുമായി ബന്ധപ്പെടാനായില്ല.",

      "searchDrivers": "ഡ്രൈവർമാരെ തിരയുക",

      "documents": {
        "profileDocuments": "പ്രൊഫൈൽ രേഖകൾ",
        "companyDocuments": "കമ്പനി രേഖകൾ",
        "vehicleDocuments": "വാഹന രേഖകൾ",
        "upload": "{{documentType}} അപ്‌ലോഡ്",
        "notUploaded": "അപ്‌ലോഡ് ചെയ്തിട്ടില്ല",
        "submit": "സമർപ്പിക്കുക",
        "success": "വിജയം",
        "cancelled": "റദ്ദാക്കപ്പെട്ടു",
        "failedToUpload": "രേഖകൾ അപ്‌ലോഡ് ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടു",
        "missingDocuments": "കൊഴിയുന്ന രേഖകൾ",
        "missingDocumentsMessage": "കിഴിവിൽ രേഖകൾ ഇല്ല:\n\nപ്രൊഫൈൽ രേഖകൾ: {{profileDocuments}}\nകമ്പനി രേഖകൾ: {{companyDocuments}}\nവാഹന രേഖകൾ: {{vehicleDocuments}}",
        "allDocumentsSubmitted": "എല്ലാ രേഖകളും വിജയകരമായി സമർപ്പിച്ചിരിക്കുന്നു.",
        "noFilesSelected": "ഒന്നും ഫയലുകൾ തിരഞ്ഞെടുക്കപ്പെട്ടിട്ടില്ല.",
        "error": "പിഴവ്",
        "uploadSuccess": "രേഖകൾ വിജയകരമായി അപ്‌ലോഡ് ചെയ്തു!",
        "uploadError": "രേഖകൾ അപ്‌ലോഡ് ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടു",
        "uploadDocuments": "ദസ്താവേജുകൾ അപ്‌ലോഡ് ചെയ്യുക",
        "uploadingAll": "എല്ലാം അപ്‌ലോഡ് ചെയ്യപ്പെടുന്നു",
        "documentsUnderConstruction": "ദസ്താവേജുകൾ ഇപ്പോൾ നിർമ്മാണത്തിലുണ്ട്.",
        "edit": "തിരുത്തുക",
        "editFunctionalityUnderConstruction": "തിരുത്തലിന്റെ പ്രവർത്തനം ഇപ്പോൾ നിർമ്മാണത്തിലുണ്ട്.",
        "selectFile": "ഫയൽ തിരഞ്ഞെടുക്കുക"
      },
      "companyName": "കമ്പനിയുടെ പേര്",
      "enterCompanyName": "കമ്പനിയുടെ പേര് നൽകുക",
      "enterEmail": "ഇമെയിൽ നൽകുക",
      "phoneNumber": "ഫോൺ നമ്പർ",
      "enterPhoneNumber": "ഫോൺ നമ്പർ നൽകുക",
      "address": "വിലാസം",
      "enterAddress": "വിലാസം നൽകുക",
      "registrationNumber": "രജിസ്ട്രേഷൻ നമ്പർ",
      "enterRegistrationNumber": "രജിസ്ട്രേഷൻ നമ്പർ നൽകുക",
      "pleaseFillAllFields": "ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക.",
      "detailsSubmittedSuccessfully": "കമ്പനിയുടെ വിശദാംശങ്ങൾ വിജയകരമായി സമർപ്പിച്ചു!",
      "companyDetails": "കമ്പനിയുടെ വിശദാംശങ്ങൾ",



      // ===============================TRACKING-APP============================

      "shipmentNumber": "ഷിപ്പ്‌മെന്റ് നമ്പർ",
      "sender": "അയച്ചവർ",
      "receiver": "സ്വീകാരകൻ",
      "time": "സമയം",
      "status": "നില",
      "viewLocation": "സ്ഥലം കാണുക",
      "allActivities": "എല്ലാ പ്രവർത്തനങ്ങളും",
      "addShipment": "ഷിപ്പ്‌മെന്റ് ചേർക്കുക",
      "oldShipments": "പഴയ ഷിപ്പ്‌മെന്റുകൾ",
      "payments": "പെയ്മെന്റുകൾ",
      "tracking": "ട്രാക്കിംഗ്",
      "insurances": "ഇൻഷുറൻസുകൾ",

      "shipmentID": "ഷിപ്പ്‌മെന്റ് ഐഡി",
      "contactName": "സമ്പർക്കത്തിന്റെ പേര്",
      "cargoWeight": "കാർഗോ തൂക്കം",
      "pickupDate": "പിക്കപ്പ് തീയതി",
      "dropDate": "ഡ്രോപ്പ് തീയതി",
      "contactPhone": "സമ്പർക്ക ഫോൺ",
      "errorFetchingDetails": "ഷിപ്പ്‌മെന്റ് വിവരങ്ങൾ ആനയിക്കുന്നതിനിടെ പിഴവ്",

      "shipmentForm": {
        "title": "ഷിപ്പ്‌മെന്റ് വിശദാംശങ്ങൾ ഫോം",
        "cargoType": "സരക്ക് തരം",
        "cargoWeight": "സരക്ക് ഭാരം",
        "cargoDimensions": "സരക്ക് അളവുകൾ",
        "distance": "ദൂരങ്ങൾ",
        "quotedPrice": "ഉദ്ധരിച്ച വില",
        "estimatedPrice": "അനുമാനിക്കുന്ന വില",
        "pickupDate": "പിക്കപ്പ് തീയതി",
        "deliveryDate": "ഡെലിവറി തീയതി",
        "contactDetails": "സമ്പർക്ക വിശദാംശങ്ങൾ",
        "contactName": "സമ്പർക്ക പേര്",
        "contactPhone": "സമ്പർക്ക ഫോൺ",
        "pickupAddress": "പിക്കപ്പ് വിലാസം",
        "pickupPoint": "പിക്കപ്പ് പോയിന്റ്",
        "pickupHouseNo": "വീറ്റ് നമ്പർ",
        "pickupStreetName": "സ്ട്രീറ്റ് പേര്",
        "pickupState": "സംസ്ഥാനം",
        "pickupPostalCode": "പോസ്റ്റൽ കോഡ്",
        "pickupCountry": "രാജ്യം",
        "dropAddress": "ഡ്രോപ്പ് വിലാസം",
        "dropPoint": "ഡ്രോപ്പ് പോയിന്റ്",
        "dropHouseNo": "വീറ്റ് നമ്പർ",
        "dropStreetName": "സ്ട്രീറ്റ് പേര്",
        "dropState": "സംസ്ഥാനം",
        "dropPostalCode": "പോസ്റ്റൽ കോഡ്",
        "dropCountry": "രാജ്യം",
        "submitButton": "സമർപ്പിക്കുക",
        "shipmentDataSubmitted": "ഷിപ്പ്‌മെന്റ് ഡാറ്റ വിജയകരമായി സമർപ്പിക്കപ്പെട്ടു",
        "shipmentDataFailed": "ഷിപ്പ്‌മെന്റ് ഡാറ്റ സമർപ്പിക്കാൻ പരാജയപ്പെട്ടു",
        "geocodeFailure": "പിക്കപ്പ് അല്ലെങ്കിൽ ഡ്രോപ്പ് വിലാസത്തിന്റെ ജിയോകോഡ് പരാജയപ്പെട്ടു.",
        "townName": "നഗരത്തിന്റെ പേര്"
      },

      // ===============================TRANSPORT DASHBOARD============================

      "Dashboard": {
        "heading": "ഡാഷ്‌ബോർഡ്",
        "shipments": "ഷിപ്പ്മെന്റുകൾ",
        "completedTrips": "പൂർത്തിയായ യാത്രകൾ",
        "invoices": "ഇൻവോയിസുകൾ",
        "feedback": "ഫീഡ്‌ബാക്ക്"
      },

      "SubmitQuotation": {
        "header": "ക്വോട്ടേഷൻ സമർപ്പിക്കുക",
        "placeholder": {
          "quotedPrice": "ക്വോട്ടേഷൻ വില",
          "validityPeriod": "ചിട്ടയായ കാലയളവ് (yyyy-MM-ddTHH:mm:ss)"
        },
        "quoteStatus": "ക്വോട്ടേഷൻ സ്ഥിതി:",
        "status": {
          "pending": "ശേഷിപ്പിച്ചിരിക്കുന്നു",
          "accepted": "സ്വീകരിച്ചു",
          "rejected": "നിരസിച്ചു"
        },
        "submitButton": "ക്വോട്ടേഷൻ സമർപ്പിക്കുക",
        "success": "ക്വോട്ടേഷൻ വിജയകരമായി സൃഷ്ടിച്ചു!",
        "failure": "ക്വോട്ടേഷൻ സൃഷ്ടിക്കാൻ പരാജയപ്പെട്ടു",
        "error": "ഒരു പിഴവ് സംഭവിച്ചു. ദയവായി വീണ്ടും ശ്രമിക്കുക."
      },

      "completedTrip": {
        "heading": "പൂര്ത്തിയായ യാത്രകൾ",
        "cargo": "കാർഗോ",
        "pickup": "പിക്കപ്പ്",
        "drop": "ഡ്രോപ്പ്"
      },

      "quoteForm": {
        "manufacturerDetails": "നിർമാതാവിന്റെ വിശദാംശങ്ങൾ",
        "shipmentDetails": "കയറ്റുമതി വിശദാംശങ്ങൾ",
        "quoteFormTitle": "കോട്ടേഷൻ ഫോം",
        "name": "പേര്",
        "company": "കമ്പനി",
        "phone": "ഫോൺ",
        "email": "ഇമെയിൽ",
        "cargoType": "കാർഗോ തരം",
        "pickup": "പിക്കപ്പ്",
        "drop": "ഡ്രോപ്പ്",
        "dimensions": "അളവുകൾ",
        "weight": "ഭാരം",
        "vehicleType": "വാഹന തരം",
        "quotedPricePlaceholder": "കോട്ടേഷൻ വില",
        "validityPeriodPlaceholder": "സാധുത കാലാവധി (ദിവസങ്ങളിൽ)",
        "sendQuoteButton": "കോട്ടേഷൻ അയയ്ക്കുക",
        "errorTitle": "പിശക്",
        "errorMessage": "കോട്ടേഷൻ അയയ്ക്കുന്നതിനുമുൻപ് എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക.",
        "successTitle": "കോട്ടേഷൻ അയച്ചു",
        "successMessage": "നിങ്ങളുടെ കോട്ടേഷൻ {{quotedPrice}} {{validityPeriod}} ദിവസങ്ങൾക്ക് സാധുവാണ്.",
        "ok": "ശരി",
        "validityDate": "സാധുത തീയതി",
        "assignDriver": "ഡ്രൈവർ നിയമിക്കുക",
        "pendingApproval": "അംഗീകൃതിക്ക് Pending",
        "sendQuote": "കൊട്ട് അയയ്ക്കുക",
        "decline": "ഇൻകൈ",
        "transporterIdMissing": "ട്രാൻസ്പോർട്ടർ ഐഡി നഷ്ടപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക.",
        "sendFailure": "കൊട്ട് അയയ്‌ക്കുന്നതിൽ പരാജയം. ദയവായി വീണ്ടും ശ്രമിക്കുക."
      },

      "feedbackScreen": {
        "heading": "പ്രതികരണം",
        "reviewer": "സമീക്ഷകൻ",
        "rating": "രേറ്റിംഗ്",
        "comment": "കമന്റ്"
      },
      "invoicesScreen": {
        "heading": "ബിൽ",
        "invoice": "ബിൽ",
        "amount": "രാശി",
        "status": "നിലവാരം"
      },
      "shipmentScreen": {
        "heading": "ശിപ്പ്മെന്റ് അഭ്യർഥനകൾ",
        "cargoType": "കാർഗോ തരം",
        "pickup": "പിക്കപ്പ്",
        "drop": "ഡ്രോപ്പ്",
        "quoteButton": "കോടി",
        "quote": "കൊട്ട്",
        "waitingForApproval": "അംഗീകരണത്തിനായി കാത്തിരിക്കുന്നു",
        "quoteAccepted": "കൊട്ട് സ്വീകരിച്ചു",
        "noPendingShipments": "ഓരോ_PENDING_ശിപ്പ്മെന്റുകളും ഇല്ല"
      },

      "Invoice": "ഇൻവോയിസ്",
      "Date": "തീയതി",
      "Bill To": "ബിൽ ലഭിക്കുന്നവർ",
      "Name": "പേര്",
      "Address": "വിലാസം",
      "Phone": "ഫോൺ",
      "Items": "ഇനങ്ങൾ",
      "Description": "വിവരണം",
      "Qty": "അളവ്",
      "Price": "വില",
      "Total": "മൊത്തം",

      "Payment Summary": "പേയ്മെന്റ് സംഗ്രഹം",
      "Subtotal": "ഉപമൊത്തം",
      "Service Fee": "സേവന ഫീസ്",
      "Tax": "നികുതി",


      "loadingPayments": "പണമിടപാടുകൾ ലോഡുചെയ്യുന്നു",
      "failedToFetchPayments": "പണമിടപാട് സ്വീകരിക്കാൻ പരാജയപ്പെട്ടു",
      "shipmentId": "ഷിപ്പ്മെന്റ് ഐഡി",
      "unknownStatus": "അറിയപ്പെടുന്നില്ല",
      "from": "നിന്ന്",
      "to": "ക്ക്",
      "orderId": "ഓർഡർ ഐഡി",
      "retry": "മറ്റ് സമയം ശ്രമിക്കുക",
      "noPaymentsFound": "ഒന്നും കണ്ടെത്തിയില്ല",


      "payment": {
        "title": "പണമിടപാട് വിശദാംശങ്ങൾ",
        "amountLabel": "ചെലുത്തേണ്ട തുക:",
        "shipmentIdLabel": "ഷിപ്പ്മെന്റ് ഐഡി:",
        "transporterLabel": "ട്രാൻസ്പോർട്ടർ:",
        "cargoTypeLabel": "കാർഗോ തരം:",
        "proceedToPay": "പണമിടപാട് തുടരുക",
        "paymentFailed": "പണമിടപാട് പരാജയപ്പെട്ടു",
        "invalidDetails": "തകരാറായ പണമിടപാട് വിശദാംശങ്ങൾ. ദയവായി വീണ്ടും ശ്രമിക്കുക.",
        "goBack": "പശ്ചാത്തലം",
        "success": "പണമിടപാട് വിജയകരമായി പൂർത്തിയായി!"
      },

      
"AssignDriverScreen": {
    "heading": "ഷിപ്പ്മെന്റ് மற்றும் ഡ്രൈവർ വിശദാംശങ്ങൾ",
    "shipmentDetails": {
      "cargoType": "കാർഗോ തരങ്ങൾ",
      "pickupPoint": "പിക്കപ്പ് പോയിന്റ്",
      "dropPoint": "ഡ്രോപ്പ് പോയിന്റ്",
      "status": "സ്ഥിതി"
    },
    "driverDetails": {
      "driverName": "ഡ്രൈവർ പേര്:",
      "phone": "ഫോൺ:"
    },
    "status": {
      "accepted": "അംഗീകരിച്ചത്",
      "pending": "ഡ്രൈവർ കാത്തിരിക്കുന്നു..."
    },
    "buttons": {
      "sendRequest": "അഭ്യർത്ഥന അയയ്ക്കുക",
      "assignVehicle": "വാഹനം നിയോഗിക്കുക"
    },
    "errors": {
      "fetchDrivers": "ഡ്രൈവർലുകൾ നേടാൻ സാധിച്ചില്ല. ദയവായി പിന്നീട് വീണ്ടും ശ്രമിക്കുക.",
      "fetchAssignment": "അസൈൻമെന്റ് സ്റ്റാറ്റസും ഡ്രൈവർ വിശദാംശങ്ങളും നേടാൻ സാധിച്ചില്ല. ദയവായി പിന്നീട് വീണ്ടും ശ്രമിക്കുക.",
      "assignDrivers": "ഡ്രൈവർകளை നിയോഗിക്കാൻ സാധിച്ചില്ല. ദയവായി പിന്നീട് വീണ്ടും ശ്രമിക്കുക.",
      "selectDrivers": "ദയവായി കുറഞ്ഞത് ഒരു ഡ്രൈവർ തിരഞ്ഞെടുക്കുക."
    }
  },

  "AssignVehicleScreen": {
    "heading": "ഷിപ്പ്മെന്റ് വിശദാംശങ്ങൾ",
    "shipmentDetails": "ഷിപ്പ്മെന്റ് വിശദാംശങ്ങൾ",
    "cargoType": "കാർഗോ തരങ്ങൾ",
    "pickupPoint": "പിക്കപ്പ് പോയിന്റ്",
    "dropPoint": "ഡ്രോപ്പ് പോയിന്റ്",
    "driverDetails": "ഡ്രൈവർ വിശദാംശങ്ങൾ",
    "name": "പേര്",
    "phone": "ഫോൺ",
    "vehicleDetails": "വാഹന വിശദാംശങ്ങൾ",
    "vehicleNumber": "വാഹന നമ്പർ",
    "vehicleType": "വാഹന തരങ്ങൾ",
    "payNow": "ഇപ്പോഴത്തെ അടയ്ക്കുക",
    "fetchDetails": "വിശദാംശങ്ങൾ നേടാൻ സാധിച്ചില്ല. ദയവായി പിന്നീട് വീണ്ടും ശ്രമിക്കുക."
  },


      // =================QuotationDetailsScreen=========================


      "QuotationDetails": {
        "heading": "ഉദ്ധരണി വിശദാംശങ്ങൾ",
        "quotationInformation": "ഉദ്ധരണി വിവരങ്ങൾ",
        "companyName": "കമ്പനിയുടെ പേര്",
        "quotationNumber": "ഉദ്ധരണി നമ്പർ",
        "date": "തീയതി",
        "remarks": "പരാമർശങ്ങൾ",
        "transporterInformation": "ഗതാഗതക്കാരൻ വിവരങ്ങൾ",
        "company": "കമ്പനി",
        "email": "ഇമെയിൽ",
        "phone": "ഫോൺ",
        "registration": "രജിസ്ട്രേഷൻ",
        "address": "വിലാസം",
        "shipmentInformation": "ഷിപ്പ്‌മെന്റ് വിവരങ്ങൾ",
        "cargoType": "കാർഗോ തരം",
        "dimensions": "അളവുകൾ",
        "weight": "ഭാരം",
        "kg": "കിലോ",
        "vehicleTypeRequired": "ആവശ്യമുള്ള വാഹനം തരം",
        "pickupPoint": "പിക്‌അപ്പ് പോയിന്റ്",
        "dropPoint": "ഡ്രോപ്പ് പോയിന്റ്",
        "distance": "ദൂരം",
        "km": "കി.മീ",
        "pickupDate": "പിക്‌അപ്പ് തീയതി",
        "deliveryDate": "ഡെലിവറി തീയതി",
        "quotedPrice": "ഉദ്ധരണി വില",
        "status": "സ്ഥിതി",
        "validityPeriod": "സാധുത കാലയളവ്",
        "payNow": "ഇപ്പോൾ പേയ് ചെയ്യുക",
        "loadingQuotationDetails": "ഉദ്ധരണി വിശദാംശങ്ങൾ ലോഡുചെയ്യുന്നു...",
        "failedToLoadQuotationDetails": "ഉദ്ധരണി വിശദാംശങ്ങൾ ലോഡുചെയ്യാൻ പരാജയപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക.",
        "errorFetchingQuotationDetails": "ഉദ്ധരണി വിശദാംശങ്ങൾ നേടുന്നതിൽ പിഴവ്.",
        "initiatingPayment": "ഉദ്ധരണി ഐഡി: {{id}} വേണ്ടി പേയ്‌മെന്റ് ആരംഭിക്കുന്നു",
        "notAvailable": "ലഭ്യമല്ല",
        "shipmentId": "ഷിപ്പ്മെന്റ് ഐഡി",
        "shipmentStatus": "ഷിപ്പ്മെന്റിന്റെ നില",
        "accept": "സ്വീകരിക്കുക",
      },

      "QuotationList": {
        "transporter": "ഗതാഗതക്കാരൻ",
        "registration": "രജിസ്ട്രേഷൻ",
        "status": "സ്ഥിതി",
        "price": "വില",
        "viewDetails": "പേയ്മെന്റിനായുള്ള വിശദാംശങ്ങൾ കാണുക",
        "loadingQuotations": "ഉദ്ധരണികൾ ലോഡുചെയ്യുന്നു...",
        "noQuotations": "ഉദ്ധരണികൾ ലഭ്യമല്ല.",
        "errorFetchingQuotations": "ഉദ്ധരണികൾ നേടുന്നതിൽ പിഴവ്.",
        "noQuotationsAvailable": "ഈ ഷിപ്പ്മെന്റിന് ലഭ്യമായ ഉദ്ധരണികൾ ഇല്ല.",
        "quotationsForShipmentId": "ഷിപ്പ്മെന്റ് ഐഡിക്ക് ഉദ്ധരണികൾ"
      },
      "ShipmentList": {
        "status": "പദവി",
        "createdAt": "സൃഷ്ടിച്ചത്",
        "viewQuotations": "ക്വോട്ടേഷൻസ് കാണുക",
        "loadingShipments": "ഷിപ്പ്മെന്റുകൾ ലോഡ് ചെയ്യുന്നു...",
        "noShipments": "എന്തെങ്കിലും ഷിപ്പ്മെന്റുകൾ ലഭ്യമല്ല.",
        "errorFetchingShipments": "ഷിപ്പ്മെന്റുകൾ നേടുന്നതിൽ പിശക്.",
        "transportersQuotations": "വാഹകരുടെ ക്വോട്ടേഷനുകൾ"

      },

      "shipmentDetails": {
        "shipmentDetails": "ഷിപ്പ്മെന്റ് വിശദാംശങ്ങൾ",
        "basicInformation": "അടിസ്ഥാന വിവരങ്ങൾ",
        "shipmentID": "ഷിപ്പ്മെന്റ് ID",
        "cargoType": "കാർഗോ തരം",
        "dimensions": "അളവുകൾ",
        "cargoWeight": "കാർഗോ ഭാരമാണ്",
        "statusPricing": "സ്ഥിതി & വിലനിർണ്ണയം",
        "shipmentStatus": "ഷിപ്പ്മെന്റ് സ്ഥിതി",
        "quotedPrice": "ഉദ്ധരിച്ച വില",
        "estimatedPrice": "അനുമാനിച്ച വില",
        "distance": "ദൂരമാണ്",
        "pickupDelivery": "പിക്കപ്പ് & ഡെലിവറി",
        "pickupPoint": "പിക്കപ്പ് പോയിന്റ്",
        "dropPoint": "ഡ്രോപ്പ് പോയിന്റ്",
        "pickupDate": "പിക്കപ്പ് തീയതി",
        "deliveryDate": "ഡെലിവറി തീയതി",
        "contactDetails": "കണ്ടത് വിശദാംശങ്ങൾ",
        "contactName": "കണ്ടത് പേര്",
        "contactNumber": "കണ്ടത് നമ്പർ",
        "additionalInformation": "കൂടുതൽ വിവരങ്ങൾ",
        "createdAt": "സൃഷ്ടിച്ചത്",
        "updatedAt": "പുതുക്കിയത്",
        "notAvailable": "ലഭ്യമല്ല",
        "loadingShipmentDetails": "ഷിപ്പ്മെന്റ് വിശദാംശങ്ങൾ ലോഡ് ചെയ്യുന്നു...",
        "noShipmentDetails": "ഷിപ്പ്മെന്റ് വിശദാംശങ്ങൾ ലഭ്യമായില്ല"
      },

      "shipmentDetail": {
        "loadingShipments": "ഷിപ്പ്മെന്റ്‌സ് ലോഡ് ചെയ്യുന്നു...",
        "noShipmentDetails": "ഷിപ്പ്മെന്റ് വിശദാംശങ്ങൾ ലഭ്യമല്ല.",
        "transportersQuotations": "പുറമാറ്റക്കാരുടെ ക്വട്ടേഷനുകൾ",
        "viewQuotations": "ക്വട്ടേഷനുകൾ കാണുക",
        "status": "സ്ഥിതി",
        "createdAt": "സൃഷ്ടിച്ചത്"
      },

      "Quotations": {
        "error": "പിഴവ്",
        "enterQuotedPrice": "കൂട്ടിച്ചേർത്ത വില നൽകുക",
        "selectValidityPeriod": "വാലിഡിറ്റി കാലാവധി തിരഞ്ഞെടുക്കുക",
        "quotedPrice": "കൂട്ടിച്ചേർത്ത വില",
        "validityPeriod": "വാലിഡിറ്റി കാലാവധി",
        "submitQuotation": "കൂട്ടിച്ചേർത്ത വ报价 സമർപ്പിക്കുക",
        "success": "വിജയം",
        "quotationSubmitted": "കൂട്ടിച്ചേർത്ത വ报价 വിജയകരമായി സമർപ്പിച്ചു.",
        "failedSubmitQuotation": "കൂട്ടിച്ചേർത്ത വ报价 സമർപ്പിക്കാനായി പരാജയപ്പെട്ടു",
        "anErrorOccurred": "ഒരു പിശക് സംഭവിച്ചു"
      },

      "header":

      {
        "yourLocation": "നിങ്ങളുടെ സ്ഥലം",
        "locationExample": "കുകട്പള്ളി, ഹൈദരാബാദ്",
        "language": "ഭാഷ"
      },

      // ===============================================SETTINGS===============================================
      "gstNumber": "GST നമ്പർ",
      "enterGstNumber": "GST നമ്പർ എന്റർ ചെയ്യുക",
      "cinNumber": "CIN നമ്പർ",
      "enterCinNumber": "CIN നമ്പർ എന്റർ ചെയ്യുക",
      "companyNameRequired": "കമ്പനിയുടെ പേര് ആവശ്യമാണ്.",
      "enterValidEmail": "സരി ഇമെയിൽ വിലാസം എന്റർ ചെയ്യുക.",
      "enterValidPhoneNumber": "സരി ഫോൺ നമ്പർ (10-15 അങ്കങ്ങൾ) എന്റർ ചെയ്യുക.",
      "addressRequired": "വിലാസം ആവശ്യമാണ്.",
      "enterValidGst": "സരി GST നമ്പർ എന്റർ ചെയ്യുക (ഉദാ: 22ABCDE1234F1Z5).",
      "enterValidCin": "സരി CIN നമ്പർ എന്റർ ചെയ്യുക (ഉദാ: L12345AB1234XYZ123456).",
      "companyDetailsSubmitted": "കമ്പനി വിശദാംശങ്ങൾ വിജയകരമായി സമർപ്പിച്ചു!",
      "failedToSubmitDetails": "കമ്പനി വിശദാംശങ്ങൾ സമർപ്പിക്കാൻ പരാജയപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക.",


      "userIdRetrieved": "AsyncStorage-യിൽ നിന്ന് ഉപയോക്തൃ ID ലഭിച്ചു:",
      "userIdNotFound": "ഉപയോക്തൃ ID കണ്ടെത്താനായില്ല. ദയവായി വീണ്ടും ലോഗിൻ ചെയ്യൂ.",
      "errorRetrievingUserId": "ഉപയോക്തൃ ID പ്രാപ്തമാക്കുന്നതിൽ പിശക്",
      "failedToRetrieveUserId": "ഉപയോക്തൃ ID പ്രാപ്തമാക്കാൻ പരാജയപ്പെട്ടു.",
      "fillAllFieldsBeforeSaving": "സേവ് ചെയ്യുന്നതിനു മുമ്പ് എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക.",
      "userIdNotAvailable": "ഉപയോക്തൃ ID ലഭ്യമല്ല. ദയവായി വീണ്ടും ലോഗിൻ ചെയ്യൂ.",
      "driverIdSaved": "AsyncStorage-യിൽ ഡ്രൈവർ ID സംരക്ഷിക്കപ്പെട്ടു:",
      "driverDetailsSavedSuccessfully": "ഡ്രൈവർ വിവരങ്ങൾ വിജയകരമായി സംരക്ഷിക്കപ്പെട്ടു!",
      "errorSavingDriverDetails": "ഡ്രൈവർ വിവരങ്ങൾ സംരക്ഷിക്കുന്നതിൽ പിശക്",
      "failedToSaveDriverDetails": "ഡ്രൈവർ വിവരങ്ങൾ സംരക്ഷിക്കാൻ പരാജയപ്പെട്ടു",
      "loading": "ലോഡ് ചെയ്യുന്നു...",
      "nameAsPerLicence": "പേരു (ലൈസൻസനുസരണം)",
      "enterNameAsPerLicence": "ലൈസൻസനുസരിച്ച് പേര് നൽകുക",
      "phoneNumberWork": "ഫോൺ നമ്പർ (വിവരശേഖരണം)",
      "experience": "അനുഭവം",
      "enterExperience": "അനുഭവം നൽകുക (ഉദാഹരണത്തിന്: 5 വർഷം)",
      "save": "സേവ് ചെയ്യുക",

      "newPasswordsDoNotMatch": "പുതിയ പാസ്വേഡുകൾ പൊരുത്തപ്പെടുന്നില്ല.",
      "passwordValidationError": "പാസ്വേഡ് കുറഞ്ഞത് 6 അക്ഷരങ്ങളായിരിക്കണം, ഒന്ന് അപർകേസ് അക്ഷരം, ഒന്ന് ലോവർക്കേസ് അക്ഷരം, ഒന്ന് സംഖ്യ ഉണ്ടായിരിക്കണം.",
      "anErrorOccurred": "ഒരു പിശക് സംഭവിച്ചു",
      "updatePassword": "പാസ്വേഡ് അപ്ഡേറ്റ് ചെയ്യുക",
      "currentPassword": "നിലവിലെ പാസ്വേഡ്",
      "newPassword": "പുതിയ പാസ്വേഡ്",
      "reenterNewPassword": "പുതിയ പാസ്വേഡിനെ വീണ്ടും നൽകുക",

      "brand": "ബ്രാൻഡ്",
      "model": "മോഡൽ",
      "refrigerator": "ഫ്രിഡ്ജ്",
      "selectBrand": "ബ്രാൻഡ് തിരഞ്ഞെടുക്കുക",
      "selectModel": "മോഡൽ തിരഞ്ഞെടുക്കുക",
      "selectOption": "ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക",
      "yes": "അതെ",
      "no": "ഇല്ല",
      "selectRegistrationDate": "രജിസ്ട്രേഷൻ തീയതി തിരഞ്ഞെടുക്കുക",

    "createdAt": "സൃഷ്ടിച്ചതിന്റെ തീയതി",
    "viewDetails": "വിശദാംശങ്ങൾ കാണുക",
    "fetchError": "ഷിപ്പ്മെന്റുകൾ ലഭിക്കുന്നതിൽ പിഴവ്",
    "loadingShipments": "ഷിപ്പ്മെന്റുകൾ ലോഡ് ചെയ്യുന്നു...",
    "shipmentsList": "ഷിപ്പ്മെന്റുകളുടെ പട്ടിക",
    "filter": "ഫിൽട്ടർ",
    "all": "എല്ലാം",
    "pending": "മുൻപിൽ",
    "inTransit": "പോക്കിൽ",
    "delivered": "വിതരണം",
    "cancelled": "റദ്ദാക്കുക",
    "noShipmentsForStatus": "തിരഞ്ഞെടുത്ത നിലയ്ക്കുള്ള ഷിപ്പ്മെന്റുകൾ ലഭ്യമല്ല",


    "fillAllFields": "ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക",
  "passwordResetSuccess": "പാസ്‌വേഡ് വിജയകരമായി പുനഃസജ്ജീകരിച്ചത്",
  "unexpectedError": "ഒരു പ്രതീക്ഷിക്കാത്ത പിഴവ് സംഭവിച്ചു",
  "enterOTP": "OTP നൽകുക",
  "otpPlaceholder": "OTP",
  "newPasswordPlaceholder": "പുതിയ പാസ്‌വേഡ്",














    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    supportedLngs: ['en', 'fr', 'hi', 'te', 'kn', 'ta', 'ml'], // Supported languages
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
