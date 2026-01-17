import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ProductCard } from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit?: string;
  image: string;
  category: string;
  vegetarian?: boolean;
}

interface MenuCategoryProps {
  category: string;
  products: Product[];
  index: number;
}

export const MenuCategory = ({ category, products, index }: MenuCategoryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Show first 3 products as preview
  const previewProducts = products.slice(0, 3);
  const hasMore = products.length > 3;

  // Rotate preview images every 3 seconds
  useEffect(() => {
    if (!isExpanded && previewProducts.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % Math.min(3, products.length));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isExpanded, previewProducts.length, products.length]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-12 rounded-2xl ${
        index % 2 === 0 ? 'bg-[#F5F1E6]' : 'bg-card'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {category}
          </h2>
        </div>

        {/* Preview or Full Grid */}
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {previewProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <ProductCard {...product} />
                  </motion.div>
                ))}
              </div>
              
              {hasMore && (
                <div className="text-center">
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#A57F3A] text-white rounded-xl font-semibold shadow-[0_4px_12px_rgba(165,127,58,0.25)] hover:shadow-[0_0_12px_rgba(165,127,58,0.5)] hover:scale-[1.03] transition-all duration-300"
                  >
                    See More
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {products.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <ProductCard {...product} />
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B2C4B] text-white rounded-xl border border-primary/30 hover:border-primary hover:shadow-gold transition-all duration-300 font-medium"
                >
                  Show Less
                  <ChevronDown className="h-4 w-4 rotate-180" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
