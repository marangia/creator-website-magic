
import React from 'react';

const PromoText = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Con Visionabile, ottieni <span className="text-purple-600">un sito web</span> completamente 
          riprogettato, moderno e <span className="text-purple-600">pronto all'uso in tempi record</span>.
        </h2>
        
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-16 bg-purple-600 rounded-md flex items-center justify-center">
            <div className="relative">
              <div className="w-3 h-3 bg-white rounded-full absolute -top-1 left-0"></div>
              <div className="w-3 h-3 bg-white rounded-full absolute -top-1 right-0"></div>
              <div className="w-8 h-3 bg-white rounded-full absolute top-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoText;
