interface ProductFormTabsProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function ProductFormTabs({ activeSection, onSectionChange }: ProductFormTabsProps) {
  return (
    <div className="flex rounded-full bg-gray-100 p-1 mb-8">
      <button
        onClick={() => onSectionChange('edit-card')}
        className={`flex-1 py-3 px-4 text-base rounded-full transition-all duration-300 ${
          activeSection === 'edit-card'
            ? 'bg-[#333333] text-white font-medium'
            : 'text-gray-600'
        }`}
      >
        Edit Card Info
      </button>
      <button
        onClick={() => onSectionChange('choose-metal')}
        className={`flex-1 py-3 px-4 text-base rounded-full transition-all duration-300 ${
          activeSection === 'choose-metal'
            ? 'bg-[#333333] text-white font-medium'
            : 'text-gray-600'
        }`}
      >
        Choose Metal
      </button>
      <button
        onClick={() => onSectionChange('add-logo')}
        className={`flex-1 py-3 px-4 text-base rounded-full transition-all duration-300 ${
          activeSection === 'add-logo'
            ? 'bg-[#333333] text-white font-medium'
            : 'text-gray-600'
        }`}
      >
        Add Logo / Text
      </button>
    </div>
  );
}