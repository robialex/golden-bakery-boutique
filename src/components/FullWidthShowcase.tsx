import { motion } from 'framer-motion';

interface FullWidthShowcaseProps {
  imageSrc: string;
  alt: string;
}

export const FullWidthShowcase = ({ imageSrc, alt }: FullWidthShowcaseProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full my-8 lg:my-10"
    >
      <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(27,44,75,0.12)]">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover brightness-105"
          loading="lazy"
        />
        {/* Subtle vignette overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none" />
      </div>
    </motion.div>
  );
};
