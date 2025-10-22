import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Luxury Bakery, we collect information that you provide directly to us when you 
                place an order, sign up for our newsletter, or contact us. This may include your 
                name, email address, phone number, delivery address, and payment information.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                3. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                4. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing 
                experience, analyze site traffic, and understand where our visitors are coming from. 
                You can control cookies through your browser settings.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                5. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may 
                also object to or restrict certain processing of your data. To exercise these rights, 
                please contact us at info@luxurybakery.cy.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                6. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at 
                info@luxurybakery.cy or call us at +357 22 123 456.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
