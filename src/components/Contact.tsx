import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Mail, Calendar } from 'lucide-react';

interface ContactProps {
  onBookClick: () => void;
}

export default function Contact({ onBookClick }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: ['Suvas Avenue, Opp. Rajasthan Hospital,', 'Arihant Nagar, Shahibag,', 'Ahmedabad, Gujarat 380016'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['+91 078743 99918'],
      href: 'tel:+9107874399918',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      lines: ['Monday - Sunday', '10:00 AM - 9:00 PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['info@slixsalon.com'],
      href: 'mailto:info@slixsalon.com',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-warm-white relative">
      <div className="absolute inset-0 pattern-bg" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-elegant text-gold text-lg tracking-[0.3em] uppercase italic mb-2"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-4"
          >
            Book Your <span className="gold-text">Appointment</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[2px] gold-gradient mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <info.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-1">{info.title}</h4>
                  {info.lines.map((line, j) =>
                    info.href ? (
                      <a
                        key={j}
                        href={info.href}
                        className="text-charcoal/60 hover:text-gold font-light text-sm block transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={j} className="text-charcoal/60 font-light text-sm">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="overflow-hidden h-48 border border-gold/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.58!3d23.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAzJzAwLjAiTiA3MsKwMzQnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Slix Family Salon Location"
              />
            </motion.div>
          </motion.div>

          {/* Booking CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-cream p-8 md:p-12 relative flex flex-col items-center justify-center text-center"
          >
            <div className="absolute top-0 left-0 w-full h-1 gold-gradient" />

            {/* Calendar Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 flex items-center justify-center bg-gold/10 mb-6"
            >
              <Calendar className="w-10 h-10 text-gold" />
            </motion.div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-3">
              Ready for a Fresh Look?
            </h3>
            <p className="text-charcoal/60 font-light text-lg max-w-md mb-3">
              Book your appointment instantly using our online scheduler. Pick a date, choose a time, and you're all set!
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                'Instant Confirmation',
                'Choose Your Time',
                'Free Cancellation',
                'Calendar Reminder',
              ].map((feature) => (
                <span
                  key={feature}
                  className="flex items-center gap-2 text-sm text-charcoal/50 font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {feature}
                </span>
              ))}
            </div>

            {/* Book Button */}
            <button
              onClick={onBookClick}
              className="gold-gradient text-espresso px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-3 cursor-pointer mb-4"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment Now
            </button>

            <p className="text-charcoal/35 text-xs font-light">
              Or call us directly at{' '}
              <a href="tel:+9107874399918" className="text-gold hover:underline">
                +91 078743 99918
              </a>
            </p>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/20" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/20" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
