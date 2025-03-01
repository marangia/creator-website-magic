
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Command, Eclipse, Zap, AtSign } from "lucide-react";

const features = [
  {
    title: "Design vecchio che non valorizza la tua attività",
    description: "I siti web obsoleti allontanano i clienti e danneggiano la tua immagine professionale.",
    icon: Command
  },
  {
    title: "Tempi di caricamento lenti che fanno scappare i clienti",
    description: "Ogni secondo di attesa aumenta la probabilità che i visitatori abbandonino il tuo sito.",
    icon: Eclipse
  },
  {
    title: "Contenuti poco chiari che non convincono e convertono",
    description: "Messaggi confusi non comunicano il valore del tuo servizio e perdono potenziali clienti.",
    icon: Zap
  },
  {
    title: "Navigazione complicata che frustra gli utenti",
    description: "Un'esperienza utente difficile impedisce ai visitatori di trovare ciò che cercano.",
    icon: AtSign
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
        
        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-0">
          {features.slice(0, 4).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="reveal animate-fade-in border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm py-2"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline text-[15px]">
                  <span className="flex items-center gap-3">
                    <Icon
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 opacity-60"
                      aria-hidden="true"
                    />
                    <span className="font-medium text-gray-900">{feature.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-0 ps-11 text-gray-600">
                  {feature.description}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        
        <div 
          className="mt-8 pt-6 border-t border-gray-200 w-full reveal animate-fade-in" 
          style={{ animationDelay: '600ms' }}
        >
          <h3 className="font-semibold text-gray-900 text-xl">{features[4].title}</h3>
          {features[4].description && (
            <p className="text-gray-600 mt-2">{features[4].description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
