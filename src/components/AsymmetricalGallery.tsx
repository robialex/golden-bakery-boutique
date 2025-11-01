import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import menuData from '@/data/menu.json';

export const AsymmetricalGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get first 6 products for the gallery
  const featuredProducts = menuData.products.slice(0, 6);

  // Auto-rotate every 5.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Full-width image showcase */}
      <div className="relative w-full h-[45vh] md:h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={featuredProducts[currentIndex].image}
              alt={featuredProducts[currentIndex].name}
              className="w-full h-full object-cover brightness-100"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {featuredProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
