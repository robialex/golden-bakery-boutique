import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisitUs = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F5F1E6]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[1.4rem] md:text-[1.8rem] font-display font-semibold text-center mb-10 md:mb-12 text-[#1B2C4B] tracking-wide"
        >
          Visit Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link 
              to="/contact" 
              className="block bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_12px_rgba(27,44,75,0.08)] hover:shadow-[0_6px_20px_rgba(27,44,75,0.12)] transition-all duration-300 group"
            >
              <MapPin className="h-6 w-6 text-[#D5B85B] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-[1.05rem] font-semibold text-[#1B2C4B] mb-2 text-center">
                Location
              </h3>
              <p className="text-[0.95rem] leading-[1.6] text-[rgba(27,44,75,0.85)] text-center">
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
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_12px_rgba(27,44,75,0.08)]"
          >
            <Clock className="h-6 w-6 text-[#D5B85B] mx-auto mb-3" />
            <h3 className="text-[1.05rem] font-semibold text-[#1B2C4B] mb-2 text-center">
              Opening Hours
            </h3>
            <p className="text-[0.95rem] leading-[1.6] text-[rgba(27,44,75,0.85)] text-center">
              Mon - Sat: 10:00 AM - 7:00 PM<br />
              Sunday: Closed
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="tel:+35799683775" 
              className="block bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_12px_rgba(27,44,75,0.08)] hover:shadow-[0_6px_20px_rgba(27,44,75,0.12)] transition-all duration-300 group"
            >
              <Phone className="h-6 w-6 text-[#D5B85B] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-[1.05rem] font-semibold text-[#1B2C4B] mb-2 text-center">
                Phone
              </h3>
              <p className="text-[0.95rem] leading-[1.6] text-[rgba(27,44,75,0.85)] text-center">
                +357 99 683775
              </p>
            </a>
          </motion.div>
        </div>

        {/* Map Section with Static Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(27,44,75,0.1)]">
            <img 
              src="https://maps.googleapis.com/maps/api/staticmap?center=35.164045,33.364236&zoom=16&size=800x400&markers=color:0xC6A136%7C35.164045,33.364236&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&style=feature:poi|visibility:off&style=feature:transit|visibility:off"
              alt="Ingrid Bakes Location Map"
              className="w-full h-[280px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,44,75,0.3)] to-transparent pointer-events-none" />
          </div>
          <div className="text-center mt-5">
            <a
              href="https://maps.app.goo.gl/aHkH8fGujYyrwjBc8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#1B2C4B] rounded-xl font-medium shadow-[0_4px_12px_rgba(27,44,75,0.08)] hover:shadow-[0_6px_20px_rgba(27,44,75,0.12)] hover:scale-105 transition-all duration-300"
            >
              <MapPin className="h-5 w-5 mr-2 text-[#C6A136]" />
              View Map
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};