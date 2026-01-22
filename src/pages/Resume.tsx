import { motion } from 'framer-motion';
import {
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const RESUME_PDF_URL = 'public/profile/Deepak_Jadon_Resume.pdf'; // put PDF in public/deepak-resume.pdf

const Resume = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'deepakjadon1907@gmail.com',
      href: 'mailto:deepakjadon1907@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 91493 70081',
      href: 'tel:+919149370081',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mathura, India',
      href: null,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'deepakjadon1902',
      href: 'https://github.com/deepakjadon1902',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'deepak-jadon',
      href: 'https://linkedin.com/in/deepak-jadon-612487272',
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'View Live',
      href: 'https://djportfoli0.netlify.app/',
    },
  ];

  const experience = {
    title: 'Web Developer',
    company: 'BrajMart Private Limited',
    location: 'Vrindavan, India (Remote + On-Site)',
    period: 'November 2024 – Present',
    achievements: [
      'Improved UI performance by 40% through code optimization',
      'Reduced API latency by 25% with efficient backend solutions',
      'Reduced production bugs by 35% with comprehensive testing',
      'Built scalable MongoDB data models for high-traffic apps',
      'Implemented JWT authentication & role-based access control',
      'Collaborated in agile sprints delivering features on time',
    ],
  };

  const education = {
    degree: 'B.Tech in Technology',
    institution: 'GLA University, Mathura',
    period: 'July 2022 – May 2026',
    cgpa: '7.43/10',
  };

  const certifications = [
    {
      name: 'Environmental Engineering',
      institution: 'IIT Kharagpur',
      year: '2024',
    },
    {
      name: 'Leadership & Team Effectiveness',
      institution: 'IIT Guwahati',
      year: '2025',
    },
  ];

  const skills = {
    frontend: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    tools: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code'],
  };

  return (
    <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Resume"
          subtitle="A comprehensive overview of my experience and qualifications"
        />

        {/* Download Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Download PDF */}
          <motion.a
            href={RESUME_PDF_URL}
            download="Deepak-Jadon-Resume.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sky text-white font-semibold shadow-sky hover:bg-sky-dark transition-all"
          >
            <Download size={20} />
            Download Resume (PDF)
          </motion.a>

          {/* Open in new tab */}
          <motion.a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all"
          >
            <ExternalLink size={20} />
            View in New Tab
          </motion.a>
        </motion.div>

        {/* Quick Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16 max-w-5xl mx-auto"
        >
          {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="group"
            >
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-xl bg-background border border-border hover:border-sky/30 hover:shadow-md transition-all text-center h-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center mb-2 group-hover:bg-sky transition-colors">
                    <Icon
                      size={18}
                      className="text-sky group-hover:text-white transition-colors"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{label}</p>
                  <p className="text-xs font-medium text-navy group-hover:text-sky transition-colors truncate max-w-full">
                    {value}
                  </p>
                </a>
              ) : (
                <div className="flex flex-col items-center p-4 rounded-xl bg-background border border-border text-center h-full">
                  <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center mb-2">
                    <Icon size={18} className="text-sky" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{label}</p>
                  <p className="text-xs font-medium text-navy">{value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Main Resume Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-sky/5 to-navy/5 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center">
                <FileText size={20} className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-navy">Professional Summary</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Results-driven{' '}
              <span className="text-sky font-medium">Full Stack Developer</span> with 1+ years of
              professional experience building scalable web applications. Specialized in React,
              TypeScript, Node.js, and MongoDB with proven expertise in performance optimization
              (40% UI improvement) and API efficiency (25% latency reduction). Passionate about
              clean code, user-centric design, and delivering high-impact solutions. Available for
              remote work and international freelance opportunities.
            </p>
          </motion.div>

          {/* Experience & Education Row */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-background border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                  <Briefcase size={20} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-navy">Work Experience</h2>
              </div>

              <div className="relative pl-6 border-l-2 border-sky/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-sky border-4 border-background" />

                <div className="mb-4">
                  <h3 className="text-lg font-bold text-navy">{experience.title}</h3>
                  <p className="text-sky font-medium">{experience.company}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {experience.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {experience.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-sky mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Education */}
              <div className="p-6 rounded-2xl bg-background border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <h2 className="text-lg font-bold text-navy">Education</h2>
                </div>
                <h3 className="font-semibold text-navy">{education.degree}</h3>
                <p className="text-sky text-sm font-medium">
                  {education.institution}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {education.period}
                </p>
                <p className="text-sm font-medium text-navy mt-2">
                  CGPA: {education.cgpa}
                </p>
              </div>

              {/* Certifications */}
              <div className="p-6 rounded-2xl bg-background border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                    <Award size={20} className="text-white" />
                  </div>
                  <h2 className="text-lg font-bold text-navy">Certifications</h2>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted/50">
                      <h4 className="font-medium text-navy text-sm">{cert.name}</h4>
                      <p className="text-xs text-sky">{cert.institution}</p>
                      <p className="text-xs text-muted-foreground">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-navy text-white"
          >
            <h2 className="text-xl font-bold mb-6 text-center">Technical Skills</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-sky mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-sky mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-sky mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Availability Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-r from-sky/10 to-navy/10 border border-sky/20 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-semibold text-navy">
                Available for Opportunities
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Open for remote work, freelance projects, and full-time positions worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
