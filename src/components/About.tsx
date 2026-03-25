import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const stats = [
  { icon: Users, number: '15,000+', label: 'Happy Clients' },
  { icon: Award, number: '12+', label: 'Years Experience' },
  { icon: Heart, number: '25+', label: 'Expert Stylists' },
  { icon: Sparkles, number: '50+', label: 'Services Offered' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-28 bg-warm-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <img
                    src="/images/haircut.jpg"
                    alt="Hair styling"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src="/images/nails.jpg"
                    alt="Nail art"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="overflow-hidden">
                  <img
                    src="/images/facial.jpg"
                    alt="Facial treatment"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src="/images/mens.jpg"
                    alt="Men's grooming"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/30 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gold/30 -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-elegant text-gold text-lg tracking-[0.3em] uppercase italic mb-2">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-6 leading-tight">
              A Decade of
              <br />
              <span className="gold-text">Beauty & Care</span>
            </h2>
            <div className="w-16 h-[2px] gold-gradient mb-6" />
            <p className="text-charcoal/70 leading-relaxed mb-4 text-lg font-light">
              Nestled in the heart of Shahibag, Ahmedabad, <strong className="font-medium text-charcoal">Slix Family Salon</strong> has been the go-to destination for premium grooming and beauty services for over a decade.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8 text-lg font-light">
              We believe beauty is for everyone — that's why we cater to the entire family. From trending haircuts and luxurious spa treatments to bridal makeovers and kids' hairstyling, our team of 25+ expert stylists ensures every visit leaves you looking and feeling your absolute best.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                    <stat.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-charcoal">{stat.number}</p>
                    <p className="text-charcoal/50 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
