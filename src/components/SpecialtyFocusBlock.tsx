import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface SpecialtyFocusBlockProps {
  imageSrc: string;
  headline: string;
  bodyText: string;
  ctaText: string;
  ctaLink: string;
}

export const SpecialtyFocusBlock = ({
  imageSrc,
  headline,
  bodyText,
  ctaText,
  ctaLink
}: SpecialtyFocusBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-[90%] max-w-md lg:max-w-lg mx-auto my-10 lg:my-12"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(92,26,26,0.25)] bg-[#5C1A1A]">
        {/* Image section */}
        <div className="relative h-44 md:h-56 lg:h-64 overflow-hidden">
          <img
            src={imageSrc}
            alt={headline}
            className="w-full h-full object-cover brightness-95"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5C1A1A] via-[#5C1A1A]/30 to-transparent" />
        </div>

        {/* Content section */}
        <div className="p-5 md:p-6 lg:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#F5F1E6] mb-3">
            {headline}
          </h3>
          <p className="text-sm md:text-base text-[#F5F1E6]/85 leading-relaxed mb-5">
            {bodyText}
          </p>
          <motion.a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
            className="inline-flex items-center justify-center gap-2 w-full max-w-[280px] h-12 bg-[#C6A136] text-white rounded-xl font-semibold text-base shadow-[0_4px_16px_rgba(198,161,54,0.3)] hover:shadow-[0_0_20px_rgba(198,161,54,0.5)] transition-shadow duration-300"
          >
            {ctaText}
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
