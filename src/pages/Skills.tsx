import { ArrowUpRight, Code2, GitBranch, Server, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageIntro from '@/components/PageIntro';
import ContactCTA from '@/components/ContactCTA';
import { skillGroups } from '@/data/portfolio';
const icons = [Code2, Server, ShieldCheck, GitBranch];

export default function Skills() {
  return <main id="main" tabIndex={-1}>
    <div className="shell page-shell">
      <PageIntro eyebrow="Technical skills" title={<>Tools I work with<span className="accent">.</span></>} description="My main stack is MongoDB, Express, React, and Node.js, with TypeScript across the application. Here are the technologies I use in my work." />
      <div className="skills-layout">
        <aside className="skills-index">
          <p className="mono">On this page</p>{skillGroups.map((group, i) => <a href={`#${group.id}`} key={group.id}>
            <span className="mono">0{i + 1}</span>{group.title}<ArrowUpRight size={14} />
          </a>)}<div className="skills-note">
            <p>See these tools in use.</p>
            <span>See how these technologies come together in real projects.</span>
            <Link className="text-link" to="/projects">Explore my work <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>
        <div className="skill-groups">{skillGroups.map((group, i) => {
          const Icon = icons[i]; return <section className="skill-group" id={group.id} key={group.id}>
            <div className="skill-group-heading">
              <span className="skill-icon">
                <Icon size={23} strokeWidth={1.5} />
              </span>
              <div>
                <span className="mono">0{i + 1}</span>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
            </div>
            <div className="skill-tags">{group.skills.map(skill => <span key={skill}>
              <span className="skill-tag-dot" />{skill}</span>)}</div>
            <div className="skill-application">
              <span className="mono">What I build</span>
              <p>{group.application}</p>
            </div>
          </section>;
        })}</div>
      </div>
    </div>
    <ContactCTA />
  </main>;
}
