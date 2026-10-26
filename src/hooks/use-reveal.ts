import { useEffect, useRef } from 'react';

// Keep content visible unless an observer can reveal it as it enters the viewport.
export function observeReveal(element: HTMLElement): () => void {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window) || element.getBoundingClientRect().top < window.innerHeight * 0.94) {
    return () => {};
  }

  element.dataset.reveal = 'pending';
  const reveal = () => {
    element.dataset.reveal = 'visible';
    observer.disconnect();
  };
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) reveal();
  }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
  const onMotionChange = () => { if (motion.matches) reveal(); };
  motion.addEventListener('change', onMotionChange);
  observer.observe(element);

  return () => {
    observer.disconnect();
    motion.removeEventListener('change', onMotionChange);
    delete element.dataset.reveal;
  };
}

export default function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (ref.current) return observeReveal(ref.current);
  }, []);
  return ref;
}
