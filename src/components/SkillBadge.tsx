import { useState } from 'react';
import type { CSSProperties } from 'react';
import { AppWindow, MailCheck, Network, ShieldCheck, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skillLogos } from '@/data/skill-logos';

const conceptIcons: Record<string, LucideIcon> = {
  'Responsive design': AppWindow,
  'REST APIs': Network,
  'Role-based access': ShieldCheck,
  'Email verification': MailCheck,
};

export default function SkillBadge({ name, index }: { name: string; index: number }) {
  const [failed, setFailed] = useState(false);
  const logo = skillLogos[name];
  const Icon = conceptIcons[name] ?? Wrench;
  const style = {
    '--skill-accent': logo?.color ?? '#496b96',
    '--skill-delay': `${index * 160}ms`,
  } as CSSProperties;

  return <li className="skill-tile" style={style}>
    <span className="skill-logo-frame" aria-hidden="true">
      <span className="skill-logo-motion">
        {logo && !failed ? <img className="skill-logo-art" src={`/images/skills/${logo.file}`} alt="" width="48" height="48" loading="lazy" decoding="async" onError={() => setFailed(true)} /> : <Icon className="skill-logo-art skill-concept-icon" size={36} strokeWidth={1.5} />}
      </span>
    </span>
    <span className="skill-tile-label">{name}</span>
  </li>;
}
