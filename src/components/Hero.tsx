import { motion } from 'framer-motion';
import { LuxuryButton } from '@/components/LuxuryButton';
import heroImage from '@/assets/hero-bakery.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image with Parallax */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.15 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </motion.div>

      {/* Content - Elegant Animated Text */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated "Ingrid Bakes" with Gold Shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 gold-shimmer"
          style={{ 
            letterSpacing: '0.05em',
            textShadow: '0 0 30px rgba(198, 161, 54, 0.5), 0 0 60px rgba(198, 161, 54, 0.3)'
          }}
        >
          Ingrid Bakes
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl font-normal text-foreground leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Discover our handcrafted desserts — where taste meets art.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
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
            variant="secondary"
            onClick={() => window.location.href = '/contact'}
          >
            Order Now
          </LuxuryButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
