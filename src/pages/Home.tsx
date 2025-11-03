import Hero from '@/components/Hero';
import { AsymmetricalGallery } from '@/components/AsymmetricalGallery';
import { VisitUs } from '@/components/VisitUs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuxuryButton } from '@/components/LuxuryButton';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Quick Menu Access */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-8 md:py-10 bg-card border-y border-primary/20"
      >
        <div className="container mx-auto px-4 text-center">
          <Link to="/menu">
            <LuxuryButton size="lg" className="text-base md:text-lg px-8 md:px-12">
              View Our Menu
            </LuxuryButton>
          </Link>
        </div>
      </motion.section>

      <motion.div 
        id="featured"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <AsymmetricalGallery />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <VisitUs />
      </motion.div>
    </div>
  );
};

export default Home;
