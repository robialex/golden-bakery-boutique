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
    <div 
      className="min-h-screen pt-24 pb-20" 
      style={{
        background: 'linear-gradient(180deg, #1B2C4B 0%, #F5F1E6 30%)',
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-30" 
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(198, 161, 54, 0.03) 35px, rgba(198, 161, 54, 0.03) 70px)`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="text-primary">Menu</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Handcrafted desserts made with premium ingredients and Mediterranean love
          </motion.p>
          
          {/* Search/Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md mx-auto mb-6"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                type="text"
                placeholder="Search categories or items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </motion.div>
          
          {/* Quick Link to Vegetarian */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              to="/menu/vegetarian"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-xl font-semibold hover:shadow-gold hover:scale-105 transition-all duration-300"
            >
              View Vegetarian Options
            </Link>
          </motion.div>
        </motion.div>

        {/* Category Previews with enhanced animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredCategories.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
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

        {/* Important Information - Compact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 bg-[#1B2C4B] text-white rounded-lg p-4 md:p-6 shadow-md border border-primary/40"
        >
          <h2 className="text-lg md:text-xl font-display font-bold mb-3 text-center">
            Important Information
          </h2>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-1.5 text-primary">Serving Guide</h3>
              <ul className="space-y-0.5 text-white/85 text-xs">
                <li>• 1kg cake serves ~10 people</li>
                <li>• Small gatherings: 150g per person</li>
                <li>• Weddings: 50g per person</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-1.5 text-primary">Ordering</h3>
              <ul className="space-y-0.5 text-white/85 text-xs">
                <li>• Order 48 hours in advance</li>
                <li>• 50% advance payment required</li>
                <li>• Cake design charged extra</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-1.5 text-primary">Delivery</h3>
              <ul className="space-y-0.5 text-white/85 text-xs">
                <li>• Delivery available (fee applies)</li>
                <li>• Tall cakes: extra packaging fee</li>
                <li>• Prices may change without notice</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Menu;
