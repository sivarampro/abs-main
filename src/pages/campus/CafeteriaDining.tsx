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
          <div key={idx} className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {space.title}
              </h3>
              <p className="text-slate-600 sm:text-lg leading-relaxed">
                {space.desc}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      
    </section>
  );
};
