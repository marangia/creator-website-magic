
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
      className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="bg-[#7C3AED] w-8 h-8 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">V</span>
          </div>
          <span className="font-bold">Visionabile</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm">
            Come funziona
          </a>
          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm">
            Chi siamo
          </a>
          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm">
            Esempi
          </a>
          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm">
            Risultati clienti precedenti
          </a>
          <Button className="bg-orange-500 text-white hover:bg-orange-600 text-sm">Crea il tuo sito</Button>
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
            href="#" 
            className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Come funziona
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Chi siamo
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Esempi
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Risultati clienti precedenti
          </a>
          <Button className="w-full bg-orange-500">Crea il tuo sito</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
