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
  const isCake = category ? cakeCategories.includes(category) : false;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(27,44,75,0.06)] hover:shadow-[0_8px_24px_rgba(27,44,75,0.1)] transition-all duration-300 overflow-hidden group"
    >
      {/* Image - 4:3 aspect ratio */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content - Compact */}
      <div className="p-4 lg:p-5">
        <h3 className="text-base lg:text-lg font-display font-semibold text-[#1B2C4B] mb-1">
          {name}
        </h3>
        <p className="text-sm text-[#1B2C4B]/65 mb-3 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <span className="text-xl lg:text-2xl font-display font-bold text-[#C6A136]">
            {price > 0 ? `€${price.toFixed(2)}` : 'Call for Price'}
          </span>
          {unit && <p className="text-xs text-[#1B2C4B]/55 mt-0.5">{unit}</p>}
        </div>

        {/* Primary CTA - Instagram */}
        <a
          href="https://www.instagram.com/ingridbakes.cy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full h-12 bg-[#C6A136] text-white rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 shadow-[0_2px_8px_rgba(198,161,54,0.2)] hover:shadow-[0_6px_20px_rgba(198,161,54,0.4)] hover:-translate-y-0.5"
        >
          Order on Instagram →
        </a>

        {/* Add to Cart - Only for cakes */}
        {price > 0 && isCake && (
          <button
            onClick={onAddToCart}
            className="mt-3 w-full h-10 border border-[#C6A136]/40 text-[#C6A136] hover:bg-[#C6A136] hover:text-white rounded-xl font-medium text-sm transition-all duration-300"
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </button>
        )}
      </div>
    </motion.div>
  );
};
