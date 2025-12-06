import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { LuxuryButton } from './LuxuryButton';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  unit?: string;
  image: string;
  category?: string;
  onAddToCart: () => void;
}

export const ProductCard = ({ name, description, price, unit, image, category, onAddToCart }: ProductCardProps) => {
  // Only show Add to Cart for cake categories
  const cakeCategories = ['Honey Cakes', 'Mousse Cakes', 'Sponge Cakes', 'Cheesecakes', 'Other Cakes'];
  const isCake = category ? cakeCategories.includes(category) : true; // Default to true for backward compatibility
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(27,44,75,0.08)] hover:shadow-[0_6px_24px_rgba(27,44,75,0.12)] transition-all duration-300 overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-56 lg:h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2C4B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6">
        <h3 className="text-lg lg:text-xl font-display font-semibold text-[#1B2C4B] mb-1.5">
          {name}
        </h3>
        <p className="text-sm text-[#1B2C4B]/70 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-display font-bold text-[#C6A136]">
            {price > 0 ? `€${price.toFixed(2)}` : 'Call for Price'}
          </span>
          {unit && <p className="text-xs text-[#1B2C4B]/60 mt-0.5">{unit}</p>}
        </div>

        {/* Instagram CTA */}
        <a
          href="https://www.instagram.com/ingridbakes.cy"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-12 bg-[#C6A136] hover:bg-[#D4AF37] text-[#1B2C4B] rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 hover:shadow-[0_4px_16px_rgba(198,161,54,0.4)] hover:-translate-y-0.5 flex items-center justify-center"
        >
          Order on Instagram →
        </a>

        {/* Add to Cart for cakes only */}
        {price > 0 && isCake && (
          <button
            onClick={onAddToCart}
            className="mt-3 w-full h-10 border-2 border-[#C6A136] text-[#C6A136] hover:bg-[#C6A136] hover:text-[#1B2C4B] rounded-xl font-medium text-sm transition-all duration-300"
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </button>
        )}
      </div>
    </motion.div>
  );
};
