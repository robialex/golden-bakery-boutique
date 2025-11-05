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
              backgroundPosition: 'center 30%',
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold px-2 mb-6"
            style={{ 
              letterSpacing: '0.05em',
              lineHeight: '1.2',
              color: '#C6A136'
            }}
          >
            Ingrid Bakes
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/menu">
              <button className="bg-[#1B2C4B] text-[#C6A136] font-semibold px-8 md:px-12 h-12 md:h-14 min-w-[160px] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-[#C6A136] transition-all duration-300 text-base md:text-lg">
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-row gap-4 md:gap-12 items-center max-w-5xl mx-auto"
          >
            {/* Left: Story */}
            <motion.div 
              className="flex-1 text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-sm md:text-xl text-card-foreground leading-snug md:leading-relaxed font-body">
                Ingrid Bakes — a charming cake & coffee boutique café in Nicosia. We craft exquisite artisanal cakes and desserts with passion, creativity, and the finest ingredients.
              </p>
            </motion.div>
            
            {/* Right: Interior Photo */}
            <motion.div 
              className="flex-1 relative rounded-xl md:rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lift"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop" 
                alt="Ingrid Bakes boutique café interior in Nicosia"
                className="w-full h-40 md:h-64 object-cover"
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
