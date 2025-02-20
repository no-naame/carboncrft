import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'CARBONCRAFT OBSIDIAN',
    price: 24999.00,
    image: 'https://img.freepik.com/free-vector/black-credit-card_1017-6276.jpg?t=st=1740073283~exp=1740076883~hmac=2fe5633b147c5af831f22c31b5934900074a92f74fcf0bbd933478b0d62a2c50&w=1480'
  },
  {
    id: '2',
    name: 'CARBONCRAFT SILVER',
    price: 19999.00,
    image: 'https://img.freepik.com/free-vector/black-credit-card_1017-6276.jpg?t=st=1740073283~exp=1740076883~hmac=2fe5633b147c5af831f22c31b5934900074a92f74fcf0bbd933478b0d62a2c50&w=1480'
  },
  {
    id: '3',
    name: 'CARBONCRAFT GOLD',
    price: 29999.00,
    image: 'https://img.freepik.com/free-vector/black-credit-card_1017-6276.jpg?t=st=1740073283~exp=1740076883~hmac=2fe5633b147c5af831f22c31b5934900074a92f74fcf0bbd933478b0d62a2c50&w=1480'
  },
  {
    id: '4',
    name: 'CARBONCRAFT ROSE GOLD',
    price: 29999.00,
    image: 'https://img.freepik.com/free-vector/black-credit-card_1017-6276.jpg?t=st=1740073283~exp=1740076883~hmac=2fe5633b147c5af831f22c31b5934900074a92f74fcf0bbd933478b0d62a2c50&w=1480'
  }
];

export function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('edit-card');

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-4xl font-bold text-[#333333] mb-4 text-center">Premium Metal Cards</h1>
      <p className="text-center text-[#333333]/70 mb-12 max-w-2xl mx-auto">Transform your everyday plastic cards into stunning metal masterpieces. Each card is precision crafted for durability and elegance.</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`group cursor-pointer ${index % 3 === 2 ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <div className={`relative overflow-hidden bg-gray-100 mb-4 ${index % 3 === 2 ? 'aspect-[2/1.5]' : 'aspect-[3/4]'}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div 
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full cursor-pointer"
                onClick={() => handleProductSelect(product)}
              >
                <Plus size={18} className="text-gray-600" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-[#333333] mb-2">{product.name}</h3>
            <p className="text-[#333333]/70">₹ {product.price.toLocaleString()}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute right-6 top-6 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <div className="flex gap-4 mb-8 border-b">
                <button
                  onClick={() => setActiveSection('edit-card')}
                  className={`pb-4 ${activeSection === 'edit-card' ? 'text-[#333333] border-b-2 border-[#333333]' : 'text-gray-400'}`}
                >
                  Edit Card Info
                </button>
                <button
                  onClick={() => setActiveSection('choose-metal')}
                  className={`pb-4 ${activeSection === 'choose-metal' ? 'text-[#333333] border-b-2 border-[#333333]' : 'text-gray-400'}`}
                >
                  Choose Metal
                </button>
                <button
                  onClick={() => setActiveSection('add-logo')}
                  className={`pb-4 ${activeSection === 'add-logo' ? 'text-[#333333] border-b-2 border-[#333333]' : 'text-gray-400'}`}
                >
                  Add Logo / Text
                </button>
              </div>

              <div className="mb-20">
                {activeSection === 'edit-card' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Holder Name (0/26)"
                      className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                    <div className="flex gap-4">
                      <select className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <option>Front</option>
                        <option>Back</option>
                      </select>
                      <select className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <option>Front</option>
                        <option>Back</option>
                      </select>
                    </div>
                  </div>
                )}

                {activeSection === 'choose-metal' && (
                  <div className="grid grid-cols-2 gap-4">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className={`p-4 border rounded-lg cursor-pointer ${selectedProduct?.id === product.id ? 'border-[#333333]' : ''}`}
                        onClick={() => setSelectedProduct(product)}
                      >
                        <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-sm text-gray-500">₹ {product.price.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeSection === 'add-logo' && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <p className="text-gray-500">Drag and drop your logo here</p>
                      <p className="text-sm text-gray-400">or click to upload</p>
                    </div>
                    <input
                      type="text"
                      placeholder="Add Custom Text"
                      className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                  </div>
                )}
              </div>

              <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t">
                <button className="w-full bg-[#333333] text-white py-4 rounded-lg font-medium">
                  Create Order
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}