import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
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
      <div className="min-h-screen pt-20 pb-24 bg-[#F5F1E6]">
        <div className="container mx-auto px-4 text-center">
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
    <div className="min-h-screen pt-16 lg:pt-20 pb-24 bg-[#F5F1E6]">
      <div className="container mx-auto px-4">
        {/* Back Button - Compact */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-4 lg:mb-6"
        >
          <Link 
            to="/menu"
            className="inline-flex items-center gap-2 text-[#1B2C4B] hover:text-[#C6A136] transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Menu</span>
          </Link>
        </motion.div>

        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 lg:mb-10"
        >
          <h1 className="text-2xl lg:text-4xl font-display font-semibold text-[#1B2C4B] mb-1">
            {categoryName}
          </h1>
          <p className="text-sm lg:text-base text-[#1B2C4B]/65">
            {products.length} handcrafted items
          </p>
        </motion.div>

        {/* Products Grid - Staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: idx * 0.08, 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <ProductCard
                {...product}
                category={product.category}
                onAddToCart={() => handleAddToCart(product)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
