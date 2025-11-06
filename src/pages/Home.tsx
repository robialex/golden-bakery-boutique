import Hero from '@/components/Hero';
import { EdgeToEdgeShowcase } from '@/components/EdgeToEdgeShowcase';
import { VisitUs } from '@/components/VisitUs';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Hero />

      <motion.div 
        id="featured"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <EdgeToEdgeShowcase />
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
