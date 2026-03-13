import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { MapEmbed } from '@/components/MapEmbed';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 lg:pt-28 pb-12 lg:pb-20 bg-[#F5F1E6]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h1 className="text-[32px] lg:text-5xl font-display font-bold text-[#1B2C4B] leading-tight mb-3 lg:mb-4">
            Get in Touch
          </h1>
          <p className="text-base lg:text-lg text-[#1B2C4B]/60 max-w-md mx-auto">
            Visit us, call us, or reach out on Instagram
          </p>
        </motion.div>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-5 lg:gap-8 mb-10 lg:mb-14"
        >
          <motion.a
            href="https://maps.google.com/?q=Ingrid+Bakes+Nicosia+Cyprus"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
            aria-label="View location on Google Maps"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-[#C6A136] flex items-center justify-center group-hover:bg-[#C6A136] transition-all duration-200 mb-2">
              <MapPin className="h-6 w-6 lg:h-7 lg:w-7 text-[#C6A136] group-hover:text-white transition-colors duration-200" strokeWidth={2} />
            </div>
            <span className="text-xs text-[#1B2C4B]/60 font-medium">Directions</span>
          </motion.a>

          <motion.a
            href="tel:+35799127455"
            className="group flex flex-col items-center"
            aria-label="Call Ingrid Bakes"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-[#C6A136] flex items-center justify-center group-hover:bg-[#C6A136] transition-all duration-200 mb-2">
              <Phone className="h-6 w-6 lg:h-7 lg:w-7 text-[#C6A136] group-hover:text-white transition-colors duration-200" strokeWidth={2} />
            </div>
            <span className="text-xs text-[#1B2C4B]/60 font-medium">Call</span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/ingridbakes.cy/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
            aria-label="Visit our Instagram"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-[#C6A136] flex items-center justify-center group-hover:bg-[#C6A136] transition-all duration-200 mb-2">
              <Instagram className="h-6 w-6 lg:h-7 lg:w-7 text-[#C6A136] group-hover:text-white transition-colors duration-200" strokeWidth={2} />
            </div>
            <span className="text-xs text-[#1B2C4B]/60 font-medium">Instagram</span>
          </motion.a>
        </motion.div>

        {/* Opening Hours Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl p-5 lg:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] mb-10 lg:mb-14 max-w-sm mx-auto"
        >
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <Clock className="h-5 w-5 text-[#C6A136]" strokeWidth={2} />
            <h3 className="text-lg font-display font-bold text-[#1B2C4B]">Opening Hours</h3>
          </div>
          <div className="space-y-0">
            <div className="flex justify-between items-center py-2.5 border-b border-[#1B2C4B]/[0.06]">
              <span className="text-sm text-[#1B2C4B]/60">Monday – Friday</span>
              <span className="text-sm text-[#1B2C4B] font-semibold">8:30 – 19:00</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-[#1B2C4B]/[0.06]">
              <span className="text-sm text-[#1B2C4B]/60">Saturday</span>
              <span className="text-sm text-[#1B2C4B] font-semibold">9:00 – 19:30</span>
            </div>
            <div className="flex justify-between items-center py-2.5">
              <span className="text-sm text-[#1B2C4B]/60">Sunday</span>
              <span className="text-sm text-[#1B2C4B] font-semibold">9:00 – 19:00</span>
            </div>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <MapEmbed />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
