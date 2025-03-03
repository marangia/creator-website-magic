
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import Button from './Button';

const features = [
  {
    title: "Il tuo sito attuale non genera abbastanza contatti?",
    description: "Ti mancano clienti? Il tuo sito attuale non attira visitatori o non li converte in clienti? Visionabile ti aiuta a cambiare questa situazione."
  },
  {
    title: "Tempi di sviluppo troppo lunghi?",
    description: "Stanco di aspettare settimane o mesi per vedere il tuo sito online? Con Visionabile il tuo sito è pronto in meno di 24 ore."
  },
  {
    title: "Problemi con il tuo sito che non sai come risolvere?",
    description: "Il tuo sito ha problemi tecnici o di design che non sai come affrontare? Il nostro team di esperti può aiutarti a risolverli rapidamente."
  },
  {
    title: "Vuoi un design professionale che rispecchi la tua attività?",
    description: "Un design professionale è fondamentale per comunicare la qualità dei tuoi servizi. Creiamo siti web che valorizzano la tua professionalità."
  }
];

const benefits = [
  "Design moderno che riflette la professionalità della tua attività",
  "Tempi di caricamento ottimizzati per non perdere visitatori",
  "Contenuti chiari e convincenti che convertono visitatori in clienti",
  "Navigazione intuitiva per una migliore esperienza utente"
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
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 reveal animate-fade-in">
              Il tuo sito attuale non genera abbastanza contatti?
            </h2>
            
            <p className="text-gray-600 mb-8 reveal animate-fade-in" style={{ animationDelay: '100ms' }}>
              Ci pensiamo noi. Con Visionabile ottieni:
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 reveal animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={18} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Chi siamo
            </h2>
            <p className="text-gray-600 mb-4">
              Siamo un team di professionisti specializzati nella creazione di siti web efficaci per piccole e medie imprese.
            </p>
            <p className="text-gray-600 mb-4">
              La nostra missione è aiutare le aziende a ottenere una presenza online professionale che converte visitatori in clienti.
            </p>
            <p className="text-gray-600">
              Crediamo che ogni attività meriti un sito web di qualità, a un prezzo accessibile e senza rischi.
            </p>
          </div>
        </div>
        
        {/* Perché scegliere Visionabile */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Perché scegliere Visionabile</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Rischio zero per te</h3>
              <p className="text-gray-600 text-sm">
                Realizziamo il tuo sito gratis e solo se sei soddisfatto decidi se acquistarlo.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Nessuna sorpresa sui prezzi</h3>
              <p className="text-gray-600 text-sm">
                Prezzi trasparenti e chiari fin dall'inizio, senza costi nascosti o sorprese.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Tempi di consegna record</h3>
              <p className="text-gray-600 text-sm">
                Il tuo sito sarà pronto in meno di 24 ore, non settimane o mesi come con altri fornitori.
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              Crea il tuo sito gratuitamente
            </Button>
          </div>
        </div>
        
        {/* Cosa dicono di noi */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Cosa dicono di noi?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 text-white p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Cliente {i}</p>
                      <p className="text-gray-400 text-sm">Professionista</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  "Il servizio offerto da Visionabile è stato eccezionale. In tempi record ho avuto un sito web professionale che ha aumentato significativamente il numero di clienti per la mia attività."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
