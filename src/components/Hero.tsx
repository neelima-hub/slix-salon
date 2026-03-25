import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-salon.jpg"
          alt="Slix Family Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-bg" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-2 mb-4"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gold fill-gold" />
          ))}
          <span className="text-warm-white/70 text-sm ml-2 font-body">4.8 Rated on Google</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-elegant text-gold text-lg md:text-xl tracking-[0.4em] uppercase mb-4 italic"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-warm-white font-bold tracking-wider leading-tight"
        >
          Slix Family
          <br />
          <span className="gold-text">Salon</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="h-[2px] gold-gradient my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="font-elegant text-warm-white/80 text-xl md:text-2xl max-w-xl italic"
        >
          Where Style Meets Family — Premium Grooming for Men, Women & Kids
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#services"
            className="gold-gradient text-espresso px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:opacity-90 transition-all"
          >
            Explore Services
          </a>
          <button
            onClick={onBookClick}
            className="gold-gradient text-espresso px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:opacity-90 transition-all cursor-pointer"
          >
            Book Appointment
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
