import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { studentStoriesData } from '../../data/achievements';
import { Quote, Sparkles, Star, Trophy, ArrowRight, Award } from 'lucide-react';

export const StudentStories: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      <PageHeader
        badge="Spotlight • Voice of Scholars"
        title="Student Stories & Journeys"
        tagline="In-depth narratives of grit, passion, mentorship, and triumph from our accomplished students."
        breadcrumbs={[
          { label: 'Achievements', href: '/achievements' },
          { label: 'Student Stories' }
        ]}
        actions={
          <Link
            to="/achievements"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Trophy className="w-4 h-4" />
            <span>All Achievements</span>
          </Link>
        }
      />

      {/* Stories List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {studentStoriesData.map((story, idx) => (
          <div
            key={story.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className={`lg:col-span-5 relative aspect-[4/3] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={story.image}
                  alt={story.studentName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-xs">
                    {story.category}
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-7 p-8 sm:p-12 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                    {story.grade}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    {story.studentName}: {story.title}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold mt-1">
                    ★ {story.achievementBadge}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                  {story.story}
                </p>

                <div className="p-4 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 font-serif italic text-sm sm:text-base text-slate-900">
                  &ldquo;{story.quote}&rdquo;
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
            <h3 className="font-serif text-xl font-bold text-slate-950">Explore All Student Achievements</h3>
            <p className="text-xs text-slate-600 mt-0.5">Discover our full roster of academic, sporting, and innovation laurels.</p>
          </div>
          <Link
            to="/achievements"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>All Achievements</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
