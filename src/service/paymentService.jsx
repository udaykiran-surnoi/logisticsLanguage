import axios from 'axios';

const API_BASE_URL = 'http://10.0.2.2:8080/api';
const TEST_KEY = 'rzp_test_gsFsfyJyJoD5Ja';

export const paymentService = {
  createPayment: async (paymentDetails) => {
    const { shipmentId, manufacturerId, transporterId, amount } = paymentDetails;
    
    try {
      const response = await axios.post(
        `${API_BASE_URL}/payments/create`,
        null,
        {
          params: {
            shipmentId,
            manufacturerId,
            transporterId,
            amount: parseFloat(amount),
          },
        }
      );

      const orderIdMatch = response.data.match(/Order ID: ([^\s]+)/);
      const paymentIdMatch = response.data.match(/Payment ID: (\d+)/);
      
      const orderId = orderIdMatch ? orderIdMatch[1] : null;
      const paymentId = paymentIdMatch ? parseInt(paymentIdMatch[1], 10) : null;

      if (!orderId || !paymentId) {
        throw new Error('Invalid payment creation response: Missing order ID or payment ID');
      }

      return { orderId, paymentId };
    } catch (error) {
      throw new Error('Failed to create payment: ' + (error.response?.data?.message || error.message));
    }
  },

  getRazorpayOptions: (paymentInfo) => {
    const {
      orderId,
      paymentId,
      amount,
      companyName,
      cargoType,
      shipmentId
    } = paymentInfo;

    return {
      description: `Payment to ${companyName} for ${cargoType} shipment #${shipmentId}`,
      image: 'your_logo_url',
      currency: 'INR',
      key: TEST_KEY,
      amount: parseFloat(amount) * 100,
      name: 'Your Company Name',
      order_id: orderId,
      prefill: {
        email: 'test@example.com',
        contact: '9999999999',
        name: 'Test User',
      },
      theme: { color: '#53a20e' },
      retry: {
        enabled: true,
        max_count: 3
      },
      send_sms_hash: true,
      remember_customer: true,
      notes: {
        shipmentId: shipmentId.toString(),
        paymentId: paymentId.toString(),
        companyName,
        cargoType
      }
    };
  },

  confirmPayment: async (confirmationDetails) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/payments/confirm`,
        null,
        {
          params: confirmationDetails
        }
      );
      
      return response.data;
    } catch (error) {
      throw new Error('Failed to confirm payment: ' + (error.response?.data?.message || error.message));
    }
  }
};