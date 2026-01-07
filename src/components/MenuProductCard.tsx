import { motion } from 'framer-motion';

interface MenuProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  unit?: string;
  image: string;
  onAddToCart?: () => void;
}

export const MenuProductCard = ({ name, description, price, unit, image, onAddToCart }: MenuProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/95 backdrop-blur-sm rounded-xl shadow-[0_2px_12px_rgba(27,44,75,0.08)] hover:shadow-[0_4px_16px_rgba(27,44,75,0.12)] transition-all duration-300 overflow-hidden group border border-[#1B2C4B]/5"
    >
      {/* Image - compact height */}
      <div className="relative h-[140px] md:h-[160px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover brightness-[1.02] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      {/* Content - tight padding */}
      <div className="p-3 md:p-4 space-y-2">
        {/* Name */}
        <h3 className="text-[15px] md:text-base font-display font-semibold text-[#1B2C4B] leading-snug line-clamp-1">
          {name}
        </h3>
        
        {/* Description - optional, truncated */}
        <p className="text-[13px] md:text-sm text-[#1B2C4B]/60 line-clamp-2 leading-relaxed min-h-[2.5em]">
          {description}
        </p>

        {/* Price & CTA row */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-1">
            <span className="text-[15px] md:text-base font-display font-bold text-[#C6A136]">
              {price > 0 ? `€${price.toFixed(2)}` : 'Ask'}
            </span>
            {unit && (
              <span className="text-[10px] text-[#1B2C4B]/50">
                {unit}
              </span>
            )}
          </div>
          
          {/* Compact CTA */}
          {price > 0 && onAddToCart && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart();
              }}
              whileTap={{ scale: 0.95 }}
              className="h-[36px] md:h-[40px] px-3 md:px-4 bg-[#1B2C4B] hover:bg-[#243A5E] text-white rounded-[10px] font-semibold text-xs transition-colors duration-200 border border-transparent hover:border-[#C6A136]/30"
              aria-label={`Add ${name} to cart`}
            >
              Add
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
