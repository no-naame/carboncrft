import { useState, useEffect, RefObject } from 'react';

interface CustomText {
  id: string;
  text: string;
  position: { x: number; y: number };
}

interface AddLogoSectionProps {
  customTexts: CustomText[];
  setCustomTexts: (texts: CustomText[]) => void;
  cardRef: RefObject<HTMLDivElement>;
}

export function AddLogoSection({ customTexts, setCustomTexts, cardRef }: AddLogoSectionProps) {
  const [newText, setNewText] = useState(() => {
    const saved = sessionStorage.getItem('newLogoText');
    return saved || '';
  });

  useEffect(() => {
    sessionStorage.setItem('newLogoText', newText);
  }, [newText]);

  useEffect(() => {
    const saved = sessionStorage.getItem('customTexts');
    if (saved) {
      setCustomTexts(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('customTexts', JSON.stringify(customTexts));
  }, [customTexts]);

  const addCustomText = () => {
    if (!newText.trim() || !cardRef.current) return;
    
    const cardRect = cardRef.current.getBoundingClientRect();
    
    setCustomTexts([
      ...customTexts,
      {
        id: Date.now().toString(),
        text: newText,
        position: {
          x: cardRect.width / 2 - 50,
          y: cardRect.height / 2 - 20,
        }
      }
    ]);
    setNewText('');
  };

  const removeText = (id: string) => {
    setCustomTexts(texts => texts.filter(text => text.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Enter custom text"
            className="flex-1 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-base"
          />
          <button
            onClick={addCustomText}
            className="px-6 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
            Add
          </button>
        </div>

        {customTexts.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Added texts (drag to position on card):</p>
            {customTexts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-base">{item.text}</span>
                <button
                  onClick={() => removeText(item.id)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-6 border-t">
        <div className="flex justify-between items-center text-base">
          <span className="font-medium text-gray-700">Total Price</span>
          <span className="font-semibold">₹ 24,999</span>
        </div>
      </div>
    </div>
  );
}