import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Activity, Sparkles, ShieldCheck, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export const SportsRecreation: React.FC = () => {
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
      

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Physical Mastery & Team Spirit</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            World-Class Infrastructure for Health, Grit & Teamwork
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            Our 8-acre athletic complex provides Olympic-grade training grounds where students build lifelong fitness, strategic discipline, and sportsmanship under the guidance of national coaches and certified trainers.
          </p>
        </div>
      </section>

      {/* Facilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {sportsFacilities.map((facility, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className={`lg:col-span-6 relative aspect-[4/3] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                    {facility.tag}
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {facility.desc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">Facilities & Equipment:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {facility.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Sports & Recreation Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="text-center space-y-4 mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Sports & Recreation in Action
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            State-of-the-art sporting facilities that encourage physical fitness, teamwork, and healthy competition across multiple disciplines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {/* Image 1: Large Feature */}
          <div className="md:col-span-8 md:row-span-2 rounded-2xl overflow-hidden group relative bg-slate-100">
            <img src="/images/sports/sport-1.jpg" alt="Sports and recreation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Image 2 */}
          <div className="md:col-span-4 rounded-2xl overflow-hidden group relative bg-slate-100">
            <img src="/images/sports/sport-2.jpg" alt="Indoor sports facilities" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Image 3 */}
          <div className="md:col-span-4 rounded-2xl overflow-hidden group relative bg-slate-100">
            <img src="/images/sports/sport-3.jpg" alt="Outdoor sports ground" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Image 4 */}
          <div className="md:col-span-6 rounded-2xl overflow-hidden group relative bg-slate-100">
            <img src="/images/sports/sport-4.jpg" alt="Volleyball court" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Image 5 */}
          <div className="md:col-span-6 rounded-2xl overflow-hidden group relative bg-slate-100">
            <img src="/images/sports/sport-5.jpg" alt="Recreation and play area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </section>
      
    </section>
  );
};
