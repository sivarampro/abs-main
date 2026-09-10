import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { pastEventHighlights } from '../../data/events';
import { Trophy, Calendar, Sparkles, ArrowRight, Award } from 'lucide-react';

export const PastEventsHighlights: React.FC = () => {
  return (
    <section id="past-highlights" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      <PageHeader
        badge="Events • Retrospective"
        title="Past Events & Highlights"
        tagline="A celebration of momentous campus achievements, championship victories, musical galas, and symposium retrospectives."
        breadcrumbs={[
          { label: 'Events', href: '/events' },
          { label: 'Past Highlights' }
        ]}
        actions={
          <Link
            to="/events/upcoming"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Upcoming Events</span>
          </Link>
        }
      />

      {/* Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {pastEventHighlights.map((highlight, idx) => (
          <div
            key={highlight.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className={`lg:col-span-6 relative aspect-[16/10] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                    {highlight.category}
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-6 p-8 sm:p-12 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700">
                  <span>{highlight.date}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                  {highlight.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                  {highlight.highlights}
                </p>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100 px-3.5 py-1.5 rounded-xl border border-amber-200">
                    <Trophy className="w-3.5 h-3.5 text-amber-800" />
                    <span>Milestone Triumph</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Navigation Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Looking Ahead to Upcoming Events</h3>
            <p className="text-xs text-slate-600 mt-0.5">Explore scheduled symposiums, open houses, and concerts.</p>
          </div>
          <Link
            to="/events/upcoming"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Upcoming Events</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </section>
  );
};
