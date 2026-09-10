import React, { useState } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { academicCalendarTerms } from '../../data/events';
import { Calendar, Download, Bookmark, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../components/common/ToastContext';

export const AnnualCalendar: React.FC = () => {
  const [activeTermIndex, setActiveTermIndex] = useState<number>(0);
  const { showToast } = useToast();

  const handleDownloadCalendar = () => {
    showToast('Calendar Downloaded', 'The ABS 2026–2027 Academic Schedule PDF is downloading.', 'success');
  };

  return (
    <section id="annual" className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">
      <PageHeader
        badge="Events • Schedule"
        title="Annual Academic Calendar"
        tagline="Comprehensive term schedules, examination blocks, holiday recesses, and major school milestones for 2026–2027."
        breadcrumbs={[
          { label: 'Events', href: '/events' },
          { label: 'Annual Calendar' }
        ]}
        actions={
          <button
            onClick={handleDownloadCalendar}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Calendar PDF</span>
          </button>
        }
      />

      {/* Term Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-2xl max-w-2xl mx-auto">
          {academicCalendarTerms.map((term, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTermIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTermIndex === idx
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {term.term.split(' (')[0]}
            </button>
          ))}
        </div>
      </section>

      {/* Active Term Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          <div className="bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                Semester Overview
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {academicCalendarTerms[activeTermIndex].term}
              </h2>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-amber-300 text-xs font-medium self-start sm:self-auto">
              {academicCalendarTerms[activeTermIndex].dates}
            </div>
          </div>

          {/* Key Dates Timeline */}
          <div className="p-8 sm:p-10 divide-y divide-slate-100">
            {academicCalendarTerms[activeTermIndex].keyDates.map((item, i) => (
              <div key={i} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                <div className="w-24 flex-shrink-0">
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-mono text-xs font-bold">
                    {item.date}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-serif text-base font-bold text-slate-950">{item.event}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </section>
  );
};
