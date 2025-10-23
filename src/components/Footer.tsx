import { Instagram, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              INGRID BAKES
            </h3>
            <p className="text-secondary-foreground/80 text-sm">
              Handcrafted cakes and desserts made with love in Cyprus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-secondary-foreground/80 text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                <a 
                  href="https://maps.app.goo.gl/aHkH8fGujYyrwjBc8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  View Location on Map
                </a>
              </li>
              <li className="flex items-center text-secondary-foreground/80 text-sm">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                <a href="tel:+35799127455" className="hover:text-primary transition-colors">
                  99127455
                </a>
              </li>
              <li className="flex items-center text-secondary-foreground/80 text-sm">
                <Instagram className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                <a 
                  href="https://www.instagram.com/ingridbakes.cy"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  @ingridbakes.cy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/80">
          <p>&copy; 2024 INGRID BAKES. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
