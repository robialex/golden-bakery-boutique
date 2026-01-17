import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import menuData from '@/data/menu.json';

export const FeaturedDesserts = () => {
  // Get first 3 products as featured
  const featuredProducts = menuData.products.slice(0, 3);

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Gold divider above */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-16"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-card-foreground mb-4">
            Featured <span className="text-primary">Creations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular handcrafted desserts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
