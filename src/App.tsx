import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiCodeforces,
  SiCodechef,
  SiFirebase,
  SiGithub,
  SiLeetcode,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiHackerrank,
  SiCplusplus,
  SiOpenjdk,
  SiGit
} from 'react-icons/si';
import { FaExternalLinkAlt, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineDownload, HiX } from 'react-icons/hi';

interface SkillBadgeProps {
  name: string;
  icon: IconType;
  color: string;
  compact?: boolean;
}

interface StatCard {
  name: string;
  icon: IconType;
  solved: string;
  rating: string;
  progress: number;
  rank: string;
}

interface Project {
  title: string;
  summary: string;
  stack: Omit<SkillBadgeProps, 'compact'>[];
  github: string;
  live: string;
  gradient: string;
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export function SkillBadge({ name, icon: Icon, color, compact = false }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className={`group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition ${
        compact ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm'
      }`}
    >
      <Icon className="text-slate-300 transition group-hover:drop-shadow-[0_0_8px]" style={{ color }} />
      <span className="text-slate-200">{name}</span>
    </motion.div>
  );
}

function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-5xl rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Resume Preview</h3>
          <button onClick={onClose} className="rounded-lg border border-white/15 p-2 text-slate-300 hover:text-white">
            <HiX />
          </button>
        </div>
        <iframe title="resume" src="/resume.pdf" className="h-[70vh] w-full rounded-lg bg-white" />
        <div className="mt-4 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border border-white/15 px-4 py-2 text-sm">
            Close
          </button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-medium text-slate-950"
          >
            <HiOutlineDownload /> Download PDF
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [isResumeOpen, setResumeOpen] = useState(false);

  const skills = useMemo(
    () => ({
      Languages: [
        { name: 'Python', icon: SiPython, color: '#60a5fa' },
        { name: 'Java', icon: SiOpenjdk, color: '#f97316' },
        { name: 'C++', icon: SiCplusplus, color: '#3b82f6' },
        { name: 'TypeScript', icon: SiTypescript, color: '#2563eb' }
      ],
      'Frameworks / Libraries': [
        { name: 'React', icon: SiReact, color: '#22d3ee' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#4ade80' }
      ],
      Tools: [
        { name: 'Git', icon: SiGit, color: '#f97316' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#60a5fa' },
        { name: 'Firebase', icon: SiFirebase, color: '#facc15' },
        { name: 'Supabase', icon: SiSupabase, color: '#34d399' }
      ]
    }),
    []
  );

  const profiles: StatCard[] = [
    { name: 'LeetCode', icon: SiLeetcode, solved: '650+', rating: '1850+', progress: 82, rank: 'Top 12%' },
    { name: 'Codeforces', icon: SiCodeforces, solved: '350+', rating: '1480+', progress: 68, rank: 'Specialist' },
    { name: 'CodeChef', icon: SiCodechef, solved: '300+', rating: '1800+', progress: 74, rank: '4★' },
    { name: 'HackerRank', icon: SiHackerrank, solved: '220+', rating: '5★ Problem Solving', progress: 71, rank: 'Top 8%' }
  ];

  const projects: Project[] = [
    {
      title: 'AlgoLib',
      summary: 'DSA visualization platform with contests and analytics used by 800+ developers.',
      stack: [
        { name: 'React', icon: SiReact, color: '#22d3ee' },
        { name: 'TypeScript', icon: SiTypescript, color: '#2563eb' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' }
      ],
      github: '#',
      live: '#',
      gradient: 'from-violet-600/30 to-cyan-500/20'
    },
    {
      title: 'XYNC Project Management System',
      summary: 'Full-stack task dashboard with Firebase auth and PostgreSQL-backed workflow tracking.',
      stack: [
        { name: 'React', icon: SiReact, color: '#22d3ee' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#60a5fa' },
        { name: 'Firebase', icon: SiFirebase, color: '#facc15' }
      ],
      github: '#',
      live: '#',
      gradient: 'from-blue-600/30 to-fuchsia-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.2),transparent_35%),#020617] text-slate-100">
      <ResumeModal open={isResumeOpen} onClose={() => setResumeOpen(false)} />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="font-semibold text-cyan-300">&lt;Prateek.dev /&gt;</a>
          <nav className="hidden gap-5 text-sm text-slate-300 md:flex">
            <a href="#skills">Skills</a>
            <a href="#profiles">Profiles</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-6">
        <motion.section id="home" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid gap-8 py-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm text-cyan-300">AI Developer | DSA Enthusiast | Full Stack Engineer</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Prateek Singh</h1>
            <p className="mt-4 max-w-xl text-slate-300">Building scalable systems and interactive learning platforms for developers.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950">View Projects</a>
              <button onClick={() => setResumeOpen(true)} className="rounded-lg border border-white/20 px-5 py-2 text-sm">Preview Resume</button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-sm text-slate-400">Quick Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <p className="flex items-center gap-2"><HiOutlineMail /> prateeksinghrajawat2006@gmail.com</p>
              <p className="flex items-center gap-2"><FaPhoneAlt /> +91 9669677324</p>
              <div className="flex gap-3 text-lg text-cyan-300">
                <SiGithub /> <FaLinkedinIn /> <SiLeetcode />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="skills" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-12">
          <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {Object.entries(skills).map(([group, values]) => (
              <article key={group} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h3 className="mb-4 text-lg font-medium">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {values.map((skill) => (
                    <SkillBadge key={skill.name} {...skill} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="profiles" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-12">
          <h2 className="mb-6 text-2xl font-semibold">Coding Dashboard</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {profiles.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="flex items-center gap-2 text-lg font-medium"><Icon className="text-cyan-300" /> {card.name}</h3>
                    <span className="text-xs text-slate-400">{card.rank}</span>
                  </div>
                  <p className="text-sm text-slate-300">Rating: {card.rating}</p>
                  <p className="text-sm text-slate-300">Solved: {card.solved}</p>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${card.progress}%` }} />
                  </div>
                </article>
              );
            })}
          </div>
        </motion.section>

        <motion.section id="projects" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-12">
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className={`mb-4 h-36 rounded-xl border border-white/10 bg-gradient-to-br ${project.gradient}`} />
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <SkillBadge key={tech.name} {...tech} compact />
                  ))}
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  <a href={project.github} className="inline-flex items-center gap-1 text-cyan-300 transition hover:-translate-y-0.5">GitHub <FaExternalLinkAlt size={12} /></a>
                  <a href={project.live} className="inline-flex items-center gap-1 text-cyan-300 transition hover:-translate-y-0.5">Live <FaExternalLinkAlt size={12} /></a>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-12">
          <h2 className="mb-6 text-2xl font-semibold">Contact</h2>
          <form className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:grid-cols-2">
            <input placeholder="Your Name" className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none ring-cyan-400 transition focus:ring-2" />
            <input placeholder="Email Address" className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none ring-cyan-400 transition focus:ring-2" />
            <textarea placeholder="Message" className="md:col-span-2 min-h-32 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none ring-cyan-400 transition focus:ring-2" />
            <button type="button" className="md:col-span-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 font-semibold text-slate-950">Send Message</button>
          </form>
        </motion.section>
      </main>
    </div>
  );
}
