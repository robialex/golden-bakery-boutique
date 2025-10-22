import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Luxury Bakery website and services, you accept and agree 
                to be bound by these Terms of Service. If you do not agree to these terms, please 
                do not use our services.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                2. Orders and Payment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you place an order with Luxury Bakery:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>All orders are subject to acceptance and availability</li>
                <li>Prices are in Euros and include applicable taxes</li>
                <li>Payment must be completed before order fulfillment</li>
                <li>We reserve the right to refuse or cancel any order</li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                3. Delivery and Pickup
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Delivery times are estimates and not guaranteed. We will make reasonable efforts 
                to deliver your order on time. For pickup orders, please collect your order during 
                our business hours. Orders not collected within 24 hours may be subject to 
                cancellation.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                4. Cancellations and Refunds
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Custom orders require at least 48 hours notice for cancellation. Standard orders 
                may be cancelled up to 24 hours before scheduled delivery or pickup. Refunds will 
                be processed within 5-7 business days.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                5. Product Quality
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We take pride in the quality of our products. If you are not satisfied with your 
                order, please contact us within 24 hours of receipt. We will work with you to 
                resolve any issues.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                6. Allergen Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our products may contain or come into contact with common allergens including nuts, 
                dairy, eggs, and gluten. Please inform us of any allergies when placing your order.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                7. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at 
                info@luxurybakery.cy or call +357 22 123 456.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
