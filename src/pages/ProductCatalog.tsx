import { useState } from 'react';
import { Product, products } from '../types/product';
import { ProductCard } from '../components/product/ProductCard';
import { ProductForm } from '../components/product/ProductForm';
import { TextEffect } from '../components/ui/TextEffect';

export function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  // Split products into sections for better layout
  const featuredProducts = products.slice(0, 3); // First 3 products in top grid
  const mainFeature = products[3]; // Large feature in middle
  const remainingProducts = products.slice(4); // Rest in grid below

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="px-2 py-4 sm:py-16 sm:px-4">
        <TextEffect
          as="p"
          per="word"
          delay={0.2}
          className="text-base sm:text-lg text-[#333333]/70 mb-6 sm:mb-12 max-w-2xl mx-auto px-2 text-center"
          preset="slide"
        >
          Experience the art of metal craftsmanship
        </TextEffect>
        
        {/* Featured products - Top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleProductSelect}
              index={index}
            />
          ))}
        </div>

        {/* Main feature - Full width */}
        <div className="mt-1 sm:mt-4">
          <ProductCard
            product={mainFeature}
            onSelect={handleProductSelect}
            index={3}
            featured
          />
        </div>

        {/* Remaining products - Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-4 mt-1 sm:mt-4">
          {remainingProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleProductSelect}
              index={index + 4}
            />
          ))}
        </div>
      </div>

      <ProductForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedProduct={selectedProduct}
        products={products}
        onProductSelect={setSelectedProduct}
      />
    </div>
  );
}