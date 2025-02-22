import { useState } from 'react';
import { Product, products } from '../types/product';
import { ProductCard } from '../components/product/ProductCard';
import { ProductForm } from '../components/product/ProductForm';

export function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  // Split products into regular and featured
  const regularProducts = products.slice(0, 2);
  const featuredProduct = products[2];
  const remainingProducts = products.slice(3);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="px-2 py-4 sm:py-16 sm:px-4">
        <p className="text-base sm:text-lg text-[#333333]/70 mb-6 sm:mb-12 max-w-2xl mx-auto px-2 text-center">
          Experience the art of metal craftsmanship
        </p>
        
        {/* First row - Two products */}
        <div className="grid grid-cols-2 gap-1 sm:gap-4">
          {regularProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleProductSelect}
              index={index}
            />
          ))}
        </div>

        {/* Featured product - Full width */}
        <div className="mt-1 sm:mt-4">
          <ProductCard
            product={featuredProduct}
            onSelect={handleProductSelect}
            index={2}
            featured
          />
        </div>

        {/* Remaining products */}
        {remainingProducts.length > 0 && (
          <div className="grid grid-cols-2 gap-1 sm:gap-4 mt-1 sm:mt-4">
            {remainingProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={handleProductSelect}
                index={index + 3}
              />
            ))}
          </div>
        )}
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