import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { CategoryPreview } from '@/components/CategoryPreview';
import menuData from '@/data/menu.json';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get unique categories
  const categories = Array.from(new Set(menuData.products.map(p => p.category)));

  // Group products by category
  const productsByCategory = categories.map(category => ({
    name: category,
    products: menuData.products.filter(p => p.category === category)
  }));

  // Filter categories based on search
  const filteredCategories = productsByCategory.filter(categoryGroup =>
    categoryGroup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    categoryGroup.products.some(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen pt-16 lg:pt-24 pb-24 bg-[#F5F1E6]">
      <div className="container mx-auto px-4">
        {/* Header - More compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 lg:mb-12"
        >
          <motion.h1 
            className="text-3xl lg:text-5xl font-display font-semibold text-[#1B2C4B] mb-2 lg:mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Menu
          </motion.h1>
          <motion.p 
            className="text-base lg:text-lg text-[#1B2C4B]/70 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Handcrafted desserts made with premium ingredients
          </motion.p>
          
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-md mx-auto mb-5"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B2C4B]/50" />
              <input
                type="text"
                placeholder="Search categories or items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-[#1B2C4B]/10 rounded-xl text-[#1B2C4B] placeholder:text-[#1B2C4B]/45 focus:outline-none focus:border-[#C6A136] focus:ring-2 focus:ring-[#C6A136]/20 transition-all shadow-[0_2px_8px_rgba(27,44,75,0.04)]"
              />
            </div>
          </motion.div>
          
          {/* Vegetarian Link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <Link 
              to="/menu/vegetarian"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6A136] text-white rounded-xl font-semibold text-sm shadow-[0_4px_12px_rgba(198,161,54,0.25)] hover:shadow-[0_6px_20px_rgba(198,161,54,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              View Vegetarian Options
            </Link>
          </motion.div>
        </motion.div>

        {/* Category Grid - Clean white cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
          {filteredCategories.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <CategoryPreview
                category={categoryGroup.name}
                products={categoryGroup.products}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Important Info - Compact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-[#1B2C4B] text-white rounded-2xl p-4 lg:p-6 shadow-[0_8px_32px_rgba(27,44,75,0.15)]"
        >
          <h2 className="text-lg lg:text-xl font-display font-bold mb-4 text-center">
            Important Information
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div>
              <h3 className="text-sm font-semibold mb-2 text-[#C6A136]">Serving Guide</h3>
              <ul className="space-y-1 text-white/80 text-xs">
                <li>• 1kg cake serves ~10 people</li>
                <li>• Small gatherings: 150g/person</li>
                <li>• Weddings: 50g/person</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 text-[#C6A136]">Ordering</h3>
              <ul className="space-y-1 text-white/80 text-xs">
                <li>• Order 48 hours in advance</li>
                <li>• 50% advance payment</li>
                <li>• Custom design extra</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 text-[#C6A136]">Delivery</h3>
              <ul className="space-y-1 text-white/80 text-xs">
                <li>• Delivery available (fee applies)</li>
                <li>• Tall cakes: extra packaging</li>
                <li>• Prices may change</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Menu;
