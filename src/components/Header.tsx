import { useState, useEffect, useCallback } from 'react';
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
  const [iconColor, setIconColor] = useState('#1B2C4B');
  const location = useLocation();
  const totalItems = useCartStore((state) => state.getTotalItems());

  // Dynamic color detection based on background
  const detectBackgroundColor = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const headerHeight = 40;
    const checkPoints = [
      { x: window.innerWidth - 60, y: headerHeight },
      { x: window.innerWidth - 100, y: headerHeight },
      { x: window.innerWidth - 140, y: headerHeight },
    ];
    
    let totalBrightness = 0;
    let validPoints = 0;
    
    for (const point of checkPoints) {
      const elements = document.elementsFromPoint(point.x, point.y);
      
      for (const el of elements) {
        if (el.tagName === 'HEADER' || el.closest('header')) continue;
        
        const computedStyle = window.getComputedStyle(el);
        const bgColor = computedStyle.backgroundColor;
        const bgImage = computedStyle.backgroundImage;
        
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const rgb = bgColor.match(/\d+/g);
          if (rgb && rgb.length >= 3) {
            const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
            totalBrightness += brightness;
            validPoints++;
            break;
          }
        }
        
        if (bgImage && bgImage !== 'none' && bgImage.includes('url')) {
          if (!bgImage.includes('repeating-linear-gradient')) {
            totalBrightness += 50;
            validPoints++;
            break;
          }
        }
      }
    }
    
    if (validPoints > 0) {
      const avgBrightness = totalBrightness / validPoints;
      const newColor = avgBrightness < 128 ? '#F5F1E6' : '#1B2C4B';
      setIconColor(newColor);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      
      setLastScrollY(currentScrollY);
      detectBackgroundColor();
    };

    detectBackgroundColor();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', detectBackgroundColor);
    const timer = setTimeout(detectBackgroundColor, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', detectBackgroundColor);
      clearTimeout(timer);
    };
  }, [lastScrollY, detectBackgroundColor]);

  useEffect(() => {
    setTimeout(detectBackgroundColor, 100);
  }, [location.pathname, detectBackgroundColor]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E6]/90 border-b border-[#C6A136]/20 shadow-[0_2px_12px_rgba(27,44,75,0.06)] transition-all duration-[180ms] ease-out backdrop-blur-md">
        <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-xl md:text-2xl font-display font-bold text-[#1B2C4B] tracking-wide">
              Ingrid Bakes
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-10 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-[180ms] relative group ${
                  location.pathname === link.path
                    ? 'text-[#C6A136]'
                    : 'text-[#1B2C4B] hover:text-[#C6A136]'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A136] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4 ml-4 md:ml-6">
            <Link to="/cart" className="relative p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
              <ShoppingCart 
                className="h-6 w-6 transition-all duration-[180ms]" 
                style={{ color: iconColor }}
              />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#C6A136] text-[#1B2C4B] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-[0_2px_8px_rgba(198,161,54,0.4)]">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-all duration-[180ms]" style={{ color: iconColor }} />
              ) : (
                <Menu className="h-6 w-6 transition-all duration-[180ms]" style={{ color: iconColor }} />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-[#F5F1E6]"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.06, duration: 0.25 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-medium py-3 px-2 rounded-lg transition-all duration-[180ms] ${
                        location.pathname === link.path
                          ? 'text-[#C6A136] bg-[#C6A136]/10'
                          : 'text-[#1B2C4B] hover:text-[#C6A136] hover:bg-[#C6A136]/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </nav>
      </header>

    <AnimatePresence>
      {showButton && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <div className="container mx-auto px-4 pb-3">
            <a
              href="https://www.instagram.com/ingridbakes.cy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-12 bg-[#C6A136] text-white font-semibold text-base rounded-xl shadow-[0_4px_16px_rgba(198,161,54,0.35)] hover:shadow-[0_6px_24px_rgba(198,161,54,0.5)] transition-all duration-300"
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
