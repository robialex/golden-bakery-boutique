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
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Gold-Bezel Rectangle Background - Cream Background with Gold Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative inline-block"
        >
          {/* Main content box with cream background and gold border */}
          <div className="relative bg-background-secondary/95 backdrop-blur-md border-2 border-primary rounded-xl px-12 py-16 md:px-20 md:py-20 shadow-gold">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-[#0A1D3A]"
              style={{ 
                letterSpacing: '0.02em'
              }}
            >
              Ingrid Bakes
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl font-normal text-[#0A1D3A] leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Luxurious cakes & pastries, crafted with Mediterranean soul. Cozy interiors, golden moments.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <LuxuryButton 
                size="lg"
                variant="primary"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Menu
              </LuxuryButton>
              <LuxuryButton 
                size="lg"
                variant="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Order Now
              </LuxuryButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
