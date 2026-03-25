import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock, Scissors } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Entire header block — fixed to top, always */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top info bar — slides up and hides on scroll */}
        <div
          className={`hidden lg:block bg-espresso text-warm-white/80 text-sm overflow-hidden transition-all duration-500 ease-in-out ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold" />
                +91 078743 99918
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                Shahibag, Ahmedabad
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>Mon - Sun: 10:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-espresso/95 backdrop-blur-xl shadow-2xl'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <a href="#home" className="flex items-center gap-2 group">
                <Scissors className="w-6 h-6 text-gold group-hover:rotate-45 transition-transform duration-300" />
                <div>
                  <h1 className="font-display text-xl md:text-2xl font-bold tracking-wide text-warm-white transition-colors">
                    Slix
                  </h1>
                  <p className="text-[9px] tracking-[0.3em] uppercase -mt-1 text-gold/80 transition-colors">
                    Family Salon
                  </p>
                </div>
              </a>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium tracking-wider uppercase transition-colors hover:text-gold text-warm-white/80"
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={onBookClick}
                  className="gold-gradient text-espresso px-6 py-2.5 text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Book Now
                </button>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-warm-white p-2"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-espresso/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl text-warm-white/90 hover:text-gold transition-colors tracking-wider"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => {
                setMobileOpen(false);
                onBookClick();
              }}
              className="gold-gradient text-espresso px-8 py-3 text-lg font-semibold tracking-wider mt-4 cursor-pointer"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
