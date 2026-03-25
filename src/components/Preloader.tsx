import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="mb-6"
      >
        <Scissors className="w-12 h-12 text-gold" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-display text-3xl md:text-4xl text-warm-white tracking-wider"
      >
        Slix Family Salon
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '120px' }}
        transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
        className="h-[1px] bg-gold mt-4"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-taupe font-elegant text-lg mt-3 italic tracking-widest"
      >
        Where Style Meets Family
      </motion.p>
    </motion.div>
  );
}
