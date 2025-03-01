
import React, { useState } from 'react';

const categories = [
  { id: 'estetista', label: 'Estetista' },
  { id: 'elettricista', label: 'Elettricista' },
  { id: 'ristorante', label: 'Ristorante' },
  { id: 'hotel', label: 'Hotel' },
  { id: 'immobile', label: 'Immobile' },
  { id: 'bottega', label: 'Bottega' },
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState('estetista');

  return (
    <div className="container py-12">
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-16 relative">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`relative px-4 py-2 text-base md:text-lg transition-all duration-300 tab-underline ${
              activeTab === category.id 
                ? 'text-primary-600 font-medium active' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {category.label}
          </button>
        ))}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default CategoryTabs;
