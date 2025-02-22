import { useState, useEffect } from 'react';
import { Product } from '../../../types/product';

interface ChooseMetalSectionProps {
  products: Product[];
  selectedProduct: Product | null;
  onProductSelect: (product: Product) => void;
}

interface ColorOption {
  id: string;
  name: string;
  gradient: string;
  price: number;
}

interface BorderOption {
  id: string;
  name: string;
  icon: string;
  price: number;
}

const colorOptions: ColorOption[] = [
  { id: 'black', name: 'Black', gradient: 'bg-gradient-to-br from-gray-800 to-black', price: 0 },
  { id: 'gold', name: 'Gold', gradient: 'bg-gradient-to-br from-yellow-400 to-yellow-600', price: 1500 },
  { id: 'silver', name: 'Silver', gradient: 'bg-gradient-to-br from-gray-300 to-gray-500', price: 1500 },
  { id: 'rose-gold', name: 'Rose Gold', gradient: 'bg-gradient-to-br from-pink-300 to-rose-400', price: 1500 },
  { id: 'dual-tone', name: 'Dual Tone', gradient: 'bg-[linear-gradient(45deg,#000_50%,#FFD700_50%)]', price: 1500 },
  { id: 'rainbow', name: 'Rainbow', gradient: 'bg-gradient-to-r from-red-500 via-green-500 to-blue-500', price: 2000 },
];

const borderOptions: BorderOption[] = [
  { id: 'classic', name: 'Classic', icon: '⬚', price: 0 },
  { id: 'modern', name: 'Modern', icon: '▢', price: 0 },
];

export function ChooseMetalSection({ selectedProduct }: ChooseMetalSectionProps) {
  const [selectedColor, setSelectedColor] = useState(() => {
    const saved = sessionStorage.getItem('selectedColor');
    return saved ? JSON.parse(saved) : colorOptions[0];
  });

  const [selectedBorder, setSelectedBorder] = useState(() => {
    const saved = sessionStorage.getItem('selectedBorder');
    return saved ? JSON.parse(saved) : borderOptions[0];
  });

  useEffect(() => {
    sessionStorage.setItem('selectedColor', JSON.stringify(selectedColor));
  }, [selectedColor]);

  useEffect(() => {
    sessionStorage.setItem('selectedBorder', JSON.stringify(selectedBorder));
  }, [selectedBorder]);

  const basePrice = selectedProduct?.price || 0;
  const totalPrice = basePrice + selectedColor.price + selectedBorder.price;

  return (
    <div className="space-y-8">
      {/* Color Selection */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Color</h3>
        <div className="grid grid-cols-3 gap-6">
          {colorOptions.map((color) => (
            <div key={color.id} className="flex flex-col items-center gap-2">
              <button
                onClick={() => setSelectedColor(color)}
                className={`w-12 h-12 rounded-full ${color.gradient} shadow-lg transform transition-all duration-200 hover:scale-110 ${
                  selectedColor.id === color.id ? 'ring-2 ring-offset-2 ring-black scale-110' : ''
                }`}
                aria-label={color.name}
              />
              <div className="text-center">
                <div className="text-sm font-medium">{color.name}</div>
                <div className="text-xs text-gray-500">
                  {color.price > 0 ? `+₹${color.price.toLocaleString()}` : 'Included'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Selection */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Border</h3>
        <div className="flex gap-6">
          {borderOptions.map((border) => (
            <div key={border.id} className="flex flex-col items-center gap-2">
              <button
                onClick={() => setSelectedBorder(border)}
                className={`w-16 h-16 flex items-center justify-center border-2 rounded-xl text-2xl transition-all duration-200 hover:bg-gray-50 ${
                  selectedBorder.id === border.id
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200'
                }`}
              >
                {border.icon}
              </button>
              <div className="text-center">
                <div className="text-sm font-medium">{border.name}</div>
                <div className="text-xs text-gray-500">
                  {border.price > 0 ? `+₹${border.price.toLocaleString()}` : 'Included'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Price */}
      <div className="pt-6 border-t">
        <div className="flex justify-between items-center text-base">
          <span className="font-medium text-gray-700">Total Price</span>
          <span className="font-semibold">₹ {totalPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}