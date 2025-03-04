import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const categories = [
  { id: 'estetista', label: 'Estetista' },
  { id: 'elettricista', label: 'Elettricista' },
  { id: 'ristorante', label: 'Ristorante' },
  { id: 'hotel', label: 'Hotel' },
  { id: 'immobiliare', label: 'Immobiliare' },
  { id: 'bottega', label: 'Bottega' },
  { id: 'bar', label: 'Bar' },
  { id: 'negozio', label: 'Negozio' },
  { id: 'idraulico', label: 'Idraulico' },
  { id: 'gommista', label: 'Gommista' },
  { id: 'barbiere', label: 'Barbiere' },
  { id: 'clinica', label: 'Clinica' },
];

interface CategoryTabsProps {
  onCategoryChange?: (categoryId: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ onCategoryChange }) => {
  const [activeTab, setActiveTab] = useState('estetista');
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true); // Always show right shadow at first
  const itemsPerView = 6; // Display 6 items at a time
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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

  // Calculate scroll distance based on tab width
  const calculateScrollDistance = () => {
    if (tabsRef.current) {
      const tabWidth = tabsRef.current.querySelector('button')?.offsetWidth || 120;
      return tabWidth * itemsPerView;
    }
    return 600; // Fallback value
  };

  // Scroll left by 6 items
  const scrollLeft = () => {
    if (tabsRef.current) {
      const scrollDistance = calculateScrollDistance();
      const newScrollAmount = Math.max(0, scrollAmount - scrollDistance);
      setScrollAmount(newScrollAmount);
      
      tabsRef.current.scrollTo({
        left: newScrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Scroll right by 6 items
  const scrollRight = () => {
    if (tabsRef.current) {
      const scrollDistance = calculateScrollDistance();
      const maxScroll = tabsRef.current.scrollWidth - tabsRef.current.clientWidth;
      const newScrollAmount = Math.min(maxScroll, scrollAmount + scrollDistance);
      setScrollAmount(newScrollAmount);
      
      tabsRef.current.scrollTo({
        left: newScrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Check if scrolling shadows should be shown
  const checkScrollShadows = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setScrollAmount(scrollLeft);
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
    <div className="w-full py-12">
      <div className="relative max-w-4xl mx-auto px-4" ref={tabContainerRef}>
        {/* Left scroll arrow - only show on desktop */}
        {showLeftShadow && !isMobile && (
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md border-gray-200 rounded-full hidden md:flex"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
        
        {/* Left scroll shadow */}
        {showLeftShadow && (
          <div className="absolute left-0 top-0 bottom-2 w-12 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent"></div>
        )}
        
        <div 
          ref={tabsRef}
          className="flex overflow-x-auto py-1 pb-2 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-8 md:space-x-10 w-full">
            {categories.map((category) => (
              <button
                id={`tab-${category.id}`}
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`relative whitespace-nowrap px-3 py-2 text-base md:text-lg transition-all duration-300 tab-underline flex-shrink-0 ${
                  activeTab === category.id 
                    ? 'text-primary-600 font-semibold active' 
                    : 'text-gray-500 hover:text-gray-800 border-b border-gray-200'
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
        
        {/* Right scroll arrow - only show on desktop */}
        {showRightShadow && !isMobile && (
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md border-gray-200 rounded-full hidden md:flex"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CategoryTabs;
