import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisitUs = () => {
  return (
    <section className="py-16 bg-card border-t-2 border-primary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lift border-2 border-primary/30">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground text-center mb-8">
              Visit <span className="text-primary">Us</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {/* Location */}
              <Link 
                to="/contact"
                className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                  <MapPin className="h-7 w-7 text-primary group-hover:text-background transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">Nicosia, Cyprus</p>
                </div>
              </Link>

              {/* Opening Hours */}
              <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Hours</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Mon–Fri: 8:30–19:00</p>
                    <p>Sat: 9:00–19:30</p>
                    <p>Sun: 9:00–19:00</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a 
                href="tel:+35799123456"
                className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                  <Phone className="h-7 w-7 text-primary group-hover:text-background transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">Call Us</h3>
                  <p className="text-sm text-muted-foreground">Get in touch</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
