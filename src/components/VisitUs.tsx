import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MapEmbed } from './MapEmbed';

export const VisitUs = () => {
  return (
    <section className="py-10 md:py-16 bg-[#F5F1E6] border-t border-primary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1B2C4B] mb-2">
            Visit Us
          </h2>
        </motion.div>

        {/* Compact info cards on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-8"
        >
          {/* Location */}
          <Link 
            to="/contact" 
            className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-primary/10 group"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-1 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-display font-semibold text-[#1B2C4B]">
                Location
              </h3>
              <p className="text-xs md:text-sm text-[#1B2C4B]/70 leading-snug">
                97 Nikou Pattichi, Strovolos, Nicosia 2060
              </p>
            </div>
          </Link>

          {/* Opening Hours */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-primary/10">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-display font-semibold text-[#1B2C4B]">
                Opening Hours
              </h3>
              <p className="text-xs md:text-sm text-[#1B2C4B]/70 leading-snug">
                Mon-Sat: 9:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Phone */}
          <a 
            href="tel:+35799659496" 
            className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-primary/10 group"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-1 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-display font-semibold text-[#1B2C4B]">
                Phone
              </h3>
              <p className="text-xs md:text-sm text-[#1B2C4B]/70 leading-snug">
                +357 99 659496
              </p>
            </div>
          </a>
        </motion.div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <MapEmbed />
        </motion.div>
      </div>
    </section>
  );
};
