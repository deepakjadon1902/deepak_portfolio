import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useReveal from '@/hooks/use-reveal';
import { profile } from '@/data/portfolio';

export default function ContactCTA() {
  const revealRef = useReveal<HTMLElement>();
  return (
    <section ref={revealRef} className="contact-cta shell">
      <div className="cta-content"><p className="eyebrow">Open to projects & opportunities</p><h2>Have a project in mind?</h2><p>Tell me what you’re working on. Let’s see how I can help.</p></div>
      <div className="cta-actions"><Link to="/contact" className="button">Get in touch <ArrowUpRight size={18} /></Link><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
    </section>
  );
}
