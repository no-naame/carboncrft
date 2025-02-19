import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
  nextLabel?: string;
}

export function NavigationButtons({
  onPrevious,
  onNext,
  showPrevious = true,
  showNext = true,
  nextLabel = 'Next'
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between items-center mt-8">
      {showPrevious ? (
        <button
          onClick={onPrevious}
          className="flex items-center gap-2 text-[#C6A55C] hover:text-[#E7CC87] transition-colors font-kontora"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>
      ) : <div />}
      
      {showNext && (
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 gold-gradient text-black rounded-lg py-3 px-8 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-[#C6A55C]/25 font-kontora"
        >
          {nextLabel}
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}