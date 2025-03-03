
import React from 'react';
import { Star } from 'lucide-react';

type TestimonialCardProps = {
  text: string;
  author: string;
  profession: string;
  rating: number;
};

const TestimonialCard = ({ text, author, profession, rating }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#222222] text-white p-6 rounded-[16px] mb-4 flex flex-col">
        <p className="flex-grow">{text}</p>
        <div className="flex items-center mt-2">
          <Star
            size={16}
            className="text-[#F9BD3F] fill-[#F9BD3F]"
          />
          <span className="ml-2">{rating.toFixed(1)}</span>
        </div>
      </div>
      <h3 className="font-bold">{author}</h3>
      <p className="text-gray-500 text-sm">{profession}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Molto soddisfatto del mio nuovo sito e impressionato dalla velocità di consegna. In passato ho dovuto aspettare più di un mese per vedere una bozza del mio vecchio sito",
      author: "Marco Rossi",
      profession: "Elettricista",
      rating: 5,
    },
    {
      id: 2,
      text: "Consiglio a chiunque abbia bisogno di un sito moderno, facile da gestire e pronto senza lunghe attese. Visionabile ha superato le mie aspettative!",
      author: "Schiavona Chiavona",
      profession: "Elettricista",
      rating: 4.9,
    },
    {
      id: 3,
      text: "Molto soddisfatto del mio nuovo sito e impressionato dalla velocità di consegna. In passato ho dovuto aspettare più di un mese per vedere una bozza del mio vecchio sito",
      author: "Maria Del Freddo",
      profession: "Elettricista",
      rating: 4.9,
    },
  ];

  return (
    <section className="container py-20">
      <div className="text-center max-w-3xl mx-auto mb-12 reveal animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Cosa dicono di noi?
        </h2>
        <p className="text-lg text-gray-600">
          trusted by clients worldwide
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="reveal animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <TestimonialCard
              text={testimonial.text}
              author={testimonial.author}
              profession={testimonial.profession}
              rating={testimonial.rating}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
