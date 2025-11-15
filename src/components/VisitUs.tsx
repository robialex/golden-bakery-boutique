import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisitUs = () => {
  return (
    <section className="py-8 lg:py-16 px-4 bg-[#F5F1E6]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[1.3rem] lg:text-[1.8rem] font-display font-semibold text-center mb-6 lg:mb-10 text-[#1B2C4B] tracking-wide"
        >
          Visit Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 max-w-5xl mx-auto mb-6 lg:mb-10">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
          >
            <Link 
              to="/contact" 
              className="block bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-[0_2px_8px_rgba(27,44,75,0.06)] hover:shadow-[0_4px_16px_rgba(27,44,75,0.1)] transition-all duration-300 group"
            >
              <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-[#C6A136] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-[0.95rem] lg:text-[1.05rem] font-semibold text-[#1B2C4B] mb-1.5 text-center">
                Location
              </h3>
              <p className="text-[0.85rem] lg:text-[0.95rem] leading-[1.5] text-[rgba(27,44,75,0.75)] text-center">
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
            transition={{ duration: 0.25, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-[0_2px_8px_rgba(27,44,75,0.06)]"
          >
            <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-[#C6A136] mx-auto mb-2" />
            <h3 className="text-[0.95rem] lg:text-[1.05rem] font-semibold text-[#1B2C4B] mb-1.5 text-center">
              Opening Hours
            </h3>
            <p className="text-[0.85rem] lg:text-[0.95rem] leading-[1.5] text-[rgba(27,44,75,0.75)] text-center">
              Mon - Sat: 10:00 AM - 7:00 PM<br />
              Sunday: Closed
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.15 }}
          >
            <a 
              href="tel:+35799683775" 
              className="block bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-[0_2px_8px_rgba(27,44,75,0.06)] hover:shadow-[0_4px_16px_rgba(27,44,75,0.1)] transition-all duration-300 group"
            >
              <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-[#C6A136] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-[0.95rem] lg:text-[1.05rem] font-semibold text-[#1B2C4B] mb-1.5 text-center">
                Phone
              </h3>
              <p className="text-[0.85rem] lg:text-[0.95rem] leading-[1.5] text-[rgba(27,44,75,0.75)] text-center">
                +357 99 683775
              </p>
            </a>
          </motion.div>
        </div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="h-[260px] lg:h-[450px] rounded-xl lg:rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(27,44,75,0.08)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.69606532056327!2d33.36423576971612!3d35.16404459864808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1746f17d0bf9%3A0x373b858d942767f6!2sIngrid%20Bakes!5e0!3m2!1sen!2s!4v1737562000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ingrid Bakes Location - 97 Nikou Pattichi, Strovolos, Nicosia"
            />
          </div>
        </motion.div>
        
        {/* Gold divider line before footer */}
        <div className="border-t border-[#C6A136]/20 mt-8 lg:mt-12" />
      </div>
    </section>
  );
};