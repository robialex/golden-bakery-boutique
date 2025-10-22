import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { LuxuryButton } from '@/components/LuxuryButton';
import { useEffect } from 'react';

const Order = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  
  const TAX_RATE = 0.19;
  const subtotal = getTotalPrice();
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  useEffect(() => {
    // If cart is empty, redirect to menu
    if (items.length === 0) {
      navigate('/menu');
    }
  }, [items.length, navigate]);

  const handleCompleteOrder = () => {
    clearCart();
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Order Summary
          </h1>
          <p className="text-lg text-muted-foreground">
            Review your order before completing
          </p>
        </motion.div>

        <div className="bg-card rounded-xl p-8 shadow-card mb-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Your Items
          </h2>

          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold text-foreground">
                  €{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-border">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Tax (19%)</span>
              <span>€{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-2xl font-bold text-foreground pt-3 border-t border-border">
              <span>Total</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-primary/10 rounded-xl p-6 mb-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            This is a demo checkout. In a real application, payment processing would occur here.
          </p>
        </motion.div>

        <LuxuryButton
          size="lg"
          className="w-full"
          onClick={handleCompleteOrder}
        >
          Complete Order
        </LuxuryButton>
      </div>
    </div>
  );
};

export default Order;
