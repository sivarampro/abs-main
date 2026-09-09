import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { Quote, Sparkles, Heart, Award, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

export const FounderMessage: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="About Us • 03"
        title="Founder's Message"
        tagline="A message of inspiration, vision, and enduring commitment from the Founder & Chairman of ABS."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: "Founder's Message" }
        ]}
        actions={
          <div className="flex items-center gap-3">
            <Link
              to="/about/managing-director"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5"
            >
              <span>Next: Managing Director</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        }
      />

      {/* Main Letter Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top Banner */}
          <div className="bg-slate-950 text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-shrink-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-amber-400/80 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                    alt="Founder & Chairman"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-serif font-bold text-lg shadow-md border-2 border-slate-950">
                  ★
                </div>
              </div>

              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Founder & Chairman's Desk</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Shri A. B. Subramanian
                </h2>
                <p className="text-sm text-amber-300 font-medium">Founder & Chairman, ABS Group of Educational Institutions</p>
                <p className="text-xs text-slate-400 pt-1">
                  Visionary Philanthropist • Educational Pioneer • Lifelong Patron of Knowledge
                </p>
              </div>
            </div>
          </div>

          {/* Letter Body */}
          <div className="p-8 sm:p-14 space-y-8 text-slate-700 leading-relaxed font-light text-base sm:text-lg">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 text-slate-900 font-serif italic text-lg sm:text-xl leading-relaxed">
              &ldquo;When we laid the foundation of ABS, our aspiration was never merely to build a school of brick and mortar, but to cultivate a sanctuary of intellectual illumination, noble ideals, and boundless human compassion.&rdquo;
            </div>

            <div className="space-y-6 text-slate-700">
              <p>
                <strong>Dear Parents, Esteemed Educators, and Beloved Students,</strong>
              </p>

              <p>
                Education is the greatest transformative catalyst granted to humanity. It has the power not only to enlighten individual minds but to elevate societies, eradicate ignorance, and inspire generations of thoughtful leaders.
              </p>

              <p>
                When ABS was established, we made a solemn pledge: that every child who walks through our portals will be recognized as an individual of limitless potential. Our sacred mission is to provide an ecosystem where rigorous scientific inquiry coexists with artistic expression, where moral character is held in equal esteem with academic brilliance, and where resilience is forged through every challenge.
              </p>

              <p>
                As we navigate a rapidly transforming 21st-century landscape defined by artificial intelligence and global interconnectedness, the fundamental need for empathy, integrity, and ethical clarity has never been greater. At ABS, we do not merely prepare students for examinations; we prepare them for life, for leadership, and for humanity.
              </p>

              <p>
                I invite you to walk this inspiring journey with us. Together, let us ignite the spark of wisdom in our children and guide them toward a future of limitless possibilities.
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-serif text-xl font-bold text-slate-950">Shri A. B. Subramanian</p>
                <p className="text-xs text-slate-500 font-medium">Founder & Chairman, ABS Educational Trust</p>
                <p className="text-[11px] text-amber-700 font-semibold tracking-wide uppercase mt-0.5">Educate • Enlighten • Excel</p>
              </div>
              <div className="px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-900 block font-serif">Trust Seal & Credo</span>
                <span className="text-[11px] text-slate-500">Established with Sacred Purpose</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-950">Continue Exploring About Us</h3>
            <p className="text-xs text-slate-600 mt-0.5">Next chapter: Vision from the Managing Director on institutional development.</p>
          </div>
          <Link
            to="/about/managing-director"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Managing Director</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
