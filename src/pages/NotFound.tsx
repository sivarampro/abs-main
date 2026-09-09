import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-lg text-center space-y-6">
        
        <div className="w-20 h-20 rounded-3xl bg-amber-50 border border-amber-200 text-amber-600 mx-auto flex items-center justify-center">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700 block">
            Error 404 • Page Not Found
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-950">
            Avenue Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            The page you are looking for may have been relocated, renamed, or is currently undergoing scheduled curriculum revision.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <Link
            to="/"
            className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-amber-400" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/academics"
            className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
          >
            Explore Academics
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-slate-400">
          Need assistance? <Link to="/contact" className="text-amber-700 underline font-medium">Contact Admissions</Link> or press <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-600">⌘K</kbd> to search.
        </div>

      </div>
    </div>
  );
};
