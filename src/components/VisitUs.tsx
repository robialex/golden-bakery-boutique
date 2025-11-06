import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MapEmbed } from './MapEmbed';
import { useState } from 'react';

export const VisitUs = () => {
  const [showFullMap, setShowFullMap] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-card border-t-4 border-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38 }}
          className="max-w-4xl mx-auto bg-background/10 p-6 md:p-8 rounded-xl shadow-lg border border-primary/20"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 text-secondary shadow-sm">
            Visit Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: 0.05 }}
            >
              <Link 
                to="/contact" 
                className="block bg-white rounded-lg p-4 md:p-5 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-primary/30 hover:border-primary"
              >
                <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="text-base md:text-lg font-display font-semibold text-[#1B2C4B] mb-2 text-center">
                  Location
                </h3>
                <p className="text-sm md:text-base text-muted-foreground text-center leading-snug">
                  97 Nikou Pattichi<br />
                  Strovolos, Nicosia
                </p>
              </Link>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: 0.1 }}
              className="bg-white rounded-lg p-4 md:p-5 shadow-md border-2 border-primary/30"
            >
              <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
              <h3 className="text-base md:text-lg font-display font-semibold text-[#1B2C4B] mb-2 text-center">
                Opening Hours
              </h3>
              <p className="text-sm md:text-base text-muted-foreground text-center leading-snug">
                Mon - Sat: 10:00 AM - 7:00 PM<br />
                Sunday: Closed
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: 0.15 }}
            >
              <a 
                href="tel:+35799683775" 
                className="block bg-white rounded-lg p-4 md:p-5 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-primary/30 hover:border-primary"
              >
                <Phone className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="text-base md:text-lg font-display font-semibold text-[#1B2C4B] mb-2 text-center">
                  Phone
                </h3>
                <p className="text-sm md:text-base text-muted-foreground text-center leading-snug">
                  +357 99 683775
                </p>
              </a>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38, delay: 0.2 }}
            className="mt-6"
          >
            <button
              onClick={() => setShowFullMap(!showFullMap)}
              className="w-full"
            >
              <div className={`overflow-hidden transition-all duration-300 ${
                showFullMap ? 'h-[350px] md:h-[450px]' : 'h-[200px] md:h-[250px]'
              }`}>
                <MapEmbed />
              </div>
            </button>
            {!showFullMap && (
              <p className="text-center text-sm text-muted-foreground mt-3">
                Tap to expand map
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};