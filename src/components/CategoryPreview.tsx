import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <Link to={`/menu/${categorySlug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
        className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(27,44,75,0.08)] hover:shadow-[0_6px_20px_rgba(27,44,75,0.12)] transition-all duration-300 border border-[#1B2C4B]/5 cursor-pointer h-full"
      >
        {/* Category Name - compact header */}
        <div className="bg-[#1B2C4B] px-3 py-2">
          <h3 className="text-sm md:text-[15px] font-display font-semibold text-[#F5F1E6] text-center">
            {category}
          </h3>
        </div>

        {/* Rotating Preview Images - compact height */}
        <div className="relative h-[120px] md:h-[140px] overflow-hidden">
          {previewImages.map((product, idx) => (
            <motion.img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover brightness-[1.02]"
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              loading="lazy"
            />
          ))}
        </div>

        {/* Product Info - compact */}
        <div className="p-2.5 md:p-3">
          <h4 className="text-[13px] md:text-sm font-display font-semibold text-[#1B2C4B] mb-0.5 line-clamp-1">
            {highlightedProduct.name}
          </h4>
          <div className="flex items-center justify-between">
            <span className="text-[14px] md:text-[15px] font-display font-bold text-[#C6A136]">
              €{highlightedProduct.price > 0 ? highlightedProduct.price.toFixed(2) : 'Ask'}
            </span>
            <span className="text-[11px] md:text-xs text-[#1B2C4B]/50">
              {products.length} items →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
