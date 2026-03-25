import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'Absolutely loved my bridal look! The team at Slix understood exactly what I wanted. The makeup lasted the entire function without any touch-ups. Highly recommend for all brides-to-be!',
    initial: 'PS',
  },
  {
    name: 'Rajesh Patel',
    service: 'Haircut & Beard Styling',
    rating: 5,
    text: 'Best salon in Shahibag area. I\'ve been coming here for 3 years now. The stylists are skilled, the ambiance is great, and prices are very reasonable. My whole family visits here.',
    initial: 'RP',
  },
  {
    name: 'Anita Desai',
    service: 'Hair Colouring',
    rating: 5,
    text: 'Got balayage done here and it turned out stunning! They use quality products and the stylist took time to understand the exact shade I wanted. Very professional service.',
    initial: 'AD',
  },
  {
    name: 'Mehul Shah',
    service: 'Hair Spa',
    rating: 4,
    text: 'The hair spa treatment was so relaxing. My hair felt incredibly soft afterwards. The staff is courteous and the salon is very clean and well-maintained. Great experience!',
    initial: 'MS',
  },
  {
    name: 'Kavita Joshi',
    service: 'Facial & Cleanup',
    rating: 5,
    text: 'My skin was glowing after the gold facial! The beautician was very gentle and knowledgeable. Love how they explain each step. Will definitely come back for more treatments.',
    initial: 'KJ',
  },
  {
    name: 'Sanjay Mehta',
    service: 'Family Package',
    rating: 5,
    text: 'We bring our entire family here - wife, kids, and myself. They handle everyone with equal care. The kids section is fun and the stylists are patient with children. True family salon!',
    initial: 'SM',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = testimonials.length - visibleCount;

  const next = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-elegant text-gold text-lg tracking-[0.3em] uppercase italic mb-2"
          >
            Client Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-4"
          >
            What Our <span className="gold-text">Clients Say</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[2px] gold-gradient mx-auto"
          />
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${current * (100 / visibleCount + 2)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-[calc(33.333%-16px)] bg-warm-white p-8 relative"
                >
                  <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-espresso font-display font-bold text-lg">
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-charcoal">{t.name}</h4>
                      <p className="text-charcoal/50 text-sm">{t.service}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-4 h-4 ${j < t.rating ? 'text-gold fill-gold' : 'text-gold/20'}`}
                      />
                    ))}
                  </div>
                  <p className="text-charcoal/70 font-light leading-relaxed italic">"{t.text}"</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
