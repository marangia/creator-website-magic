
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
          <div className="w-[114px] h-[86px] rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/8587e43e-c790-4b0b-89c4-dc281bd415e3.png" 
              alt="Visionabile smiley face" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoText;
