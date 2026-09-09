import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/layout/PageHeader';
import { journalArticles } from '../../data/journal';
import { BookOpen, Search, ArrowRight, Sparkles, Clock, Tag } from 'lucide-react';

export const JournalList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Innovation', 'Academics', 'Arts & Culture', 'Campus Life', 'Leadership'];

  const filteredArticles = journalArticles.filter((article) => {
    const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const featured = journalArticles.find(a => a.featured) || journalArticles[0];

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      <PageHeader
        badge="The ABS Journal"
        title="Thought Leadership & Educational Insights"
        tagline="Essays on modern pedagogy, student scientific breakthroughs, campus architecture, and the future of international education."
        breadcrumbs={[{ label: 'ABS Journal' }]}
      />

      {/* Featured Article Banner */}
      {selectedCategory === 'All' && searchQuery.trim() === '' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              
              <div className="lg:col-span-7 relative aspect-video lg:aspect-auto h-full min-h-[350px]">
                <img
                  src={featured.heroImage}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                    Featured Editorial
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="font-semibold text-amber-700 uppercase tracking-wider">{featured.category}</span>
                  <span>•</span>
                  <span>{featured.publishedAt}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 leading-tight hover:text-amber-700 transition-colors">
                  <Link to={`/journal/${featured.slug}`}>
                    {featured.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featured.author.avatar}
                      alt={featured.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">{featured.author.name}</span>
                      <span className="text-[10px] text-slate-500">{featured.author.role}</span>
                    </div>
                  </div>

                  <Link
                    to={`/journal/${featured.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.slug}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{article.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-950 line-clamp-2 hover:text-amber-700 transition-colors">
                    <Link to={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] text-slate-600 font-medium">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-slate-800 truncate max-w-[120px]">{article.author.name}</span>
                  </div>

                  <Link
                    to={`/journal/${article.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
};
