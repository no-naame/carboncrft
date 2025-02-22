import { useState, useEffect } from 'react';

export function EditCardSection() {
  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem('editCardData');
    return saved ? JSON.parse(saved) : {
      cardHolderName: '',
      namePosition: 'front',
      cardNumberPosition: 'front'
    };
  });

  useEffect(() => {
    sessionStorage.setItem('editCardData', JSON.stringify(formData));
  }, [formData]);

  const basePrice = 24999.00;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Holder Name
          </label>
          <input
            type="text"
            maxLength={26}
            placeholder="Enter name (max 26 characters)"
            value={formData.cardHolderName}
            onChange={(e) => setFormData({ ...formData, cardHolderName: e.target.value })}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-base"
          />
          <p className="text-sm text-gray-500 mt-1">
            {formData.cardHolderName.length}/26 characters
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name Position
          </label>
          <select
            value={formData.namePosition}
            onChange={(e) => setFormData({ ...formData, namePosition: e.target.value })}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-base"
          >
            <option value="front">Front</option>
            <option value="back">Back</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number Position
          </label>
          <select
            value={formData.cardNumberPosition}
            onChange={(e) => setFormData({ ...formData, cardNumberPosition: e.target.value })}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-base"
          >
            <option value="front">Front</option>
            <option value="back">Back</option>
          </select>
        </div>
      </div>

      <div className="pt-6 border-t">
        <div className="flex justify-between items-center text-base">
          <span className="font-medium text-gray-700">Total Price</span>
          <span className="font-semibold">₹ {basePrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}