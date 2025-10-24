import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { LuxuryButton } from '@/components/LuxuryButton';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Order = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    deliveryMethod: 'pickup'
  });

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
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    clearCart();
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Complete Your Order
          </h1>
          <p className="text-lg text-muted-foreground">
            Fill in your details to finalize your order
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Details Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-xl p-8 shadow-card border-2 border-primary/20"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Your Information
            </h2>

            <div className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="mt-2 bg-background border-primary/30"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 bg-background border-primary/30"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2 bg-background border-primary/30"
                  placeholder="+357"
                  required
                />
              </div>

              <div>
                <Label className="text-foreground mb-3 block">Delivery Method *</Label>
                <RadioGroup
                  value={formData.deliveryMethod}
                  onValueChange={(value) => setFormData({ ...formData, deliveryMethod: value })}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 border border-primary/30 rounded-lg p-3 hover:border-primary transition-colors">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup" className="cursor-pointer flex-1">Pickup</Label>
                  </div>
                  <div className="flex items-center space-x-3 border border-primary/30 rounded-lg p-3 hover:border-primary transition-colors">
                    <RadioGroupItem value="delivery" id="delivery" />
                    <Label htmlFor="delivery" className="cursor-pointer flex-1">Delivery (fee applies)</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-xl p-8 shadow-card border-2 border-primary/20"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-foreground">
                    €{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t-2 border-primary/20">
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
                <span className="text-primary">€{total.toFixed(2)}</span>
              </div>
            </div>

            <LuxuryButton
              size="lg"
              className="w-full mt-8"
              onClick={handleCompleteOrder}
            >
              Complete Order
            </LuxuryButton>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Orders must be placed at least 48 hours in advance
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Order;
