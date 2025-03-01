
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
      <div className="container text-center max-w-4xl mx-auto">
        <div ref={textRef} className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight reveal animate-fade-in">
            Il tuo nuovo sito, online e funzionante prima ancora di pagare
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto reveal animate-fade-in" style={{ animationDelay: '200ms' }}>
            Dai alla tua attività la presenza online che merita: realizziamo il tuo sito <span className="text-primary-600 font-medium">GRATIS</span>, pronto in meno 24 ore e decidi solo dopo se acquistarlo.
          </p>
          
          <div className="pt-6 reveal animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button size="lg">
              Crea il tuo sito
            </Button>
          </div>
        </div>
      </div>

      {/* Background design elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-30 -z-10 animate-float"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-30 -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
