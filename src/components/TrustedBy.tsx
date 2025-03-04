
import React, { useEffect, useRef } from 'react';

const TrustedBy = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the logos to create an infinite scroll effect
    const content = Array.from(scrollContainer.children);
    content.forEach(item => {
      const clone = item.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    // Auto scroll animation
    const scrollWidth = scrollContainer.scrollWidth / 2;
    let animationId: number;
    let currentPosition = 0;
    const scroll = () => {
      currentPosition += 0.5; // Adjust speed here
      if (currentPosition >= scrollWidth) {
        currentPosition = 0;
      }
      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(${-currentPosition}px)`;
      }
      animationId = requestAnimationFrame(scroll);
    };
    scroll();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-[30px] w-full">
      <div className="container mx-auto px-4">
        <h3 className="text-gray-500 text-lg mb-8 font-normal text-left font-onest">Trusted by:</h3>
        
        <div className="w-full overflow-hidden">
          <div ref={scrollRef} className="inline-flex space-x-[24px]" style={{
          whiteSpace: 'nowrap'
        }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => <div key={index} className="inline-block h-[68px] w-auto">
                <div className="bg-gray-100 w-full h-full rounded flex items-center justify-center px-6">
                  <div className="text-gray-400 text-xs">Logo Placeholder</div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
