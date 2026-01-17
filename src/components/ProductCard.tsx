import { motion } from 'framer-motion';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  unit?: string;
  image: string;
  category?: string;
}

export const ProductCard = ({
  name,
  description,
  price,
  unit,
  image,
}: ProductCardProps) => {
  // Generate Instagram DM link with prefilled message
  const generateInstagramLink = () => {
    const message = `Hi! I'm interested in ordering this item: ${name}. Could you please give me more details?`;
    return `https://ig.me/m/ingridbakes.cy?text=${encodeURIComponent(message)}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.3, ease: "easeOut" }} 
      whileTap={{ scale: 0.98 }} 
      className="bg-white rounded-xl shadow-[0_2px_12px_rgba(27,44,75,0.06)] hover:shadow-[0_4px_20px_rgba(27,44,75,0.1)] transition-all duration-300 overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 lg:h-56 overflow-hidden rounded-t-xl">
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

        {/* Price */}
        <div className="pt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl lg:text-[28px] font-display font-bold text-[#C6A136]">
              {price > 0 ? `€${price.toFixed(2)}` : 'Contact for Price'}
            </span>
            {unit && (
              <span className="text-xs text-[#1B2C4B]/50 font-medium">
                {unit}
              </span>
            )}
          </div>
        </div>

        {/* Order Now CTA */}
        <div className="pt-1">
          <motion.a 
            href={generateInstagramLink()} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileTap={{ scale: 0.97 }} 
            className="flex items-center justify-center w-full h-14 bg-[#A57F3A] hover:bg-[#8B6B30] text-white rounded-xl font-semibold text-base transition-colors duration-200 shadow-[0_2px_8px_rgba(165,127,58,0.25)]"
          >
            Order Now
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
