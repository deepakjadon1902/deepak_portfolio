import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone, Printer } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import { experience, profile, skillGroups } from '@/data/portfolio';

export default function Resume() {
  return <main id="main" tabIndex={-1}>
    <div className="shell page-shell resume-page">
      <PageIntro eyebrow="Experience & qualifications" title={<>Resume<span className="accent">.</span></>} description="My experience, technical skills, and education. You can also download a PDF copy.">
        <div className="button-row">
          <a className="button" href={profile.resume} download="Deepak-Jadon-Resume.pdf">
            <Download size={17} />Download resume <span className="button-detail">PDF</span>
          </a>
          <a className="button button-secondary" href={profile.resume} target="_blank" rel="noopener noreferrer">Open PDF <ArrowUpRight size={17} />
          </a>
          <button className="icon-link print-resume" onClick={() => window.print()} aria-label="Print this resume">
            <Printer size={19} />
          </button>
        </div>
      </PageIntro>
      <article className="resume-document" aria-label="Deepak Jadon resume">
        <header className="resume-header">
          <div>
            <p className="eyebrow">FULL STACK / MERN DEVELOPER</p>
            <h2>Deepak Jadon<span className="accent">.</span>
            </h2>
            <p>React · TypeScript · Node.js · Express · MongoDB</p>
          </div>
          <div className="resume-contact">
            <a href={`mailto:${profile.email}`}>
              <Mail size={14} />{profile.email}</a>
            <a href={profile.phoneLink}>
              <Phone size={14} />{profile.phone}</a>
            <span>
              <MapPin size={14} />Mathura, India</span>
            <div>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Github size={14} />GitHub <ArrowUpRight size={12} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={14} />LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </header>
        <section className="resume-section">
          <div className="resume-section-label mono">01 / PROFILE</div>
          <div>
            <h3>A practical approach to full stack development.</h3>
            <p>Full stack developer with 1+ year of production experience building MERN applications. My work covers responsive React interfaces, REST APIs, authentication, payment integrations, and deployment. I focus on clear user experiences and maintainable systems, with ownership across frontend and backend.</p>
          </div>
        </section>
        <section className="resume-section">
          <div className="resume-section-label mono">02 / EXPERIENCE</div>
          <div>
            <div className="resume-title-row">
              <div>
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
              </div>
              <span className="mono">{experience.period}</span>
            </div>
            <p className="resume-location">{experience.location}</p>
            <ul className="achievement-list">{experience.achievements.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>
        <section className="resume-section">
          <div className="resume-section-label mono">03 / TECHNICAL SKILLS</div>
          <div className="resume-skills">{skillGroups.map(group => <div key={group.id}>
            <h3>{group.title}</h3>
            <p>{group.skills.join(' · ')}</p>
          </div>)}</div>
        </section>
        <section className="resume-section">
          <div className="resume-section-label mono">04 / EDUCATION</div>
          <div>
            <div className="resume-title-row">
              <div>
                <h3>Bachelor of Technology, Computer Science</h3>
                <h4>GLA University, Mathura</h4>
              </div>
              <span className="mono">2022 — 2026</span>
            </div>
            <p>CPI: 7.51 / 10.0</p>
          </div>
        </section>
        <section className="resume-section">
          <div className="resume-section-label mono">05 / CERTIFICATIONS</div>
          <div className="certification-list">
            <div>
              <h3>Leadership & Team Effectiveness</h3>
              <p>IIT Guwahati · 2025</p>
            </div>
            <div>
              <h3>Environmental Engineering</h3>
              <p>IIT Kharagpur · 2024</p>
            </div>
          </div>
        </section>
        <div className="resume-bottom mono">
          <span>OPEN TO REMOTE ROLES & FREELANCE PROJECTS</span>
          <span>LET’S BUILD SOMETHING USEFUL.</span>
        </div>
      </article>
    </div>
  </main>;
}
