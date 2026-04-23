import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResumePage() {
  return (
    <main className="section-container py-24">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <div className="flex gap-2">
          <Link to="/" className="rounded-lg border border-white/10 px-4 py-2 text-sm">Back</Link>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400/20 px-4 py-2 text-sm text-cyan-200">
            <Download size={14} /> Download Resume
          </a>
        </div>
      </div>
      <div className="glass overflow-hidden rounded-2xl p-3">
        <iframe title="resume" src="/resume.pdf" className="h-[75vh] w-full rounded-xl bg-white" />
      </div>
    </main>
  );
}
