import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return <main id="main" tabIndex={-1} className="shell not-found">
    <p className="eyebrow">A SMALL DETOUR</p>
    <span className="error-code mono">404<span className="accent">.</span>
    </span>
    <h1>This page is off the grid.</h1>
    <p>The link may have changed, or the page may no longer exist.</p>
    <div className="button-row">
      <Link className="button" to="/">
        <ArrowLeft size={17} />Back to home</Link>
      <Link className="button button-secondary" to="/projects">Explore projects <ArrowUpRight size={17} />
      </Link>
    </div>
  </main>;
}
