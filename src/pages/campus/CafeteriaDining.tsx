import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Coffee, Sun, Sparkles, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export const CafeteriaDining: React.FC = () => {
  const commonSpaces = [
    {
      title: 'The Great Dining Hall & Nutrition Center',
      tag: 'Dining & Nutrition',
      desc: 'An architecturally soaring, naturally lit communal dining hall serving chef-curated organic balanced meals prepared in an ISO-certified commercial kitchen.',
      specs: ['600-Seat concurrent dining capacity', 'Nutritionally balanced hot meal stations', 'Dedicated allergen-free preparation zones', 'Farm-to-table organic salad bar'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Student Commons & House Lounges',
      tag: 'Social & Collaboration',
      desc: 'Dedicated social lounges for each student House featuring collaborative banquette seating, games areas, charging lockers, and debate alcoves.',
      specs: ['Four dedicated House common rooms', 'Casual study nooks with charging ports', 'Table tennis and chess strategy tables', 'Student council conference room'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Open-Air Amphitheatre & Green Courtyards',
      tag: 'Outdoor Community',
      desc: 'A sunlit terraced outdoor stone amphitheatre surrounded by botanical micro-forests, designed for student poetry slams, cultural festivals, and lunch gatherings.',
      specs: ['400-Seat landscaped stone tiers', 'Acoustically focused natural bowl', 'Wi-Fi enabled outdoor shaded pergolas', 'Native botanical walking trail'],
      image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="cafeteria" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      



      {/* Spaces List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {commonSpaces.map((space, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className={`lg:col-span-6 relative aspect-[4/3] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                    {space.tag}
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    {space.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {space.desc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">Space Highlights:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {space.specs.map((spec, i) => (
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

      
    </section>
  );
};
