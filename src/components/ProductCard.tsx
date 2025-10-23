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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-card rounded-xl shadow-card hover:shadow-lift transition-all duration-300 overflow-hidden group"
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
              onClick={onAddToCart}
              className="group-hover:scale-105"
              aria-label={`Add ${name} to cart`}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add to Cart
            </LuxuryButton>
          )}
        </div>
      </div>
    </motion.div>
  );
};
