import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { LuxuryButton } from "@/components/LuxuryButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-9xl font-display font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. Perhaps you'd like to browse our delicious menu instead?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <LuxuryButton size="lg">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </LuxuryButton>
            </Link>
            <Link to="/menu">
              <LuxuryButton variant="ghost" size="lg">
                Browse Menu
              </LuxuryButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
