import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Sparkles, Calendar, Award, Building, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

export const OurStory: React.FC = () => {
  const milestones = [
    {
      year: 'Founding Vision',
      title: 'The Inception of ABS',
      description: 'Founded by visionary philanthropists and educators with a singular mission: to create a world-class school rooted in intellectual rigor, aesthetic fluency, and human empathy.'
    },
    {
      year: 'Phase I Expansion',
      title: 'Opening of the 25-Acre Green Campus',
      description: 'Inauguration of our sustainable architectural masterplan, smart collaborative studios, and Olympic-standard sports pavilion.'
    },
    {
      year: 'Research Labs & Innovation Hub',
      title: 'Pioneering STEM & AI Facilities',
      description: 'Establishment of collegiate wet science laboratories and the 8,000 sq.ft. Maker Innovation Hub with industrial 3D printing.'
    },
    {
      year: 'Global University Admissions Office',
      title: 'International Placement Distinction',
      description: 'First graduating cohort achieves landmark placements at leading universities across Oxford, Cambridge, Harvard, and Stanford.'
    },
    {
      year: 'Present Day & Future Horizon',
      title: 'Educate • Enlighten • Excel',
      description: 'Ranked among the premier international education institutions, continually pushing the frontiers of progressive, child-centered scholarship.'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      <PageHeader
        badge="Our Story"
        title="A Heritage of Purpose, Intellect & Vision"
        tagline="How a steadfast commitment to transformative education shaped an institution of global distinction."
        breadcrumbs={[
          { label: 'About ABS', href: '/about' },
          { label: 'Our Story' }
        ]}
      />

      {/* Narrative Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg font-light">
        <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-900 block">The Founding Conviction</span>
          <h2 className="font-serif text-3xl font-bold text-slate-950">
            Education as the Highest Form of Human Service
          </h2>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
            ABS was born out of a profound realization: in an increasingly automated and complex global society, young minds require far more than rote factual memorization. They need the critical capacity to dissect ambiguous problems, the creative courage to invent novel solutions, and the moral empathy to serve their fellow human beings.
          </p>
        </div>

        <p>
          From our inaugural intake, ABS broke away from the rigid, Victorian factory model of standardized desks and passive listening. We architected light-filled learning commons where discussion circles replace teacher-centric lectures, and where empirical experimentation in the lab begins in Primary school rather than waiting for university.
        </p>

        <p>
          Over the years, our campus has expanded to over 25 eco-landscaped acres, equipped with Olympic-standard athletic arenas, an 850-seat acoustically tuned auditorium, and an advanced AI Innovation Hub. Yet our core soul remains unchanged: <strong>a community where every individual child is deeply known, intellectually challenged, and celebrated unconditionally.</strong>
        </p>
      </section>

      {/* Milestones Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Chronicle of Growth</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
            Milestones of Excellence
          </h2>
        </div>

        <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-amber-500 shadow-sm group-hover:scale-125 transition-transform" />
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-card-hover transition-all space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                  {m.year}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-950">
                  {m.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white text-center space-y-6">
          <h3 className="font-serif text-3xl font-bold text-white">Be Part of the Next Chapter</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Discover how your child can thrive within our heritage of excellence, inquiry, and character.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/apply"
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Apply Online
            </Link>
            <Link
              to="/book-a-visit"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
