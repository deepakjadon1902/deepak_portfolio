import { motion } from 'framer-motion';
import ProjectCard, { Project } from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

const projects: Project[] = [
  {
    id: 1,
    title: 'My DriveMate',
    description: 'Problem: coordinating drivers and riders efficiently in real time. Solution: built a ride‑sharing platform with live tracking and smart matching. Impact: smoother rides and 95+ Lighthouse performance.',
    image: '/images/projects/drivemate.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    liveUrl: 'https://my-drive-mate.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/My-DriveMate',
    achievements: ['Real-time ride tracking', '95+ Lighthouse performance'],
    category: 'Full-Stack',
    featured: false,
    screenshots: ['/images/projects/drivemate.png'],
    caseStudy: {
      problem: 'Users struggled to find reliable rides quickly, and drivers lacked real-time visibility.',
      solution: 'Built a ride-sharing platform with live tracking, instant matching, and responsive UX.',
      impact: 'Created a smoother booking flow with fast performance and clearer trip status.',
    },
  },
  {
    id: 2,
    title: 'BrajBuzz Tech',
    description: 'Problem: outdated web presence and slow load times. Solution: modern marketing site with optimized assets and clean UX. Impact: faster loads and stronger brand credibility.',
    image: '/images/projects/brajbuzztech1.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Google cloud Youtube API'],
    liveUrl: 'https://www.brajbuzztech.com/',
    githubUrl: 'https://github.com/deepakjadon1902/BrajBuzz_Tech',
    achievements: ['40% faster load times'],
    category: 'Frontend',
    featured: true,
    screenshots: ['/images/projects/brajbuzztech1.png'],
    caseStudy: {
      problem: 'The business needed a modern web presence and faster load performance.',
      solution: 'Designed a clean marketing site with optimized assets and content structure.',
      impact: 'Improved perceived speed and trust, increasing credibility for clients.',
    },
  },
  {
  id: 10,
  title: 'Shree Giriraj Sewa Sadan',
  description: 'Problem: guests needed clear information and quick booking. Solution: built a responsive site with facilities, nearby places, and WhatsApp booking. Impact: easier inquiries and higher trust.',
  image: '/images/projects/shreegiriraj.png',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  liveUrl: 'https://www.shrigirirajsewasadan.org/',
  githubUrl: 'https://github.com/deepakjadon1902/shreegiriraj',
  achievements: [
    'Fully responsive UI',
    'WhatsApp integration for direct booking & support',
    'Clean and informative design',
    'Optimized performance',
  ],
  category: 'Frontend',
  featured: true,
  screenshots: ['/images/projects/shreegiriraj.png'],
  caseStudy: {
    problem: 'Pilgrims needed clear room details and a simple way to book quickly.',
    solution: 'Built a responsive site with facilities info, nearby places, and WhatsApp booking.',
    impact: 'Reduced booking friction and improved clarity for visitors.',
  },
},
  {
    id: 3,
    title: 'EventFlow',
    description: 'Problem: manual event coordination caused delays and errors. Solution: built an event system with ticketing, schedules, and live tracking. Impact: smoother operations at scale.',
    image: '/images/projects/eventflow.png',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Supabase'],
    liveUrl: 'https://event-flow-silk.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/EventFlow',
    achievements: ['Handles 1000+ concurrent users'],
    category: 'Full-Stack',
    featured: true,
    screenshots: ['/images/projects/eventflow.png'],
    caseStudy: {
      problem: 'Event coordination was manual, causing errors and delays.',
      solution: 'Created a full event system with ticketing, scheduling, and live tracking.',
      impact: 'Enabled smoother operations at scale with clearer attendee management.',
    },
  },
  {
    id: 4,
    title: 'Social Engagement Platform - Liklet',
    description: 'Problem: low engagement from static experiences. Solution: added real‑time features and interactive flows. Impact: higher activity and faster communication.',
    image: '/images/projects/liklet.png',
    tech: ['React', 'MongoDB', 'Socket.io', 'JWT'],
    liveUrl: 'https://www.liklet.com/',
    githubUrl: 'https://github.com/deepakjadon1902/Liklet_Portfolio',
    achievements: ['25% reduced API latency'],
    category: 'Full-Stack',
    featured: true,
    screenshots: ['/images/projects/liklet.png'],
    caseStudy: {
      problem: 'Engagement was low with static user experiences.',
      solution: 'Added real-time features, authentication, and interactive flows.',
      impact: 'Improved responsiveness and reduced API latency.',
    },
  },
  {
    id: 5,
    title: 'DriveEase',
    description: 'Problem: booking vehicle services was manual and error‑prone. Solution: automated scheduling with live availability. Impact: faster bookings and fewer conflicts.',
    image: '/images/projects/driveease.png',
    tech: ['React', 'Typescript', 'PostgreSQL', 'Supabase'],
    liveUrl: 'https://reliable-daifuku-e27641.netlify.app/',
    githubUrl: 'https://github.com/deepakjadon1902/DriveEase',
    achievements: ['Integrated payment gateway'],
    category: 'Full-Stack',
    featured: false,
    screenshots: ['/images/projects/driveease.png'],
    caseStudy: {
      problem: 'Vehicle service booking was manual and prone to scheduling conflicts.',
      solution: 'Automated bookings with real-time availability and payment integration.',
      impact: 'Faster bookings with fewer conflicts and smoother user flow.',
    },
  },
  {
    id: 6,
    title: 'Student Record System',
    description: 'Problem: scattered student data across sheets. Solution: centralized records with analytics and attendance. Impact: quicker insights for educators.',
    image: '/images/projects/student record.png',
    tech: ['React', 'TypeScript', 'Tailwind Css', 'Vite'],
    liveUrl: 'https://student-record-five.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/Student-Record',
    achievements: ['Analytics dashboard'],
    category: 'Frontend',
    featured: false,
    screenshots: ['/images/projects/student record.png'],
    caseStudy: {
      problem: 'Student data was scattered, making insights hard to track.',
      solution: 'Built a centralized system with attendance, grades, and analytics.',
      impact: 'Quicker insights and improved reporting for educators.',
    },
  },
  {
    id: 7,
    title: 'PicSync',
    description: 'Problem: teams struggled to sync and share image updates. Solution: built cloud sync with real‑time collaboration. Impact: faster feedback and smoother workflows.',
    image: '/images/projects/picsync.png',
    tech: ['React', 'Typescript', 'PostgreSQL', 'Supabase'],
    liveUrl: 'https://nimble-quokka-618ee2.netlify.app/login',
    githubUrl: 'https://github.com/deepakjadon1902/PicSync-Photo-Gallery-Application',
    achievements: ['Real-time sync'],
    category: 'Full-Stack',
    featured: false,
    screenshots: ['/images/projects/picsync.png'],
    caseStudy: {
      problem: 'Teams struggled to sync and review images quickly.',
      solution: 'Built cloud-backed sync with real-time collaboration.',
      impact: 'Faster feedback cycles and smoother sharing workflows.',
    },
  },
  {
    id: 8,
    title: 'NagrikSahayak',
    description: 'Problem: citizens lacked a simple way to access local services. Solution: built a civic portal with clear navigation. Impact: improved access and engagement.',
    image: '/images/projects/nagriksahayak.png',
    tech: ['React', 'TypeScript', 'Tailwind Css', 'Vite'],
    liveUrl: 'https://nagrik-sahayak-app.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/NagrikSahayak-App',
    achievements: ['Multilingual support'],
    category: 'Frontend',
    featured: false,
    screenshots: ['/images/projects/nagriksahayak.png'],
    caseStudy: {
      problem: 'Citizens lacked a simple way to access local services.',
      solution: 'Created a clean civic portal with easy navigation and multilingual support.',
      impact: 'Improved accessibility and engagement for diverse users.',
    },
  },
  {
    id: 9,
    title: 'Task Management App',
    description: 'Problem: teams needed clearer task ownership and tracking. Solution: drag‑and‑drop boards with deadlines. Impact: better delivery visibility.',
    image: '/images/projects/time managment.png',
    tech: ['React', 'TypeScript', 'Tailwind Css', 'Vite'],
    liveUrl: 'https://task-managment-system-sable.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/Task-Managment-System',
    achievements: ['Drag & drop interface'],
    category: 'Frontend',
    featured: false,
    screenshots: ['/images/projects/time managment.png'],
    caseStudy: {
      problem: 'Teams had limited visibility into task ownership and deadlines.',
      solution: 'Built a drag‑and‑drop board with deadlines and collaboration.',
      impact: 'Clearer delivery tracking and better team alignment.',
    },
  },
  {
    id: 11,
    title: 'Brindarani',
    description:
      'Full-stack e-commerce storefront for a D2C brand: product catalog, cart, checkout, and an admin panel to manage products and orders, with secure auth and transactional email updates.',
    image: '/images/projects/brindarani.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer'],
    liveUrl: 'https://brinda-rani.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/BrindaRani',
    achievements: ['Admin product & order management', 'JWT auth + protected routes', 'Automated email confirmations'],
    category: 'Full-Stack',
    featured: true,
    screenshots: ['/images/projects/brindarani.png'],
    caseStudy: {
      problem: 'The brand needed a reliable online store with inventory/order control and clear customer communication.',
      solution:
        'Built a full-stack e-commerce app with an admin dashboard, secure authentication, and automated order emails.',
      impact: 'Reduced manual work for order handling and improved the checkout-to-confirmation experience.',
    },
  },
  {
    id: 12,
    title: 'VrindavanSarthi',
    description:
      'Pilgrim/travel companion web app for Vrindavan: discover nearby places, get directions, and view essential visit info with a clean mobile-first UI and map-based navigation.',
    image: '/images/projects/vrindavansarthi.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Google Maps API', 'Geolocation'],
    liveUrl: 'https://www.vrindavansarthi.in/',
    githubUrl: 'https://github.com/deepakjadon1902/vrindavan-sarthi',
    achievements: ['Map-based navigation', 'Mobile-first UX', 'Nearby places discovery'],
    category: 'Full-Stack',
    featured: true,
    screenshots: ['/images/projects/vrindavansarthi.png'],
    caseStudy: {
      problem: 'Pilgrims struggled with navigation and finding important locations.',
      solution: 'Built a map-driven UI with place discovery, directions, and location-aware suggestions.',
      impact: 'Made it easier to plan and navigate visits, especially on mobile devices.',
    },
  },
  {
    id: 13,
    title: 'IntelliHire',
    description:
      'AI-assisted hiring tool that parses resumes, extracts structured candidate data, and ranks matches against a job description to speed up shortlisting and reduce manual screening.',
    image: '/images/projects/intellihire.png',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Python'],
    liveUrl: 'https://intelli-hire-rho.vercel.app/',
    githubUrl: 'https://github.com/deepakjadon1902/IntelliHire',
    achievements: ['Resume parsing + structured output', 'JD-to-candidate matching', 'Searchable candidate pipeline'],
    category: 'Full-Stack',
    featured: true,
    screenshots: ['/images/projects/intellihire.png'],
    caseStudy: {
      problem: 'Manual resume screening was time-consuming and prone to oversight.',
      solution: 'Built an AI pipeline to extract resume data and score candidates against job requirements.',
      impact: 'Reduced time-to-shortlist and improved consistency in initial screening.',
    },
  },
  {
    id: 14,
    title: 'BrajMart',
    description:
      'Production e-commerce experience work: improved UI performance, built/optimized backend APIs, implemented auth & role-based access, and supported deployments across cloud platforms for a smoother shopping and admin workflow.',
    image: '/images/projects/brajmart.png',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'RBAC', 'Render/Vercel'],
    liveUrl: 'https://www.brajmart.com/',
    githubUrl: 'https://github.com/deepakjadon1902/Brajmart',
    achievements: ['40% UI performance improvement', '25% reduced API latency', 'JWT + role-based access'],
    category: 'Full-Stack',
    featured: true,
    screenshots: ['/images/projects/brajmart.png'],
    caseStudy: {
      problem: 'The platform needed faster UI, reliable APIs, and secure access control for growth and stability.',
      solution:
        'Optimized front-end performance, improved backend endpoints/data models, and implemented JWT + RBAC.',
      impact: 'Faster user experience, lower latency, and fewer production issues in day-to-day operations.',
    },
  },
];

const Projects = () => {
  // Featured order (as provided by you)
  const featuredOrder = [14, 13, 11, 4, 2, 12, 3, 10];
  const featuredIdSet = new Set(featuredOrder);

  const featuredProjects = featuredOrder
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p))
    .map((p) => ({ ...p, featured: true }));

  const otherProjects = projects
    .filter((p) => !featuredIdSet.has(p.id))
    .sort((a, b) => a.id - b.id)
    .map((p) => ({ ...p, featured: false }));

  return (
    <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          title="My Projects"
          subtitle="Selected work that highlights my full‑stack skills, UI polish, and product thinking"
        />

        {/* Project Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: 'Product Thinking', text: 'Build features that solve real user problems and drive outcomes.' },
            { title: 'Performance', text: 'Fast load times, smooth animations, and optimized bundles.' },
            { title: 'Quality', text: 'Clean architecture, reusable components, and reliable APIs.' },
            { title: 'Delivery', text: 'Clear milestones, fast iterations, and on‑time releases.' },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-background border border-border hover:border-sky/30 hover:shadow-md transition-all"
            >
              <p className="text-xs uppercase tracking-widest text-sky font-semibold mb-2">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </motion.div>

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
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;
