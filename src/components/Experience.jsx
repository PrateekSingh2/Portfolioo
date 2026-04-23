import { motion } from 'framer-motion';
import SectionShell from './SectionShell';

export default function Experience() {
  const points = [
    'Built scalable DSA platform',
    'Led team of 5 members',
    'Improved development speed by 30%'
  ];

  return (
    <SectionShell id="experience" title="Experience" subtitle="Leadership and execution in product engineering.">
      <div className="glass relative rounded-2xl p-6">
        <div className="absolute bottom-6 left-8 top-6 w-px bg-white/10" />
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-8">
          <span className="absolute left-[1px] top-2 h-3 w-3 rounded-full bg-cyan-400" />
          <p className="text-xs uppercase tracking-widest text-cyan-300">Founder & Lead Software Engineer</p>
          <h3 className="mt-1 text-xl font-semibold">AlgoLib</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionShell>
  );
}
