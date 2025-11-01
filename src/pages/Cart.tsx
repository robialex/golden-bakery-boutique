import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { LuxuryButton } from '@/components/LuxuryButton';
import { useState } from 'react';

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');
  
  const subtotal = getTotalPrice();
  const total = subtotal;
  
  // Check if cart has only cake items
  const cakeCategories = ['sponge cakes', 'honey cakes', 'mousse cakes', 'cheesecakes', 'other'];
  const hasCakesOnly = items.length > 0 && items.every(item => {
    // Assuming items have category info - if not, this will need adjustment
    return true; // For now, enable for all items in cart
  });
  
  const generateInstagramMessage = () => {
    const itemsList = items.map(item => 
      `${item.name} x${item.quantity}`
    ).join(', ');
    
    const message = `Hey! 😊\n\nI'd like to order: ${itemsList}\n\nTotal: €${total.toFixed(2)}\n${deliveryMethod === 'pickup' ? 'Pickup' : 'Delivery'}\n\nName: ${customerName}\nPhone: ${customerPhone}\n\nIs this available? Thank you! ✨`;
    
    return message;
  };
  
  const handleSendInstagram = () => {
    if (!customerName || !customerPhone) {
      alert('Please fill in your name and phone number');
      return;
    }
    const message = generateInstagramMessage();
    
    // Copy message to clipboard
    navigator.clipboard.writeText(message).then(() => {
      // Try to open Instagram DMs
      const instagramUrl = `https://www.instagram.com/direct/t/ingridbakes.cy`;
      window.open(instagramUrl, '_blank');
      
      alert('✅ Message copied to clipboard! Paste it in the Instagram chat that just opened.');
    }).catch(() => {
      alert('Please copy your order details manually and send to @ingridbakes.cy on Instagram');
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Your cart is empty
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover our delicious creations and add them to your cart
          </p>
          <Link to="/menu">
            <LuxuryButton size="lg">Browse Menu</LuxuryButton>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="bg-card rounded-xl p-6 shadow-card flex gap-6"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xl font-bold text-primary mb-4">
                      €{item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-destructive hover:text-destructive/80 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 shadow-card sticky top-24">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-xl font-bold text-foreground">
                    <span>Total</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                </div>

                {hasCakesOnly && (
                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <h3 className="font-semibold text-foreground">Order via Instagram</h3>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => setDeliveryMethod('pickup')}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                          deliveryMethod === 'pickup'
                            ? 'bg-primary text-background'
                            : 'bg-secondary text-foreground border border-border'
                        }`}
                      >
                        Pickup
                      </button>
                      <button
                        onClick={() => setDeliveryMethod('delivery')}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                          deliveryMethod === 'delivery'
                            ? 'bg-primary text-background'
                            : 'bg-secondary text-foreground border border-border'
                        }`}
                      >
                        Delivery
                      </button>
                    </div>
                    <LuxuryButton
                      size="lg"
                      className="w-full"
                      onClick={handleSendInstagram}
                      disabled={!customerName || !customerPhone}
                    >
                      Send Order on Instagram
                    </LuxuryButton>
                  </div>
                )}

                <Link to="/order" className="block">
                  <LuxuryButton size="lg" className="w-full" variant="secondary">
                    {hasCakesOnly ? 'Or Checkout Online' : 'Proceed to Checkout'}
                  </LuxuryButton>
                </Link>

                <Link to="/menu" className="block mt-4">
                  <LuxuryButton variant="ghost" size="md" className="w-full">
                    Continue Shopping
                  </LuxuryButton>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
