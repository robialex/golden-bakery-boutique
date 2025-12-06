import { Instagram, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative mt-0">
      {/* Smooth Gradient Transition */}
      <div className="h-20 lg:h-24 bg-gradient-to-b from-[#F5F1E6] via-[#d4c5aa] to-[#1B2C4B]" />
      
      {/* Footer Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#1B2C4B] pt-10 pb-8"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-[1.3rem] font-display font-bold text-[#F5F1E6] mb-4 tracking-[0.04em]">
                INGRID BAKES
              </h3>
              <p className="text-[0.95rem] text-[rgba(245,241,230,0.8)] leading-relaxed">
                Handcrafted cakes and desserts made with love in Cyprus.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-[#F5F1E6] mb-4 text-[1.05rem]">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-[rgba(245,241,230,0.8)] text-[0.95rem]">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-[#D5B85B] transition-all duration-300 hover:text-[#C6A136] hover:drop-shadow-[0_0_8px_rgba(213,184,91,0.6)]" />
                  <a 
                    href="https://maps.app.goo.gl/aHkH8fGujYyrwjBc8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D5B85B] transition-colors"
                  >
                    View Location on Map
                  </a>
                </li>
                <li className="flex items-center text-[rgba(245,241,230,0.8)] text-[0.95rem]">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-[#D5B85B] transition-all duration-300 hover:text-[#C6A136] hover:drop-shadow-[0_0_8px_rgba(213,184,91,0.6)]" />
                  <a href="tel:+35799127455" className="hover:text-[#D5B85B] transition-colors">
                    (+357) 99127455
                  </a>
                </li>
                <li className="flex items-center text-[rgba(245,241,230,0.8)] text-[0.95rem]">
                  <Instagram className="h-5 w-5 mr-2 flex-shrink-0 text-[#D5B85B] transition-all duration-300 hover:text-[#C6A136] hover:drop-shadow-[0_0_8px_rgba(213,184,91,0.6)]" />
                  <a 
                    href="https://www.instagram.com/ingridbakes.cy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="hover:text-[#D5B85B] transition-colors"
                  >
                    @ingridbakes.cy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[rgba(198,161,54,0.2)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-[0.9rem] text-[rgba(245,241,230,0.7)]">
            <p>&copy; 2024 INGRID BAKES. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-[#D5B85B] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#D5B85B] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
