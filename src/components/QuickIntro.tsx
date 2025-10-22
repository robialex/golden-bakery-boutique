import { motion } from 'framer-motion';

export const QuickIntro = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Where Tradition Meets Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Luxury Bakery, we believe that every dessert should be a work of art. 
              Our master pastry chefs combine time-honored techniques with innovative flavors 
              to create unforgettable experiences.
            </p>
            <p className="text-lg text-muted-foreground">
              Using only the finest ingredients sourced from around the world, we craft each 
              pastry with meticulous attention to detail and an unwavering commitment to quality.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop"
                alt="Luxury bakery interior"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lift">
              <p className="text-4xl font-display font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
