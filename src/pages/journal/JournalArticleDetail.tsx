import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { journalArticles } from '../../data/journal';
import { useToast } from '../../components/common/ToastContext';
import { Clock, Calendar, Share2, ArrowLeft, ArrowRight, Bookmark, Tag, Sparkles } from 'lucide-react';

export const JournalArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { showToast } = useToast();

  const article = journalArticles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  const relatedArticles = journalArticles
    .filter(a => a.slug !== article.slug)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link Copied', 'Article link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      <PageHeader
        badge={article.category}
        title={article.title}
        tagline={article.excerpt}
        breadcrumbs={[
          { label: 'Journal', href: '/journal' },
          { label: article.title }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-video">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta & Author Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-3.5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
            />
            <div>
              <h4 className="font-serif font-bold text-slate-950 text-base">{article.author.name}</h4>
              <p className="text-xs text-amber-700 font-semibold">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>{article.publishedAt}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-amber-700 hover:border-amber-300 transition-colors flex items-center gap-1.5 font-semibold"
              title="Share article"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Editorial Body Content */}
        <div className="prose prose-lg max-w-none text-slate-700 font-light leading-relaxed space-y-6 text-base sm:text-lg">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            <span>Topics:</span>
          </span>
          {article.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900"
            >
              #{t}
            </span>
          ))}
        </div>

      </article>

      {/* Related Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-bold text-slate-950">Related Stories & Research</h3>
          <Link to="/journal" className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800">
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((rel) => (
            <Link
              key={rel.slug}
              to={`/journal/${rel.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={rel.heroImage}
                  alt={rel.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">{rel.category}</span>
                  <h4 className="font-serif text-lg font-bold text-slate-950 group-hover:text-amber-700 transition-colors line-clamp-2 mt-1">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>{rel.readTime}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};
