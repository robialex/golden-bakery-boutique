import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bakery-new.jpg';

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
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.2 }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover"
            style={{ 
              backgroundImage: `url(${heroImage})`,
              backgroundPosition: 'center 0%',
              objectFit: 'cover'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/85" />
        </motion.div>

        {/* Title & CTA */}
        <motion.div 
          className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto"
          style={{ scale: titleScale, opacity: titleOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block relative"
          >
            <div className="absolute inset-0 bg-secondary/60 blur-2xl rounded-full" />
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold px-2 mb-6"
              style={{ 
                letterSpacing: '0.05em',
                lineHeight: '1.2',
                color: '#C6A136'
              }}
            >
              Ingrid Bakes
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/menu">
              <button className="bg-secondary text-primary font-semibold px-8 md:px-12 h-12 md:h-14 min-h-[48px] min-w-[160px] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-primary transition-all duration-300 text-base md:text-lg">
                View Menu
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Story & Image Section */}
      <section className="bg-card py-12 md:py-16 border-t-2 border-primary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-6 md:gap-8 items-center max-w-6xl mx-auto"
          >
            {/* Left: Story */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: 0.1 }}
            >
              <p className="text-sm md:text-xl text-card-foreground leading-relaxed md:leading-loose font-body">
                Ingrid Bakes — a charming cake & coffee boutique café in Nicosia. We craft exquisite artisanal cakes and desserts with passion, creativity, and the finest ingredients.
              </p>
            </motion.div>
            
            {/* Right: Interior Photo */}
            <motion.div 
              className="relative rounded-xl md:rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lift aspect-[4/3]"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop" 
                alt="Ingrid Bakes boutique café interior in Nicosia"
                className="w-full h-full object-cover"
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
