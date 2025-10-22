import { Hero } from '@/components/Hero';
import { QuickIntro } from '@/components/QuickIntro';
import { FeaturedDesserts } from '@/components/FeaturedDesserts';
import { Link } from 'react-router-dom';
import { LuxuryButton } from '@/components/LuxuryButton';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickIntro />
      <FeaturedDesserts />
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready to Indulge?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our full collection of artisan desserts and place your order today
            </p>
            <Link to="/menu">
              <LuxuryButton size="lg">
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
