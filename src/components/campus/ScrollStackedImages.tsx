import React, { useState, useEffect, useRef } from 'react';

interface ScrollStackedImagesProps {
  images: string[];
  title?: string;
  desc?: string;
}

export const ScrollStackedImages: React.FC<ScrollStackedImagesProps> = ({ images, title, desc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // The total distance the user needs to scroll to see all images
      const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      
      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      // Clamp progress between 0 and 1
      const progress = Math.min(Math.max(currentScroll / totalScrollableDistance, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      // Height determines how long the scroll takes. 
      // 100vh for the container itself, plus 80vh for each additional image to scroll through.
      style={{ height: `${(images.length - 1) * 80 + 100}vh` }} 
    >
      {/* Sticky Container - exactly sized to viewport minus top offset to guarantee bottom whitespace */}
      <div className="sticky top-32 w-full h-[calc(100vh-160px)] flex flex-col items-center space-y-4 sm:space-y-6 pb-6">
        
        {/* Title and Description - Always visible and sticky */}
        {(title || desc) && (
          <div className="text-center max-w-3xl mx-auto space-y-3 px-4 shrink-0">
            {title && (
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {title}
              </h3>
            )}
            {desc && (
              <p className="text-slate-600 sm:text-lg leading-relaxed">
                {desc}
              </p>
            )}
          </div>
        )}

        {/* Images Stack Area - Flexibly takes remaining space, guaranteeing it never hits bottom of screen */}
        <div className="relative w-full max-w-5xl mx-auto flex-1 min-h-0 flex items-center justify-center overflow-hidden rounded-3xl bg-slate-100 shadow-xl border border-slate-200">
          {images.map((img, index) => {
            const step = 1 / (images.length - 1); 
            const start = index === 0 ? -1 : (index - 1) * step; // First image is always active initially
            const end = start + step;
            
            let translateX = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = index;

            if (index === 0 && scrollProgress < step) {
              // First image is fully visible before scrolling past step 1
              translateX = 0;
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (scrollProgress < start) {
              // Image is waiting to enter from the left
              translateX = -40;
              scale = 0.96;
              opacity = 0;
              zIndex = index;
            } else if (scrollProgress >= start && scrollProgress < end) {
              // Image is actively entering
              const enterFraction = Math.min(Math.max((scrollProgress - start) / (step * 0.4), 0), 1);
              translateX = -(1 - enterFraction) * 40;
              scale = 1;
              opacity = 1;
              zIndex = index + 20;
            } else {
              // Image has been passed and is stacked behind
              const cardsAfter = Math.floor(scrollProgress / step) - index + 1;
              translateX = cardsAfter * 10;
              scale = Math.max(1 - cardsAfter * 0.03, 0.92);
              opacity = Math.max(1 - cardsAfter * 0.25, 0.4);
              zIndex = index + 10;
            }
            
            return (
              <div
                key={index}
                className="absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                <img
                  src={img}
                  alt={`Classroom ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
