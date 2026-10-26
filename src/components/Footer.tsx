import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div><Link to="/" className="brand footer-brand">Deepak Jadon<span>.</span></Link><p>Full Stack Developer · Mathura, India</p></div>
        <div className="footer-links"><Link to="/projects">Projects</Link><Link to="/resume">Resume</Link><Link to="/contact">Contact <ArrowUpRight size={14} /></Link></div>
        <div className="social-links"><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub, opens in a new tab"><Github size={19} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn, opens in a new tab"><Linkedin size={19} /></a></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Deepak Jadon</span><a href={`mailto:${profile.email}`}>{profile.email}</a><span>Designed & built with React</span></div>
    </footer>
  );
}
