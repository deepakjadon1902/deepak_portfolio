import { useEffect } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import useMotionLoop from '@/hooks/use-motion-loop';

interface FlipTextProps {
  children: ReactNode;
}

export default function FlipText({ children }: FlipTextProps) {
  const ref = useMotionLoop<HTMLSpanElement>();

  useEffect(() => {
    const rotors = ref.current?.querySelectorAll<HTMLElement>('.flip-rotor');
    if (!rotors) return;
    // Match the cube depth to its real height, including wrapped page titles.
    rotors.forEach(rotor => rotor.style.setProperty('--flip-depth', `${rotor.offsetHeight / 2}px`));
    if (!('ResizeObserver' in window)) return;
    const observer = new ResizeObserver(entries => entries.forEach(entry => {
      (entry.target as HTMLElement).style.setProperty('--flip-depth', `${entry.contentRect.height / 2}px`);
    }));
    rotors.forEach(rotor => observer.observe(rotor));
    return () => observer.disconnect();
  }, [children, ref]);

  const parts = typeof children === 'string' ? children.split(/(\s+)/) : [children];
  let wordIndex = 0;

  return <span ref={ref} className="flip-text">
    <span className="sr-only">{children}</span>
    <span aria-hidden="true" className="flip-visual">{parts.map((part, index) => {
      if (typeof part === 'string' && /^\s+$/.test(part)) return part;
      const style = { '--flip-delay': `${Math.min(wordIndex++ * 65, 325)}ms` } as CSSProperties;
      return <span className="flip-word" style={style} key={index}>
        <span className="flip-rotor">
          <span className="flip-front">{part}</span>
          <span className="flip-copy flip-top">{part}</span>
          <span className="flip-copy flip-back">{part}</span>
          <span className="flip-copy flip-bottom">{part}</span>
        </span>
      </span>;
    })}</span>
  </span>;
}
