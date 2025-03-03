import React, { useState, useRef, useEffect } from 'react';

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
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);

  const handleTabChange = (categoryId: string) => {
    setActiveTab(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
    
    // Scroll the selected tab into view
    const tabElement = document.getElementById(`tab-${categoryId}`);
    if (tabElement && tabsRef.current) {
      const container = tabsRef.current;
      const tabRect = tabElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      // Calculate the centered position
      const scrollLeft = tabElement.offsetLeft - (containerRect.width / 2) + (tabRect.width / 2);
      
      // Smooth scroll to the position
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Check if scrolling shadows should be shown
  const checkScrollShadows = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftShadow(scrollLeft > 10);
      setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Initialize and set up scroll event listeners
  useEffect(() => {
    const tabsElement = tabsRef.current;
    if (tabsElement) {
      checkScrollShadows();
      tabsElement.addEventListener('scroll', checkScrollShadows);
      window.addEventListener('resize', checkScrollShadows);
    }
    
    return () => {
      if (tabsElement) {
        tabsElement.removeEventListener('scroll', checkScrollShadows);
        window.removeEventListener('resize', checkScrollShadows);
      }
    };
  }, []);

  return (
    <div className="container py-12">
      <div className="relative" ref={tabContainerRef}>
        {/* Left scroll shadow */}
        {showLeftShadow && (
          <div className="absolute left-0 top-0 bottom-2 w-12 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent"></div>
        )}
        
        <div 
          ref={tabsRef}
          className="flex overflow-x-auto py-1 pb-2 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-6 md:space-x-8 min-w-min px-4 mx-auto">
            {categories.map((category) => (
              <button
                id={`tab-${category.id}`}
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`relative whitespace-nowrap px-4 py-2 text-base md:text-lg transition-all duration-300 tab-underline ${
                  activeTab === category.id 
                    ? 'text-primary-600 font-semibold active' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Right scroll shadow */}
        {showRightShadow && (
          <div className="absolute right-0 top-0 bottom-2 w-12 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent"></div>
        )}
        
      </div>
    </div>
  );
};

export default CategoryTabs;
