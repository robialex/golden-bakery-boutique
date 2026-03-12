import { motion, useScroll, useTransform } from 'framer-motion';
import vitrina from '@/assets/gallery/vitrina.jpg';
import birthdayCakes from '@/assets/gallery/birthday-cakes.jpg';
import bdayCakes2 from '@/assets/gallery/bday-cakes-2.jpg';
import blueberry from '@/assets/gallery/blueberry.jpg';
import blueberry2 from '@/assets/gallery/blueberry-2.jpg';
import heartPecan from '@/assets/gallery/heart-pecan-cake.jpg';
import showcasingCakes from '@/assets/gallery/showcasing-cakes.jpg';
import showcasingBakes from '@/assets/gallery/showcasing-bakes.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Gallery = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={vitrina}
            alt="Ingrid Bakes boutique café display"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary/80" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-wide"
            style={{ color: '#C6A136', letterSpacing: '0.04em' }}
          >
            Our Story, Captured.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4 text-base md:text-lg font-body max-w-md mx-auto"
            style={{ color: '#F5F1E6' }}
          >
            A glimpse into our world of handcrafted desserts and warm hospitality
          </motion.p>
        </motion.div>
      </section>

      {/* ── GALLERY BODY ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#FCF9F0' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">

          {/* ROW 1 — Elegant Split */}
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Left: Large square storefront */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0}
              className="relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={showcasingCakes}
                alt="Selection of premium handcrafted cakes at Ingrid Bakes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>

            {/* Right: Two stacked */}
            <div className="flex flex-col gap-4 md:gap-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={0.15}
                className="relative overflow-hidden rounded-xl flex-1"
              >
                <img
                  src={bdayCakes2}
                  alt="Artisan pastry assembly close-up"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={0.25}
                className="relative overflow-hidden rounded-xl flex-1"
              >
                <img
                  src={blueberry}
                  alt="Fresh blueberry tarts with vanilla cream"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* ROW 2 — Textured Focus: Large Centered Vertical */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="relative overflow-hidden rounded-2xl w-full md:w-3/5 aspect-[3/4] shadow-[0_12px_40px_rgba(27,44,75,0.15)]">
              <img
                src={heartPecan}
                alt="Heart-shaped pecan tart — signature creation"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* ROW 3 — Quote + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Left: Quote over texture */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0}
              className="relative overflow-hidden rounded-xl flex items-center justify-center p-10 md:p-14"
              style={{
                background: 'linear-gradient(135deg, #1B2C4B 0%, #263d5e 100%)',
                minHeight: '280px',
              }}
            >
              <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C6A136\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }} />
              <blockquote className="relative text-center">
                <p className="text-xl md:text-2xl lg:text-3xl font-display italic leading-relaxed" style={{ color: '#C6A136' }}>
                  "Crafted with passion,<br />detailed with love."
                </p>
                <footer className="mt-4 text-sm font-body tracking-widest uppercase" style={{ color: '#F5F1E680' }}>
                  — Ingrid Bakes
                </footer>
              </blockquote>
            </motion.div>

            {/* Right: Cozy store image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.15}
              className="relative overflow-hidden rounded-xl aspect-square md:aspect-auto"
              style={{ minHeight: '280px' }}
            >
              <img
                src={showcasingBakes}
                alt="Artisan pastries and savory bakes at the café"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* ROW 4 — Final duo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0}
              className="relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={birthdayCakes}
                alt="Beautiful birthday cakes display at Ingrid Bakes Nicosia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.12}
              className="relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={blueberry2}
                alt="Blueberry tarts on elegant vintage plates"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#1B2C4B' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center px-6"
        >
          <p className="text-lg md:text-xl font-body mb-6" style={{ color: '#F5F1E6CC' }}>
            Follow us for new creations
          </p>
          <a
            href="https://www.instagram.com/ingridbakes.cy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: '#C6A136',
              color: '#FFFFFF',
              boxShadow: '0 4px 20px rgba(198,161,54,0.3)',
            }}
          >
            @IngridBakes
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;
