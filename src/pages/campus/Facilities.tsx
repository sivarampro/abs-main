import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { campusFacilities } from '../../data/campus';
import { Building2, Sparkles, Eye, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

export const Facilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'STEM', 'Academics', 'Arts', 'Athletics', 'Wellness'];

  const filtered = activeCategory === 'All'
    ? campusFacilities
    : campusFacilities.filter(f => f.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      <PageHeader
        badge="Infrastructure"
        title="Collegiate Facilities & Research Centers"
        tagline="A detailed walkthrough of laboratories, auditoriums, sports arenas, art studios, and libraries across the ABS campus."
        breadcrumbs={[
          { label: 'Campus', href: '/campus' },
          { label: 'Facilities' }
        ]}
        actions={
          <Link
            to="/book-a-visit"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Private Tour</span>
          </Link>
        }
      />

      {/* Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-2xl max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Facilities Full Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filtered.map((facility, idx) => (
          <div
            key={facility.id}
            id={facility.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              
              <div className={`lg:col-span-6 relative aspect-[4/3] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={facility.image}
                  alt={facility.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                    {facility.category}
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-700 block">
                    Campus Zone #{facility.id.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    {facility.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {facility.fullDesc}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                  {facility.specs.capacity && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Capacity</span>
                      <span className="text-xs font-bold text-slate-900">{facility.specs.capacity}</span>
                    </div>
                  )}
                  {facility.specs.size && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Floor Area</span>
                      <span className="text-xs font-bold text-slate-900">{facility.specs.size}</span>
                    </div>
                  )}
                  {facility.specs.technology && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Equipment</span>
                      <span className="text-xs font-bold text-slate-900 truncate block">{facility.specs.technology}</span>
                    </div>
                  )}
                </div>

                {/* Key Features */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Specialized Provisions</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {facility.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/book-a-visit"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800"
                  >
                    <span>Tour this facility in person</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

    </div>
  );
};
