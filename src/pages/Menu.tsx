import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { CategoryPreview } from '@/components/CategoryPreview';
import { FullWidthShowcase } from '@/components/FullWidthShowcase';
import { SpecialtyFocusBlock } from '@/components/SpecialtyFocusBlock';
import menuData from '@/data/menu.json';

// Background image
import menuBackground from '@/assets/menu-background.jpg';

// Gallery images for showcases
import showcasingBakes from '@/assets/gallery/showcasing-bakes.jpg';
import blueberry from '@/assets/gallery/blueberry.jpg';
import heartPecan from '@/assets/gallery/heart-pecan-cake.jpg';
import bdayCakes from '@/assets/gallery/bday-cakes-2.jpg';
import showcasingCakes from '@/assets/gallery/showcasing-cakes.jpg';
import vitrina from '@/assets/gallery/vitrina.jpg';

// Showcase images array for rotation
const showcaseImages = [
  { src: showcasingBakes, alt: "Handcrafted pastries showcase" },
  { src: blueberry, alt: "Fresh blueberry dessert" },
  { src: heartPecan, alt: "Heart-shaped pecan cake" },
  { src: bdayCakes, alt: "Birthday celebration cakes" },
  { src: showcasingCakes, alt: "Premium cake collection" },
  { src: vitrina, alt: "Bakery display" },
];

// CTA block content
const ctaBlocks = [
  {
    imageSrc: showcasingCakes,
    headline: "Seasonal Specialties",
    bodyText: "Discover our handcrafted seasonal creations, made fresh daily with Mediterranean love.",
    ctaText: "Order on Instagram",
    ctaLink: "https://www.instagram.com/ingridbakes.cy/"
  },
  {
    imageSrc: heartPecan,
    headline: "Custom Celebrations",
    bodyText: "From birthdays to weddings, let us create the perfect centerpiece for your special moments.",
    ctaText: "Get in Touch",
    ctaLink: "https://www.instagram.com/ingridbakes.cy/"
  },
];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get unique categories
  const categories = Array.from(new Set(menuData.products.map(p => p.category)));

  // Group products by category
  const productsByCategory = categories.map(category => ({
    name: category,
    products: menuData.products.filter(p => p.category === category)
  }));

  // Filter categories based on search
  const filteredCategories = productsByCategory.filter(categoryGroup =>
    categoryGroup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    categoryGroup.products.some(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Build dynamic content with showcases and CTA blocks interspersed
  const dynamicContent = useMemo(() => {
    const content: React.ReactNode[] = [];
    let showcaseIndex = 0;
    let ctaIndex = 0;
    let cardPairCount = 0;

    filteredCategories.forEach((categoryGroup, index) => {
      // Add category card
      content.push(
        <motion.div
          key={categoryGroup.name}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.7, 
            delay: (index % 4) * 0.08,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <CategoryPreview
            category={categoryGroup.name}
            products={categoryGroup.products}
            index={index}
          />
        </motion.div>
      );

      cardPairCount++;

      // After every 2 cards, add a Full-Width Showcase (only on mobile/tablet view conceptually)
      if (cardPairCount === 2 && showcaseIndex < showcaseImages.length) {
        content.push(
          <div key={`showcase-${showcaseIndex}`} className="col-span-2 lg:col-span-4">
            <FullWidthShowcase
              imageSrc={showcaseImages[showcaseIndex].src}
              alt={showcaseImages[showcaseIndex].alt}
            />
          </div>
        );
        showcaseIndex++;
        cardPairCount = 0;
      }

      // After every 4 cards (2 showcase cycles), add a Specialty Focus Block
      if (index > 0 && (index + 1) % 4 === 0 && ctaIndex < ctaBlocks.length) {
        content.push(
          <div key={`cta-${ctaIndex}`} className="col-span-2 lg:col-span-4">
            <SpecialtyFocusBlock
              imageSrc={ctaBlocks[ctaIndex].imageSrc}
              headline={ctaBlocks[ctaIndex].headline}
              bodyText={ctaBlocks[ctaIndex].bodyText}
              ctaText={ctaBlocks[ctaIndex].ctaText}
              ctaLink={ctaBlocks[ctaIndex].ctaLink}
            />
          </div>
        );
        ctaIndex++;
      }
    });

    return content;
  }, [filteredCategories]);

  return (
    <div 
      className="min-h-screen pt-24 pb-20 relative"
      style={{
        backgroundImage: `url(${menuBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Subtle paper texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(27, 44, 75, 0.4) 2px, rgba(27, 44, 75, 0.4) 3px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(27, 44, 75, 0.4) 2px, rgba(27, 44, 75, 0.4) 3px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-display font-semibold text-[#1B2C4B] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Menu
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-[#1B2C4B]/85 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Handcrafted desserts made with premium ingredients and Mediterranean love
          </motion.p>
          
          {/* Search/Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-md mx-auto mb-6"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B2C4B]/60" />
              <input
                type="text"
                placeholder="Search categories or items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#1B2C4B]/10 rounded-xl text-[#1B2C4B] placeholder:text-[#1B2C4B]/50 focus:outline-none focus:border-[#C6A136] focus:ring-2 focus:ring-[#C6A136]/20 transition-all"
              />
            </div>
          </motion.div>
          
          {/* Quick Link to Vegetarian */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/menu/vegetarian"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A136] text-white rounded-xl font-semibold shadow-[0_4px_12px_rgba(198,161,54,0.25)] hover:shadow-[0_0_12px_rgba(198,161,54,0.5)] hover:scale-[1.03] transition-all duration-300"
            >
              View Vegetarian Options
            </Link>
          </motion.div>
        </motion.div>

        {/* Dynamic Category Grid with Showcases and CTAs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {dynamicContent}
        </div>

        {/* Important Information - Compact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 bg-[#1B2C4B] text-white rounded-lg p-4 md:p-6 shadow-md border border-primary/40"
        >
          <h2 className="text-lg md:text-xl font-display font-bold mb-3 text-center">
            Important Information
          </h2>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-1.5 text-primary">Serving Guide</h3>
              <ul className="space-y-0.5 text-white/85 text-xs">
                <li>• 1kg cake serves ~10 people</li>
                <li>• Small gatherings: 150g per person</li>
                <li>• Weddings: 50g per person</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-1.5 text-primary">Ordering</h3>
              <ul className="space-y-0.5 text-white/85 text-xs">
                <li>• Order 48 hours in advance</li>
                <li>• 50% advance payment required</li>
                <li>• Cake design charged extra</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-1.5 text-primary">Delivery</h3>
              <ul className="space-y-0.5 text-white/85 text-xs">
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
