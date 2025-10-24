import { motion } from 'framer-motion';
import { LuxuryButton } from '@/components/LuxuryButton';
import heroImage from '@/assets/hero-bakery.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Gold-Bezel Rectangle Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative inline-block"
        >
          {/* Inner rectangle with gold border */}
          <div className="relative bg-secondary/40 backdrop-blur-md border-2 border-primary rounded-lg px-12 py-16 md:px-20 md:py-20 shadow-gold">
            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary -translate-x-2 -translate-y-2" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary translate-x-2 -translate-y-2" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary -translate-x-2 translate-y-2" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary translate-x-2 translate-y-2" />
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 gold-shimmer"
              style={{ 
                textShadow: '0 4px 24px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.3)' 
              }}
            >
              INGRID BAKES
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl font-light text-secondary-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Discover our handcrafted desserts — where taste meets art
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
        >
          <LuxuryButton 
            size="lg"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="shadow-gold hover:shadow-lift"
          >
            View Menu
          </LuxuryButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
