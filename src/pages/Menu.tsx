import { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuCategory } from '@/components/MenuCategory';
import menuData from '@/data/menu.json';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(menuData.products.map(p => p.category)))];

  // Group products by category for display
  const productsByCategory = categories
    .filter(cat => cat !== 'All')
    .map(category => ({
      name: category,
      products: menuData.products.filter(p => p.category === category)
    }));

  return (
    <div 
      className="min-h-screen pt-24 pb-20" 
      style={{
        background: 'linear-gradient(180deg, #1B2C4B 0%, #F5F1E6 30%)',
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(198, 161, 54, 0.02) 35px, rgba(198, 161, 54, 0.02) 70px)`
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Handcrafted desserts made with premium ingredients and Mediterranean love
          </p>
        </motion.div>

        {/* Compact Horizontal Scrollable Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
                  selectedCategory === category
                    ? 'bg-primary text-[#1B2C4B] border border-primary shadow-gold'
                    : 'bg-[#1B2C4B] text-white border border-primary/30 hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Display by Category with Expandable Sections */}
        <div className="space-y-12">
          {selectedCategory === 'All' ? (
            productsByCategory.map((categoryGroup, index) => (
              <MenuCategory
                key={categoryGroup.name}
                category={categoryGroup.name}
                products={categoryGroup.products}
                index={index}
              />
            ))
          ) : (
            <MenuCategory
              category={selectedCategory}
              products={menuData.products.filter(p => p.category === selectedCategory)}
              index={0}
            />
          )}
        </div>

        {/* Important Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-[#1B2C4B] text-white rounded-2xl p-8 md:p-12 shadow-lift border-2 border-primary"
        >
          <h2 className="text-3xl font-display font-bold mb-6 text-center">
            Important Information
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Serving Guide</h3>
              <ul className="space-y-2 text-white/90">
                <li>• 1kg cake serves ~10 people</li>
                <li>• Small gatherings: 150g per person</li>
                <li>• Weddings: 50g per person</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Ordering</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Order 48 hours in advance</li>
                <li>• 50% advance payment required</li>
                <li>• Cake design charged extra</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Delivery</h3>
              <ul className="space-y-2 text-white/90">
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
