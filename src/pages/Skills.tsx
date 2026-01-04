import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Users, 
  Palette,
  FileCode,
  Boxes,
  Workflow,
  GitBranch,
  Terminal,
  Search,
  MessageSquare,
  Bug,
  Lightbulb,
  Zap,
  Globe,
  Shield,
  Smartphone,
  TrendingUp
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'from-sky to-sky-light',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vite', level: 85 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-navy to-navy-light',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 85 },
      { name: 'Supabase', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'JWT/OAuth', level: 85 },
      { name: 'Role-Based Access', level: 82 },
    ],
  },
  {
    title: 'Tools & Testing',
    icon: Wrench,
    color: 'from-sky-dark to-sky',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'Postman', level: 88 },
      { name: 'Thunder Client', level: 85 },
      { name: 'Figma', level: 75 },
      { name: 'VS Code', level: 95 },
      { name: 'SEO Optimization', level: 80 },
      { name: 'Performance Tuning', level: 85 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'from-navy-light to-navy',
    skills: [
      { name: 'Problem-Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Debugging', level: 92 },
      { name: 'Team Collaboration', level: 88 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Quick Learner', level: 95 },
      { name: 'Time Management', level: 88 },
      { name: 'Adaptability', level: 90 },
    ],
  },
];

const expertiseAreas = [
  { icon: Globe, title: 'Web Applications', description: 'Full-stack web apps with modern frameworks' },
  { icon: Smartphone, title: 'Responsive Design', description: 'Mobile-first, cross-browser compatible' },
  { icon: Shield, title: 'Security', description: 'JWT, OAuth & role-based access control' },
  { icon: TrendingUp, title: 'Performance', description: '98+ Lighthouse scores & optimization' },
];

const Skills = () => {
  return (
    <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto"
        >
          {expertiseAreas.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-5 rounded-xl bg-background border border-border hover:border-sky/30 hover:shadow-md transition-all text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center mx-auto mb-3">
                <Icon size={24} className="text-sky" />
              </div>
              <h3 className="font-semibold text-navy text-sm mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-background border border-border"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md`}>
                  <category.icon size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.skills.length} technologies</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group p-4 rounded-xl bg-muted/50 border border-transparent hover:border-sky/20 hover:bg-sky/5 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-navy text-sm group-hover:text-sky transition-colors">{skill.name}</span>
                      <span className="text-xs font-semibold text-sky">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-sky to-sky-light"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-navy via-navy-light to-navy text-white max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              My Development <span className="text-sky">Philosophy</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              I believe in writing clean, maintainable code that scales. Every project is an opportunity to learn something new and push boundaries.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Performance First', value: '98', suffix: '/100', label: 'Lighthouse Score' },
              { title: 'Code Quality', value: '35', suffix: '%', label: 'Bug Reduction' },
              { title: 'User Experience', value: '40', suffix: '%', label: 'UI Improvement' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl sm:text-5xl font-bold text-sky mb-2">
                  {item.value}<span className="text-2xl">{item.suffix}</span>
                </div>
                <div className="text-lg font-medium text-white mb-1">{item.title}</div>
                <div className="text-sm text-white/60">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools I Love */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-navy mb-6">
            Tools I Use <span className="gradient-text-sky">Daily</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['VS Code', 'Git', 'GitHub', 'Postman', 'Figma', 'Chrome DevTools', 'MongoDB Compass', 'Terminal'].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2.5 rounded-full bg-muted text-navy font-medium text-sm hover:bg-sky hover:text-white transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Skills;
