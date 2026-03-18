import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Maria K.',
    text: 'Absolutely divine! The Opera Cake was a masterpiece. Every layer was perfectly balanced and the presentation was stunning.',
    url: 'https://maps.app.goo.gl/kBVyLc6ughdZWirT9',
  },
  {
    name: 'Andreas G.',
    text: 'Best macarons in Nicosia, hands down. The pistachio flavor is out of this world. The staff is incredibly friendly too.',
    url: 'https://maps.app.goo.gl/sdqEqcSuAyFc6chc7',
  },
  {
    name: 'Elena P.',
    text: 'I ordered a custom cake for my daughter\'s birthday and everyone was amazed. It tasted even better than it looked!',
    url: 'https://maps.app.goo.gl/nQS1SNf1Eh1CHMcFA',
  },
  {
    name: 'Dimitris N.',
    text: 'The attention to detail is exceptional. You can taste the quality of the ingredients in every bite. A true gem in Nicosia.',
    url: 'https://maps.app.goo.gl/6ryDdKkLisheCg297',
  },
  {
    name: 'Sofia C.',
    text: 'Their croissants are flaky perfection! I stop by every morning for my coffee and pastry. The ambiance is lovely.',
    url: 'https://maps.app.goo.gl/pY2Fzv7DLHWEgrSf7',
  },
  {
    name: 'Yiannis S.',
    text: 'Exceptional quality and taste. The chocolate éclair transported me straight to Paris. Highly recommend!',
    url: 'https://maps.app.goo.gl/mm8wJ6HqxEbXVbPi6',
  },
  {
    name: 'Christina M.',
    text: 'A hidden gem! The cakes are works of art and the flavors are unforgettable. Best patisserie on the island.',
    url: 'https://maps.app.goo.gl/ZZZgCW7ghhGL7cEk6',
  },
];

const GoogleGLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google review">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ReviewCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={() => window.open(review.url, '_blank', 'noopener,noreferrer')}
    className="bg-[#162438] border border-[#C6A136]/15 rounded-xl p-5 lg:p-6 relative group
               hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(198,161,54,0.15)] transition-all duration-300 cursor-pointer"
  >
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#C6A136] text-[#C6A136]" />
      ))}
    </div>
    <p className="text-sm lg:text-[15px] text-white/75 leading-relaxed mb-4">
      "{review.text}"
    </p>
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-white/90">{review.name}</span>
      <GoogleGLogo />
    </div>
  </motion.div>
);

export const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalSlides = reviews.length;

  const scrollToSlide = (index: number) => {
    const clamped = Math.max(0, Math.min(index, totalSlides - 1));
    setCurrentSlide(clamped);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / totalSlides;
      scrollRef.current.scrollTo({ left: cardWidth * clamped, behavior: 'smooth' });
    }
  };

  // Sync scroll position with currentSlide on touch swipe
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const cardWidth = el.scrollWidth / totalSlides;
        const newIndex = Math.round(el.scrollLeft / cardWidth);
        setCurrentSlide(Math.max(0, Math.min(newIndex, totalSlides - 1)));
      }, 100);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [totalSlides]);

  return (
    <section className="py-14 md:py-20 bg-[#1B2C4B]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-display font-bold text-center text-[#C6A136] mb-2"
        >
          What Our Guests Say
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center gap-0.5 mb-8 md:mb-12"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-[#C6A136] text-[#C6A136]" />
          ))}
        </motion.div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        {/* Mobile: Horizontal swipeable carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {reviews.map((review, index) => (
              <div key={review.name} className="snap-center shrink-0 w-[85vw] max-w-[320px]">
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#162438] border border-[#C6A136]/15 rounded-xl p-5 relative h-full"
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#C6A136] text-[#C6A136]" />
                    ))}
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed mb-4">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white/90">{review.name}</span>
                    <GoogleGLogo />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => scrollToSlide(currentSlide - 1)}
              disabled={currentSlide === 0}
              className="p-2 rounded-full border border-[#C6A136]/30 text-[#C6A136] disabled:opacity-30 transition-opacity min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={`rounded-full transition-all duration-300 ${
                    currentSlide === i
                      ? 'w-6 h-2 bg-[#C6A136]'
                      : 'w-2 h-2 bg-[#C6A136]/30'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => scrollToSlide(currentSlide + 1)}
              disabled={currentSlide === totalSlides - 1}
              className="p-2 rounded-full border border-[#C6A136]/30 text-[#C6A136] disabled:opacity-30 transition-opacity min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
