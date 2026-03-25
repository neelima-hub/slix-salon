import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';

const GOOGLE_CALENDAR_URL = 'https://calendar.app.google/DzQ5NiD5JLQrsou59';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-espresso/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 xl:inset-x-[15%] xl:inset-y-12 z-[70] bg-warm-white flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-gold/10 bg-cream flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gold/10">
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-charcoal">
                    Book Your Appointment
                  </h3>
                  <p className="text-charcoal/50 text-xs md:text-sm font-light">
                    Choose a convenient date & time slot
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center border border-gold/20 text-charcoal/60 hover:bg-gold/10 hover:text-charcoal transition-all"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Calendar iframe */}
            <div className="flex-1 relative bg-white">
              <iframe
                src={GOOGLE_CALENDAR_URL}
                className="w-full h-full border-0"
                title="Book Appointment - Slix Family Salon"
                allow="camera; microphone"
              />
            </div>

            {/* Footer */}
            <div className="px-5 md:px-8 py-3 border-t border-gold/10 bg-cream flex items-center justify-between flex-shrink-0">
              <p className="text-charcoal/40 text-xs font-light">
                Powered by Google Calendar Appointments
              </p>
              <button
                onClick={onClose}
                className="text-sm font-medium text-charcoal/60 hover:text-charcoal transition-colors px-4 py-1.5 border border-gold/15 hover:border-gold/30"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Hook to manage calendar modal state
import { useState, useCallback } from 'react';

export function useCalendarModal() {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, open, close };
}
