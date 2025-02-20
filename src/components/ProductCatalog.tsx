import { motion } from 'framer-motion';

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
  return (
    <div className="container mx-auto px-4 py-16">
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
              <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                View Details
              </button>
            </div>
            <h3 className="text-lg font-medium text-[#333333] mb-2">{product.name}</h3>
            <p className="text-[#333333]/70">₹ {product.price.toLocaleString()}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}