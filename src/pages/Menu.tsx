import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { CategoryPreview } from '@/components/CategoryPreview';
import { MenuBackground } from '@/components/MenuBackground';
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

  // Build category grid
  const categoryGrid = useMemo(() => {
    return filteredCategories.map((categoryGroup, index) => (
      <motion.div
        key={categoryGroup.name}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ 
          duration: 0.5, 
          delay: (index % 4) * 0.06,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <CategoryPreview
          category={categoryGroup.name}
          products={categoryGroup.products}
          index={index}
        />
      </motion.div>
    ));
  }, [filteredCategories]);

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Warm bakery background */}
      <MenuBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header - compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <motion.h1 
            className="text-[28px] md:text-4xl lg:text-5xl font-display font-semibold text-[#1B2C4B] mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Menu
          </motion.h1>
          <motion.p 
            className="text-sm md:text-base text-[#1B2C4B]/75 max-w-xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Handcrafted desserts with Mediterranean love
          </motion.p>
          
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-sm mx-auto mb-5"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B2C4B]/50" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white/90 backdrop-blur-sm border border-[#1B2C4B]/10 rounded-xl text-[#1B2C4B] text-sm placeholder:text-[#1B2C4B]/40 focus:outline-none focus:border-[#C6A136] focus:ring-2 focus:ring-[#C6A136]/20 transition-all"
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
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C6A136] text-white rounded-[10px] font-semibold text-sm shadow-[0_2px_8px_rgba(198,161,54,0.25)] hover:shadow-[0_0_12px_rgba(198,161,54,0.4)] hover:scale-[1.02] transition-all duration-300"
            >
              🌿 Vegetarian Options
            </Link>
          </motion.div>
        </motion.div>

        {/* Category Grid - 2 columns mobile, 3 tablet, 4 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {categoryGrid}
        </div>

        {/* Important Information - Compact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 bg-[#1B2C4B] text-white rounded-xl p-4 md:p-5 shadow-md border border-[#C6A136]/20"
        >
          <h2 className="text-base md:text-lg font-display font-bold mb-3 text-center text-[#C6A136]">
            Important Information
          </h2>
          <div className="grid md:grid-cols-3 gap-3 max-w-3xl mx-auto">
            <div>
              <h3 className="text-sm font-semibold mb-1 text-[#C6A136]/90">Serving Guide</h3>
              <ul className="space-y-0.5 text-white/80 text-xs">
                <li>• 1kg cake serves ~10 people</li>
                <li>• Small gatherings: 150g/person</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1 text-[#C6A136]/90">Ordering</h3>
              <ul className="space-y-0.5 text-white/80 text-xs">
                <li>• Order 48 hours in advance</li>
                <li>• 50% advance payment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1 text-[#C6A136]/90">Delivery</h3>
              <ul className="space-y-0.5 text-white/80 text-xs">
                <li>• Delivery available (fee applies)</li>
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
