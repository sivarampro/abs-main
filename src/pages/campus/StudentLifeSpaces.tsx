import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Users, Coffee, Sun, Sparkles, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export const StudentLifeSpaces: React.FC = () => {
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
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="Campus • Community"
        title="Student Life & Common Spaces"
        tagline="Vibrant gathering places, dining commons, house lounges, and outdoor courtyards that foster lifelong friendships."
        breadcrumbs={[
          { label: 'Campus', href: '/campus' },
          { label: 'Student Life & Common Spaces' }
        ]}
        actions={
          <Link
            to="/book-a-visit"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Campus Tour</span>
          </Link>
        }
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Community & Camaraderie</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Spaces Where Lifelong Bonds Are Forged
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            Learning thrives in community. Our student commons, House lounges, dining halls, and outdoor courtyards provide welcoming, energetic environments where scholars relax, debate, collaborate, and build lasting friendships.
          </p>
        </div>
      </section>

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

      {/* Navigation Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Next Campus Facility</h3>
            <p className="text-xs text-slate-600 mt-0.5">Explore our medical infirmary, pastoral counseling, and 24/7 security.</p>
          </div>
          <Link
            to="/campus/wellbeing-safety"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Wellbeing & Safety</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
