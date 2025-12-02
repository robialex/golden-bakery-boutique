import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisitUs = () => {
  return (
    <section className="py-10 lg:py-16 px-4 bg-[#F5F1E6]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl lg:text-3xl font-display font-semibold text-center mb-8 lg:mb-12 text-[#1B2C4B] tracking-wide"
        >
          Visit Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto mb-8 lg:mb-12">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link 
              to="/contact" 
              className="block bg-white rounded-2xl p-5 lg:p-6 shadow-[0_4px_16px_rgba(27,44,75,0.06)] hover:shadow-[0_8px_24px_rgba(27,44,75,0.1)] transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#C6A136]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#C6A136]/20 transition-colors">
                <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-[#C6A136]" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-[#1B2C4B] mb-2 text-center">
                Location
              </h3>
              <p className="text-sm lg:text-base text-[#1B2C4B]/70 text-center leading-relaxed">
                97 Nikou Pattichi<br />
                Strovolos, Nicosia
              </p>
            </Link>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-5 lg:p-6 shadow-[0_4px_16px_rgba(27,44,75,0.06)]"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#C6A136]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-[#C6A136]" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-[#1B2C4B] mb-2 text-center">
              Opening Hours
            </h3>
            <p className="text-sm lg:text-base text-[#1B2C4B]/70 text-center leading-relaxed">
              Mon - Sat: 10:00 AM - 7:00 PM<br />
              Sunday: Closed
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="tel:+35799683775" 
              className="block bg-white rounded-2xl p-5 lg:p-6 shadow-[0_4px_16px_rgba(27,44,75,0.06)] hover:shadow-[0_8px_24px_rgba(27,44,75,0.1)] transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#C6A136]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#C6A136]/20 transition-colors">
                <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-[#C6A136]" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-[#1B2C4B] mb-2 text-center">
                Phone
              </h3>
              <p className="text-sm lg:text-base text-[#1B2C4B]/70 text-center leading-relaxed">
                +357 99 683775
              </p>
            </a>
          </motion.div>
        </div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="h-[280px] lg:h-[400px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(27,44,75,0.1)]">
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
      </div>
    </section>
  );
};
