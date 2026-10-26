import { useEffect, useRef, useState } from 'react';

const phrases = ['from interface to API.', 'built for real people.', 'ready for the real world.'];

export default function RotatingText() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    const stop = () => { clearInterval(timer); timer = undefined; };
    const sync = () => {
      stop();
      if (motion.matches) { setActive(0); return; }
      if (inView && !document.hidden) {
        timer = setInterval(() => setActive(previous => (previous + 1) % phrases.length), 3600);
      }
    };
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      inView = entries.some(entry => entry.isIntersecting);
      sync();
    }) : undefined;
    if (observer) observer.observe(element);
    else { inView = true; sync(); }
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);

    return () => {
      stop();
      observer?.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  return <span ref={ref} className="rotating-text">
    <span className="sr-only">{phrases[0]}</span>
    {phrases.map((phrase, index) => <span aria-hidden="true" className="rotating-phrase" data-active={active === index} key={phrase}>{phrase}</span>)}
  </span>;
}
