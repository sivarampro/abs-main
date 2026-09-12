import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fiveSchoolsData, SchoolInfo } from '../../data/schoolsData';

export const ScrollStackedSchools: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      
      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollableDistance, 0), 1);
      
      setScrollProgress(progress);
      
      // Calculate which card is dominant (0 to 4)
      const index = Math.min(Math.floor(progress * fiveSchoolsData.length), fiveSchoolsData.length - 1);
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSchool = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (fiveSchoolsData.length - 1)) * totalScrollableDistance;
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-slate-50 border-t border-slate-200"
      style={{ height: `${fiveSchoolsData.length * 85 + 40}vh` }}
      aria-label="Five Schools One Vision"
    >
      {/* Sticky Viewport Container - Offset properly below the sticky Navbar */}
      <div className="sticky w-full flex flex-col justify-between pt-2 pb-2 sm:pt-3 sm:pb-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-slate-50" style={{ top: '100px', height: 'calc(100vh - 100px)' }}>
        
        {/* Section Header (Always Visible & Prominent Below Navbar) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-3 z-30 shrink-0 pb-1.5 border-b border-slate-200/50 mb-2 sm:mb-4">
          <div className="space-y-0.5">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-slate-950 tracking-tight">
              FIVE SCHOOLS. ONE VISION.
            </h2>
          </div>

          {/* Quick School Jump Selector (Always Visible) */}
          <div className="flex items-center gap-1 sm:gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-slate-200 shadow-xs self-start md:self-end">
            {fiveSchoolsData.map((school, i) => {
              const isSelected = i === activeIndex;
              return (
                <button
                  key={school.id}
                  onClick={() => scrollToSchool(i)}
                  aria-label={`Jump to ${school.shortName}`}
                  className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  0{i + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stacked Cards Area (Restricted height to guarantee clean gap below header) */}
        <div className="relative flex-1 w-full my-auto flex items-center justify-center min-h-0 overflow-hidden py-1 sm:py-2">
          {fiveSchoolsData.map((school: SchoolInfo, index: number) => {
            // Card transition mapping based on scroll progress
            const cardStep = 1 / fiveSchoolsData.length;
            const cardStart = index * cardStep;
            const cardEnd = cardStart + cardStep;
            
            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = index;
            let pointerEvents: 'auto' | 'none' = 'none';

            if (scrollProgress < cardStart) {
              // Card is below current view, waiting to slide in
              translateY = 40;
              scale = 0.96;
              opacity = 0;
              zIndex = index;
              pointerEvents = 'none';
            } else if (scrollProgress >= cardStart && scrollProgress < cardEnd) {
              // Card is active and entering/present
              const enterFraction = Math.min(Math.max((scrollProgress - cardStart) / (cardStep * 0.4), 0), 1);
              translateY = (1 - enterFraction) * 20;
              scale = 1;
              opacity = 1;
              zIndex = 20 + index;
              pointerEvents = 'auto';
            } else {
              // Card has been passed: stays stacked behind
              const cardsAfter = Math.floor(scrollProgress / cardStep) - index;
              translateY = -cardsAfter * 3;
              scale = Math.max(1 - cardsAfter * 0.03, 0.92);
              opacity = Math.max(1 - cardsAfter * 0.25, 0.4);
              zIndex = 10 + index;
              pointerEvents = index === activeIndex ? 'auto' : 'none';
            }

            return (
              <div
                key={school.id}
                className="absolute inset-0 w-full h-full mx-auto transition-all duration-500 ease-out flex items-center justify-center pointer-events-none"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  pointerEvents: pointerEvents,
                }}
              >
                {/* Clean Full-Image School Card - strictly preserving aspect ratio */}
                <div 
                  className="relative w-full aspect-[1024/580] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-300/80 bg-slate-900 group flex items-center justify-center"
                  style={{
                    maxWidth: 'min(100%, calc(min(68vh, 100vh - 165px) * (1024 / 580)))'
                  }}
                >
                  
                  {/* Full School Poster/Banner Image - Edge-to-edge flush coverage */}
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover object-center"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />

                  {/* Explore Button Positioned Comfortably Above the Mobile Number Bar (Bottom-Right) */}
                  <div className="absolute bottom-[18%] right-[4%] sm:bottom-[19%] sm:right-[5%] z-30">
                    <a
                      href={school.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider rounded-lg sm:rounded-xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 border border-amber-300/80 hover:shadow-amber-400/30"
                    >
                      <span>EXPLORE THIS SCHOOL</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5]" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Scroll Cue Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1 shrink-0 border-t border-slate-200/60">
          <span className="hidden sm:inline">
            Scroll down to explore the 5 schools sequence
          </span>
          <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
            {fiveSchoolsData.map((_, dotIdx) => (
              <div
                key={dotIdx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIdx === activeIndex
                    ? 'w-6 bg-amber-500'
                    : 'w-1.5 bg-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
            {scrollProgress >= 0.95 ? 'Completed (Scroll down)' : 'Scroll to advance →'}
          </span>
        </div>

      </div>
    </section>
  );
};
