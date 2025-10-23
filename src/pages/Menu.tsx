import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Info } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import menuData from '@/data/menu.json';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const addItem = useCartStore((state) => state.addItem);

  const filteredProducts = menuData.products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: typeof menuData.products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`);
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
            Explore our collection of handcrafted cakes and artisan desserts
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12">
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search desserts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              aria-label="Search menu items"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {menuData.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-gold'
                    : 'bg-card text-muted-foreground hover:bg-secondary hover:text-secondary-foreground border border-border'
                }`}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-muted-foreground">
              No products found matching your criteria
            </p>
          </motion.div>
        )}

        {/* Important Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary text-secondary-foreground rounded-2xl p-8 shadow-lift"
        >
          <div className="flex items-center gap-3 mb-6">
            <Info className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-display font-bold">Important Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Serving Guide</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• 1kg cake serves ~10 people</li>
                <li>• For small gatherings: 150g per person</li>
                <li>• For weddings: 50g per person</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Ordering Information</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Orders must be placed at least 48 hours in advance</li>
                <li>• 50% advance payment required</li>
                <li>• Cake design and decorations charged extra</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Delivery & Fees</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Delivery available (fee not included)</li>
                <li>• Tall cakes may incur extra packaging fees</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Please Note</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Prices may change without prior notice</li>
                <li>• Please inform us of any dietary restrictions when ordering</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Vegetarian Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-card rounded-2xl p-8 border border-border shadow-card"
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Vegetarian Options
          </h2>
          <p className="text-muted-foreground mb-4">
            We are happy to offer a wide selection of vegetarian desserts. Please inform us of any dietary restrictions when ordering.
          </p>
          <p className="text-sm text-muted-foreground">
            Most of our cakes, tarts, and desserts are vegetarian-friendly. For specific dietary requirements, please contact us directly.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
