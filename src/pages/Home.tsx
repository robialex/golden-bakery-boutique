import Hero from '@/components/Hero';
import { CinematicFeatured } from '@/components/CinematicFeatured';
import { LocationSection } from '@/components/LocationSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="featured">
        <CinematicFeatured />
      </div>
      <LocationSection />
    </div>
  );
};

export default Home;
