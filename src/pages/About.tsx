import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageIntro from '@/components/PageIntro';
import ContactCTA from '@/components/ContactCTA';
import { experience, profile } from '@/data/portfolio';

export default function About() {
  return (
    <main id="main" tabIndex={-1}>
      <div className="shell page-shell">
        <PageIntro eyebrow="A little background" title={<>About me<span className="accent">.</span></>} description="I’m Deepak, a full stack developer based in Mathura, Uttar Pradesh. I work with the MERN stack and build websites and applications for businesses and product teams." />
        <div className="about-layout">
          <aside className="profile-panel">
            <div className="profile-portrait"><img src="/profile/profile.png" alt="Deepak Jadon" width="220" height="220" /></div>
            <h2>Deepak Jadon</h2><p>Full Stack Developer</p>
            <div className="profile-location"><MapPin size={15} />Mathura, India</div>
            <span className="availability"><i />Open to freelance projects</span>
            <a className="text-link profile-email" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={16} /></a>
          </aside>
          <div className="about-story">
            <h2>My work covers both sides<br />of a web application.</h2>
            <p>I’m comfortable moving between a React interface, an Express API, and a MongoDB data model. I like understanding how the pieces connect, especially when a small change in one part can make the whole experience work better.</p>
            <p>At BrajMart, I work on production e-commerce: storefront features, authentication, payment flows, backend improvements, and deployment. Freelance projects give me the opportunity to work directly with clients and take a website from requirements to release.</p>
            <p>I studied Computer Science at GLA University in Mathura. Most of my practical learning has come from building projects, reviewing code, and working through real issues in production.</p>
            <div className="about-working"><h3>Working together</h3><p>I value clear requirements, regular feedback, and honest communication about progress. I’m open to remote roles and freelance projects where I can contribute across the stack.</p><Link className="text-link" to="/contact">Discuss a project or role <ArrowUpRight size={16} /></Link></div>
          </div>
        </div>
        <section className="section journey-section">
          <div className="section-top"><h2>Experience & education</h2><Link to="/resume" className="text-link">Full resume <ArrowUpRight size={17} /></Link></div>
          <div className="journey-grid">
            <article><div className="journey-icon"><BriefcaseBusiness size={22} /></div><p className="mono">{experience.period}</p><h3>{experience.title}</h3><h4>{experience.company}</h4><p>MERN development, production e-commerce, integrations, and deployment.</p></article>
            <article><div className="journey-icon"><Code2 size={22} /></div><p className="mono">Project-based work</p><h3>Freelance developer</h3><h4>Websites & web applications</h4><p>Business websites, storefronts, and custom web applications.</p></article>
            <article><div className="journey-icon"><GraduationCap size={22} /></div><p className="mono">2022 — 2026</p><h3>B.Tech, Computer Science</h3><h4>GLA University, Mathura</h4><p>Computer science and engineering. CPI: 7.51 / 10.0.</p></article>
          </div>
        </section>
      </div>
      <ContactCTA />
    </main>
  );
}
