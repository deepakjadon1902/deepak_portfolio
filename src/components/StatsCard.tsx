import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface StatsCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatsCard = ({ value, label, delay = 0 }: StatsCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ''));
      const suffix = value.replace(/\d/g, '');
      let current = 0;
      const increment = numericValue / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current) + suffix);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-6 rounded-2xl bg-background border border-border hover:border-sky/30 transition-all duration-300 hover:shadow-sky"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <h3 className="text-3xl sm:text-4xl font-bold gradient-text-sky mb-2">
          {displayValue}
        </h3>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
};

export default StatsCard;
