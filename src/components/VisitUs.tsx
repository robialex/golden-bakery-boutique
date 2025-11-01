import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MapEmbed } from './MapEmbed';

export const VisitUs = () => {
  return (
    <section className="py-8 md:py-12 bg-[#E8E3D6] border-t-2 border-primary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1B2C4B]">
            Visit Us
          </h2>
        </motion.div>

        {/* Compact info cards on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto mb-6"
        >
          {/* Location */}
          <Link 
            to="/contact" 
            className="bg-white rounded-lg p-3 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-primary/20 group"
          >
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-display font-semibold text-[#1B2C4B]">
                Location
              </h3>
              <p className="text-xs text-[#1B2C4B]/70 leading-snug">
                97 Nikou Pattichi, Strovolos, Nicosia 2060
              </p>
            </div>
          </Link>

          {/* Opening Hours */}
          <div className="bg-white rounded-lg p-3 md:p-5 shadow-sm border border-primary/20">
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-display font-semibold text-[#1B2C4B]">
                Opening Hours
              </h3>
              <p className="text-xs text-[#1B2C4B]/70 leading-snug">
                Mon-Sat: 10:00 AM - 7:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Phone */}
          <a 
            href="tel:+35799659496" 
            className="bg-white rounded-lg p-3 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-primary/20 group"
          >
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-display font-semibold text-[#1B2C4B]">
                Phone
              </h3>
              <p className="text-xs text-[#1B2C4B]/70 leading-snug">
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
          <div className="rounded-lg overflow-hidden border-2 border-primary/20 shadow-sm h-[250px] md:h-[350px]">
            <MapEmbed />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
