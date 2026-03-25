import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Sparkles, Calendar } from 'lucide-react';

type Category = 'women' | 'men' | 'kids';

interface PricingProps {
  onBookClick: () => void;
}

const pricingData: Record<Category, { service: string; price: string; popular?: boolean }[]> = {
  women: [
    { service: 'Haircut & Blow Dry', price: '₹349' },
    { service: 'Hair Spa (L\'Oréal)', price: '₹799', popular: true },
    { service: 'Global Hair Colour', price: '₹1,499' },
    { service: 'Highlights / Balayage', price: '₹2,499', popular: true },
    { service: 'Keratin / Smoothening', price: '₹3,999' },
    { service: 'Basic Facial', price: '₹499' },
    { service: 'Gold / Diamond Facial', price: '₹1,299', popular: true },
    { service: 'Full Body Waxing', price: '₹1,499' },
    { service: 'Threading (Eyebrow)', price: '₹49' },
    { service: 'Manicure + Pedicure', price: '₹699' },
    { service: 'Gel Nail Extensions', price: '₹1,499' },
    { service: 'Bridal Makeup Package', price: '₹14,999', popular: true },
    { service: 'Party Makeup', price: '₹2,999' },
    { service: 'Saree Draping', price: '₹499' },
    { service: 'Hair Straightening (Iron)', price: '₹299' },
  ],
  men: [
    { service: 'Haircut (Regular)', price: '₹199' },
    { service: 'Haircut (Premium Stylist)', price: '₹349', popular: true },
    { service: 'Beard Trim & Shape', price: '₹149' },
    { service: 'Clean Shave', price: '₹99' },
    { service: 'Hair Colour', price: '₹499' },
    { service: 'Fashion Highlights', price: '₹999', popular: true },
    { service: 'Hair Spa', price: '₹599' },
    { service: 'De-Tan Pack', price: '₹399' },
    { service: 'Facial (Charcoal)', price: '₹599', popular: true },
    { service: 'Head Massage (30 min)', price: '₹249' },
    { service: 'Detan + Cleanup Combo', price: '₹699' },
    { service: 'Groom Makeup Package', price: '₹4,999', popular: true },
  ],
  kids: [
    { service: 'Kids Haircut (Boy)', price: '₹149' },
    { service: 'Kids Haircut (Girl)', price: '₹199' },
    { service: 'Hair Wash & Style', price: '₹149', popular: true },
    { service: 'Fun Hair Colour (Temporary)', price: '₹299' },
    { service: 'Birthday Party Styling', price: '₹499', popular: true },
    { service: 'Kids Facial (Fruit)', price: '₹349' },
  ],
};

export default function Pricing({ onBookClick }: PricingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<Category>('women');

  const tabs: { key: Category; label: string }[] = [
    { key: 'women', label: "Women's" },
    { key: 'men', label: "Men's" },
    { key: 'kids', label: "Kids" },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-espresso relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg" />
      <div className="max-w-5xl mx-auto px-4 md:px-6 relative" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-elegant text-gold text-lg tracking-[0.3em] uppercase italic mb-2"
          >
            Transparent Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-warm-white font-bold mb-4"
          >
            Our <span className="gold-text">Price List</span>
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
            className="text-warm-white/50 max-w-lg mx-auto text-lg font-light"
          >
            Quality services at prices that won't break the bank
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-3 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${
                activeTab === tab.key
                  ? 'gold-gradient text-espresso'
                  : 'border border-gold/30 text-gold/70 hover:border-gold/60 hover:text-gold'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Price List */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-charcoal-light/30 backdrop-blur-sm border border-gold/10"
        >
          {pricingData[activeTab].map((item, i) => (
            <div
              key={item.service}
              className={`flex items-center justify-between px-6 md:px-8 py-4 ${
                i !== pricingData[activeTab].length - 1 ? 'border-b border-gold/5' : ''
              } hover:bg-gold/5 transition-colors group`}
            >
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
                <span className="text-warm-white/80 group-hover:text-warm-white transition-colors font-light">
                  {item.service}
                </span>
                {item.popular && (
                  <span className="hidden sm:flex items-center gap-1 text-[10px] tracking-wider uppercase gold-gradient text-espresso px-2 py-0.5 font-semibold">
                    <Sparkles className="w-3 h-3" /> Popular
                  </span>
                )}
              </div>
              <span className="font-display text-lg text-gold font-semibold">{item.price}</span>
            </div>
          ))}
        </motion.div>

        {/* Book CTA below price list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <button
            onClick={onBookClick}
            className="gold-gradient text-espresso px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity inline-flex items-center gap-3 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            Book Your Slot Now
          </button>
          <p className="text-warm-white/30 text-sm mt-4 font-light">
            * Prices may vary based on hair length and product used. GST extra.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
