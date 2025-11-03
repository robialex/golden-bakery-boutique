import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MapEmbed } from './MapEmbed';
import { useState } from 'react';

export const VisitUs = () => {
  const [showFullMap, setShowFullMap] = useState(false);

  return (
    <section className="py-10 md:py-14 bg-[#E8E3D6] border-t-2 border-primary/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-6 md:mb-8"
        >
          Visit Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto mb-6">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link 
              to="/contact" 
              className="block bg-white rounded-lg p-3 md:p-4 shadow-card hover:shadow-lift transition-all duration-300 border border-primary/20"
            >
              <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary mx-auto mb-2" />
              <h3 className="text-sm md:text-base font-display font-semibold text-foreground mb-1 text-center">
                Location
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground text-center leading-snug">
                97 Nikou Pattichi<br />
                Strovolos, Nicosia
              </p>
            </Link>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-3 md:p-4 shadow-card border border-primary/20"
          >
            <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary mx-auto mb-2" />
            <h3 className="text-sm md:text-base font-display font-semibold text-foreground mb-1 text-center">
              Opening Hours
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center leading-snug">
              Mon - Sat: 10:00 AM - 7:00 PM<br />
              Sunday: Closed
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="tel:+35799683775" 
              className="block bg-white rounded-lg p-3 md:p-4 shadow-card hover:shadow-lift transition-all duration-300 border border-primary/20"
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary mx-auto mb-2" />
              <h3 className="text-sm md:text-base font-display font-semibold text-foreground mb-1 text-center">
                Phone
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground text-center leading-snug">
                +357 99 683775
              </p>
            </a>
          </motion.div>
        </div>

        {/* Compact Map Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <button
            onClick={() => setShowFullMap(!showFullMap)}
            className="w-full"
          >
            <div className={`overflow-hidden rounded-lg shadow-card border-2 border-primary/30 transition-all duration-300 ${
              showFullMap ? 'h-[350px] md:h-[450px]' : 'h-[180px] md:h-[220px]'
            }`}>
              <MapEmbed />
            </div>
          </button>
          {!showFullMap && (
            <p className="text-center text-xs md:text-sm text-muted-foreground mt-2">
              Tap to expand map
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
