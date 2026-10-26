import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import PageIntro from '@/components/PageIntro';
import ContactCTA from '@/components/ContactCTA';
import { projects } from '@/data/projects';

const order = [14, 13, 12, 4, 2, 11, 3, 10, 1, 5, 6, 7, 8, 9];
const sorted = order.map(id => projects.find(project => project.id === id)!);
const filters = ['All projects', 'Full-Stack', 'Frontend'] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All projects');
  const [search, setSearch] = useState('');
  const visible = useMemo(() => sorted.filter(project => (filter === 'All projects' || project.category === filter) && `${project.title} ${project.description} ${project.tech.join(' ')}`.toLowerCase().includes(search.trim().toLowerCase())), [filter, search]);
  return <main id="main" tabIndex={-1}>
    <div className="shell page-shell">
      <PageIntro eyebrow="Production work, client projects & experiments" title={<>Projects<span className="accent">.</span></>} description="A collection of e-commerce platforms, business websites, and web applications. Explore the live projects or read about the work behind them." />
      <div className="project-toolbar">
        <div className="filter-list" role="group" aria-label="Filter projects by category">{filters.map(item => <button key={item} className={filter === item ? 'active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item === 'Full-Stack' ? 'Full stack' : item}{item === 'All projects' && <span>{projects.length}</span>}</button>)}</div>
        <div className="project-search">
          <Search size={17} />
          <input aria-label="Search projects or technologies" placeholder="Search projects or tech…" value={search} onChange={e => setSearch(e.target.value)} />{search && <button aria-label="Clear search" onClick={() => setSearch('')}>
            <X size={15} />
          </button>}</div>
      </div>
      <p className="results-count mono" aria-live="polite">{String(visible.length).padStart(2, '0')} PROJECTS / {filter === 'All projects' ? 'ALL DISCIPLINES' : filter.toUpperCase()}</p>
      <div className="project-grid collection-grid">{visible.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
      {!visible.length && <div className="empty-state">
        <Search size={30} />
        <h2>No projects found.</h2>
        <p>Try another name or technology.</p>
        <button className="text-link" onClick={() => { setSearch(''); setFilter('All projects'); }}>Reset filters <X size={16} />
        </button>
      </div>}
    </div>
    <ContactCTA />
  </main>;
}
