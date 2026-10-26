import { useEffect, useRef } from 'react';

// Run decorative loops only while they can be seen and motion is welcome.
export default function useMotionLoop<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = !('IntersectionObserver' in window);
    const sync = () => {
      element.dataset.motion = inView && !document.hidden && !motion.matches ? 'running' : 'paused';
    };
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      inView = entries.some(entry => entry.isIntersecting);
      sync();
    }, { threshold: 0.05 }) : undefined;

    sync();
    observer?.observe(element);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);

    return () => {
      observer?.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      delete element.dataset.motion;
    };
  }, []);

  return ref;
}
