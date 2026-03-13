import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
  // Load Elfsight script
  useEffect(() => {
    if (document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) return;
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen pt-24 lg:pt-28 pb-12 lg:pb-20 bg-[#FCF9F0]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-xs lg:text-sm uppercase tracking-[0.25em] text-[#C6A136] font-medium mb-2">
            Find Us
          </p>
          <h1 className="text-[32px] lg:text-5xl font-display font-bold text-[#1B2C4B] leading-tight mb-3">
            Visit Our Boutique
          </h1>
          <p className="text-base lg:text-lg text-[#1B2C4B]/60 max-w-md mx-auto">
            Come experience our handcrafted desserts in Nicosia
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-12 lg:mb-16">
          {/* Contact Info - first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2 space-y-6 lg:space-y-8 flex flex-col justify-center"
          >
            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-[#C6A136] mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-display font-semibold text-[#C6A136] uppercase tracking-wider mb-1">
                  Location
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-[#2D2D2D]">
                  97 Nikou Pattichi<br />
                  Strovolos, Nicosia, Cyprus
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-[#C6A136] mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-display font-semibold text-[#C6A136] uppercase tracking-wider mb-1">
                  Hours
                </h3>
                <div className="text-[0.9rem] leading-relaxed text-[#2D2D2D] space-y-0.5">
                  <p>Monday – Friday: 8:30 AM – 7:00 PM</p>
                  <p>Saturday: 9:00 AM – 7:30 PM</p>
                  <p>Sunday: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-[#C6A136] mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-display font-semibold text-[#C6A136] uppercase tracking-wider mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+35799127455"
                  className="text-[0.9rem] text-[#2D2D2D] hover:text-[#C6A136] transition-colors"
                >
                  (+357) 99 127 455
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <Instagram className="h-5 w-5 text-[#C6A136] mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-display font-semibold text-[#C6A136] uppercase tracking-wider mb-1">
                  Instagram
                </h3>
                <a
                  href="https://www.instagram.com/ingridbakes.cy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.9rem] text-[#2D2D2D] hover:text-[#C6A136] transition-colors"
                >
                  @ingridbakes.cy
                </a>
              </div>
            </div>

            {/* Open in Maps link */}
            <a
              href="https://maps.google.com/?q=Ingrid+Bakes+97+Nikou+Pattichi+Strovolos+Nicosia+Cyprus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#C6A136] border-b border-[#C6A136]/40 hover:border-[#C6A136] pb-0.5 transition-colors w-fit"
            >
              Open in Google Maps
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-2 lg:order-1"
          >
            <div className="h-[280px] lg:h-[400px] rounded-2xl overflow-hidden border border-[#C6A136]/15 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
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

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-6 lg:mb-10">
            <p className="text-xs lg:text-sm uppercase tracking-[0.25em] text-[#C6A136] font-medium mb-2">
              Testimonials
            </p>
            <h2 className="text-[1.3rem] lg:text-[1.8rem] font-display font-bold text-[#1B2C4B]">
              What Our Guests Say
            </h2>
          </div>

          {/* Elfsight Google Reviews Widget */}
          <div className="elfsight-app-2372d759-c7f5-44fa-928a-488576eb7f7f" data-elfsight-app-lazy></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
