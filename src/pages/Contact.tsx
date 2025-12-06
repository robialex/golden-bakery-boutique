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
          className="text-center mb-8 lg:mb-12"
        >
          <h1 className="text-[32px] lg:text-5xl xl:text-6xl font-display font-bold text-[#1B2C4B] leading-[36px] lg:leading-tight mb-4 lg:mb-6">
            Get in <span className="text-[#C6A136]">Touch</span>
          </h1>
          <p className="text-base lg:text-xl text-[#1B2C4B]/70 max-w-3xl mx-auto mb-4 lg:mb-6">
            We'd love to hear from you! Reach out for orders, inquiries, or just to say hello.
          </p>
          {/* Soft divider */}
          <div className="w-4/5 max-w-xs lg:max-w-md h-px bg-black/[0.08] mx-auto" />
        </motion.div>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-8 lg:mb-12"
        >
          <motion.a
            href="https://maps.google.com/?q=Ingrid+Bakes+Nicosia+Cyprus"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="View location on Google Maps"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.12 }}
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[#C6A136] flex items-center justify-center group-hover:bg-[#C6A136] group-hover:shadow-[0_4px_16px_rgba(198,161,54,0.35)] transition-all duration-200">
              <MapPin className="h-6 w-6 lg:h-9 lg:w-9 text-[#C6A136] group-hover:text-white transition-colors duration-200" strokeWidth={2.5} />
            </div>
          </motion.a>

          <motion.a
            href="tel:+35799127455"
            className="group"
            aria-label="Call Ingrid Bakes"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.12 }}
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[#C6A136] flex items-center justify-center group-hover:bg-[#C6A136] group-hover:shadow-[0_4px_16px_rgba(198,161,54,0.35)] transition-all duration-200">
              <Phone className="h-6 w-6 lg:h-9 lg:w-9 text-[#C6A136] group-hover:text-white transition-colors duration-200" strokeWidth={2.5} />
            </div>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/ingridbakes.cy/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Visit our Instagram"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.12 }}
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[#C6A136] flex items-center justify-center group-hover:bg-[#C6A136] group-hover:shadow-[0_4px_16px_rgba(198,161,54,0.35)] transition-all duration-200">
              <Instagram className="h-6 w-6 lg:h-9 lg:w-9 text-[#C6A136] group-hover:text-white transition-colors duration-200" strokeWidth={2.5} />
            </div>
          </motion.a>
        </motion.div>

        {/* Opening Hours Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-[#EFE8D8] rounded-[14px] lg:rounded-2xl p-5 lg:p-8 shadow-[0_4px_10px_rgba(0,0,0,0.08)] mb-8 lg:mb-16 max-w-md mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-5 lg:mb-6">
            <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-[#C6A136]" strokeWidth={2.5} />
            <h3 className="text-[22px] lg:text-2xl font-display font-bold text-[#1B2C4B]">Opening Hours</h3>
          </div>
          <div className="space-y-0">
            <div className="flex justify-between items-center py-3 border-b border-black/[0.06]">
              <span className="text-[15px] lg:text-base text-[#1B2C4B]/70 font-medium">Monday – Friday</span>
              <span className="text-[15px] lg:text-base text-[#1B2C4B] font-bold">8:30 – 19:00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-black/[0.06]">
              <span className="text-[15px] lg:text-base text-[#1B2C4B]/70 font-medium">Saturday</span>
              <span className="text-[15px] lg:text-base text-[#1B2C4B] font-bold">9:00 – 19:30</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-[15px] lg:text-base text-[#1B2C4B]/70 font-medium">Sunday</span>
              <span className="text-[15px] lg:text-base text-[#1B2C4B] font-bold">9:00 – 19:00</span>
            </div>
          </div>
        </motion.div>

        {/* Order on Instagram Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex justify-center mb-10 lg:mb-16"
        >
          <motion.a
            href="https://www.instagram.com/ingridbakes.cy/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[85%] max-w-[360px] h-12 lg:h-[52px] bg-[#C6A136] text-white font-semibold text-[16px] lg:text-[17px] rounded-[10px] lg:rounded-xl shadow-[0_4px_16px_rgba(198,161,54,0.3)] flex items-center justify-center transition-all duration-200"
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(198,161,54,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Order on Instagram →
          </motion.a>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="max-w-4xl mx-auto"
        >
          <MapEmbed />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
