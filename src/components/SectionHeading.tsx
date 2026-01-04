import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ title, subtitle, align = 'center' }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
        {title.split(' ').map((word, index) => (
          <span key={index}>
            {index === title.split(' ').length - 1 ? (
              <span className="gradient-text-sky">{word}</span>
            ) : (
              word + ' '
            )}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-sky to-sky-light ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionHeading;
