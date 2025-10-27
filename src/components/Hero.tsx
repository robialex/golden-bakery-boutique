import { motion, useScroll, useTransform } from 'framer-motion';
import { LuxuryButton } from '@/components/LuxuryButton';
import heroImage from '@/assets/hero-bakery.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax and scale effects based on scroll
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image with Slow Zoom and Parallax */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.2 }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </motion.div>

      {/* Content - Cinematic Animated Text */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ scale: titleScale, opacity: titleOpacity }}
      >
        {/* Animated "Ingrid Bakes" with Shimmer Effect */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 gold-shimmer text-primary"
          style={{ 
            letterSpacing: '0.05em',
            textShadow: '0 0 40px rgba(198, 161, 54, 0.6), 0 0 80px rgba(198, 161, 54, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          Ingrid Bakes
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl font-normal text-card-foreground leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
        >
          Discover our handcrafted desserts — where taste meets art.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <LuxuryButton 
            size="lg"
            variant="primary"
            onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
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
      </motion.div>
    </section>
  );
};

export default Hero;
