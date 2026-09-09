import React, { useEffect, useState, useCallback } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<
    'dark' | 'bookOpen' | 'sunRise' | 'sunFull' | 'nameReveal' | 'hold' | 'fadeOut'
  >('dark');

  const stableComplete = useCallback(onComplete, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('bookOpen'),  400),
      setTimeout(() => setPhase('sunRise'),   1600),
      setTimeout(() => setPhase('sunFull'),   2800),
      setTimeout(() => setPhase('nameReveal'),3600),
      setTimeout(() => setPhase('hold'),      4800),
      setTimeout(() => setPhase('fadeOut'),    5600),
      setTimeout(() => stableComplete(),      6400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [stableComplete]);

  const afterBook  = phase !== 'dark' && phase !== 'bookOpen';
  const showName   = phase === 'nameReveal' || phase === 'hold' || phase === 'fadeOut';
  const sunActive  = afterBook;

  // Sky color transitions through phases
  const skyGradient =
    phase === 'dark' || phase === 'bookOpen'
      ? 'linear-gradient(180deg, #0a0e1a 0%, #131b2e 40%, #1a2640 100%)'
      : phase === 'sunRise'
      ? 'linear-gradient(180deg, #0f1628 0%, #1a2a4a 25%, #2d3e5e 50%, #8b5a2b 80%, #c4722a 100%)'
      : 'linear-gradient(180deg, #1a2a4a 0%, #2d4a6e 20%, #4a7a9e 40%, #d4935a 65%, #e8a84c 85%, #f0c050 100%)';

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden
        ${phase === 'fadeOut' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{
        background: skyGradient,
        transition: 'opacity 0.8s ease-in-out, background 1.6s ease-in-out',
      }}
      aria-hidden="true"
    >
      {/* === STARS — fade out as sun rises === */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: afterBook ? 0 : 0.8,
          transition: 'opacity 2s ease-out',
        }}
      >
        {Array.from({ length: 45 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 23 + 7) % 55}%`,
              width: 1 + (i % 3),
              height: 1 + (i % 3),
              opacity: 0.3 + (i % 5) * 0.14,
              animation: `introTwinkle ${2 + (i % 3)}s ease-in-out ${(i % 7) * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      {/* === WARM LIGHT WASH from sun — covers whole scene === */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 55%, rgba(255,180,60,0.25) 0%, transparent 70%)',
          opacity: sunActive ? 1 : 0,
          transition: 'opacity 1.5s ease-in-out',
        }}
      />

      {/* === MAIN SCENE === */}
      <div className="relative flex flex-col items-center">

        {/* ── BOOK + SUN CONTAINER ── */}
        <div className="relative" style={{ width: 360, height: 300 }}>

          {/* SUN — rises from between the pages */}
          <div
            className="absolute left-1/2"
            style={{
              transform: 'translateX(-50%)',
              bottom: sunActive ? 145 : 75,
              opacity: sunActive ? 1 : 0,
              transition: 'bottom 1.8s cubic-bezier(0.2,0.6,0.3,1), opacity 1s ease-out',
              zIndex: 1,
            }}
          >
            {/* Sun halo glow */}
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                transform: 'translate(-50%, -50%)',
                width: phase === 'sunFull' || showName ? 200 : 100,
                height: phase === 'sunFull' || showName ? 200 : 100,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,200,60,0.3) 0%, rgba(255,150,30,0.1) 50%, transparent 75%)',
                transition: 'width 1.5s ease-out, height 1.5s ease-out',
              }}
            />
            {/* Sun disc */}
            <div
              className="relative rounded-full"
              style={{
                width: 72,
                height: 72,
                background: 'radial-gradient(circle at 35% 35%, #fff8c4 0%, #fde047 30%, #f59e0b 70%, #ea8c1c 100%)',
                boxShadow: `
                  0 0 30px rgba(255,190,50,0.6),
                  0 0 60px rgba(255,160,30,0.3),
                  0 0 100px rgba(255,140,20,0.15)
                `,
                animation: sunActive ? 'introSunGlow 3s ease-in-out infinite' : 'none',
              }}
            />
          </div>

          {/* ── THE BOOK ── */}
          <div
            className="absolute left-1/2 bottom-0"
            style={{ transform: 'translateX(-50%)', zIndex: 2 }}
          >
            <svg
              width="300" height="180"
              viewBox="0 0 300 180"
              fill="none"
              style={{ overflow: 'visible' }}
            >
              {/* Book spine — the center hinge */}
              <rect x="147" y="10" width="6" height="170" rx="3" fill="#5c3a1e" />

              {/* === LEFT COVER + PAGES === */}
              <g
                style={{
                  transformOrigin: '150px 180px',
                  transform: `perspective(800px) rotateY(${phase === 'dark' ? 0 : 55}deg)`,
                  transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {/* Cover outer */}
                <path
                  d="M150 10 L10 30 Q4 31 4 37 L4 168 Q4 174 10 175 L150 180 Z"
                  fill="url(#introLeftCover)"
                  stroke="#4a2810"
                  strokeWidth="1.2"
                />
                {/* Page stack inside */}
                <path
                  d="M150 16 L18 34 L18 170 L150 176 Z"
                  fill="url(#introLeftPage)"
                />
                {/* Page text lines */}
                {[52, 68, 84, 100, 116, 132, 148].map((y, i) => (
                  <line key={i}
                    x1={28 + i * 1.5} y1={y} x2={140} y2={y}
                    stroke="rgba(120,100,80,0.12)" strokeWidth="1.2"
                  />
                ))}
                {/* Cover edge shadow */}
                <path d="M4 37 L4 168" stroke="#3a200a" strokeWidth="2" opacity="0.3" />
              </g>

              {/* === RIGHT COVER + PAGES === */}
              <g
                style={{
                  transformOrigin: '150px 180px',
                  transform: `perspective(800px) rotateY(${phase === 'dark' ? 0 : -55}deg)`,
                  transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <path
                  d="M150 10 L290 30 Q296 31 296 37 L296 168 Q296 174 290 175 L150 180 Z"
                  fill="url(#introRightCover)"
                  stroke="#4a2810"
                  strokeWidth="1.2"
                />
                <path
                  d="M150 16 L282 34 L282 170 L150 176 Z"
                  fill="url(#introRightPage)"
                />
                {[52, 68, 84, 100, 116, 132, 148].map((y, i) => (
                  <line key={i}
                    x1={160} y1={y} x2={272 - i * 1.5} y2={y}
                    stroke="rgba(120,100,80,0.12)" strokeWidth="1.2"
                  />
                ))}
                <path d="M296 37 L296 168" stroke="#3a200a" strokeWidth="2" opacity="0.3" />
              </g>

              {/* Spine highlight */}
              <rect x="148" y="12" width="4" height="166" rx="2" fill="url(#introSpineHL)" />

              <defs>
                {/* Leather-like brown covers */}
                <linearGradient id="introLeftCover" x1="150" y1="10" x2="4" y2="180" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8B4513" />
                  <stop offset="50%" stopColor="#6b3410" />
                  <stop offset="100%" stopColor="#5a2c0e" />
                </linearGradient>
                <linearGradient id="introRightCover" x1="150" y1="10" x2="296" y2="180" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8B4513" />
                  <stop offset="50%" stopColor="#6b3410" />
                  <stop offset="100%" stopColor="#5a2c0e" />
                </linearGradient>
                {/* Aged paper pages */}
                <linearGradient id="introLeftPage" x1="150" y1="16" x2="18" y2="176" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#faf5e8" />
                  <stop offset="100%" stopColor="#f0e6cc" />
                </linearGradient>
                <linearGradient id="introRightPage" x1="150" y1="16" x2="282" y2="176" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#faf5e8" />
                  <stop offset="100%" stopColor="#f0e6cc" />
                </linearGradient>
                <linearGradient id="introSpineHL" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(90,44,14,0.9)" />
                  <stop offset="100%" stopColor="rgba(70,34,10,0.5)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Table / ground surface */}
          <div
            className="absolute bottom-0 left-1/2"
            style={{
              transform: 'translateX(-50%)',
              width: 340,
              height: 3,
              borderRadius: 4,
              background: 'linear-gradient(90deg, transparent, rgba(160,120,70,0.5), transparent)',
              boxShadow: '0 2px 20px rgba(160,120,70,0.2)',
              zIndex: 3,
            }}
          />
        </div>

        {/* ── ABS NAME + TAGLINE ── */}
        <div
          className="flex flex-col items-center mt-8"
          style={{
            opacity: showName ? 1 : 0,
            transform: showName ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          {/* ABS letters */}
          <div className="flex items-baseline" style={{ gap: 4 }}>
            {'ABS'.split('').map((ch, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: 76,
                  fontWeight: 900,
                  color: '#a01a1a',
                  textShadow: '0 2px 16px rgba(160,26,26,0.4), 0 0 40px rgba(160,26,26,0.15)',
                  display: 'inline-block',
                  opacity: showName ? 1 : 0,
                  transform: showName ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                  transition: `opacity 0.5s ease ${0.15 + i * 0.1}s, transform 0.5s ease ${0.15 + i * 0.1}s`,
                }}
              >
                {ch}
              </span>
            ))}
          </div>

          {/* Laurel + divider */}
          <div
            className="flex items-center gap-2 -mt-1"
            style={{
              opacity: showName ? 1 : 0,
              transition: 'opacity 0.6s ease 0.5s',
            }}
          >
            <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
              {[0,1,2,3].map(i => (
                <ellipse key={i} cx={32 - i*8} cy={10} rx={4} ry={7.5}
                  fill="#5a7a3a" opacity={0.65 + i*0.06}
                  transform={`rotate(${-25 + i*12} ${32-i*8} 10)`} />
              ))}
            </svg>
            <div style={{
              width: 40, height: 1.5, borderRadius: 1,
              background: 'linear-gradient(90deg, transparent, rgba(200,160,60,0.8), transparent)',
            }} />
            <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
              {[0,1,2,3].map(i => (
                <ellipse key={i} cx={4 + i*8} cy={10} rx={4} ry={7.5}
                  fill="#5a7a3a" opacity={0.65 + i*0.06}
                  transform={`rotate(${25 - i*12} ${4+i*8} 10)`} />
              ))}
            </svg>
          </div>

          {/* Tagline */}
          <p
            style={{
              marginTop: 6,
              fontFamily: "'Georgia', serif",
              fontSize: 13,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(220,190,110,0.95)',
              textShadow: '0 1px 8px rgba(200,160,60,0.35)',
              opacity: showName ? 1 : 0,
              transition: 'opacity 0.7s ease 0.7s',
            }}
          >
            Educate &nbsp;·&nbsp; Enlighten &nbsp;·&nbsp; Excel
          </p>

          {/* Subtitle */}
          <p
            style={{
              marginTop: 10,
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(180,200,230,0.7)',
              fontWeight: 500,
              opacity: showName ? 1 : 0,
              transition: 'opacity 0.8s ease 0.95s',
            }}
          >
            ABS Global Smart School
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="mt-8 rounded-full overflow-hidden"
          style={{ width: 100, height: 2, background: 'rgba(255,255,255,0.06)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #d97706, #fbbf24)',
              boxShadow: '0 0 6px rgba(251,191,36,0.5)',
              width:
                phase === 'dark' ? '0%'
                : phase === 'bookOpen' ? '25%'
                : phase === 'sunRise' ? '50%'
                : phase === 'sunFull' ? '70%'
                : phase === 'nameReveal' ? '88%'
                : '100%',
              transition: 'width 0.8s ease',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes introTwinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.8; }
        }
        @keyframes introSunGlow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(255,190,50,0.5), 0 0 60px rgba(255,160,30,0.25), 0 0 100px rgba(255,140,20,0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(255,200,60,0.7), 0 0 80px rgba(255,170,40,0.35), 0 0 120px rgba(255,150,30,0.2);
          }
        }
      `}</style>
    </div>
  );
};
