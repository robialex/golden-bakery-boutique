import Hero from '@/components/Hero';
import { FeaturedDesserts } from '@/components/FeaturedDesserts';
import { Link } from 'react-router-dom';
import { LuxuryButton } from '@/components/LuxuryButton';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="menu">
        <FeaturedDesserts />
      </div>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-background to-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary text-secondary-foreground rounded-2xl p-12 text-center shadow-lift"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Explore our complete collection of handcrafted cakes and desserts
            </p>
            <Link to="/menu">
              <LuxuryButton size="lg" className="shadow-gold">
                Browse Full Menu
              </LuxuryButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
