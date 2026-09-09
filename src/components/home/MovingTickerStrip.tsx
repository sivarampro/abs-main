import React from 'react';
import { 
  Trophy, 
  BookOpen, 
  Award, 
  Heart, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Building2, 
  Leaf, 
  Bus,
  CheckCircle2
} from 'lucide-react';

export const MovingTickerStrip: React.FC = () => {
  const tickerItems = [
    { icon: <Trophy className="w-4 h-4 text-slate-950 shrink-0" />, text: '100% Pass Rate' },
    { icon: <BookOpen className="w-4 h-4 text-slate-950 shrink-0" />, text: 'Holistic Education' },
    { icon: <Award className="w-4 h-4 text-slate-950 shrink-0" />, text: 'Olympiad Champions' },
    { icon: <Heart className="w-4 h-4 text-slate-950 shrink-0" />, text: 'Value Based Learning' },
    { icon: <GraduationCap className="w-4 h-4 text-slate-950 shrink-0" />, text: 'CBSE & Matric Affiliated' },
    { icon: <Sparkles className="w-4 h-4 text-slate-950 shrink-0" />, text: '17+ Years of Excellence' },
    { icon: <Leaf className="w-4 h-4 text-slate-950 shrink-0" />, text: 'Pure Vegetarian Campus' },
    { icon: <ShieldCheck className="w-4 h-4 text-slate-950 shrink-0" />, text: '100% CCTV Surveillance' },
    { icon: <Users className="w-4 h-4 text-slate-950 shrink-0" />, text: '5,000+ Students & 450+ Teachers' },
    { icon: <Building2 className="w-4 h-4 text-slate-950 shrink-0" />, text: '5 Modern Campuses' },
    { icon: <Bus className="w-4 h-4 text-slate-950 shrink-0" />, text: 'Safe Transport Facility' },
    { icon: <CheckCircle2 className="w-4 h-4 text-slate-950 shrink-0" />, text: 'Legacy Since 1936' },
  ];

  return (
    <div className="relative w-full bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 border-y border-amber-500/40 text-slate-950 py-3.5 sm:py-4 overflow-hidden shadow-xs z-10 select-none">
      
      {/* Subtle edge fades for smooth blending */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-amber-400 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-amber-500 to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First set */}
        {tickerItems.map((item, index) => (
          <div key={`set1-${index}`} className="flex items-center gap-2.5 mx-6 sm:mx-8">
            <span className="p-1 rounded-md bg-amber-950/10">
              {item.icon}
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
              {item.text}
            </span>
            <span className="text-amber-900/40 ml-4 font-black text-xs">•</span>
          </div>
        ))}

        {/* Second duplicated set for seamless infinite loop */}
        {tickerItems.map((item, index) => (
          <div key={`set2-${index}`} className="flex items-center gap-2.5 mx-6 sm:mx-8">
            <span className="p-1 rounded-md bg-amber-950/10">
              {item.icon}
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
              {item.text}
            </span>
            <span className="text-amber-900/40 ml-4 font-black text-xs">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
