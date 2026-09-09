import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { achievementsData } from '../../data/achievements';
import { Trophy, ArrowRight, Star } from 'lucide-react';

interface AchievementCategoryPageProps {
  category: 'Academic' | 'Sports' | 'Arts' | 'Innovation' | 'Leadership';
  title: string;
  badge: string;
  tagline: string;
}

export const AchievementCategoryPage: React.FC<AchievementCategoryPageProps> = ({
  category,
  title,
  badge,
  tagline
}) => {
  const filtered = achievementsData.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      <PageHeader
        badge={badge}
        title={title}
        tagline={tagline}
        breadcrumbs={[
          { label: 'Achievements', href: '/achievements' },
          { label: title }
        ]}
        actions={
          <Link
            to="/achievements"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>All Achievements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* Grid */}
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
    </div>
  );
};
