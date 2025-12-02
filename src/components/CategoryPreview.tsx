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
    <Link to={`/menu/${categorySlug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.25 } }}
        className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(27,44,75,0.06)] hover:shadow-[0_8px_32px_rgba(27,44,75,0.12)] transition-all duration-300"
      >
        {/* Image with 3:2 aspect ratio */}
        <div className="relative aspect-[3/2] overflow-hidden">
          {previewImages.map((product, idx) => (
            <motion.img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              loading="lazy"
            />
          ))}
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
          {/* Category label on image */}
          <div className="absolute bottom-3 left-3 right-3">
            <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-sm font-semibold text-[#1B2C4B]">
              {category}
            </span>
          </div>
        </div>

        {/* Product Info - Compact */}
        <div className="p-3 lg:p-4">
          <h4 className="text-sm lg:text-base font-display font-semibold text-[#1B2C4B] mb-1 line-clamp-1">
            {highlightedProduct.name}
          </h4>
          <div className="flex items-center justify-between">
            <span className="text-base lg:text-lg font-display font-bold text-[#C6A136]">
              €{highlightedProduct.price > 0 ? highlightedProduct.price.toFixed(2) : 'Ask'}
            </span>
            <span className="text-xs text-[#1B2C4B]/60">
              {products.length} items
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
