import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';

const words = ['AI Developer', 'DSA Enthusiast', 'Full Stack Engineer'];

export default function Hero() {
  return (
    <section id="home" className="section-container pt-28 pb-20 sm:pt-32">
      <div className="grid items-center gap-8 laptop:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-3 inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
            Available for internships & freelance
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl laptop:text-6xl">Prateek Singh</h1>
          <div className="mt-3 h-8 overflow-hidden text-lg text-slate-300 sm:text-xl">
            <motion.div
              animate={{ y: [0, -32, -64, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="space-y-1"
            >
              {words.map((word) => (
                <p key={word}>{word}</p>
              ))}
            </motion.div>
          </div>
          <p className="mt-5 max-w-xl text-slate-300">
            Building scalable systems and interactive learning platforms for developers.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-medium text-slate-950">
              View Projects
            </a>
            <a href="/resume.pdf" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-slate-100">
              Download Resume
            </a>
          </div>
          <div className="mt-6 flex gap-4 text-slate-300">
            <a href="#" aria-label="github"><Github size={20} /></a>
            <a href="#" aria-label="linkedin"><Linkedin size={20} /></a>
            <a href="#" aria-label="leetcode"><Code2 size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-5 shadow-glow"
        >
          <p className="text-sm text-slate-400">Current Focus</p>
          <div className="mt-4 space-y-3">
            {['System Design', 'Competitive Programming', 'Scalable Frontends'].map((item, i) => (
              <div key={item}>
                <div className="mb-1 flex justify-between text-xs text-slate-300"><span>{item}</span><span>{85 - i * 8}%</span></div>
                <div className="h-2 rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${85 - i * 8}%` }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
