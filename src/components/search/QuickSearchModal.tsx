import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, CornerDownLeft, BookOpen, Building2, Users, Calendar, Sparkles, GraduationCap } from 'lucide-react';
import { searchIndexData } from '../../data/searchIndex';
import { SearchItem } from '../../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = query.trim() === ''
    ? searchIndexData.slice(0, 8)
    : searchIndexData.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.toLowerCase().includes(q))
        );
      });

  const handleSelect = (item: SearchItem) => {
    onClose();
    navigate(item.url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex]);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academics':
        return <GraduationCap className="w-4 h-4 text-blue-600" />;
      case 'Campus':
        return <Building2 className="w-4 h-4 text-emerald-600" />;
      case 'About':
        return <Users className="w-4 h-4 text-amber-600" />;
      case 'Media':
        return <BookOpen className="w-4 h-4 text-purple-600" />;
      case 'Events':
        return <Calendar className="w-4 h-4 text-rose-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm p-4 sm:p-6 md:p-20 flex justify-center items-start animate-fade-in" role="dialog" aria-modal="true">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search pages, academics, admissions, campus, faculty..."
            className="w-full text-base bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 font-sans"
            aria-label="Search site content"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Close search modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-50">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center">
              <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-medium text-slate-700">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for &ldquo;Admissions&rdquo;, &ldquo;Robotics&rdquo;, &ldquo;Fees&rdquo;, or &ldquo;Campus&rdquo;</p>
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.url + idx}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                  selectedIndex === idx ? 'bg-amber-50/80 text-slate-900 border border-amber-200/60' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-white border border-slate-100 shadow-xs flex-shrink-0">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900">{item.title}</span>
                      <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 truncate mt-0.5">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 ml-2 flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-amber-600" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-200 rounded shadow-xs">↑</kbd>
              <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-200 rounded shadow-xs">↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-200 rounded shadow-xs flex items-center">
                <CornerDownLeft className="w-2.5 h-2.5" />
              </kbd>
              to select
            </span>
          </div>
          <span className="hidden sm:inline">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
