
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo and Name */}
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/b26bfb41-59de-49ed-996e-f3c66e6c7240.png" 
                alt="Visionabile" 
                className="h-12 w-auto" 
              />
              <span className="text-2xl font-bold">Visionabile</span>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4 text-gray-700">
              <p className="hover:text-primary-600 transition-colors">info@visionabile.com</p>
              
              <p>
                Bul. "Vitosha" 25, 1000 Sofia Center,<br />
                Sofia, Bulgaria
              </p>
              
              <p>BG205712733</p>
              
              <p className="text-gray-500">© 2025 - Visionabile</p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col md:items-end justify-between">
            {/* Navigation Links */}
            <div className="space-y-4 text-right">
              <a href="#come-funziona" className="block text-lg hover:text-primary-600 transition-colors">
                Come funziona
              </a>
              <a href="#chi-siamo" className="block text-lg hover:text-primary-600 transition-colors">
                Chi siamo
              </a>
              <a href="#vantaggi" className="block text-lg hover:text-primary-600 transition-colors">
                Vantaggi
              </a>
              <a href="#richiedi-analisi" className="block text-lg hover:text-primary-600 transition-colors">
                Richiedi analisi Gratuita
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Legal Links */}
          <div className="flex gap-4 text-gray-700 text-sm">
            <a href="#" className="hover:text-primary-600 transition-colors">
              Termini e Condizioni d'Uso
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary-600 transition-colors">
              Cookies Policy
            </a>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center gap-2 text-gray-700">
            <span>Lingua:</span>
            <button className="flex items-center gap-1 hover:text-primary-600 transition-colors">
              <span className="flex items-center gap-1">
                <img 
                  src="https://flagcdn.com/16x12/it.png" 
                  alt="Italian Flag" 
                  className="w-4 h-3" 
                />
                Italiano
              </span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
