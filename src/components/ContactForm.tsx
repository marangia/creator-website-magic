
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    website: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, acceptTerms: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast({
        title: "Errore",
        description: "Devi accettare i termini e condizioni per procedere.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Replace with your webhook URL
      const webhookUrl = "https://make.com";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Add this to handle CORS
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          website: formData.website,
          timestamp: new Date().toISOString(),
        }),
      });
      
      // Since we're using no-cors, we won't get a proper response status
      // We'll show a success message regardless
      toast({
        title: "Richiesta inviata",
        description: "Abbiamo ricevuto la tua richiesta. Ti contatteremo presto!",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        website: '',
        acceptTerms: false
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante l'invio del modulo. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm p-6 max-w-lg w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Il tuo nome? <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Inserire il tuo nome"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Il tuo numero di telefono? <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Inserire il numero di telefono"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-1">
              Indirizzo del tuo sito web (se ne hai già uno)
            </label>
            <input
              id="website"
              name="website"
              type="url"
              placeholder="www.sito.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="terms" 
            checked={formData.acceptTerms}
            onCheckedChange={handleCheckboxChange}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accettare termini e condizioni d'uso.{" "}
            <a href="#" className="text-primary-600 hover:underline">
              Privacy policy
            </a>
          </label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6 text-base font-medium bg-orange-500 hover:bg-orange-600 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Invio in corso..." : "Richiedi analisi gratuita"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
