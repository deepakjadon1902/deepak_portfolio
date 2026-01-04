import { motion } from 'framer-motion';
import { Code2, Laptop, Database, Terminal, Cpu, Braces } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Code2, delay: 0, x: '10%', y: '20%', size: 32 },
    { Icon: Laptop, delay: 0.5, x: '85%', y: '15%', size: 40 },
    { Icon: Database, delay: 1, x: '75%', y: '70%', size: 28 },
    { Icon: Terminal, delay: 1.5, x: '15%', y: '75%', size: 36 },
    { Icon: Cpu, delay: 2, x: '90%', y: '45%', size: 30 },
    { Icon: Braces, delay: 2.5, x: '5%', y: '50%', size: 34 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map(({ Icon, delay, x, y, size }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className="absolute"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="p-3 rounded-xl bg-sky/5 border border-sky/10 shadow-sm">
              <Icon size={size} className="text-sky/40" />
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-sky/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-navy/10 rounded-full blur-3xl"
      />
    </div>
  );
};

export default FloatingElements;
