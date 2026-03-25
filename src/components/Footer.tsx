import { Scissors, MapPin, Phone, Mail, Clock, Heart, Calendar } from 'lucide-react';

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Haircuts & Styling',
    'Hair Colouring',
    'Facials & Skin Care',
    'Bridal Makeup',
    'Men\'s Grooming',
    'Nail Art & Care',
    'Hair Spa',
    'Kids Styling',
  ];

  return (
    <footer className="bg-espresso pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-gold" />
              <div>
                <h3 className="font-display text-2xl font-bold text-warm-white tracking-wide">Slix</h3>
                <p className="text-[9px] tracking-[0.3em] uppercase -mt-1 text-gold/80">Family Salon</p>
              </div>
            </div>
            <p className="text-warm-white/50 font-light leading-relaxed text-sm mb-6">
              Your one-stop destination for premium beauty and grooming services for the entire family. Where style meets care.
            </p>
            <button
              onClick={onBookClick}
              className="gold-gradient text-espresso px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-warm-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-warm-white/50 hover:text-gold transition-colors text-sm font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-warm-white mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-warm-white/50 text-sm font-light">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-warm-white mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <p className="text-warm-white/50 text-sm font-light">
                  Suvas Avenue, Opp. Rajasthan Hospital, Arihant Nagar, Shahibag, Ahmedabad, Gujarat 380016
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+9107874399918" className="text-warm-white/50 text-sm font-light hover:text-gold transition-colors">
                  +91 078743 99918
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:info@slixsalon.com" className="text-warm-white/50 text-sm font-light hover:text-gold transition-colors">
                  info@slixsalon.com
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-warm-white/50 text-sm font-light">Mon - Sun: 10 AM - 9 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-white/30 text-sm font-light">
            © {new Date().getFullYear()} Slix Family Salon. All rights reserved.
          </p>
          <p className="text-warm-white/30 text-sm font-light flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose fill-rose" /> in Ahmedabad
          </p>
        </div>
      </div>
    </footer>
  );
}
