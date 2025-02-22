import { motion } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { countries } from 'countries-list';

interface ShippingFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ShippingFormData) => void;
}

export interface ShippingFormData {
  name: string;
  pincode: string;
  address: string;
  landmark: string;
  locality: string;
  city: string;
  state: string;
  country: string;
  email: string;
  phone: string;
  isCompany: boolean;
  companyName?: string;
}

// Convert countries object to array and sort by name
const countryList = Object.entries(countries).map(([code, data]) => ({
  code,
  ...data,
})).sort((a, b) => a.name.localeCompare(b.name));

export function ShippingForm({ isOpen, onClose, onSubmit }: ShippingFormProps) {
  const [formData, setFormData] = useState<ShippingFormData>({
    name: '',
    pincode: '',
    address: '',
    landmark: '',
    locality: '',
    city: '',
    state: '',
    country: 'IN', // Default to India
    email: '',
    phone: '',
    isCompany: false,
    companyName: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const selectedCountry = countries[formData.country as keyof typeof countries];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 bg-white z-50 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-light">PLEASE ENTER THE DELIVERY DETAILS</h1>
          <button onClick={onClose} className="p-2">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="NAME"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg"
              required
            />

            <div className="relative">
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg appearance-none"
                required
              >
                {countryList.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <input
              type="text"
              placeholder="PINCODE / ZIP CODE"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg"
              required
            />

            <input
              type="text"
              placeholder="ADDRESS"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg"
              required
            />

            <input
              type="text"
              placeholder="LANDMARK (Optional)"
              value={formData.landmark}
              onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
              className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg"
            />

            <input
              type="text"
              placeholder="LOCALITY"
              value={formData.locality}
              onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
              className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg"
              required
            />

            <input
              type="text"
              placeholder="CITY"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg"
              required
            />

            <input
              type="text"
              placeholder="STATE / PROVINCE"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg"
              required
            />

            <div className="pt-4">
              <p className="text-lg mb-4">REGION</p>
              <p className="text-lg text-gray-600">{selectedCountry.name}</p>
            </div>

            <input
              type="email"
              placeholder="E-MAIL"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg"
              required
            />

            <input
              type="tel"
              placeholder="TELEPHONE"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg"
              required
            />

            <div className="flex items-center justify-between pt-4">
              <span className="text-lg">COMPANY</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isCompany}
                  onChange={(e) => setFormData({ ...formData, isCompany: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-black"></div>
              </label>
            </div>

            {formData.isCompany && (
              <input
                type="text"
                placeholder="COMPANY NAME"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-400 text-lg"
                required
              />
            )}
          </div>

          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
            <div className="max-w-2xl mx-auto flex justify-between items-center">
              <div>
                <p className="text-2xl">₹ {(24999).toLocaleString()}</p>
                <p className="text-sm text-gray-500">* excl Shipping cost</p>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-12 py-4 text-lg"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}