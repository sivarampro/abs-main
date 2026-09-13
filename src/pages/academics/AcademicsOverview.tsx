import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { academicDivisions } from '../../data/academics';
import { Sparkles, GraduationCap, BookOpen, ArrowRight, CheckCircle2, Award, Clock, Layers } from 'lucide-react';

import { LearningJourney } from './LearningJourney';
import { Curriculum } from './Curriculum';
import { TeachingLearning } from './TeachingLearning';
import { AcademicTechInnovation } from './AcademicTechInnovation';
import { AcademicSupport } from './AcademicSupport';
import { AssessmentProgress } from './AssessmentProgress';
import { DivisionModal } from '../../components/widgets/DivisionModal';

const divisionSlugs = ['early-years', 'primary', 'middle-school', 'secondary', 'senior-secondary'];

export const AcademicsOverview: React.FC = () => {
  const [activeDivision, setActiveDivision] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Listen to hash changes to open the modal from navbar links
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (divisionSlugs.includes(hash)) {
      setActiveDivision(hash);
      // Remove hash from URL to prevent scrolling jump and allow reopening
      navigate('/academics', { replace: true });
    }
  }, [location.hash, navigate]);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="Academic Architecture"
        title="Inquiry-Led, Rigorous & Holistic Learning"
        tagline="From foundational sensory discovery at age 3 to collegiate research fellowships at age 18, discover the intellectual trajectory at ABS."
        breadcrumbs={[{ label: 'Academics Overview' }]}
        actions={
          <Link
            to="/apply"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Enroll for 2026–27</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      {/* Sticky Table of Contents Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-md p-2 sm:p-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              { id: 'academic-overview', number: '01', title: 'Academic Overview' },
              { id: 'learning-journey', number: '02', title: 'Learning Journey' },
              { id: 'curriculum', number: '03', title: 'Curriculum' },
              { id: 'teaching-learning', number: '04', title: 'Teaching & Learning' },
              { id: 'technology-innovation', number: '05', title: 'Technology & Innovation' },
              { id: 'support', number: '06', title: 'Academic Support' },
              { id: 'assessment-progress', number: '07', title: 'Assessment & Progress' },
            ].map((sec) => (
              <Link
                key={sec.id}
                to={`/academics#${sec.id}`}
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

      {/* 1. Academic Pedagogy Pillars */}
      <section id="academic-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Foundational Principles</span>
          <h2 className="font-serif text-3xl font-bold text-slate-950">
            Academic Overview
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Inquiry-Led Mastery</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Students construct knowledge by formulating hypotheses, testing theories empirically in modern labs, and defending their findings.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-950">Subject Specialist Mentors</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every academic division features passionate master educators with advanced degrees and collegiate research backgrounds.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-950">Personalized Trajectory</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              With an 8:1 ratio, students receive diagnostic academic support, advanced placement honors tracks, and one-on-one advising.
            </p>
          </div>
        </div>
      </section>



      {/* Render Subsections */}
      <LearningJourney onOpenDivision={setActiveDivision} />
      <Curriculum />
      <TeachingLearning />
      <AcademicTechInnovation />
      <AcademicSupport />
      <AssessmentProgress />

      {/* Division Modal */}
      <DivisionModal 
        isOpen={!!activeDivision} 
        divisionSlug={activeDivision} 
        onClose={() => setActiveDivision(null)} 
      />

    </div>
  );
};
