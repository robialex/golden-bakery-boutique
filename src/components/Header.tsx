import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/stores/cartStore';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/94 border-b border-primary/30 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-[220ms] ease-out" style={{ backdropFilter: 'blur(6px)' }}>
        <nav className="container mx-auto px-4 md:px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-xl md:text-2xl font-display font-bold text-primary tracking-wide">
              Ingrid Bakes
            </h1>
          </Link>

          {/* Desktop Navigation - positioned to the right */}
          <div className="hidden md:flex items-center gap-10 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-3 md:space-x-4 ml-4 md:ml-6">
            <Link to="/cart" className="relative p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
              <ShoppingCart className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-gold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary text-primary-foreground'
                        : 'text-secondary-foreground hover:bg-primary/20'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>

    {/* Mobile Sticky Bottom Bar - Order on Instagram */}
    <AnimatePresence>
      {showButton && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <div className="container mx-auto px-4 pb-3">
            <a
              href="https://www.instagram.com/ingridbakes.cy"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-12 bg-[#C6A136] text-white font-medium text-base rounded-xl shadow-[0_4px_16px_rgba(198,161,54,0.3)] hover:shadow-[0_6px_24px_rgba(198,161,54,0.5)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
            >
              Order on Instagram
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};
