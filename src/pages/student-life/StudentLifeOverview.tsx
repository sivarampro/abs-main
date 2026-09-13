import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { studentLifePillars, schoolHouses } from '../../data/studentLife';
import { Sparkles, Palette, Trophy, Cpu, HeartHandshake, ShieldCheck, ArrowRight, CheckCircle2, Users } from 'lucide-react';
import { Arts, Athletics, Innovation, Community, Wellbeing } from './PillarDetailPage';

export const StudentLifeOverview: React.FC = () => {
  const getPillarIcon = (category: string) => {
    switch (category) {
      case 'arts':
        return <Palette className="w-6 h-6 text-purple-600" />;
      case 'athletics':
        return <Trophy className="w-6 h-6 text-amber-600" />;
      case 'innovation':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'community':
        return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      case 'wellbeing':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="Co-Curricular & Community"
        title="A Vibrant Tapestry of Arts, Athletics & Leadership"
        tagline="Student life at ABS is rich, dynamic, and purposeful. Discover our competitive house system, varsity athletics, symphony orchestra, and innovation incubator."
        breadcrumbs={[{ label: 'Student Life Overview' }]}
        actions={
          <Link
            to="/apply"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Join the Community</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      {/* Sticky Table of Contents Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-md p-2 sm:p-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              { id: 'overview', number: '01', title: 'Co-Curricular Overview' },
              { id: 'arts', number: '02', title: 'Arts & Culture' },
              { id: 'athletics', number: '03', title: 'Sports & Athletics' },
              { id: 'innovation', number: '04', title: 'Innovation & Technology' },
              { id: 'community', number: '05', title: 'Clubs, Leadership & Community' },
            ].map((sec) => (
              <Link
                key={sec.id}
                to={`/student-life#${sec.id}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-slate-50 hover:bg-amber-50 hover:text-amber-900 text-slate-700 transition-all border border-slate-200/80 hover:border-amber-300 flex-shrink-0"
              >
                <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-800 text-[10px] font-bold flex items-center justify-center">
                  {sec.number}
                </span>
                <span>{sec.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 1. House System Showcase */}
      <section id="overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Tradition & Belonging</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            The ABS Four-House System
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Every scholar belongs to one of our historic houses, fostering cross-grade camaraderie, healthy spirited competition, and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolHouses.map((house, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all text-center space-y-3"
            >
              <div className={`w-12 h-12 rounded-2xl ${house.color} text-white mx-auto flex items-center justify-center font-bold text-lg shadow-md`}>
                {house.name.charAt(0)}
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-950">{house.name}</h3>
              <p className="text-xs font-semibold text-amber-700">{house.motto}</p>
              <p className="text-[11px] text-slate-400">Emblem: {house.emblem}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Five Student Life Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Core Experience</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Pillars of Student Life
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Explore dedicated programs across performing arts, varsity athletics, robotics, social impact, and pastoral care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentLifePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pillar.heroImage}
                    alt={pillar.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 backdrop-blur-xs shadow-xs">
                      {pillar.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-serif italic text-amber-800">
                    &ldquo;{pillar.tagline}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>

                  <div className="space-y-1 pt-2">
                    {pillar.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/student-life#${pillar.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  <span>Explore {pillar.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Render Subsections */}
      <Arts />
      <Athletics />
      <Innovation />
      <Community />

    </div>
  );
};
