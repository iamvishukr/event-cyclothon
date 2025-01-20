import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLock, FaCreditCard, FaPaypal } from "react-icons/fa";
import upi from '../assets/upi.svg'
const PaymentGateway = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!location.state?.registrationData) {
      navigate("/cyclothon");
    }
  }, [location.state, navigate]);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate("/");
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <motion.div
            className="text-center mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaLock className="text-5xl text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">Secure Payment</h2>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="border-t border-b py-4">
              <div className="flex justify-between mb-2">
                <span>Registration Fee</span>
                <span>₹500</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Processing Fee</span>
                <span>₹50</span>
              </div>
              <div className="flex justify-between font-semibold mt-4 text-lg">
                <span>Total</span>
                <span>₹550</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center ${
                isProcessing ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <FaCreditCard className="mr-2" />
              {isProcessing ? "Processing..." : "Pay with Card"}
            </button>
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center ${
                isProcessing ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {/* <Fa className="mr-2" /> */}
              <img src={upi} alt="" height={20} width={80} srcset="" />

              {isProcessing ? "Processing..." : "UPI Payment"}
            </button>
          </motion.div>

          <motion.p
            className="text-sm text-gray-500 text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Your payment is secured with industry-standard encryption
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentGateway;
