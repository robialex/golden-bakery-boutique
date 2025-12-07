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
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 1.02, transition: { duration: 0.12 } }}
      className="bg-card rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(27,44,75,0.08)] hover:shadow-[0_8px_24px_rgba(27,44,75,0.14)] transition-all duration-300 border border-primary/10 cursor-pointer"
    >
      {/* Category Name - Always visible at top */}
      <div className="bg-gradient-to-r from-[#1B2C4B] to-[#1B2C4B]/85 px-3 py-2.5 border-b border-[#C6A136]/30">
        <h3 className="text-base md:text-lg font-display font-semibold text-[#F5F1E6] text-center drop-shadow-sm">
          {category}
        </h3>
      </div>

      {/* Rotating Preview Images */}
      <div className="relative h-36 md:h-48 overflow-hidden">
        {previewImages.map((product, idx) => (
          <motion.img
            key={product.id}
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover brightness-110 saturate-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            loading="lazy"
          />
        ))}
      </div>

      {/* Product Info */}
      <div className="p-3 md:p-4">
        <h4 className="text-sm md:text-base font-display font-semibold text-foreground mb-1 line-clamp-1">
          {highlightedProduct.name}
        </h4>
        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
          {highlightedProduct.description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg md:text-xl font-display font-bold text-primary">
            €{highlightedProduct.price > 0 ? highlightedProduct.price.toFixed(2) : 'Ask'}
          </span>
        </div>
        <Link to={`/menu/${categorySlug}`}>
          <button className="w-full h-9 px-4 bg-[#C6A136] text-white rounded-xl font-semibold text-xs md:text-sm shadow-[0_2px_8px_rgba(198,161,54,0.2)] hover:shadow-[0_0_10px_rgba(198,161,54,0.4)] hover:scale-[1.03] transition-all duration-300">
            See More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
