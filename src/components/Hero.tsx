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
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-20 md:py-24">
        {/* Animated Background Image with Slow Zoom and Parallax */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.15 }}
          transition={{ 
            duration: 40, 
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
          className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto"
          style={{ scale: titleScale, opacity: titleOpacity }}
        >
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold gold-shimmer px-4"
            style={{ 
              letterSpacing: '0.05em',
              textShadow: '0 0 40px rgba(198, 161, 54, 0.6), 0 0 80px rgba(198, 161, 54, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
              lineHeight: '1.2'
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
            {/* Left: Story */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-card-foreground leading-relaxed font-body">
                Ingrid Bakes — a cozy boutique bakery in Nicosia, crafting artisanal cakes and desserts with passion and refined ingredients. Come taste the art of baking.
              </p>
            </motion.div>
            
            {/* Right: Interior Photo */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lift"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop" 
                alt="Ingrid Bakes boutique bakery interior in Nicosia"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
