import { motion } from 'framer-motion';
import ProjectCard, { Project } from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

const projects: Project[] = [
  {
    id: 1,
    title: 'My DriveMate',
    description: 'A comprehensive ride-sharing platform connecting drivers and passengers for seamless, eco-friendly transportation solutions.',
    image: '/public/drivemate.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    liveUrl: 'https://my-drive-mate.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/My-DriveMate',
    achievements: ['Real-time ride tracking', '95+ Lighthouse performance'],
    category: 'Full-Stack',
    featured: true,
  },
  {
    id: 2,
    title: 'BrajBuzz Tech',
    description: 'Modern company showcase website with dynamic content management and optimized performance for tech businesses.',
    image: '/public/brajbuzztech.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Google cloud Youtube API'],
    liveUrl: 'https://www.brajbuzztech.com/',
    githubUrl: 'https://github.com/deepakjadon1902/BrajBuzz_Tech',
    achievements: ['40% faster load times'],
    category: 'Frontend',
    featured: true,
  },
  {
    id: 3,
    title: 'EventFlow',
    description: 'Complete event management system with ticketing, scheduling, and real-time attendee tracking capabilities.',
    image: '/public/eventflow.png',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Supabase'],
    liveUrl: 'https://event-flow-silk.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/EventFlow',
    achievements: ['Handles 1000+ concurrent users'],
    category: 'Full-Stack',
    featured: true,
  },
  {
    id: 4,
    title: 'Social Engagement Platform',
    description: 'Built for Liklet - a social engagement platform with interactive features and real-time communication.',
    image: '/public/liklet.png',
    tech: ['React', 'MongoDB', 'Socket.io', 'JWT'],
    liveUrl: 'https://www.liklet.com/',
    githubUrl: 'https://github.com/deepakjadon1902/Liklet',
    achievements: ['25% reduced API latency'],
    category: 'Full-Stack',
  },
  {
    id: 5,
    title: 'DriveEase',
    description: 'Vehicle service booking platform with real-time availability tracking and automated scheduling.',
    image: '/public/driveease.png',
    tech: ['React', 'Typescript', 'PostgreSQL', 'Supabase'],
    liveUrl: 'https://reliable-daifuku-e27641.netlify.app/',
    githubUrl: 'https://github.com/deepakjadon1902/DriveEase',
    achievements: ['Integrated payment gateway'],
    category: 'Full-Stack',
  },
  {
    id: 6,
    title: 'Student Record System',
    description: 'Comprehensive student management system with grade tracking, attendance, and performance analytics.',
    image: '/public/student record.png',
    tech: ['React', 'TypeScript', 'Tailwind Css', 'Vite'],
    liveUrl: 'https://student-record-five.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/Student-Record',
    achievements: ['Analytics dashboard'],
    category: 'Frontend',
  },
  {
    id: 7,
    title: 'PicSync',
    description: 'Image synchronization platform with cloud storage integration and real-time collaboration features.',
    image: '/public/picsync.png',
    tech: ['React', 'Typescript', 'PostgreSQL', 'Supabase'],
    liveUrl: 'https://nimble-quokka-618ee2.netlify.app/login',
    githubUrl: 'https://github.com/deepakjadon1902/PicSync-Photo-Gallery-Application',
    achievements: ['Real-time sync'],
    category: 'Full-Stack',
  },
  {
    id: 8,
    title: 'NagrikSahayak',
    description: 'Civic engagement platform connecting citizens with local government services and community initiatives.',
    image: '/public/nagriksahayak.png',
    tech: ['React', 'TypeScript', 'Tailwind Css', 'Vite'],
    liveUrl: 'https://nagrik-sahayak-app.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/NagrikSahayak-App',
    achievements: ['Multilingual support'],
    category: 'Frontend',
  },
  {
    id: 9,
    title: 'Task Management App',
    description: 'Productivity application with drag-and-drop task organization, team collaboration, and deadline tracking.',
    image: '/public/time managment.png',
    tech: ['React', 'TypeScript', 'Tailwind Css', 'Vite'],
    liveUrl: 'https://task-managment-system-sable.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/Task-Managment-System',
    achievements: ['Drag & drop interface'],
    category: 'Frontend',
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          title="My Projects"
          subtitle="A collection of projects I've built, from full-stack applications to frontend showcases"
        />

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
            <span className="w-10 h-1 bg-gradient-to-r from-sky to-blue-400 rounded-full" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
            <span className="w-10 h-1 bg-navy rounded-full" />
            Other Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 3} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;
