import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Product } from '../../types/product';
import { LazyImage } from '../ui/LazyImage';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  index: number;
  featured?: boolean;
}

export function ProductCard({ product, onSelect, index, featured = false }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onSelect(product)}
      className="group cursor-pointer relative transform transition-all duration-300 hover:scale-[1.02]"
    >
      <div className={`relative bg-gray-100 ${
        featured ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[3/4]'
      }`}>
        <LazyImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Quick add button */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
        </div>
      </div>
      
      {/* Product info */}
      <div className="px-2 pt-3 pb-4 sm:px-0">
        <h3 className="text-sm sm:text-base font-medium text-[#333333] mb-1">{product.name}</h3>
        <p className="text-sm sm:text-base text-[#333333]">₹ {product.price.toLocaleString()}</p>
        {product.discount_p > 0 && (
          <p className="text-xs text-red-500">-{product.discount_p}% OFF</p>
        )}
      </div>
    </motion.div>
  );
}