import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import menuData from '@/data/menu.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const addItem = useCartStore((state) => state.addItem);

  const categories = ['All', ...Array.from(new Set(menuData.products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? menuData.products
    : menuData.products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: typeof menuData.products[0]) => {
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

  // Group products by category for display
  const productsByCategory = categories
    .filter(cat => cat !== 'All')
    .map(category => ({
      name: category,
      products: menuData.products.filter(p => p.category === category)
    }));

  const scrollCategory = (categoryName: string, direction: 'left' | 'right') => {
    const container = document.getElementById(`category-${categoryName}`);
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
          <div className="relative">
            <div className="flex overflow-x-auto horizontal-scroll gap-2 pb-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
                    selectedCategory === category
                      ? 'bg-secondary text-secondary-foreground border border-primary shadow-card'
                      : 'bg-card text-card-foreground border border-primary/20 hover:border-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Display by Category with Horizontal Scroll */}
        {selectedCategory === 'All' ? (
          <div className="space-y-16">
            {productsByCategory.map((categoryGroup, index) => (
              <motion.section
                key={categoryGroup.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`py-12 rounded-2xl ${
                  index % 2 === 0 ? 'bg-background' : 'bg-card'
                }`}
              >
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                      {categoryGroup.name}
                    </h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => scrollCategory(categoryGroup.name, 'left')}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                        aria-label="Scroll left"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => scrollCategory(categoryGroup.name, 'right')}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                        aria-label="Scroll right"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div
                    id={`category-${categoryGroup.name}`}
                    className="flex overflow-x-auto horizontal-scroll gap-6 pb-4"
                  >
                    {categoryGroup.products.map((product) => (
                      <div key={product.id} className="flex-shrink-0 w-80">
                        <ProductCard
                          {...product}
                          onAddToCart={() => handleAddToCart(product)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </motion.div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">No products found in this category</p>
          </div>
        )}

        {/* Important Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12 shadow-lift border-2 border-primary"
        >
          <h2 className="text-3xl font-display font-bold mb-6 text-center">
            Important Information
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Serving Guide</h3>
              <ul className="space-y-2 text-secondary-foreground/90">
                <li>• 1kg cake serves ~10 people</li>
                <li>• Small gatherings: 150g per person</li>
                <li>• Weddings: 50g per person</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Ordering</h3>
              <ul className="space-y-2 text-secondary-foreground/90">
                <li>• Order 48 hours in advance</li>
                <li>• 50% advance payment required</li>
                <li>• Cake design charged extra</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Delivery</h3>
              <ul className="space-y-2 text-secondary-foreground/90">
                <li>• Delivery available (fee applies)</li>
                <li>• Tall cakes: extra packaging fee</li>
                <li>• Prices may change without notice</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Vegetarian Options */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-card rounded-2xl p-8 md:p-12 shadow-card border-2 border-primary/20"
        >
          <h2 className="text-3xl font-display font-bold mb-4 text-center text-foreground">
            Vegetarian <span className="text-primary">Options</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are happy to offer a wide selection of vegetarian desserts. 
            Please inform us of any dietary restrictions when ordering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.products
              .filter(p => p.vegetarian)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Menu;
