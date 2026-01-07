import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import menuData from '@/data/menu.json';

const Vegetarian = () => {
  const addItem = useCartStore((state) => state.addItem);

  // Filter vegetarian products
  const vegetarianProducts = menuData.products.filter(p => p.vegetarian === true);

  const handleAddToCart = (product: any) => {
    if (product.price > 0) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      toast.success(`${product.name} added to cart!`);
    }
  };

  return (
    <div 
      className="min-h-screen pt-24 pb-20"
      style={{
        background: 'linear-gradient(180deg, #1B2C4B 0%, #F5F1E6 20%)',
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-30" 
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(198, 161, 54, 0.03) 35px, rgba(198, 161, 54, 0.03) 70px)`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            to="/menu"
            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Menu</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Leaf className="h-10 w-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              Vegetarian Options
            </h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Discover our {vegetarianProducts.length} delicious vegetarian desserts, crafted with care and premium ingredients
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vegetarianProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
            >
              <ProductCard
                {...product}
                onAddToCart={() => handleAddToCart(product)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vegetarian;
