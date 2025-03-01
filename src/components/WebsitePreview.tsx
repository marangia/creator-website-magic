
import React, { useEffect, useState } from 'react';
import Button from './Button';

interface WebsitePreviewProps {
  category?: string;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ category = 'estetista' }) => {
  // This will be replaced with your actual images for each category later
  const [previewImage, setPreviewImage] = useState('/placeholder.svg');

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
    <section className="container py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Desktop Preview */}
        <div className="w-full lg:w-3/5 reveal animate-fade-in">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
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
                <p className="text-gray-500 mb-4">Preview for: {category}</p>
                <div className="w-full max-w-md mx-auto h-[200px] bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-gray-400">Preview image will be updated based on category</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Preview */}
        <div className="w-full lg:w-1/5 reveal animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-200 mx-auto max-w-[240px]">
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
              
              <div className="mt-8 py-10 border-t border-b border-gray-200">
                <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-xs text-gray-400">Mobile preview for {category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center reveal animate-fade-in" style={{ animationDelay: '400ms' }}>
        <Button size="lg">Crea il tuo sito</Button>
      </div>
    </section>
  );
};

export default WebsitePreview;
