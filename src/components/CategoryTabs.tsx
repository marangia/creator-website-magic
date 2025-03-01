
import React, { useState, useRef } from 'react';

const categories = [
  { id: 'estetista', label: 'Estetista' },
  { id: 'elettricista', label: 'Elettricista' },
  { id: 'ristorante', label: 'Ristorante' },
  { id: 'hotel', label: 'Hotel' },
  { id: 'immobile', label: 'Immobile' },
  { id: 'bottega', label: 'Bottega' },
];

interface CategoryTabsProps {
  onCategoryChange?: (categoryId: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ onCategoryChange }) => {
  const [activeTab, setActiveTab] = useState('estetista');
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (categoryId: string) => {
    setActiveTab(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <div className="container py-12">
      <div className="relative">
        <div 
          ref={tabsRef}
          className="flex overflow-x-auto pb-2 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-4 md:space-x-6 min-w-min px-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`relative whitespace-nowrap px-4 py-2 text-base md:text-lg transition-all duration-300 tab-underline ${
                  activeTab === category.id 
                    ? 'text-primary-600 font-medium active' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default CategoryTabs;
