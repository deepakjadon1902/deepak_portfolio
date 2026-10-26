import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
const titles: Record<string, string> = {
  '/': 'Full Stack & MERN Developer', '/about': 'About', '/projects': 'Projects',
  '/skills': 'Skills & Expertise', '/resume': 'Resume', '/contact': 'Contact',
};
export default function RouteEffects() {
  const { pathname } = useLocation();
  const previous = useRef(pathname);
  useEffect(() => {
    document.title = `Deepak Jadon | ${titles[pathname] ?? 'Page not found'}`;
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    if (previous.current !== pathname) document.getElementById('main')?.focus({ preventScroll: true });
    previous.current = pathname;
  }, [pathname]);
  return null;
}
