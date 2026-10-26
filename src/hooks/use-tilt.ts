import { useEffect, useRef } from 'react';

export default function useTilt<T extends HTMLElement>(strength = 6) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const enabled = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      element.style.removeProperty('--tilt-x');
      element.style.removeProperty('--tilt-y');
      element.style.removeProperty('--glare-x');
      element.style.removeProperty('--glare-y');
      delete element.dataset.tilted;
    };
    const move = (event: PointerEvent) => {
      if (!enabled.matches || event.pointerType !== 'mouse') return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
        const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
        element.style.setProperty('--tilt-x', `${(0.5 - y) * strength * 2}deg`);
        element.style.setProperty('--tilt-y', `${(x - 0.5) * strength * 2}deg`);
        element.style.setProperty('--glare-x', `${x * 100}%`);
        element.style.setProperty('--glare-y', `${y * 100}%`);
        element.dataset.tilted = 'true';
      });
    };
    const sync = () => {
      reset();
      element.removeEventListener('pointermove', move);
      element.removeEventListener('pointerleave', reset);
      element.removeEventListener('pointercancel', reset);
      if (enabled.matches) {
        element.addEventListener('pointermove', move);
        element.addEventListener('pointerleave', reset);
        element.addEventListener('pointercancel', reset);
      }
    };
    sync();
    enabled.addEventListener('change', sync);
    return () => {
      reset();
      enabled.removeEventListener('change', sync);
      element.removeEventListener('pointermove', move);
      element.removeEventListener('pointerleave', reset);
      element.removeEventListener('pointercancel', reset);
    };
  }, [strength]);

  return ref;
}
