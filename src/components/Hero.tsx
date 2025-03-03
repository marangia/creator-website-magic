
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
    <section className="pt-32 pb-16 overflow-hidden">
      <div className="container text-center max-w-3xl mx-auto">
        <div ref={textRef} className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight reveal animate-fade-in">
            Il tuo nuovo sito, online e funzionante prima ancora di pagare
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto reveal animate-fade-in" style={{ animationDelay: '200ms' }}>
            Dai alla tua attività la presenza online che merita: realizziamo il tuo sito <span className="text-primary-600 font-medium">GRATIS</span>, pronto in meno 24 ore e decidi solo dopo se acquistarlo.
          </p>
          
          <div className="pt-4 flex justify-center reveal animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              Crea il tuo sito
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 reveal animate-fade-in" style={{ animationDelay: '500ms' }}>
            Nessuna carta di credito richiesta
          </p>
        </div>
      </div>
      
      {/* Trusted by section */}
      <div className="container mt-16">
        <p className="text-center text-sm text-gray-400 mb-4">Creato da</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <span className="text-gray-400 text-sm">Trusted Client {i}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Background design elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-30 -z-10 animate-float"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-30 -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
