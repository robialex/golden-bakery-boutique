import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '@/assets/hero-bakery.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax and scale effects based on scroll
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.85]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <>
      {/* Hero Section - Title Only */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden py-16 md:py-20">
        {/* Animated Background Image with Slow Zoom and Parallax */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.18 }}
          transition={{ 
            duration: 50, 
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
        </motion.div>

        {/* Title - Cinematic Animated Text */}
        <motion.div 
          className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto"
          style={{ scale: titleScale, opacity: titleOpacity }}
        >
            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold px-4"
            style={{ 
              letterSpacing: '0.05em',
              lineHeight: '1.2',
              background: 'linear-gradient(135deg, #C6A136 0%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Ingrid Bakes
          </motion.h1>
        </motion.div>
      </section>

      {/* Brand Story & Image Section */}
      <section className="bg-card py-16 md:py-20 border-t-2 border-primary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto"
          >
            {/* Right: Interior Photo - Now on left on desktop */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lift order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop" 
                alt="Ingrid Bakes boutique café interior in Nicosia"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </motion.div>
            
            {/* Left: Story - Now on right on desktop */}
            <motion.div 
              className="text-center md:text-left order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-card-foreground leading-relaxed font-body">
                Ingrid Bakes — a charming cake & coffee boutique café in Nicosia. We craft exquisite artisanal cakes and desserts with passion, creativity, and the finest ingredients. Step into a cozy space where every bite is an art, and every visit feels like home.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
