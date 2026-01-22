import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Calendar, Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const About = () => {
  const achievements = [
    'Improved UI performance by 40%',
    'Reduced API latency by 25%',
    'Reduced production bugs by 35%',
    'Built scalable MongoDB data models',
    'Implemented JWT authentication & role-based access',
  ];

  const certifications = [
    { name: 'Environmental Engineering', institution: 'IIT Kharagpur', year: '2024' },
    { name: 'Leadership & Team Effectiveness', institution: 'IIT Guwahati', year: '2025' },
  ];

  return (
    <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A passionate Full Stack Developer dedicated to creating exceptional digital experiences"
        />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28 space-y-6">
              {/* Profile Card */}
              <div className="p-6 rounded-2xl bg-background border border-border">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-sky to-navy flex items-center justify-center text-3xl font-bold text-white mb-4">
                  DJ
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Deepak Jadon</h3>
                <p className="text-sky font-medium mb-4">Full Stack Developer</p>
                
                <div className="space-y-3">
                  {[
                    { icon: MapPin, text: 'Mathura, Uttar Pradesh' },
                    { icon: Phone, text: '+91 91493 70081' },
                    { icon: Mail, text: 'deepakjadon1907@gmail.com' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Icon size={16} className="text-sky" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="p-4 rounded-xl bg-sky/10 border border-sky/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-navy">Available for work</span>
                </div>
                <p className="text-xs text-muted-foreground">Open for remote work & freelance projects</p>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-background border border-border"
            >
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <Briefcase size={20} className="text-sky" />
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer with <span className="text-sky font-medium">1+ years of experience</span> specializing in React, TypeScript, Node.js, and MongoDB. 
                I'm passionate about building scalable, user-focused web applications that deliver exceptional performance. 
                My expertise includes performance optimization, achieving up to 40% UI improvement, and implementing robust authentication systems with JWT and role-based access control.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl bg-background border border-border"
            >
              <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <Calendar size={20} className="text-sky" />
                Work Experience
              </h3>

              <div className="relative pl-6 border-l-2 border-sky/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-sky" />
                
                <div className="mb-2">
                  <h4 className="text-lg font-semibold text-navy">Web Developer</h4>
                  <p className="text-sky font-medium">BrajMart Private Limited</p>
                  <p className="text-sm text-muted-foreground mb-4">November 2024 – Present | Vrindavan, India (Remote + On-Site)</p>
                </div>

                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 size={16} className="text-sky mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 sm:p-8 rounded-2xl bg-background border border-border"
            >
              <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <GraduationCap size={20} className="text-sky" />
                Education
              </h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-navy">B.Tech in Technology</h4>
                <p className="text-sky font-medium">GLA University, Mathura</p>
                <p className="text-sm text-muted-foreground">July 2022 – May 2026 | CGPA: 7.43/10</p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-background border border-border"
            >
              <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <Award size={20} className="text-sky" />
                Certifications
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-muted/50 border border-border hover:border-sky/30 transition-colors"
                  >
                    <h4 className="font-medium text-navy mb-1">{cert.name}</h4>
                    <p className="text-sm text-sky">{cert.institution}</p>
                    <p className="text-xs text-muted-foreground">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
