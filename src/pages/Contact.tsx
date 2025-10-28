import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { MapEmbed } from '@/components/MapEmbed';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F5F1E6]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Reach out for orders, inquiries, or just to say hello.
          </p>
        </motion.div>

        {/* Contact Methods - Circular Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <a
            href="https://maps.google.com/?q=Ingrid+Bakes+Nicosia+Cyprus"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="View location on Google Maps"
          >
            <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
              <MapPin className="h-9 w-9 text-primary group-hover:text-background transition-colors duration-300" />
            </div>
          </a>

          <a
            href="tel:+35799127455"
            className="group"
            aria-label="Call Ingrid Bakes"
          >
            <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
              <Phone className="h-9 w-9 text-primary group-hover:text-background transition-colors duration-300" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/ingridbakes.cy/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Visit our Instagram"
          >
            <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
              <Instagram className="h-9 w-9 text-primary group-hover:text-background transition-colors duration-300" />
            </div>
          </a>
        </motion.div>

        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary/30 mb-16 max-w-md mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-display font-semibold text-card-foreground">Opening Hours</h3>
          </div>
          <div className="space-y-3 text-center">
            <div className="flex justify-between items-center px-4">
              <span className="text-muted-foreground font-medium">Monday – Friday</span>
              <span className="text-card-foreground font-semibold">8:30 – 19:00</span>
            </div>
            <div className="flex justify-between items-center px-4">
              <span className="text-muted-foreground font-medium">Saturday</span>
              <span className="text-card-foreground font-semibold">9:00 – 19:30</span>
            </div>
            <div className="flex justify-between items-center px-4">
              <span className="text-muted-foreground font-medium">Sunday</span>
              <span className="text-card-foreground font-semibold">9:00 – 19:00</span>
            </div>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <MapEmbed />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
