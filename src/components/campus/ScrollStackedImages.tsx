import React, { useState, useEffect, useRef } from 'react';

interface ScrollStackedImagesProps {
  images: string[];
}

export const ScrollStackedImages: React.FC<ScrollStackedImagesProps> = ({ images }) => {
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
      {/* Sticky Container */}
      <div className="sticky top-24 w-full h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden rounded-3xl bg-slate-100 shadow-xl border border-slate-200">
        
        {images.map((img, index) => {
          // If there are 5 images, there are 4 transition steps.
          const step = 1 / (images.length - 1); 
          const start = (index - 1) * step; 
          
          let translateX = '0%';
          let zIndex = index;
          let scale = 1;
          let opacity = 1;

          if (index === 0) {
            // First image is always there initially, then scales down as others cover it
            translateX = '0%';
            scale = Math.max(1 - scrollProgress * 0.05, 0.9);
            opacity = Math.max(1 - scrollProgress * 0.5, 0.4);
            zIndex = 0;
          } else {
             // Subsequent images slide in from left to right (start -100%, end 0%)
             if (scrollProgress < start) {
                // Not reached yet, wait on the far left
                translateX = '-100%';
                scale = 0.95;
                zIndex = index + 10;
             } else if (scrollProgress >= start && scrollProgress <= start + step) {
                // Currently sliding in
                const enterFraction = (scrollProgress - start) / step; // 0 to 1
                translateX = `-${100 - (enterFraction * 100)}%`;
                scale = 0.95 + (0.05 * enterFraction);
                zIndex = index + 10;
             } else {
                // Fully entered, sits in place, scales down slightly if covered by next
                translateX = '0%';
                const pastFraction = scrollProgress - (start + step);
                scale = Math.max(1 - pastFraction * 0.05, 0.95);
                opacity = Math.max(1 - pastFraction * 0.5, 0.4);
                zIndex = index + 10;
             }
          }
          
          return (
            <div
              key={index}
              className="absolute inset-0 w-full h-full flex items-center justify-center origin-center"
              style={{
                transform: `translateX(${translateX}) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                willChange: 'transform, opacity'
              }}
            >
              <img
                src={img}
                alt={`Classroom ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
