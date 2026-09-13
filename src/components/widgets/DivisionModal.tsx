import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { DivisionDetailPage } from '../../pages/academics/DivisionDetailPage';

interface DivisionModalProps {
  isOpen: boolean;
  divisionSlug: string | null;
  onClose: () => void;
}

export const DivisionModal: React.FC<DivisionModalProps> = ({ isOpen, divisionSlug, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut listener for Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !divisionSlug) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-center items-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-fade-in" 
      role="dialog" 
      aria-modal="true"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col transform transition-all animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white z-10 shrink-0 rounded-t-3xl">
          <div className="text-sm font-bold uppercase tracking-widest text-slate-800 ml-2">
            Academic Division Details
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar rounded-b-3xl">
          <div className="w-full h-full pb-10">
            <div className="[&>section]:!pt-0 [&>section]:!border-t-0 [&>section]:!mt-0">
                <DivisionDetailPage divisionSlug={divisionSlug} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
