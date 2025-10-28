import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import menuData from '@/data/menu.json';

export const AsymmetricalGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get featured products (first 9 for rotation)
  const featuredProducts = menuData.products.slice(0, 9);
  
  // Auto-rotate every 4.5 seconds (slower)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % featuredProducts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const currentProducts = [
    featuredProducts[currentIndex],
    featuredProducts[(currentIndex + 1) % featuredProducts.length],
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden border-t-2 border-b-2 border-primary/30">
      <div className="container mx-auto px-4">

        {/* Desktop: Asymmetrical Two Images */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="flex items-center justify-center gap-16 max-w-6xl mx-auto"
            >
              {/* Left Image - Higher */}
              <motion.div
                initial={{ opacity: 0, x: -60, y: -40 }}
                animate={{ opacity: 1, x: 0, y: -40 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                className="flex-1 max-w-md"
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-lift hover:border-primary hover:shadow-gold transition-all duration-500">
                  <img
                    src={currentProducts[0].image}
                    alt={currentProducts[0].name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-display font-semibold mb-2">
                      {currentProducts[0].name}
                    </h3>
                    <p className="text-sm opacity-90">{currentProducts[0].description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Image - Lower */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 40 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="flex-1 max-w-md"
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-lift hover:border-primary hover:shadow-gold transition-all duration-500">
                  <img
                    src={currentProducts[1].image}
                    alt={currentProducts[1].name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-display font-semibold mb-2">
                      {currentProducts[1].name}
                    </h3>
                    <p className="text-sm opacity-90">{currentProducts[1].description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Single Image Carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-sm mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-lift">
                <img
                  src={currentProducts[0].image}
                  alt={currentProducts[0].name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {currentProducts[0].name}
                  </h3>
                  <p className="text-sm opacity-90">{currentProducts[0].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
