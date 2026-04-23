import { Copy, Mail, Phone } from 'lucide-react';
import SectionShell from './SectionShell';

function copy(text) {
  navigator.clipboard.writeText(text);
}

export default function Contact() {
  return (
    <SectionShell id="contact" title="Contact" subtitle="Let’s collaborate on scalable products and developer tools.">
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="glass space-y-4 rounded-2xl p-5 text-sm text-slate-300">
          <div className="flex items-center justify-between rounded-xl border border-white/10 p-3">
            <div className="flex items-center gap-2"><Mail size={14} /> prateeksinghrajawat2006@gmail.com</div>
            <button onClick={() => copy('prateeksinghrajawat2006@gmail.com')}><Copy size={14} /></button>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-white/10 p-3">
            <div className="flex items-center gap-2"><Phone size={14} /> +91 9669677324</div>
            <button onClick={() => copy('+919669677324')}><Copy size={14} /></button>
          </div>
          <div className="flex gap-3 text-cyan-300">
            <a href="#">GitHub</a><a href="#">LinkedIn</a><a href="#">LeetCode</a>
          </div>
        </article>
        <form className="glass grid gap-3 rounded-2xl p-5">
          <input className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm" placeholder="Your Name" />
          <input className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm" placeholder="Email" />
          <textarea className="min-h-28 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm" placeholder="Message" />
          <button type="button" className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-medium text-slate-950">
            Send Message
          </button>
        </form>
      </div>
    </SectionShell>
  );
}
