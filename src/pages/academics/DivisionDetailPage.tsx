import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { academicDivisions } from '../../data/academics';
import { AcademicDivision } from '../../types';
import { 
  Sparkles, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  GraduationCap, 
  Award,
  ChevronRight
} from 'lucide-react';

interface DivisionDetailPageProps {
  divisionSlug?: string;
}

export const DivisionDetailPage: React.FC<DivisionDetailPageProps> = ({ divisionSlug: propSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = propSlug || slug;

  const division = academicDivisions.find((d) => d.slug === activeSlug);

  if (!division) {
    return null;
  }

  return (
    <section id={activeSlug} className="space-y-12 pt-16 scroll-mt-28 border-t border-slate-200">

      {/* 1. Overview & Philosophy Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <span>Pedagogical Approach</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 leading-tight">
              {division.overview}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              {division.philosophy}
            </p>

            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">Faculty Lead Message</span>
              <p className="text-xs sm:text-sm font-serif italic text-slate-900">
                &ldquo;{division.facultyLead.message}&rdquo;
              </p>
              <div className="pt-2 text-xs">
                <span className="font-bold text-slate-950">{division.facultyLead.name}</span>
                <span className="text-slate-500 block">{division.facultyLead.role} — {division.facultyLead.qualifications}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src={division.heroImage}
                alt={division.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Curriculum Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Academic Framework</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Curriculum Highlights & Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {division.curriculumHighlights.map((hl, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100/80 text-amber-800 flex items-center justify-center font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-950">
                {hl.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {hl.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Key Subjects & Co-Curricular */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">Core Syllabi</span>
              <h3 className="font-serif text-2xl font-bold text-white">Academic Subjects</h3>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {division.keySubjects.map((sub, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-1">Enrichment</span>
              <h3 className="font-serif text-2xl font-bold text-slate-950">Co-Curricular & Clubs</h3>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {division.coCurricular.map((act, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Daily Rhythm / Schedule Table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">A Day in the Life</span>
          <h2 className="font-serif text-3xl font-bold text-slate-950">
            Daily Rhythm for {division.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            A balanced schedule harmonizing focused conceptual study, laboratory investigations, physical activity, and reflection.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card divide-y divide-slate-100">
          {division.dailyRhythm.map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 w-24 flex-shrink-0">
                  {item.time}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-slate-700 font-medium text-right sm:text-left flex-1">
                {item.activity}
              </span>
            </div>
          ))}
        </div>
      </section>

    </section>
  );
};

// Export individual wrappers for specific academic routes
export const EarlyYears = () => <DivisionDetailPage divisionSlug="early-years" />;
export const Primary = () => <DivisionDetailPage divisionSlug="primary" />;
export const MiddleSchool = () => <DivisionDetailPage divisionSlug="middle-school" />;
export const Secondary = () => <DivisionDetailPage divisionSlug="secondary" />;
export const SeniorSecondary = () => <DivisionDetailPage divisionSlug="senior-secondary" />;
