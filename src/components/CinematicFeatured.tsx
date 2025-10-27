import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LuxuryButton } from './LuxuryButton';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import menuData from '@/data/menu.json';

export const CinematicFeatured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const addItem = useCartStore((state) => state.addItem);
  
  // Get featured products (first 6)
  const featuredProducts = menuData.products.slice(0, 6);
  
  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    if (product.price > 0) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      toast.success(`${product.name} added to cart!`);
    }
  };

  const leftProduct = featuredProducts[currentIndex];
  const rightProduct = featuredProducts[(currentIndex + 1) % featuredProducts.length];

  return (
    <section className="py-20 bg-[#F5F1E6] relative overflow-hidden">
      {/* Gold bezel border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1B2C4B] mb-4">
            Featured <span className="text-primary">Creations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most exquisite handcrafted desserts
          </p>
        </motion.div>

        {/* Desktop: Two side-by-side items */}
        <div className="hidden md:flex gap-8 justify-center items-start max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${currentIndex}`}
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-md"
            >
              <div className="bg-card rounded-2xl shadow-lift overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leftProduct.image}
                    alt={leftProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                    {leftProduct.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {leftProduct.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-bold text-primary">
                      €{leftProduct.price.toFixed(2)}
                    </span>
                    {leftProduct.price > 0 && (
                      <LuxuryButton
                        size="sm"
                        variant="secondary"
                        onClick={() => handleAddToCart(leftProduct)}
                      >
                        Add to Cart
                      </LuxuryButton>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              key={`right-${currentIndex}`}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-md"
            >
              <div className="bg-card rounded-2xl shadow-lift overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={rightProduct.image}
                    alt={rightProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                    {rightProduct.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {rightProduct.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-bold text-primary">
                      €{rightProduct.price.toFixed(2)}
                    </span>
                    {rightProduct.price > 0 && (
                      <LuxuryButton
                        size="sm"
                        variant="secondary"
                        onClick={() => handleAddToCart(rightProduct)}
                      >
                        Add to Cart
                      </LuxuryButton>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Single item */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${currentIndex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="max-w-sm mx-auto"
            >
              <div className="bg-card rounded-2xl shadow-lift overflow-hidden border-2 border-primary/30">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={leftProduct.image}
                    alt={leftProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {leftProduct.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {leftProduct.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-display font-bold text-primary">
                      €{leftProduct.price.toFixed(2)}
                    </span>
                    {leftProduct.price > 0 && (
                      <LuxuryButton
                        size="sm"
                        variant="secondary"
                        onClick={() => handleAddToCart(leftProduct)}
                      >
                        Add
                      </LuxuryButton>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(featuredProducts.length / 2) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * 2)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 2) === i
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-primary/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
