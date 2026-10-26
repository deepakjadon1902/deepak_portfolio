import { ArrowUpRight, ArrowRight, Github } from 'lucide-react';
import useReveal from '@/hooks/use-reveal';
import useTilt from '@/hooks/use-tilt';
import FlipText from '@/components/FlipText';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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
  caseStudy?: { problem: string; solution: string; impact: string };
}

const projectContext: Record<number, string> = {
  14: 'E-commerce / Production development',
  13: 'Hiring platform / Full stack application',
  11: 'E-commerce / Storefront & administration',
};

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const revealRef = useReveal<HTMLElement>();
  const tiltRef = useTilt<HTMLAnchorElement>();
  return (
    <article ref={revealRef} className={`project-card project-tone-${index % 3}`}>
      <a ref={tiltRef} className="project-preview tilt-surface" href={project.liveUrl ?? project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}, opens in a new tab`}>
        <img src={project.image} alt={`${project.title} website screenshot`} loading="lazy" width="960" height="600" />
        <span className="tilt-glare" aria-hidden="true" />
        <span className="preview-open" aria-hidden="true"><ArrowUpRight size={20} /></span>
      </a>
      <div className="project-content">
        <p className="project-meta">{projectContext[project.id] ?? (project.category === 'Full-Stack' ? 'Full stack application' : 'Frontend development')}</p>
        <h3><FlipText>{project.title}</FlipText></h3>
        <p className="project-description">{project.description}</p>
        <div className="tags" aria-label="Technologies">{project.tech.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions">
          {project.caseStudy && <Dialog>
            <DialogTrigger asChild><button className="text-link" aria-label={`Read ${project.title} case study`}>About the project <ArrowRight size={16} /></button></DialogTrigger>
            <DialogContent className="project-dialog">
              <div className="dialog-image"><img src={project.image} alt={`${project.title} full website preview`} /></div>
              <div className="dialog-copy">
                <p className="eyebrow">{project.category === 'Full-Stack' ? 'Full stack development' : 'Frontend development'}</p>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{project.description}</DialogDescription>
                <div className="case-study-grid">{[['The brief', project.caseStudy.problem], ['My approach', project.caseStudy.solution], ['The result', project.caseStudy.impact]].map(([title, text]) => <section key={title}><h3>{title}</h3><p>{text}</p></section>)}</div>
                <div className="tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
                <div className="button-row">
                  {project.liveUrl && <a className="button button-small" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={16} /></a>}
                  {project.githubUrl && <a className="button button-secondary button-small" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={16} />Source code</a>}
                </div>
              </div>
            </DialogContent>
          </Dialog>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-code-link" aria-label={`${project.title} source code, opens in a new tab`}><Github size={17} /><span>Code</span></a>}
        </div>
      </div>
    </article>
  );
}
