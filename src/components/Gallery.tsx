import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
  { src: '/images/hero-salon.jpg', alt: 'Salon Interior', span: 'col-span-2 row-span-2' },
  { src: '/images/haircut.jpg', alt: 'Hair Styling', span: '' },
  { src: '/images/coloring.jpg', alt: 'Hair Colouring', span: '' },
  { src: '/images/facial.jpg', alt: 'Facial Treatment', span: 'row-span-2' },
  { src: '/images/bridal.jpg', alt: 'Bridal Makeup', span: '' },
  { src: '/images/mens.jpg', alt: 'Mens Grooming', span: '' },
  { src: '/images/nails.jpg', alt: 'Nail Art', span: '' },
  { src: '/images/team.jpg', alt: 'Our Team', span: 'col-span-2' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-warm-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-elegant text-gold text-lg tracking-[0.3em] uppercase italic mb-2"
          >
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-4"
          >
            Style <span className="gold-text">Gallery</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[2px] gold-gradient mx-auto"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className={`overflow-hidden group relative ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-all duration-500 flex items-end p-4">
                <span className="text-warm-white font-elegant text-lg italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
