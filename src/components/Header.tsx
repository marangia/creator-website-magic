
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/b26bfb41-59de-49ed-996e-f3c66e6c7240.png" 
            alt="Visionabile" 
            className="h-12" 
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#come-funziona" className="text-gray-800 hover:text-primary-600 transition-colors duration-200">
            Come funziona
          </a>
          <a href="#chi-siamo" className="text-gray-800 hover:text-primary-600 transition-colors duration-200">
            Chi siamo
          </a>
          <a href="#vantaggi" className="text-gray-800 hover:text-primary-600 transition-colors duration-200">
            Vantaggi
          </a>
          <a href="#richiedi-analisi" className="text-gray-800 hover:text-primary-600 transition-colors duration-200">
            Richiedi analisi Gratuita
          </a>
          <Button 
            variant="primary" 
            className="bg-orange-500 text-white hover:bg-orange-600 ml-4"
          >
            Crea il tuo sito
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 hover:text-primary-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container py-4 flex flex-col space-y-4">
          <a 
            href="#come-funziona" 
            className="text-gray-800 hover:text-primary-600 transition-colors px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Come funziona
          </a>
          <a 
            href="#chi-siamo" 
            className="text-gray-800 hover:text-primary-600 transition-colors px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Chi siamo
          </a>
          <a 
            href="#vantaggi" 
            className="text-gray-800 hover:text-primary-600 transition-colors px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Vantaggi
          </a>
          <a 
            href="#richiedi-analisi" 
            className="text-gray-800 hover:text-primary-600 transition-colors px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Richiedi analisi Gratuita
          </a>
          <Button 
            variant="primary" 
            className="bg-orange-500 text-white hover:bg-orange-600 w-full"
          >
            Crea il tuo sito
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
