import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl sm:text-9xl font-bold gradient-text-sky mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky text-white font-medium shadow-sky hover:bg-sky-dark transition-colors"
              >
                <Home size={18} />
                Go Home
              </motion.button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-navy text-navy font-medium hover:bg-navy hover:text-white transition-all"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
