import { motion } from 'framer-motion';

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
  const isCake = category ? cakeCategories.includes(category) : true;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(27,44,75,0.06)] hover:shadow-[0_4px_20px_rgba(27,44,75,0.1)] transition-all duration-300 overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover brightness-[1.02] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6 space-y-4">
        {/* Name & Description */}
        <div className="space-y-1.5">
          <h3 className="text-lg lg:text-xl font-display font-semibold text-[#1B2C4B] leading-snug">
            {name}
          </h3>
          <p className="text-sm text-[#1B2C4B]/60 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price - more prominent */}
        <div className="pt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl lg:text-[28px] font-display font-bold text-[#C6A136]">
              {price > 0 ? `€${price.toFixed(2)}` : 'Call for Price'}
            </span>
            {unit && (
              <span className="text-xs text-[#1B2C4B]/50 font-medium">
                {unit}
              </span>
            )}
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-2.5 pt-1">
          {/* Primary CTA - Add to Cart (for cakes only) */}
          {price > 0 && isCake && (
            <motion.button
              onClick={onAddToCart}
              whileTap={{ scale: 0.97 }}
              className="w-full h-11 bg-[#1B2C4B] hover:bg-[#243A5E] text-white rounded-xl font-semibold text-sm transition-colors duration-200"
              aria-label={`Add ${name} to cart`}
            >
              Add to Cart
            </motion.button>
          )}
          
          {/* Secondary CTA - Order on Instagram (ghost style) */}
          <motion.a
            href="https://www.instagram.com/ingridbakes.cy"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center w-full h-10 border border-[#C6A136]/40 text-[#C6A136] hover:border-[#C6A136] hover:bg-[#C6A136]/5 rounded-xl font-medium text-sm transition-all duration-200"
          >
            Order on Instagram →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
