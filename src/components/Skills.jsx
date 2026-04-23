import { motion } from 'framer-motion';
import SectionShell from './SectionShell';
import { skillGroups } from '../data/portfolio';

export default function Skills() {
  return (
    <SectionShell id="skills" title="Skills" subtitle="Production-focused stack across frontend, backend, and problem solving.">
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(skillGroups).map(([group, values]) => (
          <motion.article key={group} whileHover={{ y: -3 }} className="glass rounded-2xl p-5">
            <h3 className="mb-3 text-lg font-medium">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-gradient-to-r from-violet-500/20 to-cyan-400/15 px-3 py-1 text-xs text-slate-200 transition hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
