import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '009107874399918';
  const message = encodeURIComponent('Hi! I would like to book an appointment at Slix Family Salon.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="floating-whatsapp fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer group"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.312l6.156-1.952C9.756 31.076 12.766 32 16.004 32 24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.342 22.622c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.826-6.81-8.064-7.126-.23-.316-1.932-2.574-1.932-4.908 0-2.334 1.224-3.48 1.658-3.956.39-.432.926-.618 1.246-.618.15 0 .286.008.408.014.434.018.65.044.936.724.358.846 1.224 2.988 1.332 3.206.11.218.218.514.068.808-.142.302-.268.488-.486.748-.218.26-.428.46-.646.74-.2.244-.424.504-.176.938.248.434 1.1 1.816 2.366 2.942 1.628 1.448 2.916 1.916 3.394 2.112.344.142.754.108 1.01-.16.324-.342.724-.908 1.13-1.466.29-.398.654-.448 1.032-.302.384.142 2.43 1.146 2.846 1.354.416.21.692.316.794.486.1.168.1.978-.29 2.078z" />
      </svg>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-espresso text-warm-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Chat with us!
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-espresso rotate-45" />
      </div>
    </motion.a>
  );
}
