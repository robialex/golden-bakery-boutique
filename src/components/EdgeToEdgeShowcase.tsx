import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bdayCakes2 from '@/assets/gallery/bday-cakes-2.jpg';
import birthdayCakes from '@/assets/gallery/birthday-cakes.jpg';
import blueberry2 from '@/assets/gallery/blueberry-2.jpg';
import blueberry from '@/assets/gallery/blueberry.jpg';
import heartPecan from '@/assets/gallery/heart-pecan-cake.jpg';
import vitrina from '@/assets/gallery/vitrina.jpg';
import showcasingCakes from '@/assets/gallery/showcasing-cakes.jpg';
import showcasingBakes from '@/assets/gallery/showcasing-bakes.jpg';

const images = [
  { src: birthdayCakes, alt: 'Ingrid Bakes beautiful birthday cakes display' },
  { src: bdayCakes2, alt: 'Artisan chocolate petit fours with elegant decoration' },
  { src: blueberry, alt: 'Fresh blueberry tarts with vanilla cream' },
  { src: vitrina, alt: 'Ingrid Bakes boutique café display case' },
  { src: showcasingCakes, alt: 'Selection of premium handcrafted cakes' },
  { src: heartPecan, alt: 'Heart-shaped pecan tart' },
  { src: blueberry2, alt: 'Blueberry tarts on elegant vintage plates' },
  { src: showcasingBakes, alt: 'Artisan pastries and savory bakes' },
];

export const EdgeToEdgeShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section 
      className="relative w-full bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Desktop: Two images side by side */}
      <div className="hidden md:grid md:grid-cols-2 gap-0 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`left-${currentIndex}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[50vh] md:h-[60vh] overflow-hidden"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`right-${currentIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative h-[50vh] md:h-[60vh] overflow-hidden mt-0 md:mt-12"
          >
            <img
              src={images[(currentIndex + 1) % images.length].src}
              alt={images[(currentIndex + 1) % images.length].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile: Single image */}
      <div className="md:hidden relative h-[45vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex || index === (currentIndex + 1) % images.length
                ? 'w-8 h-2 bg-primary'
                : 'w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
