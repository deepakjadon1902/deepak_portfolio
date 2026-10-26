import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import FlipText from '@/components/FlipText';

const navItems = [
  { name: 'Home', path: '/' }, { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' }, { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: '/resume' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
      if (event.key === 'Tab') {
        const links = Array.from(menu.current?.querySelectorAll<HTMLAnchorElement>('a') ?? []);
        const first = menuButton.current;
        const last = links.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);
  return <header className="site-header">
    <a href="#main" className="skip-link">Skip to content</a>
    <div className="shell nav-inner">
      <Link to="/" className="brand" aria-label="Deepak Jadon home">
        <span className="brand-monogram">dj<span>.</span></span><span className="brand-fullname"><FlipText><span className="brand-initial-d">D</span>eepak <span className="brand-initial-j">J</span>adon</FlipText></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(item => <NavLink key={item.path} to={item.path} end><FlipText>{item.name}</FlipText></NavLink>)}</nav>
      <Link to="/contact" className="button button-small nav-contact">Contact <ArrowUpRight size={16} />
      </Link>
      <button ref={menuButton} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
    </div>
    {open && <div className="mobile-menu" id="mobile-navigation" ref={menu}>
      <nav aria-label="Mobile navigation">{[...navItems, { name: 'Contact', path: '/contact' }].map((item, i) => <NavLink key={item.path} to={item.path} end>
        <span className="mono">0{i + 1}</span>{item.name}<ArrowUpRight size={20} />
      </NavLink>)}</nav>
      <p>Full Stack Developer · Mathura, India</p>
    </div>}
  </header>;
}
