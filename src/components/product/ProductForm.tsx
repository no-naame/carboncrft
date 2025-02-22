import { motion, AnimatePresence } from 'framer-motion';
import { X, GripHorizontal, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Product } from '../../types/product';
import { EditCardSection } from './sections/EditCardSection';
import { ChooseMetalSection } from './sections/ChooseMetalSection';
import { AddLogoSection } from './sections/AddLogoSection';
import { ShippingForm } from '../checkout/ShippingForm';
import { OrderConfirmation } from '../checkout/OrderConfirmation';
import { ThankYou } from '../checkout/ThankYou';

interface ProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: Product | null;
  products: Product[];
  onProductSelect: (product: Product) => void;
}

type Section = 'edit-card' | 'choose-metal' | 'add-logo';
type FlowStep = 'product' | 'shipping' | 'confirmation' | 'thank-you';

export function ProductForm({ isOpen, onClose, selectedProduct, products, onProductSelect }: ProductFormProps) {
  const [currentSection, setCurrentSection] = useState<Section>('edit-card');
  const [currentStep, setCurrentStep] = useState<FlowStep>('product');
  const [shippingData, setShippingData] = useState<any>(null);
  const [customTexts, setCustomTexts] = useState<Array<{ id: string; text: string; position: { x: number; y: number } }>>([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const sections: Section[] = ['edit-card', 'choose-metal', 'add-logo'];

  const handleNext = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    } else {
      setCurrentStep('shipping');
    }
  };

  const handleBack = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
    }
  };

  const handleSectionClick = (section: Section) => {
    setCurrentSection(section);
    setIsPanelOpen(true);
  };

  const handleShippingSubmit = (data: any) => {
    setShippingData(data);
    setCurrentStep('confirmation');
  };

  const handleConfirmationBack = () => {
    setCurrentStep('shipping');
  };

  const handleConfirmationProceed = () => {
    setCurrentStep('thank-you');
  };

  if (!selectedProduct) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {currentStep === 'product' && (
            <div className="fixed inset-0 bg-white z-50">
              {/* Product Image - Now 70% of viewport height */}
              <div className="relative h-[70vh] bg-white">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Section Tabs - Now 30% of viewport height */}
              <div className="h-[30vh] bg-[#F5F5F5] p-6 flex items-center">
                <div className="w-full max-w-xl mx-auto">
                  <div className="flex rounded-full bg-white p-1">
                    {sections.map((section) => (
                      <button
                        key={section}
                        onClick={() => handleSectionClick(section)}
                        className={`flex-1 py-4 px-6 rounded-full text-base transition-all duration-300 ${
                          currentSection === section && isPanelOpen
                            ? 'bg-black text-white'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {section === 'edit-card' ? 'Edit Card Info' : 
                         section === 'choose-metal' ? 'Choose Metal' : 
                         'Add Logo / Text'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sliding Panel */}
              <AnimatePresence>
                {isPanelOpen && (
                  <>
                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsPanelOpen(false)}
                      className="fixed inset-0 bg-black/20"
                    />

                    {/* Panel */}
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: '40%' }}
                      exit={{ y: '100%' }}
                      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                      drag="y"
                      dragConstraints={{ top: 0, bottom: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(_, info) => {
                        if (info.offset.y > 100) {
                          setIsPanelOpen(false);
                        }
                      }}
                      className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-xl"
                    >
                      {/* Handle and Navigation */}
                      <div className="flex items-center justify-between px-6 py-4 border-b">
                        <div className="flex items-center gap-4">
                          {currentSection !== 'edit-card' && (
                            <button
                              onClick={handleBack}
                              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                            >
                              <ArrowLeft size={20} />
                              <span>Back</span>
                            </button>
                          )}
                        </div>
                        <GripHorizontal className="text-gray-400" size={20} />
                        <button
                          onClick={handleNext}
                          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                        >
                          <span>{currentSection === 'add-logo' ? 'Create Order' : 'Next'}</span>
                          <ArrowRight size={20} />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="px-6 pb-24 overflow-y-auto max-h-[60vh]">
                        <div className="max-w-xl mx-auto py-6">
                          <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                              key={currentSection}
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -50 }}
                              transition={{ duration: 0.3 }}
                            >
                              {currentSection === 'edit-card' && <EditCardSection />}
                              {currentSection === 'choose-metal' && (
                                <ChooseMetalSection
                                  products={products}
                                  selectedProduct={selectedProduct}
                                  onProductSelect={onProductSelect}
                                />
                              )}
                              {currentSection === 'add-logo' && (
                                <AddLogoSection
                                  customTexts={customTexts}
                                  setCustomTexts={setCustomTexts}
                                  cardRef={cardRef}
                                />
                              )}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          )}

          {currentStep === 'shipping' && (
            <ShippingForm
              isOpen={true}
              onClose={() => setCurrentStep('product')}
              onSubmit={handleShippingSubmit}
            />
          )}

          {currentStep === 'confirmation' && shippingData && (
            <OrderConfirmation
              shippingData={shippingData}
              selectedProduct={selectedProduct}
              onBack={handleConfirmationBack}
              onProceed={handleConfirmationProceed}
            />
          )}

          {currentStep === 'thank-you' && (
            <ThankYou />
          )}
        </>
      )}
    </AnimatePresence>
  );
}