import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import birthdayCakes from '@/assets/gallery/birthday-cakes.jpg';
import bdayCakes2 from '@/assets/gallery/bday-cakes-2.jpg';
import blueberry from '@/assets/gallery/blueberry.jpg';
import blueberry2 from '@/assets/gallery/blueberry-2.jpg';
import heartPecan from '@/assets/gallery/heart-pecan-cake.jpg';
import vitrina from '@/assets/gallery/vitrina.jpg';
import showcasingCakes from '@/assets/gallery/showcasing-cakes.jpg';
import showcasingBakes from '@/assets/gallery/showcasing-bakes.jpg';

const images = [
  { src: birthdayCakes, alt: "Birthday celebration cakes" },
  { src: bdayCakes2, alt: "Custom birthday cakes" },
  { src: blueberry, alt: "Blueberry dessert" },
  { src: blueberry2, alt: "Blueberry cake creation" },
  { src: heartPecan, alt: "Heart-shaped pecan cake" },
  { src: vitrina, alt: "Bakery display case" },
  { src: showcasingCakes, alt: "Showcase of artisan cakes" },
  { src: showcasingBakes, alt: "Fresh baked goods" },
];

export const EdgeToEdgeShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38 }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-3"
        >
          Featured <span className="text-primary">Creations</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38, delay: 0.1 }}
          className="text-center text-muted-foreground text-sm md:text-base"
        >
          Discover our handcrafted masterpieces
        </motion.p>
        
        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-8 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Scattered masonry layout */}
      <div className="hidden md:block relative w-full px-0" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="relative h-[600px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`img1-${currentIndex}`}
              initial={{ opacity: 0, y: -30, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 30, x: 30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-[55%] h-[380px] shadow-xl"
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`img2-${currentIndex}`}
              initial={{ opacity: 0, y: 30, x: 30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -30, x: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              className="absolute bottom-0 right-0 w-[48%] h-[320px] shadow-xl"
            >
              <img
                src={images[(currentIndex + 1) % images.length].src}
                alt={images[(currentIndex + 1) % images.length].alt}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow Navigation - Desktop */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/70 hover:bg-card/90 p-3 rounded-full shadow-md transition-all duration-300 z-10 backdrop-blur-sm border border-primary/20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-card-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/70 hover:bg-card/90 p-3 rounded-full shadow-md transition-all duration-300 z-10 backdrop-blur-sm border border-primary/20"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-card-foreground" />
        </button>
      </div>

      {/* Mobile: Two smaller images scattered */}
      <div className="md:hidden relative w-full px-4">
        <div className="relative h-[400px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-img1-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-[58%] h-[240px] shadow-lg"
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-img2-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.15 }}
              className="absolute bottom-0 right-0 w-[55%] h-[200px] shadow-lg"
            >
              <img
                src={images[(currentIndex + 1) % images.length].src}
                alt={images[(currentIndex + 1) % images.length].alt}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow Navigation - Mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/70 hover:bg-card/90 p-2.5 rounded-full shadow-md transition-all duration-300 z-10 backdrop-blur-sm border border-primary/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-card-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/70 hover:bg-card/90 p-2.5 rounded-full shadow-md transition-all duration-300 z-10 backdrop-blur-sm border border-primary/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-card-foreground" />
        </button>
      </div>
    </section>
  );
};