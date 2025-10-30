import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisitUs = () => {
  return (
    <section className="py-8 md:py-12 bg-[#F8F5EC] border-t border-primary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-xl p-4 md:p-8 shadow-md border-t-2 border-primary/40">
            <h2 className="text-xl md:text-3xl font-display font-bold text-card-foreground text-center mb-4 md:mb-6">
              Visit <span className="text-primary">Us</span>
            </h2>
            
            <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
              {/* Location */}
              <Link 
                to="/contact"
                className="group flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary group-hover:text-background transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-semibold text-card-foreground mb-0.5">Location</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Nicosia</p>
                </div>
              </Link>

              {/* Opening Hours */}
              <div className="flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary flex items-center justify-center">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-semibold text-card-foreground mb-0.5 md:mb-1">Hours</h3>
                  <div className="text-[9px] md:text-xs text-muted-foreground space-y-0.5">
                    <p>Mon–Fri: 8:30–19:00</p>
                    <p className="hidden md:block">Sat: 9:00–19:30</p>
                    <p className="hidden md:block">Sun: 9:00–19:00</p>
                    <p className="md:hidden">Sat–Sun: 9:00–19:30</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a 
                href="tel:+35799123456"
                className="group flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary group-hover:text-background transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-semibold text-card-foreground mb-0.5">Call Us</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Get in touch</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
