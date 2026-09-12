import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Activity, Sparkles, ShieldCheck, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export const SportsPlaygrounds: React.FC = () => {
  const sportsFacilities = [
    {
      title: 'Olympic-Standard Aquatic Center',
      tag: '50m Heated Pool',
      desc: 'An 8-lane 50-meter temperature-controlled swimming pool with electronic touch-pad timing, spectator seating, and certified lifeguard safety supervision.',
      specs: ['8-lane 50m Olympic regulation length', 'Year-round temperature control system', 'Electronic Omega timing consoles', 'Dedicated beginner training pool'],
      image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Multisport Indoor Pavilion & Hardwood Courts',
      tag: 'Indoor Arena',
      desc: 'Air-conditioned multi-court arena with maple-wood timber-sprung floors for championship basketball, badminton, squash, and gymnastics.',
      specs: ['4 Maple-wood badminton courts', 'Championship basketball arena', '2 Glass-backed squash courts', '1,500-Spectator grandstand pavilion'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Outdoor Athletic Grounds & FIFA AstroTurf',
      tag: 'Outdoor Sports',
      desc: 'Spanning over 8 acres of open grounds including a FIFA-standard synthetic turf football pitch, floodlights for evening games, and a 400m 8-lane synthetic running track.',
      specs: ['FIFA-Standard AstroTurf pitch', '400m 8-Lane synthetic running track', 'Floodlit cricket nets & practice pitches', 'Outdoor tennis & volleyball courts'],
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="sports" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      



      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {sportsFacilities.map((facility, idx) => (
          <div key={idx} className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {facility.title}
              </h3>
              <p className="text-slate-600 sm:text-lg leading-relaxed">
                {facility.desc}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </div>
        ))}
      </section>


      
    </section>
  );
};
