import React, { useEffect, useRef } from 'react';
import Button from './Button';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Il tuo nuovo sito,<br />
            online e funzionante prima<br />
            ancora di pagare
          </h1>
          
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
            Dai alla tua attività la presenza online che merita: realizziamo il tuo<br />
            sito <span className="text-purple-600 font-semibold">GRATIS</span>, pronto in meno 24 ore e decidi solo dopo se acquistarlo.
          </p>
          
          <div className="flex justify-center gap-4 pt-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Crea il tuo sito
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-800 hover:bg-gray-50"
            >
              Richiedi l'analisi gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* Background design elements - removed as per screenshot */}
    </section>
  );
};

export default Hero;
