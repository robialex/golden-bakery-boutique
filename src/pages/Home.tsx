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
      
      {/* Elegant Divider */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
