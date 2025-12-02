import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useState } from 'react';
import { toast } from 'sonner';

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
  
  const handleSendOrder = () => {
    if (!customerName || !customerPhone) {
      toast.error('Please fill in your name and phone number');
      return;
    }
    
    const message = generateInstagramMessage();
    
    navigator.clipboard.writeText(message).then(() => {
      toast.success('Order copied! Opening Instagram...');
      
      setTimeout(() => {
        const deepLink = 'instagram://user?username=ingridbakes.cy';
        const webFallback = 'https://www.instagram.com/ingridbakes.cy';
        
        window.location.href = deepLink;
        
        setTimeout(() => {
          window.open(webFallback, '_blank');
        }, 1500);
      }, 300);
    }).catch(() => {
      toast.error('Unable to copy. Please message @ingridbakes.cy on Instagram.');
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 pb-24 bg-[#F5F1E6] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <div className="w-20 h-20 bg-[#1B2C4B]/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-10 w-10 text-[#1B2C4B]/40" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#1B2C4B] mb-3">
            Your cart is empty
          </h2>
          <p className="text-base text-[#1B2C4B]/70 mb-8 max-w-sm mx-auto">
            Discover our delicious creations and add them to your cart
          </p>
          <Link 
            to="/menu"
            className="inline-flex items-center justify-center h-12 px-8 bg-[#C6A136] text-white font-semibold rounded-xl shadow-[0_4px_16px_rgba(198,161,54,0.3)] hover:shadow-[0_6px_24px_rgba(198,161,54,0.4)] transition-all duration-300"
          >
            Browse Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-24 pb-24 bg-[#F5F1E6]">
      <div className="container mx-auto px-4">
        {/* Back to Menu */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 lg:mb-6"
        >
          <Link 
            to="/menu"
            className="inline-flex items-center gap-2 text-[#1B2C4B] hover:text-[#C6A136] transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Menu</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl lg:text-4xl font-display font-bold text-[#1B2C4B] mb-6 lg:mb-8">
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="bg-white rounded-2xl p-4 lg:p-5 shadow-[0_4px_16px_rgba(27,44,75,0.06)] flex gap-4"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-xl"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base lg:text-lg font-display font-semibold text-[#1B2C4B] mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-lg lg:text-xl font-bold text-[#C6A136] mb-3">
                      €{item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F5F1E6] hover:bg-[#C6A136]/10 border border-[#C6A136]/20 transition-all duration-200"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4 text-[#1B2C4B]" />
                      </button>
                      <span className="w-10 text-center font-semibold text-[#1B2C4B]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F5F1E6] hover:bg-[#C6A136]/10 border border-[#C6A136]/20 transition-all duration-200"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4 text-[#1B2C4B]" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start p-2 text-red-500/70 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-5 lg:p-6 shadow-[0_4px_16px_rgba(27,44,75,0.06)] sticky top-20"
              >
                <h2 className="text-xl lg:text-2xl font-display font-bold text-[#1B2C4B] mb-5">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-5 pb-5 border-b border-[#1B2C4B]/10">
                  <div className="flex justify-between text-[#1B2C4B]/70">
                    <span>Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-[#1B2C4B]">
                    <span>Total</span>
                    <span className="text-[#C6A136]">€{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Order Form */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#1B2C4B] text-sm">Your Details</h3>
                  
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#C6A136]/30 bg-white text-[#1B2C4B] placeholder:text-[#1B2C4B]/50 focus:outline-none focus:border-[#C6A136] focus:ring-2 focus:ring-[#C6A136]/20 transition-all"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#C6A136]/30 bg-white text-[#1B2C4B] placeholder:text-[#1B2C4B]/50 focus:outline-none focus:border-[#C6A136] focus:ring-2 focus:ring-[#C6A136]/20 transition-all"
                  />
                  
                  {/* Delivery Toggle */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 ${
                        deliveryMethod === 'pickup'
                          ? 'bg-[#C6A136] text-white shadow-[0_2px_8px_rgba(198,161,54,0.3)]'
                          : 'bg-[#F5F1E6] text-[#1B2C4B] border border-[#1B2C4B]/10'
                      }`}
                    >
                      Pickup
                    </button>
                    <button
                      onClick={() => setDeliveryMethod('delivery')}
                      className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 ${
                        deliveryMethod === 'delivery'
                          ? 'bg-[#C6A136] text-white shadow-[0_2px_8px_rgba(198,161,54,0.3)]'
                          : 'bg-[#F5F1E6] text-[#1B2C4B] border border-[#1B2C4B]/10'
                      }`}
                    >
                      Delivery
                    </button>
                  </div>
                  
                  {/* Send Order Button */}
                  <button
                    onClick={handleSendOrder}
                    disabled={!customerName || !customerPhone}
                    className={`w-full h-12 rounded-xl font-semibold text-base transition-all duration-300 ${
                      customerName && customerPhone
                        ? 'bg-[#C6A136] text-white shadow-[0_4px_16px_rgba(198,161,54,0.35)] hover:shadow-[0_6px_24px_rgba(198,161,54,0.5)] hover:-translate-y-0.5'
                        : 'bg-[#1B2C4B]/20 text-[#1B2C4B]/50 cursor-not-allowed'
                    }`}
                  >
                    Send Order →
                  </button>
                  
                  <p className="text-xs text-[#1B2C4B]/60 text-center">
                    Order will be copied — paste it in Instagram DMs
                  </p>
                </div>

                <Link 
                  to="/menu" 
                  className="block mt-4 text-center text-sm text-[#1B2C4B]/70 hover:text-[#C6A136] transition-colors"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
