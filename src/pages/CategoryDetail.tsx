import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { MenuProductCard } from '@/components/MenuProductCard';
import { MenuBackground } from '@/components/MenuBackground';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import menuData from '@/data/menu.json';

const CategoryDetail = () => {
  const { category } = useParams<{ category: string }>();
  const addItem = useCartStore((state) => state.addItem);

  // Convert slug back to category name
  const categoryName = category
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Find products for this category
  const products = menuData.products.filter(
    p => p.category.toLowerCase() === categoryName?.toLowerCase()
  );

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

  if (!products.length) {
    return (
      <div className="min-h-screen pt-20 pb-16 relative">
        <MenuBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl font-display font-bold text-[#1B2C4B] mb-4">
            Category not found
          </h1>
          <Link to="/menu" className="text-[#C6A136] hover:underline">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-16 relative">
      {/* Warm bakery background - same as Menu */}
      <MenuBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <Link 
            to="/menu"
            className="inline-flex items-center gap-1.5 text-[#1B2C4B] hover:text-[#C6A136] transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Back to Menu</span>
          </Link>
        </motion.div>

        {/* Header - compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6"
        >
          <h1 className="text-[28px] md:text-3xl lg:text-4xl font-display font-semibold text-[#1B2C4B] mb-1">
            {categoryName}
          </h1>
          <p className="text-sm text-[#1B2C4B]/65">
            {products.length} handcrafted items
          </p>
        </motion.div>

        {/* Products Grid - 2 columns on mobile (MANDATORY) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
            >
              <MenuProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                unit={product.unit}
                image={product.image}
                onAddToCart={() => handleAddToCart(product)}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Order CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <a
            href="https://www.instagram.com/ingridbakes.cy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B2C4B] hover:bg-[#243A5E] text-white rounded-[10px] font-semibold text-sm border border-transparent hover:border-[#C6A136]/40 transition-all duration-200"
          >
            Order on Instagram →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryDetail;
