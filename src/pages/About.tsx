import { motion } from 'framer-motion';
import { Award, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every creation is made with love and dedication to the craft',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never compromise on quality or attention to detail',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building relationships through shared moments of joy',
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
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of passion, dedication, and the pursuit of perfection in every bite
          </p>
        </motion.div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
              alt="Master pastry chef at work"
              className="rounded-xl shadow-card"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-foreground">
              Crafting Memories Since 2009
            </h2>
            <p className="text-lg text-muted-foreground">
              Founded in the heart of Nicosia, Luxury Bakery began with a simple vision: 
              to create desserts that are not just delicious, but truly unforgettable. 
              Our founder, trained in the finest patisseries of Paris and Vienna, brought 
              together classical techniques and innovative flavors.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we continue that tradition, using only the highest quality ingredients 
              and time-honored methods to craft each pastry, cake, and confection. Every 
              item that leaves our kitchen is a testament to our commitment to excellence.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our talented team of pastry chefs and artisans work tirelessly to ensure 
            every creation meets our exacting standards. With combined experience of over 
            50 years in the culinary arts, we bring passion and expertise to everything we do.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
