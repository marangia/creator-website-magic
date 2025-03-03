
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import PromoText from '@/components/PromoText';
import CategoryTabs from '@/components/CategoryTabs';
import WebsitePreview from '@/components/WebsitePreview';
import Features from '@/components/Features';
import Button from '@/components/Button';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('estetista');

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <TrustedBy />
        <PromoText />
        <CategoryTabs onCategoryChange={handleCategoryChange} />
        <WebsitePreview category={selectedCategory} />
        
        {/* New Showcase Section */}
        <section className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="reveal animate-fade-in">
              <div className="bg-gray-100 rounded-[24px] p-[10px] overflow-hidden h-[500px] w-full max-w-[600px] mx-auto">
                <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                  <p className="text-gray-500">Image placeholder (600x500)</p>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6 reveal animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold">
                Il tuo sito attuale non genera abbastanza contatti o vendite? Ci pensiamo noi!
              </h2>
              
              <p className="text-lg text-gray-600">
                Con Visionabile puoi dire per sempre addio a:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Design vecchio che non valorizza la tua attività</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Tempi di caricamento lenti che fanno scappare i clienti</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Contenuti poco chiari che non convincono e convertono</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Navigazione complicata che frustra gli utenti</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <Features />

        {/* CTA Section */}
        <section className="container py-20">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal animate-fade-in">
                Pronto a trasformare la tua presenza online?
              </h2>
              
              <p className="text-lg text-white/90 mb-8 reveal animate-fade-in" style={{ animationDelay: '100ms' }}>
                Ottieni un sito web professionale, veloce e ottimizzato per convertire visitatori in clienti. Senza nessun rischio.
              </p>
              
              <div className="reveal animate-fade-in flex justify-center" style={{ animationDelay: '200ms' }}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="bg-white text-primary-700 hover:bg-white/90"
                >
                  Crea il tuo sito gratuitamente
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/9c85c84a-b483-473c-acaa-daa1ac8a3576.png" 
                alt="Visionabile" 
                className="h-8 w-auto mb-4" 
              />
              <p className="text-gray-600">
                Siti web professionali, veloci e ottimizzati per convertire visitatori in clienti.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Chi siamo</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">La nostra storia</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Team</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Carriere</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Servizi</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Creazione siti web</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Design</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">SEO</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Contatti</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">info@visionabile.com</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">+39 123 456 7890</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Supporto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Visionabile. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
