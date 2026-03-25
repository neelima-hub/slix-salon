import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Paintbrush, Sparkles, Crown, User, Baby } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: "Haircuts & Styling",
    description: "Trendy cuts, blowouts, and styling for men, women & kids. From classic to contemporary.",
    image: "/images/haircut.jpg",
    price: "From ₹199"
  },
  {
    icon: Paintbrush,
    title: "Hair Colouring",
    description: "Global colour, highlights, balayage, and fashion shades using premium products.",
    image: "/images/coloring.jpg",
    price: "From ₹999"
  },
  {
    icon: Sparkles,
    title: "Skin & Facials",
    description: "Rejuvenating facials, clean-ups, de-tan, and advanced skin treatments.",
    image: "/images/facial.jpg",
    price: "From ₹499"
  },
  {
    icon: Crown,
    title: "Bridal & Party",
    description: "Complete bridal packages, party makeup, saree draping, and mehndi services.",
    image: "/images/bridal.jpg",
    price: "From ₹4,999"
  },
  {
    icon: User,
    title: "Men's Grooming",
    description: "Beard styling, clean shaves, hair spa, and premium grooming packages.",
    image: "/images/mens.jpg",
    price: "From ₹149"
  },
  {
    icon: Baby,
    title: "Nail Art & Care",
    description: "Manicure, pedicure, gel nails, nail extensions, and creative nail art designs.",
    image: "/images/nails.jpg",
    price: "From ₹349"
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-elegant text-gold text-lg tracking-[0.3em] uppercase italic mb-2"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-4"
          >
            Our <span className="gold-text">Services</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[2px] gold-gradient mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-charcoal/60 max-w-lg mx-auto text-lg font-light"
          >
            Premium beauty & grooming services for the entire family
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="service-card group relative overflow-hidden bg-warm-white cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="service-overlay absolute inset-0 bg-espresso/70 opacity-0 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-warm-white font-elegant text-xl italic">{service.price}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">{service.title}</h3>
                </div>
                <p className="text-charcoal/60 font-light leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
