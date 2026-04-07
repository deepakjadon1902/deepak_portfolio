import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

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
  screenshots?: string[];
  caseStudy?: {
    problem: string;
    solution: string;
    impact: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const caseStudy = project.caseStudy;
  const heroScreenshot = project.screenshots?.[0] ?? project.image;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group/card relative h-full"
    >
      <div
        className="relative h-full rounded-[28px] bg-white/80 border border-slate-200/70 shadow-xl
                   hover:shadow-2xl hover:shadow-sky/20 transition-all duration-500 overflow-hidden
                   hover:-translate-y-2"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/90 text-slate-900 shadow">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-sky-600 text-white shadow">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-700
                          border border-slate-200/60 hover:border-sky/40 hover:text-sky-700 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                +{project.tech.length - 5}
              </span>
            )}
          </div>

          {project.achievements?.[0] && (
            <div className="flex items-center gap-2 text-sky-700 text-sm font-semibold">
              <Sparkles size={16} />
              <span>{project.achievements[0]}</span>
            </div>
          )}

          {/* Actions */}
          <div className="mt-2 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky text-white text-sm font-semibold
                           hover:bg-sky-dark transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 text-slate-700
                           hover:border-sky/40 hover:text-sky-700 transition-colors text-sm font-semibold"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {caseStudy && (
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 text-slate-700
                               hover:border-sky/40 hover:text-sky-700 transition-colors text-sm font-semibold"
                  >
                    <FileText size={16} />
                    Case Study
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[calc(100%-2rem)] p-0 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img
                        src={heroScreenshot}
                        alt={`${project.title} screenshot`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/90 text-slate-900 shadow">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-6">
                      <div>
                        <h3 className="text-2xl font-extrabold text-navy mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>

                      <div className="grid gap-4">
                        <div className="p-4 rounded-xl bg-muted/50 border border-border">
                          <p className="text-xs uppercase tracking-widest text-sky font-semibold mb-2">Problem</p>
                          <p className="text-sm text-muted-foreground">{caseStudy.problem}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-muted/50 border border-border">
                          <p className="text-xs uppercase tracking-widest text-sky font-semibold mb-2">Solution</p>
                          <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-muted/50 border border-border">
                          <p className="text-xs uppercase tracking-widest text-sky font-semibold mb-2">Impact</p>
                          <p className="text-sm text-muted-foreground">{caseStudy.impact}</p>
                        </div>
                      </div>

                      {project.screenshots && project.screenshots.length > 1 ? (
                        <div>
                          <p className="text-xs uppercase tracking-widest text-sky font-semibold mb-3">Screenshots</p>
                          <div className="grid grid-cols-3 gap-2">
                            {project.screenshots.slice(0, 3).map((shot) => (
                              <img
                                key={shot}
                                src={shot}
                                alt="Project screenshot"
                                className="h-20 w-full object-cover rounded-lg border border-border"
                              />
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {project.achievements?.length ? (
                        <div>
                          <p className="text-xs uppercase tracking-widest text-sky font-semibold mb-3">Outcomes</p>
                          <div className="flex flex-wrap gap-2">
                            {project.achievements.map((item) => (
                              <span
                                key={item}
                                className="px-3 py-1.5 text-xs font-semibold rounded-full bg-sky/10 text-sky-800 border border-sky/20"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
