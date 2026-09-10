import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 0, 
  speed = 40, 
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const domRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let timeoutId = setTimeout(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(intervalId);
          setIsFinished(true);
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [hasStarted, text, speed, delay]);

  return (
    <span ref={domRef} className={`relative ${className}`}>
      {displayedText}
      {!isFinished && hasStarted && (
        <span className="inline-block w-1.5 h-[0.9em] bg-current ml-1 animate-pulse align-middle" />
      )}
    </span>
  );
};
