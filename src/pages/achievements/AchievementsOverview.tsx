import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { achievementsData } from '../../data/achievements';
import { Trophy, Award, Sparkles, Medal, ArrowRight, UserCheck, Star, GraduationCap } from 'lucide-react';

export const AchievementsOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Sports', 'Arts', 'Innovation', 'Leadership'];

  const filtered = selectedCategory === 'All'
    ? achievementsData
    : achievementsData.filter(a => a.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      <PageHeader
        badge="Accolades & Laurels"
        title="Student Achievements"
        tagline="Celebrating extraordinary milestones earned by ABS scholars in international olympiads, athletic championships, cultural arts, and innovation."
        breadcrumbs={[{ label: 'Achievements' }]}
        actions={
          <Link
            to="/achievements/student-stories"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Star className="w-4 h-4" />
            <span>Read Student Stories</span>
          </Link>
        }
      />

      {/* Quick Stats Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'International Olympiad Medals', value: '48+', desc: 'Math, Physics, Informatics & Chemistry' },
            { label: 'National Sports Trophies', value: '64', desc: 'Aquatics, Athletics, Football & Basketball' },
            { label: 'Arts & Music Laurels', value: '35+', desc: 'Carnegie Hall, Juilliard & Youth Symphonies' },
            { label: 'Patents & AI Grants', value: '$120K+', desc: 'Student-led climate and robotics innovations' }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card text-center space-y-1.5">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">{stat.value}</span>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-800">{stat.label}</p>
              <p className="text-[11px] text-slate-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-2xl max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {cat === 'All' ? 'All Achievements' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Achievements Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.recipient}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                      {item.category} • {item.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                    <Trophy className="w-3.5 h-3.5 text-amber-800" />
                    <span>{item.award}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-950 leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-xs text-slate-500 font-medium">
                    <span>Recipient: </span>
                    <strong className="text-slate-800">{item.recipient}</strong>
                    <span> ({item.grade})</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-2">
                <Link
                  to="/achievements/student-stories"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                >
                  <span>Read In-Depth Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">Inspiring Journeys of ABS Scholars</h3>
            <p className="text-xs text-slate-400 mt-1">Read how our faculty mentorship and facilities empower student triumphs.</p>
          </div>
          <Link
            to="/achievements/student-stories"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Explore Student Stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
