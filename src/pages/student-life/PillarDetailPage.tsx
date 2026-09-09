import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { studentLifePillars } from '../../data/studentLife';
import { Sparkles, CheckCircle2, ArrowRight, Calendar, Clock, Layers, Image as ImageIcon } from 'lucide-react';

interface PillarDetailPageProps {
  pillarSlug?: string;
}

export const PillarDetailPage: React.FC<PillarDetailPageProps> = ({ pillarSlug: propSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = propSlug || slug;

  const pillar = studentLifePillars.find(p => p.slug === activeSlug);

  if (!pillar) {
    return <Navigate to="/student-life" replace />;
  }

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge={pillar.category.toUpperCase()}
        title={pillar.title}
        tagline={pillar.tagline}
        breadcrumbs={[
          { label: 'Student Life', href: '/student-life' },
          { label: pillar.title }
        ]}
        actions={
          <Link
            to="/apply"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Apply to ABS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      {/* 1. Overview & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Program Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 leading-tight">
              {pillar.description}
            </h2>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">Distinguishing Hallmarks</span>
              {pillar.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src={pillar.heroImage}
                alt={pillar.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Structured Programs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Featured Offerings</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Specialized Studios & Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillar.programs.map((prog, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  {prog.frequency}
                </span>
                <span className="text-xs font-mono text-slate-400">PROGRAM #{idx + 1}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-950">
                {prog.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {prog.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-bold text-slate-950">Photo Gallery</h3>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Campus Moments</span>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {pillar.galleryImages.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-sm aspect-square">
              <img
                src={img}
                alt={`${pillar.title} moment ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <Link to="/student-life" className="text-slate-600 hover:text-slate-900 font-semibold">
            &larr; Back to Student Life Overview
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/book-a-visit" className="text-amber-700 hover:text-amber-800 font-bold uppercase">
              Visit Studios & Grounds
            </Link>
            <Link
              to="/apply"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold uppercase rounded-xl transition-all shadow-xs"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export const Arts = () => <PillarDetailPage pillarSlug="arts" />;
export const Athletics = () => <PillarDetailPage pillarSlug="athletics" />;
export const Innovation = () => <PillarDetailPage pillarSlug="innovation" />;
export const Community = () => <PillarDetailPage pillarSlug="community" />;
export const Wellbeing = () => <PillarDetailPage pillarSlug="wellbeing" />;
