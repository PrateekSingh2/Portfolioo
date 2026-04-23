import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionShell from './SectionShell';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <SectionShell id="projects" title="Projects" subtitle="Selected products blending engineering depth and user-first design.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -6 }}
            className="glass flex h-full flex-col rounded-2xl p-5 transition"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-white/10 px-2 py-1 text-xs text-cyan-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm text-slate-200">
              <a className="inline-flex items-center gap-1 hover:text-cyan-300" href={project.github}><Github size={14} />GitHub</a>
              <a className="inline-flex items-center gap-1 hover:text-cyan-300" href={project.live}><ExternalLink size={14} />Live</a>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
