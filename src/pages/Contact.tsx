import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin } from 'lucide-react';
import { MapEmbed } from '@/components/MapEmbed';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
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
            Contact us to place your order or ask any questions
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.a
            href="tel:+35799127455"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-xl p-8 shadow-card hover:shadow-lift transition-all text-center border border-border hover:border-primary group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">99127455</p>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/ingridbakes.cy"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-xl p-8 shadow-card hover:shadow-lift transition-all text-center border border-border hover:border-primary group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Instagram className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Instagram</h3>
            <p className="text-muted-foreground">@ingridbakes.cy</p>
          </motion.a>

          <motion.a
            href="https://maps.app.goo.gl/aHkH8fGujYyrwjBc8"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-xl p-8 shadow-card hover:shadow-lift transition-all text-center border border-border hover:border-primary group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">View on Map</p>
          </motion.a>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <MapEmbed />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-secondary text-secondary-foreground rounded-2xl p-8 shadow-lift text-center"
        >
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            Call us or send us a message on Instagram to place your order. 
            Remember to order at least 48 hours in advance!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+35799127455"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-hover transition-colors shadow-gold"
            >
              Call Now
            </a>
            <a
              href="https://www.instagram.com/ingridbakes.cy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-card text-foreground rounded-xl font-semibold hover:bg-background transition-colors border border-primary"
            >
              Message on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
