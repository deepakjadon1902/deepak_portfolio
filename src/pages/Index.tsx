import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';
import ContactCTA from '@/components/ContactCTA';
import useReveal from '@/hooks/use-reveal';
import { projects } from '@/data/projects';
import { experience, profile } from '@/data/portfolio';

const selected = [14, 13, 11].map(id => projects.find(project => project.id === id)!);
const services = [
  { title: 'Websites & interfaces', text: 'Responsive websites, storefronts, and dashboards built with React and TypeScript. Clear navigation, considered interactions, and care across screen sizes.', tools: 'React / TypeScript / Tailwind CSS' },
  { title: 'APIs & integrations', text: 'Node.js APIs, database models, authentication, payments, and transactional email. The connected systems behind a complete application.', tools: 'Node.js / Express / MongoDB' },
  { title: 'Full stack development', text: 'A web application from initial requirements through deployment. For freelance clients and product teams who need someone comfortable across the stack.', tools: 'MERN / Git / Vercel / Render' },
];

export default function Index() {
  const experienceRef = useReveal<HTMLElement>();
  const servicesRef = useReveal<HTMLElement>();
  return (
    <main id="main" tabIndex={-1}>
      <div className="hero-region">
      <section className="hero shell">
        <div className="hero-copy">
          <p className="hero-overline">Full Stack Developer <span aria-hidden="true">/</span> MERN Stack</p>
          <h1>Deepak Jadon<span className="name-period">.</span></h1>
          <p className="hero-role">Web applications,<br /><span>from interface to API.</span></p>
          <p className="hero-description">I build with React, TypeScript, Node.js, and MongoDB. Currently working on production e-commerce at BrajMart and taking on freelance web projects.</p>
          <div className="button-row">
            <Link to="/projects" className="button">View selected work <ArrowUpRight size={17} /></Link>
            <Link to="/contact" className="hero-contact-link">Get in touch <ArrowRight size={16} /></Link>
          </div>
        </div>
        <aside className="hero-person" aria-label="About Deepak">
          <div className="portrait-stage"><span className="portrait-detail" aria-hidden="true"><i /><i /><i /></span><div className="hero-portrait"><img src="/profile/profile.png" alt="Deepak Jadon" width="260" height="260" loading="eager" /></div></div>
          <div className="hero-person-caption"><span>Based in Mathura, India</span><span className="availability"><i />Available for freelance work</span></div>
          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16} />GitHub <ArrowUpRight size={12} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} />LinkedIn <ArrowUpRight size={12} /></a>
          </div>
        </aside>
      </section>
      <div className="hero-foot shell"><p>React <span>·</span> TypeScript <span>·</span> Node.js <span>·</span> Express <span>·</span> MongoDB</p><a href="#selected-work">Scroll to explore <ArrowDown size={14} /></a></div>

      </div>
      <section id="selected-work" className="section shell selected-work">
        <div className="section-top"><div className="section-title"><p className="eyebrow">A selection of recent projects</p><h2>Selected work<span className="section-count">03</span></h2></div><Link to="/projects" className="text-link">All {projects.length} projects <ArrowUpRight size={17} /></Link></div>
        <div className="project-grid home-projects">{selected.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
      </section>

      <section ref={experienceRef} className="shell experience-band" aria-labelledby="experience-heading">
        <div><p className="eyebrow">Current experience</p><h2 id="experience-heading">{experience.title}<br /><span>at {experience.company}</span></h2></div>
        <div className="experience-summary"><p>I work across the storefront, backend APIs, authentication, and payment flows. My role also includes production fixes, deployment, and collaboration through code reviews.</p><div><span>{experience.period}</span><Link to="/resume" className="text-link">View experience <ArrowUpRight size={16} /></Link></div></div>
      </section>

      <section ref={servicesRef} className="section shell services-section"><div className="services-intro"><p className="eyebrow">For clients & product teams</p><h2>How I can help</h2><p>Focused development support,<br />wherever your project needs it.</p><Link className="text-link" to="/about">More about me <ArrowUpRight size={16} /></Link></div><div className="service-list">{services.map((service, index) => <article className="service-row" key={service.title}><span className="service-index">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.text}</p><span className="service-tools">{service.tools}</span></div></article>)}</div></section>
      <ContactCTA />
    </main>
  );
}
