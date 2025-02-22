import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../../types/product';
import { ShippingFormData } from './ShippingForm';

interface OrderConfirmationProps {
  shippingData: ShippingFormData;
  selectedProduct: Product;
  onBack: () => void;
  onProceed: () => void;
}

export function OrderConfirmation({ shippingData, selectedProduct, onBack, onProceed }: OrderConfirmationProps) {
  const [selectedDeliveryType, setSelectedDeliveryType] = useState<'diy' | 'service'>('diy');
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const formatAddress = (data: ShippingFormData) => {
    const parts = [
      data.name,
      data.address,
      data.landmark,
      `${data.locality}, ${data.city}`,
      `${data.state}, ${data.pincode}`,
      data.email,
      data.phone
    ].filter(Boolean);
    return parts.join('\n');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Address Section */}
        <div className="mb-8">
          <h2 className="text-xl uppercase mb-4">Delivery Address</h2>
          <pre className="whitespace-pre-line text-gray-600 text-base">
            {formatAddress(shippingData)}
          </pre>
        </div>

        {/* Delivery Type Section */}
        <div className="mb-8">
          <h2 className="text-xl uppercase mb-4">Delivery Type</h2>
          <div className="space-y-4">
            {/* DIY Kit Option */}
            <div className="border rounded-lg overflow-hidden">
              <button
                onClick={() => {
                  setSelectedDeliveryType('diy');
                  setIsDetailsOpen(true);
                }}
                className={`w-full p-4 flex items-center justify-between ${
                  selectedDeliveryType === 'diy' ? 'bg-black text-white' : 'bg-white'
                }`}
              >
                <span className="text-lg">DIY Kit</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${isDetailsOpen && selectedDeliveryType === 'diy' ? 'rotate-180' : ''}`} 
                />
              </button>
              {isDetailsOpen && selectedDeliveryType === 'diy' && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">
                    We'll send you a complete DIY kit with your card and detailed instructions to help you through the process. The kit includes all necessary tools and a step-by-step guide.
                  </p>
                </div>
              )}
            </div>

            {/* Complete Service Option */}
            <div className="border rounded-lg overflow-hidden">
              <button
                onClick={() => {
                  setSelectedDeliveryType('service');
                  setIsDetailsOpen(true);
                }}
                className={`w-full p-4 flex items-center justify-between ${
                  selectedDeliveryType === 'service' ? 'bg-black text-white' : 'bg-white'
                }`}
              >
                <span className="text-lg">Complete Service</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${isDetailsOpen && selectedDeliveryType === 'service' ? 'rotate-180' : ''}`} 
                />
              </button>
              {isDetailsOpen && selectedDeliveryType === 'service' && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">
                    Our team will handle everything for you. We'll arrange pickup of your card, professionally swap the chips, and deliver the finished card back to your address.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Image */}
        <div className="mb-24">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full aspect-[3/4] object-cover"
          />
        </div>

        {/* Bottom Fixed Section */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <div className="max-w-2xl mx-auto space-y-4">
            <button
              onClick={onProceed}
              className="w-full bg-black text-white py-4 text-lg font-medium"
            >
              CONTINUE
            </button>
            <button
              onClick={onBack}
              className="w-full border border-black py-4 text-lg font-medium"
            >
              BACK
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}