import { motion } from 'framer-motion';
import bdayCakes2 from '@/assets/gallery/bday-cakes-2.jpg';
import birthdayCakes from '@/assets/gallery/birthday-cakes.jpg';
import blueberry2 from '@/assets/gallery/blueberry-2.jpg';
import blueberry from '@/assets/gallery/blueberry.jpg';
import heartPecan from '@/assets/gallery/heart-pecan-cake.jpg';
import vitrina from '@/assets/gallery/vitrina.jpg';
import showcasingCakes from '@/assets/gallery/showcasing-cakes.jpg';
import showcasingBakes from '@/assets/gallery/showcasing-bakes.jpg';

const galleryImages = [
  { src: birthdayCakes, alt: 'Beautiful birthday cakes display at Ingrid Bakes Nicosia' },
  { src: bdayCakes2, alt: 'Artisan chocolate petit fours with elegant decoration' },
  { src: blueberry, alt: 'Fresh blueberry tarts with vanilla cream' },
  { src: blueberry2, alt: 'Blueberry tarts on elegant vintage plates' },
  { src: vitrina, alt: 'Ingrid Bakes boutique café display case' },
  { src: heartPecan, alt: 'Heart-shaped pecan tart' },
  { src: showcasingCakes, alt: 'Selection of premium handcrafted cakes' },
  { src: showcasingBakes, alt: 'Artisan pastries and savory bakes' },
];

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-center">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore our collection of handcrafted cakes, pastries, and artisan desserts
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-lift transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
