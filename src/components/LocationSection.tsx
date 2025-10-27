import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { MapEmbed } from './MapEmbed';

export const LocationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-16"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Visit <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Come experience our handcrafted desserts in Nicosia, Cyprus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MapEmbed />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Location */}
            <div className="flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/10 group-hover:shadow-gold">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">Ingrid Bakes<br />Nicosia, Cyprus</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <a 
                href="tel:+35799127455"
                className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-primary/10 hover:shadow-gold"
              >
                <Phone className="h-6 w-6 text-primary" />
              </a>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Phone</h3>
                <a 
                  href="tel:+35799127455"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (+357) 99127455
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4 group">
              <a 
                href="https://www.instagram.com/ingridbakes.cy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-primary/10 hover:shadow-gold"
              >
                <Instagram className="h-6 w-6 text-primary" />
              </a>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Instagram</h3>
                <a 
                  href="https://www.instagram.com/ingridbakes.cy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @ingridbakes.cy
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/10 group-hover:shadow-gold">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Opening Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday–Friday: 8:30 AM – 7:00 PM</p>
                  <p>Saturday: 9:00 AM – 7:30 PM</p>
                  <p>Sunday: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
