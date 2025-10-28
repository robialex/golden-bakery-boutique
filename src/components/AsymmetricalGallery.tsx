import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import menuData from '@/data/menu.json';

export const AsymmetricalGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get featured products (first 9 for rotation)
  const featuredProducts = menuData.products.slice(0, 9);
  
  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % featuredProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const currentProducts = [
    featuredProducts[currentIndex],
    featuredProducts[(currentIndex + 1) % featuredProducts.length],
    featuredProducts[(currentIndex + 2) % featuredProducts.length],
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden border-t-2 border-b-2 border-primary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-card-foreground mb-4">
            Featured <span className="text-primary">Creations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most exquisite handcrafted desserts
          </p>
        </motion.div>

        {/* Desktop: Asymmetrical Three Images */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-6 max-w-6xl mx-auto"
            >
              {/* Left Image - Slightly Higher */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: -20 }}
                animate={{ opacity: 1, x: 0, y: -20 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex-1 max-w-sm"
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-lift hover:border-primary transition-all duration-500">
                  <img
                    src={currentProducts[0].image}
                    alt={currentProducts[0].name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-display font-semibold mb-1">
                      {currentProducts[0].name}
                    </h3>
                    <p className="text-sm opacity-90">{currentProducts[0].description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Center Image - Aligned */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 max-w-sm"
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-lift hover:border-primary transition-all duration-500">
                  <img
                    src={currentProducts[1].image}
                    alt={currentProducts[1].name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-display font-semibold mb-1">
                      {currentProducts[1].name}
                    </h3>
                    <p className="text-sm opacity-90">{currentProducts[1].description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Image - Slightly Lower */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 20 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-1 max-w-sm"
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-lift hover:border-primary transition-all duration-500">
                  <img
                    src={currentProducts[2].image}
                    alt={currentProducts[2].name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-display font-semibold mb-1">
                      {currentProducts[2].name}
                    </h3>
                    <p className="text-sm opacity-90">{currentProducts[2].description}</p>
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
              transition={{ duration: 0.6 }}
              className="max-w-sm mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-lift">
                <img
                  src={currentProducts[0].image}
                  alt={currentProducts[0].name}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-display font-semibold mb-1">
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
