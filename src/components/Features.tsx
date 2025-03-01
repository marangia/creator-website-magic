
import React, { useEffect } from 'react';

const features = [
  {
    title: "Design vecchio che non valorizza la tua attività",
    description: "I siti web obsoleti allontanano i clienti e danneggiano la tua immagine professionale."
  },
  {
    title: "Tempi di caricamento lenti che fanno scappare i clienti",
    description: "Ogni secondo di attesa aumenta la probabilità che i visitatori abbandonino il tuo sito."
  },
  {
    title: "Contenuti poco chiari che non convincono e convertono",
    description: "Messaggi confusi non comunicano il valore del tuo servizio e perdono potenziali clienti."
  },
  {
    title: "Navigazione complicata che frustra gli utenti",
    description: "Un'esperienza utente difficile impedisce ai visitatori di trovare ciò che cercano."
  },
  {
    title: "Con Visionabile, ottieni un sito web completamente riprogettato, moderno e pronto all'uso in tempi record.",
    description: "Progettato per convertire i visitatori in clienti, con un design che valorizza la tua professionalità."
  }
];

const Features = () => {
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
    <section className="container py-20 bg-gray-50 rounded-3xl my-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 reveal animate-fade-in">
          Il tuo sito attuale non genera abbastanza contatti o vendite?
        </h2>
        
        <p className="text-lg text-gray-600 text-center mb-12 reveal animate-fade-in" style={{ animationDelay: '100ms' }}>
          Ci pensiamo noi. Con Visionabile puoi dire per sempre addio a:
        </p>
        
        <ul className="space-y-6">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className={`flex items-start gap-3 reveal animate-fade-in`} 
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {index < 4 ? (
                <>
                  <span className="text-primary-600 flex-shrink-0 mt-1">•</span>
                  <div>
                    <h3 className="font-medium text-gray-900">{feature.title}</h3>
                    {feature.description && (
                      <p className="text-gray-600 mt-1">{feature.description}</p>
                    )}
                  </div>
                </>
              ) : (
                <div className="mt-8 pt-6 border-t border-gray-200 w-full">
                  <h3 className="font-semibold text-gray-900 text-xl">{feature.title}</h3>
                  {feature.description && (
                    <p className="text-gray-600 mt-2">{feature.description}</p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
