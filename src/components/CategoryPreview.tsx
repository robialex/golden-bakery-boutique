import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuxuryButton } from './LuxuryButton';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit?: string;
  image: string;
  category: string;
}

interface CategoryPreviewProps {
  category: string;
  products: Product[];
  index: number;
}

export const CategoryPreview = ({ category, products, index }: CategoryPreviewProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get preview products (first 3 for rotation)
  const previewImages = products.slice(0, 3);
  const highlightedProduct = products[0];
  
  // Create category slug for URL
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');

  // Rotate preview images every 3.5 seconds
  useEffect(() => {
    if (previewImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % previewImages.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [previewImages.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-12 rounded-2xl ${
        index % 2 === 0 ? 'bg-card' : 'bg-background-secondary'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
          {category}
        </h3>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Rotating Preview Images */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            {previewImages.map((product, idx) => (
              <motion.img
                key={product.id}
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
                transition={{ duration: 1 }}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>

          {/* Right: Highlighted Item */}
          <div className="flex flex-col justify-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/20">
              <h4 className="text-2xl font-display font-semibold text-foreground mb-3">
                {highlightedProduct.name}
              </h4>
              <p className="text-muted-foreground mb-4">
                {highlightedProduct.description}
              </p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-display font-bold text-primary">
                  €{highlightedProduct.price > 0 ? highlightedProduct.price.toFixed(2) : 'Ask'}
                </span>
                {highlightedProduct.unit && (
                  <span className="text-sm text-muted-foreground">{highlightedProduct.unit}</span>
                )}
              </div>
              <Link to={`/menu/${categorySlug}`}>
                <LuxuryButton variant="secondary" size="md" className="w-full">
                  See More
                </LuxuryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
