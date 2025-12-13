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
  
  const generateInstagramMessage = () => {
    const itemsList = items.map(item => 
      `${item.quantity} x ${item.name} — €${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const message = `Hey Ingrid Bakes! 😊\n\nI'd like to order:\n\n${itemsList}\n\n${deliveryMethod === 'pickup' ? '📦 Pickup' : '🚚 Delivery'}\n\nName: ${customerName}\nPhone: ${customerPhone}\n\nTotal: €${total.toFixed(2)}\n\nIs this available? Thanks!`;
    
    return message;
  };
  
  const handleSendInstagram = () => {
    if (!customerName || !customerPhone) {
      alert('Please fill in your name and phone number');
      return;
    }
    
    const message = generateInstagramMessage();
    
    navigator.clipboard.writeText(message).then(() => {
      alert('✅ Message copied to clipboard!\n\nOpening Instagram... Paste your order into DMs with @ingridbakes.cy');
      
      setTimeout(() => {
        const deepLink = 'instagram://user?username=ingridbakes.cy';
        const webFallback = 'https://www.instagram.com/ingridbakes.cy';
        
        window.location.href = deepLink;
        
        setTimeout(() => {
          window.open(webFallback, '_blank');
        }, 1500);
      }, 300);
    }).catch(() => {
      alert('Unable to copy. Please manually message @ingridbakes.cy on Instagram with your order details.');
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-[#F5F1E6]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <ShoppingBag className="h-20 w-20 text-[#1B2C4B]/30 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#1B2C4B] mb-3">
            Your cart is empty
          </h2>
          <p className="text-base text-[#1B2C4B]/60 mb-8 max-w-xs mx-auto">
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
    <div className="min-h-screen pt-24 pb-20 bg-[#F5F1E6]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-[#1B2C4B] mb-2">
            Your Cart
          </h1>
          <p className="text-[#1B2C4B]/60 text-sm mb-8">
            Review your items, then order via Instagram
          </p>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-3">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex gap-4"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg flex-shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base lg:text-lg font-display font-semibold text-[#1B2C4B] truncate">
                      {item.name}
                    </h3>
                    <p className="text-lg lg:text-xl font-bold text-[#C6A136] mt-1">
                      €{item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <motion.button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-lg bg-[#F5F1E6] hover:bg-[#EAE4D8] flex items-center justify-center transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4 text-[#1B2C4B]" />
                      </motion.button>
                      <span className="w-8 text-center font-semibold text-[#1B2C4B]">
                        {item.quantity}
                      </span>
                      <motion.button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-lg bg-[#F5F1E6] hover:bg-[#EAE4D8] flex items-center justify-center transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4 text-[#1B2C4B]" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <motion.button
                    onClick={() => removeItem(item.id)}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#1B2C4B]/40 hover:text-red-500 transition-colors self-start p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-5 lg:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] sticky top-24">
                <h2 className="text-xl font-display font-bold text-[#1B2C4B] mb-5">
                  Complete Your Order
                </h2>

                {/* Total */}
                <div className="flex justify-between items-center py-3 border-b border-[#1B2C4B]/10 mb-5">
                  <span className="text-[#1B2C4B]/70">Total</span>
                  <span className="text-2xl font-bold text-[#1B2C4B]">€{total.toFixed(2)}</span>
                </div>

                {/* Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1B2C4B] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1B2C4B]/10 bg-[#F5F1E6]/50 text-[#1B2C4B] placeholder:text-[#1B2C4B]/40 focus:outline-none focus:ring-2 focus:ring-[#C6A136]/50 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1B2C4B] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1B2C4B]/10 bg-[#F5F1E6]/50 text-[#1B2C4B] placeholder:text-[#1B2C4B]/40 focus:outline-none focus:ring-2 focus:ring-[#C6A136]/50 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  {/* Segmented Control */}
                  <div>
                    <label className="block text-sm font-medium text-[#1B2C4B] mb-1.5">
                      Delivery Method
                    </label>
                    <div className="flex bg-[#F5F1E6] rounded-xl p-1">
                      <button
                        onClick={() => setDeliveryMethod('pickup')}
                        className={`flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
                          deliveryMethod === 'pickup'
                            ? 'bg-white text-[#1B2C4B] shadow-sm'
                            : 'text-[#1B2C4B]/60 hover:text-[#1B2C4B]'
                        }`}
                      >
                        Pickup
                      </button>
                      <button
                        onClick={() => setDeliveryMethod('delivery')}
                        className={`flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
                          deliveryMethod === 'delivery'
                            ? 'bg-white text-[#1B2C4B] shadow-sm'
                            : 'text-[#1B2C4B]/60 hover:text-[#1B2C4B]'
                        }`}
                      >
                        Delivery
                      </button>
                    </div>
                  </div>
                  
                  {/* Main CTA */}
                  <motion.button
                    onClick={handleSendInstagram}
                    disabled={!customerName || !customerPhone}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-12 bg-[#C6A136] hover:bg-[#D4AF37] disabled:bg-[#C6A136]/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors duration-200 mt-2"
                  >
                    Order on Instagram →
                  </motion.button>
                  
                  <p className="text-xs text-[#1B2C4B]/50 text-center">
                    Your order will be copied — paste it in Instagram DMs
                  </p>
                </div>

                <Link to="/menu" className="block mt-5 pt-5 border-t border-[#1B2C4B]/10">
                  <button className="w-full py-2.5 text-[#1B2C4B]/70 hover:text-[#1B2C4B] font-medium text-sm transition-colors">
                    ← Continue Shopping
                  </button>
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
