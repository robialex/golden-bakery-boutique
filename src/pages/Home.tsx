import Hero from '@/components/Hero';
import { AsymmetricalGallery } from '@/components/AsymmetricalGallery';
import { VisitUs } from '@/components/VisitUs';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="featured">
        <AsymmetricalGallery />
      </div>
      <VisitUs />
    </div>
  );
};

export default Home;
