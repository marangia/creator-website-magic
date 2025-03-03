
import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';

interface WebsitePreviewProps {
  category?: string;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ category = 'estetista' }) => {
  // This will be replaced with your actual images for each category later
  const [previewImage, setPreviewImage] = useState('/placeholder.svg');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This effect will update the preview image when the category changes
    // For now, we'll just use a placeholder with the category name
    console.log(`Category changed to: ${category}`);
    // You'll replace this with your actual image paths later
    setPreviewImage(`/placeholder.svg?category=${category}`);
  }, [category]);

  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-10">
      <div className="container text-center mb-10">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-800 mb-2">Con Visionabile, ottieni un <span className="text-primary-600 font-medium">sito web</span> completamente</p>
          <p className="text-gray-800 mb-2">riprogettato, moderno e <span className="text-primary-600 font-medium">pronto all'uso</span> in <span className="text-primary-600 font-medium">tempi record</span>.</p>
          <div className="flex justify-center mt-4">
            <div className="bg-[#7C3AED] w-10 h-10 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Horizontal scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        <div className="flex w-full min-w-max gap-6 px-4 md:px-0 md:justify-center">
          {/* Desktop Preview */}
          <div className="w-[340px] md:w-[580px] lg:w-[640px] flex-shrink-0 snap-center reveal animate-fade-in">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
              {/* Browser mockup header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="w-32 h-4 bg-gray-200 rounded-full mx-auto"></div>
                </div>
              </div>
              
              {/* Website content mockup */}
              <div className="p-6 bg-gray-50 min-h-[300px] flex flex-col items-center justify-center">
                {/* This will be updated with actual preview image for selected category */}
                <div className="text-center">
                  <div className="w-full max-w-md mx-auto h-[200px] bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-400">Anteprima sito {category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Preview */}
          <div className="w-[280px] flex-shrink-0 snap-center reveal animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 mx-auto max-w-[240px]">
              {/* Mobile header */}
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-end">
                <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
              </div>
              
              {/* Mobile content */}
              <div className="p-4 bg-gray-50 min-h-[400px]">
                <div className="space-y-3">
                  <div className="w-3/4 h-4 bg-gray-200 rounded-full"></div>
                  <div className="w-full h-4 bg-gray-200 rounded-full"></div>
                  <div className="w-2/3 h-4 bg-gray-200 rounded-full"></div>
                </div>
                
                <div className="mt-8 py-10">
                  <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-xs text-gray-400">Mobile {category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicators for mobile */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
      
      <div className="mt-6 text-center flex flex-col items-center justify-center reveal animate-fade-in" style={{ animationDelay: '400ms' }}>
        <Button size="md" className="bg-orange-500 text-white hover:bg-orange-600">Crea il tuo sito</Button>
      </div>
    </section>
  );
};

export default WebsitePreview;
