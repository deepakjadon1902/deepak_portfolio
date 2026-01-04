import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Lightbulb, Rocket, Award, Zap, Monitor, Server, Database, Palette, CheckCircle2, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '@/components/FloatingElements';
import StatsCard from '@/components/StatsCard';
import TiltCard from '@/components/TiltCard';

const Index = () => {
  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '8+', label: 'Projects Completed' },
    { value: '40%', label: 'UI Performance Boost' },
    { value: '98', label: 'Lighthouse Score' },
  ];

  const highlights = [
    { icon: Code2, title: 'What I Do', description: 'Building scalable web apps with React, Node.js, TypeScript & MongoDB' },
    { icon: Lightbulb, title: 'Why I Code', description: 'Passionate about creating elegant solutions to complex problems' },
    { icon: Rocket, title: 'My Vision', description: 'Crafting digital products that make a real impact on users' },
    { icon: Award, title: 'Key Achievement', description: 'Achieved 40% UI improvement at BrajMart platform' },
  ];

  const services = [
    { icon: Monitor, title: 'Frontend Development', description: 'Modern, responsive UIs with React, TypeScript & Tailwind CSS' },
    { icon: Server, title: 'Backend Development', description: 'Robust APIs with Node.js, Express & secure authentication' },
    { icon: Database, title: 'Database Design', description: 'Scalable data models with MongoDB & PostgreSQL' },
    { icon: Palette, title: 'UI/UX Design', description: 'User-centered designs with Figma & modern design principles' },
  ];

  const topSkills = ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js'];

  const testimonials = [
    { text: 'Improved our platform performance by 40%', author: 'BrajMart Team', role: 'Client' },
    { text: 'Excellent problem-solving skills', author: 'GLA University', role: 'Academics' },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background - Original */}
      <div className="absolute inset-0 tech-pattern" />
      <FloatingElements />

      {/* Hero Section - Centered with Pro Tech Background */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        {/* Professional Tech Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')",
            }}
          />
          {/* Dark Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-sky/80" />
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-sky/40 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                }}
                animate={{
                  y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
                  x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-8 backdrop-blur-sm border border-sky/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Remote & Freelance Work
            </motion.div>

            {/* Profile Photo - Responsive 4K HD Circular */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <TiltCard className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72">
                <div className="w-full h-full rounded-full overflow-hidden shadow-sky border-4 border-white/20">
                  <img
                    src="/public/Professional 04.png"
                    alt="Deepak Jadon - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </TiltCard>
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-4"
            >
              Deepak Jadon
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-medium text-white/90 mb-6"
            >
              <span>Full Stack</span>
              <span className="text-sky font-bold">Developer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
            >
              Crafting exceptional digital experiences through innovative code, elegant design, and cutting-edge technology solutions. Specialized in React, Node.js & MongoDB.
            </motion.p>

            {/* Social Links */}
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
              Quick <span className="gradient-text-sky">Overview</span>
            </h2>
            <p className="text-muted-foreground">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <StatsCard key={stat.label} {...stat} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
              What I <span className="gradient-text-sky">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              End-to-end web development services from design to deployment
            </p>
            <div className="mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-sky to-sky-light mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-sky/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky/10 to-sky/5 flex items-center justify-center mb-5 mx-auto group-hover:bg-sky group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} className="text-sky group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-sky transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="relative py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
              Why Choose <span className="gradient-text-sky">Me</span>
            </h2>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-sky to-sky-light mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-2xl bg-background border border-border hover:border-sky/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-sky to-sky-light opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-xl bg-sky/10 flex items-center justify-center mb-4 group-hover:bg-sky transition-colors">
                  <Icon size={26} className="text-sky group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-pattern" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Core <span className="text-sky">Technologies</span>
            </h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto">
              The tools and frameworks I use to bring ideas to life
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {topSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-sky hover:border-sky transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link to="/skills">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-sky transition-all"
                >
                  View All Skills
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-sky/5 via-background to-navy/5 border border-border overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-navy/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={20} className="text-sky" />
                  <span className="text-sm font-medium text-sky">Featured Experience</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
                  Web Developer at BrajMart
                </h3>
                <p className="text-muted-foreground mb-6">June 2024 – Present | Remote + On-Site</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    'Improved UI performance by 40%',
                    'Reduced API latency by 25%',
                    'Reduced production bugs by 35%',
                    'Built scalable MongoDB models',
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border"
                    >
                      <CheckCircle2 size={18} className="text-sky flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </motion.div>
                  ))}
                </div>

                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 text-sky font-medium hover:gap-3 transition-all"
                  >
                    Read More About Me
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              What People <span className="gradient-text-sky">Say</span>
            </h2>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-sky to-sky-light mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-navy">{testimonial.author}</p>
                  <p className="text-sm text-sky">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Ready to Build Something <span className="gradient-text-sky">Amazing?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              I'm always excited to collaborate on innovative ideas. Let's turn your vision into reality!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-sky text-white text-lg font-semibold shadow-sky hover:bg-sky-dark transition-all"
                >
                  Let's Talk
                  <ArrowRight size={22} />
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-xl border-2 border-navy text-navy text-lg font-semibold hover:bg-navy hover:text-white transition-all"
                >
                  View Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;