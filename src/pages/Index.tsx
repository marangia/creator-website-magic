
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import PromoText from '@/components/PromoText';
import CategoryTabs from '@/components/CategoryTabs';
import WebsitePreview from '@/components/WebsitePreview';
import Features from '@/components/Features';
import Button from '@/components/Button';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Search, FileText, ThumbsUp, Eye, SearchCheck, Sparkles, Clock, Headphones, Tag } from 'lucide-react';

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
        
        {/* Showcase Section */}
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
        
        {/* Chi siamo Section */}
        <section className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6 reveal animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Chi siamo
              </h2>
              
              <p className="text-lg text-gray-600 mb-4">
                Siamo un team di professionisti e innovatori, stanchi dei soliti metodi di lavoro lenti e costosi.
              </p>
              
              <p className="text-lg text-gray-600 mb-4">
                <span className="font-semibold">Con Visionabile,</span> reinventiamo il modo in cui le aziende adottano soluzioni digitali: <span className="font-semibold">nessun rischio, nessuna attesa, nessuna promessa non mantenuta.</span>
              </p>
              
              <p className="text-lg text-gray-600">
                Creiamo soluzioni su misura che paghi solo se adatte a te e alla tua attività.
              </p>
            </div>
            
            {/* Right side - Image */}
            <div className="reveal animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="bg-gray-100 rounded-[24px] p-[10px] overflow-hidden h-[500px] w-full max-w-[600px] mx-auto">
                <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                  <p className="text-gray-500">Image placeholder (600x500)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Come funziona Section */}
        <section className="container py-20 bg-gray-50">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Come funziona
            </h2>
            <p className="text-lg text-gray-600">
              Ci pensiamo noi. Con <span className="text-primary-600 font-semibold">Visionabile</span> puoi dire <span className="text-primary-600 font-semibold">per sempre addio</span> a
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="flex flex-col items-start text-left p-6 reveal animate-fade-in">
              <div className="bg-primary-100 p-4 rounded-full mb-6">
                <Search size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Richiedi l'analisi gratuita del tuo sito</h3>
              <p className="text-gray-600">
                Ti inviamo su WhatsApp o email un'analisi completa del tuo attuale sito ma soprattutto soluzioni migliorative
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-start text-left p-6 reveal animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="bg-primary-100 p-4 rounded-full mb-6">
                <FileText size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ricevi la nostra proposta</h3>
              <p className="text-gray-600">
                Creiamo il tuo nuovo sito entro 24 ore utilizzando tecnologie moderne, pronto ed ottimizzato per trasformare i visitatori in clienti
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-start text-left p-6 reveal animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="bg-primary-100 p-4 rounded-full mb-6">
                <ThumbsUp size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Decidi se è adatto a te</h3>
              <p className="text-gray-600">
                Se il sito ti piace, lo compri (ad un prezzo imbattibile). Nessun rischio. Nessun abbonamento. Nessuna attesa
              </p>
            </div>
          </div>
          
          <div className="flex justify-center reveal animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button 
              variant="primary" 
              size="lg"
            >
              Richiedi analisi gratuita
            </Button>
          </div>
        </section>
        
        {/* Perché scegliere Visionabile Section */}
        <section className="container py-20">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perché scegliere <span className="text-primary-600">Visionabile</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ci pensiamo noi. Con <span className="font-semibold">Visionabile</span> puoi dire <span className="font-semibold">per sempre addio</span> a:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
            {/* Benefit 1 */}
            <div className="flex items-start gap-4 p-10 bg-[#FAFAFA] rounded-[16px] reveal animate-fade-in">
              <div className="flex-shrink-0">
                <div className="p-1">
                  <Eye size={28} className="text-gray-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Vedi prima, paghi dopo</h3>
                <p className="text-gray-600">
                  Nessun rischio, vedi e provi il tuo sito prima di pagare
                </p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex items-start gap-4 p-10 bg-[#FAFAFA] rounded-[16px] reveal animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="flex-shrink-0">
                <div className="p-1">
                  <SearchCheck size={28} className="text-gray-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Analisi gratuita e completa</h3>
                <p className="text-gray-600">
                  Scopri i problemi del tuo sito attuale senza impegno
                </p>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex items-start gap-4 p-10 bg-[#FAFAFA] rounded-[16px] reveal animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex-shrink-0">
                <div className="p-1">
                  <Sparkles size={28} className="text-gray-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ottimizzato per le conversioni</h3>
                <p className="text-gray-600">
                  Siti progettati per trasformare i visitatori in clienti
                </p>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex items-start gap-4 p-10 bg-[#FAFAFA] rounded-[16px] reveal animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex-shrink-0">
                <div className="p-1">
                  <Clock size={28} className="text-gray-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tempi di consegna record</h3>
                <p className="text-gray-600">
                  Niente lunghe attese, il tuo sito è già pronto
                </p>
              </div>
            </div>
            
            {/* Benefit 5 */}
            <div className="flex items-start gap-4 p-10 bg-[#FAFAFA] rounded-[16px] reveal animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex-shrink-0">
                <div className="p-1">
                  <Headphones size={28} className="text-gray-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Supporto dedicato</h3>
                <p className="text-gray-600">
                  Un team di esperti a tua disposizione
                </p>
              </div>
            </div>
            
            {/* Benefit 6 */}
            <div className="flex items-start gap-4 p-10 bg-[#FAFAFA] rounded-[16px] reveal animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="flex-shrink-0">
                <div className="p-1">
                  <Tag size={28} className="text-gray-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Prezzo trasparente</h3>
                <p className="text-gray-600">
                  Paghi quello che ti viene promesso, senza costi o abbonamenti nascosti
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Features />

        <Testimonials />

        {/* Contact Form Section */}
        <section className="py-20 bg-[#FFFCF6]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-6 reveal animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Prova il servizio <span className="text-primary-600">Gratuitamente</span>
                </h2>
                
                <p className="text-lg">
                  Ci pensiamo noi. Con <span className="font-semibold">Visionabile</span> puoi dire <span className="font-semibold">per sempre addio</span> a (esempio)
                </p>
              </div>
              
              {/* Right side - Form */}
              <div className="reveal animate-fade-in" style={{ animationDelay: '100ms' }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

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

      <Footer />
    </div>
  );
};

export default Index;
