import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  level: number;
  delay?: number;
}

const SkillCard = ({ name, icon: Icon, level, delay = 0 }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="group relative p-4 rounded-xl bg-background border border-border hover:border-sky/30 transition-all duration-300 hover:shadow-sky"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center mb-3 group-hover:bg-sky group-hover:text-white transition-all duration-300">
          <Icon size={24} className="text-sky group-hover:text-white transition-colors" />
        </div>
        <h4 className="text-sm font-medium text-navy mb-2">{name}</h4>
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: delay + 0.3 }}
            viewport={{ once: true }}
            className="h-full rounded-full bg-gradient-to-r from-sky to-sky-light"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
