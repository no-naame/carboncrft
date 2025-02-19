import { Step } from '../types';

interface ProgressBarProps {
  currentStep: Step;
}

const steps = [
  { id: 'landing', label: 'Welcome' },
  { id: 'userInfo', label: 'Your Info' },
  { id: 'catalog', label: 'Select Design' },
  { id: 'checkout', label: 'Checkout' },
];

export function ProgressBar({ currentStep }: ProgressBarProps) {
  const currentIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className="w-full mb-12">
      <div className="flex justify-between relative">
        {steps.map((step, index) => {
          const isActive = index <= currentIndex;
          return (
            <div key={step.id} className="flex flex-col items-center relative z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isActive ? 'gold-gradient' : 'bg-gray-700'
              }`}>
                <span className="text-sm font-semibold">
                  {index + 1}
                </span>
              </div>
              <span className={`mt-2 text-sm font-kontora ${
                isActive ? 'gold-text' : 'text-gray-500'
              }`}>
                {step.label}
              </span>
            </div>
          );
        })}
        <div className="absolute top-4 left-0 h-px w-full -translate-y-1/2 bg-gray-700">
          <div 
            className="h-full gold-gradient transition-all duration-300"
            style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}