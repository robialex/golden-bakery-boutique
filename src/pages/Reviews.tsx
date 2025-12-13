import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Maria Konstantinou',
      rating: 5,
      date: 'December 2024',
      comment: 'Absolutely divine! The Opera Cake was a masterpiece. Every layer was perfectly balanced and the presentation was stunning. Will definitely be back!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    },
    {
      name: 'Andreas Georgiou',
      rating: 5,
      date: 'November 2024',
      comment: 'Best macarons in Nicosia, hands down. The pistachio flavor is out of this world. The staff is incredibly friendly and knowledgeable too.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Andreas',
    },
    {
      name: 'Elena Papadopoulos',
      rating: 5,
      date: 'November 2024',
      comment: 'I ordered a custom cake for my daughter\'s birthday and everyone was amazed. Not only did it look beautiful, but it tasted even better than it looked!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    },
    {
      name: 'Dimitris Nicolaou',
      rating: 5,
      date: 'October 2024',
      comment: 'The attention to detail is exceptional. You can taste the quality of the ingredients in every bite. A true gem in Nicosia.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dimitris',
    },
    {
      name: 'Sofia Christodoulou',
      rating: 5,
      date: 'October 2024',
      comment: 'Their croissants are flaky perfection! I stop by every morning for my coffee and pastry. The ambiance is lovely and the service is always warm.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia',
    },
    {
      name: 'Yiannis Stavrou',
      rating: 5,
      date: 'September 2024',
      comment: 'Exceptional quality and taste. The chocolate éclair transported me straight to Paris. Highly recommend to anyone who appreciates fine pastries.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yiannis',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F5F1E6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-[#1B2C4B] mb-3">
            Customer Reviews
          </h1>
          <p className="text-base lg:text-lg text-[#1B2C4B]/60 max-w-xl mx-auto">
            Don't just take our word for it — hear from our happy customers
          </p>
          
          {/* Rating Summary */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="text-4xl lg:text-5xl font-display font-bold text-[#1B2C4B]">5.0</div>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#C6A136] text-[#C6A136]" />
                ))}
              </div>
              <p className="text-sm text-[#1B2C4B]/60">{reviews.length} reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-10">
          {reviews.map((review, index) => (
            <motion.div
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-xl p-5 lg:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-5 right-5 h-6 w-6 text-[#C6A136]/15" />

              {/* Avatar & Info */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full bg-[#F5F1E6]"
                />
                <div>
                  <h3 className="font-semibold text-[#1B2C4B] text-sm lg:text-base">{review.name}</h3>
                  <p className="text-xs text-[#1B2C4B]/50">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C6A136] text-[#C6A136]" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm lg:text-[15px] text-[#1B2C4B]/70 leading-relaxed">
                "{review.comment}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Leave a Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-[#1B2C4B]/60 mb-4 text-sm">
            Enjoyed your visit? We'd love to hear from you!
          </p>
          <motion.a
            href="https://search.google.com/local/writereview?placeid=ChIJ-Qt98UYX3hQR9mcnlI2FOzc"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B2C4B] hover:bg-[#243A5E] text-white font-semibold text-sm rounded-xl transition-colors duration-200"
          >
            <Star className="h-4 w-4" />
            Leave a Review on Google
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
