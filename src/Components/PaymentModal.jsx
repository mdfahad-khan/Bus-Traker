// PaymentModal.jsx
import React from "react";

const PaymentModal = ({ onClose }) => {
  const handlePayment = () => {
    // Implement your actual payment logic here
    // For simplicity, you can show a success message
    alert("Payment successful!");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
        {/* Add your payment form or integrate with a payment gateway */}
        {/* For simplicity, let's just have a "Pay" button */}
        <button
          onClick={handlePayment}
          className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">
          Pay
        </button>
        <button
          onClick={onClose}
          className="ml-4 text-gray-500 hover:text-gray-700">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
