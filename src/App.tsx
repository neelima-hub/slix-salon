import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';
import CalendarModal, { useCalendarModal } from './components/CalendarModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const calendar = useCalendarModal();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar onBookClick={calendar.open} />
          <Hero onBookClick={calendar.open} />
          <About />
          <Services />
          <Pricing onBookClick={calendar.open} />
          <Gallery />
          <Testimonials />
          <Contact onBookClick={calendar.open} />
          <Footer onBookClick={calendar.open} />
          <WhatsAppButton />
          <CalendarModal isOpen={calendar.isOpen} onClose={calendar.close} />
        </motion.div>
      )}
    </>
  );
}
