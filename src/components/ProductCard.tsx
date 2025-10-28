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
  onAddToCart: () => void;
}

export const ProductCard = ({ name, description, price, unit, image, onAddToCart }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-card rounded-xl shadow-card hover:shadow-lift transition-all duration-500 overflow-hidden group border-2 border-primary/20 hover:border-primary"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-display font-bold text-primary">
              {price > 0 ? `€${price.toFixed(2)}` : 'Call for Price'}
            </span>
            {unit && <p className="text-xs text-muted-foreground">{unit}</p>}
          </div>
          {price > 0 && (
            <LuxuryButton
              size="sm"
              variant="secondary"
              onClick={onAddToCart}
              className="border border-primary/30"
              aria-label={`Add ${name} to cart`}
            >
              Add to Cart
            </LuxuryButton>
          )}
        </div>
      </div>
    </motion.div>
  );
};
