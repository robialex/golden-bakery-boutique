import { Instagram, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative mt-0">
      {/* Smooth Three-Tone Gradient Transition */}
      <div 
        className="h-24 lg:h-32"
        style={{
          background: 'linear-gradient(180deg, #F5F1E6 0%, #E8DFC8 35%, #8A7B5A 65%, #1B2C4B 100%)'
        }}
      />
      
      {/* Footer Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#1B2C4B] pt-8 pb-6 lg:pt-10 lg:pb-8"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl lg:text-2xl font-display font-bold text-[#F5F1E6] mb-3 tracking-wide">
                INGRID BAKES
              </h3>
              <p className="text-sm lg:text-base text-[#F5F1E6]/75 leading-relaxed max-w-sm">
                Handcrafted cakes and desserts made with love in Cyprus.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-[#F5F1E6] mb-4 text-base lg:text-lg">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-[#F5F1E6]/75 text-sm lg:text-base">
                  <div className="w-8 h-8 bg-[#C6A136]/20 rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="h-4 w-4 text-[#C6A136]" />
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/aHkH8fGujYyrwjBc8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C6A136] transition-colors duration-200"
                  >
                    View Location on Map
                  </a>
                </li>
                <li className="flex items-center text-[#F5F1E6]/75 text-sm lg:text-base">
                  <div className="w-8 h-8 bg-[#C6A136]/20 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="h-4 w-4 text-[#C6A136]" />
                  </div>
                  <a href="tel:+35799127455" className="hover:text-[#C6A136] transition-colors duration-200">
                    (+357) 99127455
                  </a>
                </li>
                <li className="flex items-center text-[#F5F1E6]/75 text-sm lg:text-base">
                  <div className="w-8 h-8 bg-[#C6A136]/20 rounded-lg flex items-center justify-center mr-3">
                    <Instagram className="h-4 w-4 text-[#C6A136]" />
                  </div>
                  <a 
                    href="https://www.instagram.com/ingridbakes.cy"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="hover:text-[#C6A136] transition-colors duration-200"
                  >
                    @ingridbakes.cy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#C6A136]/15 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs lg:text-sm text-[#F5F1E6]/60">
            <p>&copy; 2024 INGRID BAKES. All rights reserved.</p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <Link to="/privacy" className="hover:text-[#C6A136] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#C6A136] transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
