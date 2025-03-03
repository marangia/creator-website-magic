
import React from 'react';

const TrustedBy = () => {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="container mx-auto">
        <h3 className="text-gray-500 text-lg mb-10 text-center">Trusted by:</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="w-32 h-16 flex items-center justify-center">
              <div className="bg-gray-100 w-full h-full rounded flex items-center justify-center">
                <div className="text-gray-400 text-xs">Logo Placeholder</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
