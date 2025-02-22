import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function ThankYou() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="max-w-lg mx-auto px-4 text-center">
        <h1 className="text-4xl font-light mb-6">Thank You</h1>
        <p className="text-gray-600 mb-12">
          Your order has been placed successfully. We'll send you an email with the order details.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-black text-white px-8 py-4 text-lg font-medium"
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </motion.div>
  );
}