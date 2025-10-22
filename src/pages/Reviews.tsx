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
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say
          </p>
          
          {/* Average Rating */}
          <div className="mt-8 inline-flex flex-col items-center bg-card rounded-xl p-8 shadow-card">
            <div className="text-6xl font-display font-bold text-primary mb-2">5.0</div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground">Based on {reviews.length} reviews</p>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-card relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

              {/* Avatar & Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-foreground">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-muted-foreground leading-relaxed">
                "{review.comment}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Experience the Excellence Yourself
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Visit us today and discover why our customers keep coming back
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
