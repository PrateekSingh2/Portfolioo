import { motion } from 'framer-motion';
import { Download, FileText, MoonStar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="section-container pt-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-glow">
          <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-300">
            &lt;Prateek.dev /&gt;
          </a>
          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/resume"
              className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-200 hover:border-cyan-400/40"
            >
              <FileText size={14} /> Resume
            </Link>
            <button className="rounded-lg border border-white/10 p-2 text-slate-300" aria-label="theme toggle">
              <MoonStar size={14} />
            </button>
            <a
              href="/resume.pdf"
              className="hidden items-center gap-1 rounded-lg bg-cyan-500/20 px-3 py-2 text-xs text-cyan-200 sm:inline-flex"
            >
              <Download size={14} /> CV
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
