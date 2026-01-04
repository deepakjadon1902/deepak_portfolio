import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
// Remove TiltCard temporarily if causing issues
// import TiltCard from './TiltCard';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  achievements?: string[];
  category: 'Full-Stack' | 'Frontend' | 'Backend';
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group/card relative h-full"
    >
      {/* Replace TiltCard with this simple wrapper */}
      <div className="relative h-full rounded-3xl bg-gradient-to-br from-slate-50/80 via-white to-slate-50/80 
                      border border-slate-200/60 shadow-xl backdrop-blur-xl 
                      hover:shadow-2xl hover:shadow-sky/20 hover:border-sky/40 
                      transition-all duration-700 overflow-hidden hover:-translate-y-2">
        
        {/* Image & Buttons Container */}
        <div className="relative h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                          opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-5 left-5 z-40">
            <span className="px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-sky-500 to-blue-500 
                            text-white shadow-2xl shadow-black/30 tracking-wide">
              {project.category}
            </span>
          </div>

          {/* 🔥 BUTTONS - ABSOLUTE BULLETPROOF Z-INDEX */}
          <div className="absolute inset-0 flex items-end pb-6 px-6 gap-4 z-50 pointer-events-none">
            <div className="w-full flex gap-3 pointer-events-none">
              
              {/* LIVE BUTTON */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex-1 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 
                            text-white py-4 px-6 rounded-2xl shadow-2xl shadow-sky-500/40 hover:shadow-sky-500/60 
                            font-bold text-sm uppercase tracking-wide transition-all duration-300 
                            transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] 
                            focus:outline-none focus:ring-4 focus:ring-sky-300/70 focus:ring-offset-2 
                            ring-offset-transparent pointer-events-auto select-none cursor-pointer 
                            flex items-center justify-center gap-2 backdrop-blur-sm border border-sky-400/30
                            hover:border-sky-300/50 z-[9999]"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>Live Demo</span>
                </a>
              )}
              
              {/* GITHUB BUTTON */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn p-4 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-xl 
                            border-2 border-white/40 hover:border-white/60 hover:shadow-2xl hover:shadow-white/30 
                            text-white transition-all duration-300 transform hover:-translate-y-1 hover:rotate-6 
                            active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/60 focus:ring-offset-2 
                            ring-offset-transparent pointer-events-auto select-none cursor-pointer z-[9999]
                            hover:scale-110"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <Github size={22} className="transition-all duration-300 group-hover/btn:scale-110" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover/card:text-sky-600 
                         transition-all duration-500 line-clamp-1 leading-tight">
            {project.title}
          </h3>
          
          <p className="text-slate-600 mb-6 text-base leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.slice(0, 5).map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="px-4 py-2 text-sm font-bold rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 
                          text-slate-700 hover:from-sky-100 hover:to-blue-100 hover:text-sky-700 
                          shadow-md hover:shadow-sky-200/50 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 5 && (
              <span className="px-4 py-2 text-sm font-bold rounded-xl bg-sky-100 text-sky-700 
                              border-2 border-sky-300 shadow-lg">
                +{project.tech.length - 5}
              </span>
            )}
          </div>

          {/* Achievement */}
          {project.achievements?.[0] && (
            <div className="pt-6 border-t border-slate-200">
              <p className="text-sky-600 text-lg font-bold flex items-center gap-3">
                <ArrowRight size={20} className="text-sky-500" />
                {project.achievements[0]}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
