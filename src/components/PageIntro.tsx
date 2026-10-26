import type { ReactNode } from 'react';
import FlipText from '@/components/FlipText';
interface PageIntroProps { eyebrow: string; title: ReactNode; description: string; children?: ReactNode }
export default function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return <div className="page-intro">
    <p className="eyebrow">
      <span />{eyebrow}</p>
    <h1><FlipText>{title}</FlipText></h1>
    <p className="page-description">{description}</p>{children}</div>;
}
