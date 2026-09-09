import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  tagline?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  tagline,
  breadcrumbs,
  actions
}) => {
  return (
    <div className="relative bg-gradient-to-b from-amber-50/40 via-slate-50/60 to-white pt-12 pb-14 border-b border-slate-100 overflow-hidden">
      
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 bg-subtle-mesh pointer-events-none opacity-60" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Trail */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-amber-600 transition-colors font-medium">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.label + idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-amber-600 transition-colors font-medium">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-900 font-semibold truncate max-w-xs">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Header Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300/60 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{badge}</span>
              </div>
            )}
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
              {title}
            </h1>

            {tagline && (
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
                {tagline}
              </p>
            )}
          </div>

          {/* Optional Action CTAs */}
          {actions && (
            <div className="flex-shrink-0 flex items-center gap-3">
              {actions}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
