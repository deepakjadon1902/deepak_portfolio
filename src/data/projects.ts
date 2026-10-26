import type { Project } from '@/components/ProjectCard';

export const projects: Project[] = [
  {
    "id": 1,
    "title": "My DriveMate",
    "description": "A ride-sharing application with live tracking, rider-driver matching, and a responsive booking experience.",
    "image": "/images/projects/drivemate.png",
    "tech": [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Socket.io"
    ],
    "liveUrl": "https://my-drive-mate.vercel.app/",
    "githubUrl": "https://github.com/deepakjadon1902/My-DriveMate",
    "achievements": [
      "Real-time ride tracking",
      "95+ Lighthouse performance"
    ],
    "category": "Full-Stack",
    "featured": false,
    "screenshots": [
      "/images/projects/drivemate.png"
    ],
    "caseStudy": {
      "problem": "Users struggled to find reliable rides quickly, and drivers lacked real-time visibility.",
      "solution": "Built a ride-sharing platform with live tracking, instant matching, and responsive UX.",
      "impact": "Created a smoother booking flow with fast performance and clearer trip status."
    }
  },
  {
    "id": 2,
    "title": "BrajBuzz Tech",
    "description": "A responsive business website with clear content, optimized assets, and an integrated YouTube content feed.",
    "image": "/images/projects/brajbuzztech1.png",
    "tech": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "YouTube API"
    ],
    "liveUrl": "https://www.brajbuzztech.com/",
    "githubUrl": "https://github.com/deepakjadon1902/BrajBuzz_Tech",
    "achievements": [
      "40% faster load times"
    ],
    "category": "Frontend",
    "featured": true,
    "screenshots": [
      "/images/projects/brajbuzztech1.png"
    ],
    "caseStudy": {
      "problem": "The business needed a modern web presence and faster load performance.",
      "solution": "Designed a clean marketing site with optimized assets and content structure.",
      "impact": "Improved perceived speed and trust, increasing credibility for clients."
    }
  },
  {
    "id": 10,
    "title": "Shree Giriraj Sewa Sadan",
    "description": "A hospitality website that brings room details, facilities, nearby places, and direct WhatsApp inquiries into one experience.",
    "image": "/images/projects/shreegiriraj.png",
    "tech": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ],
    "liveUrl": "https://www.shrigirirajsewasadan.org/",
    "githubUrl": "https://github.com/deepakjadon1902/shreegiriraj",
    "achievements": [
      "Fully responsive UI",
      "WhatsApp integration for direct booking & support",
      "Clean and informative design",
      "Optimized performance"
    ],
    "category": "Frontend",
    "featured": true,
    "screenshots": [
      "/images/projects/shreegiriraj.png"
    ],
    "caseStudy": {
      "problem": "Pilgrims needed clear room details and a simple way to book quickly.",
      "solution": "Built a responsive site with facilities info, nearby places, and WhatsApp booking.",
      "impact": "Reduced booking friction and improved clarity for visitors."
    }
  },
  {
    "id": 3,
    "title": "EventFlow",
    "description": "An event management application connecting ticketing, scheduling, and attendee coordination in one workflow.",
    "image": "/images/projects/eventflow.png",
    "tech": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Supabase"
    ],
    "liveUrl": "https://event-flow-silk.vercel.app/",
    "githubUrl": "https://github.com/deepakjadon1902/EventFlow",
    "achievements": [
      "Handles 1000+ concurrent users"
    ],
    "category": "Full-Stack",
    "featured": true,
    "screenshots": [
      "/images/projects/eventflow.png"
    ],
    "caseStudy": {
      "problem": "Event coordination was manual, causing errors and delays.",
      "solution": "Created a full event system with ticketing, scheduling, and live tracking.",
      "impact": "Enabled smoother operations at scale with clearer attendee management."
    }
  },
  {
    "id": 4,
    "title": "Liklet",
    "description": "A social platform with authentication, real-time interactions, and responsive communication flows.",
    "image": "/images/projects/liklet.png",
    "tech": [
      "React",
      "MongoDB",
      "Socket.io",
      "JWT"
    ],
    "liveUrl": "https://www.liklet.com/",
    "githubUrl": "https://github.com/deepakjadon1902/Liklet_Portfolio",
    "achievements": [
      "25% reduced API latency"
    ],
    "category": "Full-Stack",
    "featured": true,
    "screenshots": [
      "/images/projects/liklet.png"
    ],
    "caseStudy": {
      "problem": "Engagement was low with static user experiences.",
      "solution": "Added real-time features, authentication, and interactive flows.",
      "impact": "Improved responsiveness and reduced API latency."
    }
  },
  {
    "id": 5,
    "title": "DriveEase",
    "description": "A vehicle service booking application with scheduling, live availability, and integrated payments.",
    "image": "/images/projects/driveease.png",
    "tech": [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase"
    ],
    "liveUrl": "https://reliable-daifuku-e27641.netlify.app/",
    "githubUrl": "https://github.com/deepakjadon1902/DriveEase",
    "achievements": [
      "Integrated payment gateway"
    ],
    "category": "Full-Stack",
    "featured": false,
    "screenshots": [
      "/images/projects/driveease.png"
    ],
    "caseStudy": {
      "problem": "Vehicle service booking was manual and prone to scheduling conflicts.",
      "solution": "Automated bookings with real-time availability and payment integration.",
      "impact": "Faster bookings with fewer conflicts and smoother user flow."
    }
  },
  {
    "id": 6,
    "title": "Student Record System",
    "description": "A centralized student record interface for managing attendance, grades, and reporting through a clear dashboard.",
    "image": "/images/projects/student record.png",
    "tech": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ],
    "liveUrl": "https://student-record-five.vercel.app/",
    "githubUrl": "https://github.com/deepakjadon1902/Student-Record",
    "achievements": [
      "Analytics dashboard"
    ],
    "category": "Frontend",
    "featured": false,
    "screenshots": [
      "/images/projects/student record.png"
    ],
    "caseStudy": {
      "problem": "Student data was scattered, making insights hard to track.",
      "solution": "Built a centralized system with attendance, grades, and analytics.",
      "impact": "Quicker insights and improved reporting for educators."
    }
  },
  {
    "id": 7,
    "title": "PicSync",
    "description": "A cloud-backed photo gallery with image sharing, real-time synchronization, and collaborative review.",
    "image": "/images/projects/picsync.png",
    "tech": [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase"
    ],
    "liveUrl": "https://nimble-quokka-618ee2.netlify.app/login",
    "githubUrl": "https://github.com/deepakjadon1902/PicSync-Photo-Gallery-Application",
    "achievements": [
      "Real-time sync"
    ],
    "category": "Full-Stack",
    "featured": false,
    "screenshots": [
      "/images/projects/picsync.png"
    ],
    "caseStudy": {
      "problem": "Teams struggled to sync and review images quickly.",
      "solution": "Built cloud-backed sync with real-time collaboration.",
      "impact": "Faster feedback cycles and smoother sharing workflows."
    }
  },
  {
    "id": 8,
    "title": "NagrikSahayak",
    "description": "A multilingual civic services interface designed to make local information easier to find and navigate.",
    "image": "/images/projects/nagriksahayak.png",
    "tech": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ],
    "liveUrl": "https://nagrik-sahayak-app.vercel.app/",
    "githubUrl": "https://github.com/deepakjadon1902/NagrikSahayak-App",
    "achievements": [
      "Multilingual support"
    ],
    "category": "Frontend",
    "featured": false,
    "screenshots": [
      "/images/projects/nagriksahayak.png"
    ],
    "caseStudy": {
      "problem": "Citizens lacked a simple way to access local services.",
      "solution": "Created a clean civic portal with easy navigation and multilingual support.",
      "impact": "Improved accessibility and engagement for diverse users."
    }
  },
  {
    "id": 9,
    "title": "Task Management App",
    "description": "A task management application with drag-and-drop boards, deadlines, and clearer visibility into work in progress.",
    "image": "/images/projects/time managment.png",
    "tech": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ],
    "liveUrl": "https://task-managment-system-sable.vercel.app/",
    "githubUrl": "https://github.com/deepakjadon1902/Task-Managment-System",
    "achievements": [
      "Drag & drop interface"
    ],
    "category": "Frontend",
    "featured": false,
    "screenshots": [
      "/images/projects/time managment.png"
    ],
    "caseStudy": {
      "problem": "Teams had limited visibility into task ownership and deadlines.",
      "solution": "Built a drag‑and‑drop board with deadlines and collaboration.",
      "impact": "Clearer delivery tracking and better team alignment."
    }
  },
  {
    "id": 11,
    "title": "Brindarani",
    "description": "A complete e-commerce storefront with product discovery, checkout, secure authentication, and an admin dashboard.",
    "image": "/images/projects/brindarani.png",
    "tech": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Nodemailer"
    ],
    "liveUrl": "https://brinda-rani.vercel.app/",
    "githubUrl": "https://github.com/deepakjadon1902/BrindaRani",
    "achievements": [
      "Admin product & order management",
      "JWT auth + protected routes",
      "Automated email confirmations"
    ],
    "category": "Full-Stack",
    "featured": true,
    "screenshots": [
      "/images/projects/brindarani.png"
    ],
    "caseStudy": {
      "problem": "The brand needed a reliable online store with inventory/order control and clear customer communication.",
      "solution": "Built a full-stack e-commerce app with an admin dashboard, secure authentication, and automated order emails.",
      "impact": "Reduced manual work for order handling and improved the checkout-to-confirmation experience."
    }
  },
  {
    "id": 12,
    "title": "VrindavanSarthi",
    "description": "A mobile-first travel companion with nearby place discovery, geolocation, and map-based navigation.",
    "image": "/images/projects/vrindavansarthi.png",
    "tech": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Google Maps API",
      "Geolocation"
    ],
    "liveUrl": "https://www.vrindavansarthi.in/",
    "githubUrl": "https://github.com/deepakjadon1902/vrindavan-sarthi",
    "achievements": [
      "Map-based navigation",
      "Mobile-first UX",
      "Nearby places discovery"
    ],
    "category": "Full-Stack",
    "featured": true,
    "screenshots": [
      "/images/projects/vrindavansarthi.png"
    ],
    "caseStudy": {
      "problem": "Pilgrims struggled with navigation and finding important locations.",
      "solution": "Built a map-driven UI with place discovery, directions, and location-aware suggestions.",
      "impact": "Made it easier to plan and navigate visits, especially on mobile devices."
    }
  },
  {
    "id": 13,
    "title": "IntelliHire",
    "description": "An AI-assisted hiring application with resume parsing, structured candidate data, and job-description matching.",
    "image": "/images/projects/intellihire.png",
    "tech": [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Python"
    ],
    "liveUrl": "https://intelli-hire-rho.vercel.app/",
    "githubUrl": "https://github.com/deepakjadon1902/IntelliHire",
    "achievements": [
      "Resume parsing + structured output",
      "JD-to-candidate matching",
      "Searchable candidate pipeline"
    ],
    "category": "Full-Stack",
    "featured": true,
    "screenshots": [
      "/images/projects/intellihire.png"
    ],
    "caseStudy": {
      "problem": "Manual resume screening was time-consuming and prone to oversight.",
      "solution": "Built an AI pipeline to extract resume data and score candidates against job requirements.",
      "impact": "Reduced time-to-shortlist and improved consistency in initial screening."
    }
  },
  {
    "id": 14,
    "title": "BrajMart",
    "description": "Production e-commerce development spanning the storefront, backend APIs, authentication, payments, and deployment.",
    "image": "/images/projects/brajmart.png",
    "tech": [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "RBAC",
      "Render/Vercel"
    ],
    "liveUrl": "https://www.brajmart.com/",
    "githubUrl": "https://github.com/deepakjadon1902/Brajmart",
    "achievements": [
      "40% UI performance improvement",
      "25% reduced API latency",
      "JWT + role-based access"
    ],
    "category": "Full-Stack",
    "featured": true,
    "screenshots": [
      "/images/projects/brajmart.png"
    ],
    "caseStudy": {
      "problem": "The platform needed faster UI, reliable APIs, and secure access control for growth and stability.",
      "solution": "Optimized front-end performance, improved backend endpoints/data models, and implemented JWT + RBAC.",
      "impact": "Faster user experience, lower latency, and fewer production issues in day-to-day operations."
    }
  }
];
