import { motion } from 'framer-motion';
import SectionShell from './SectionShell';

export default function About() {
  return (
    <SectionShell id="about" title="About" subtitle="Focused on product-grade engineering and coding excellence.">
      <div className="grid gap-4 md:grid-cols-2">
        <motion.article whileHover={{ y: -4 }} className="glass rounded-2xl p-5">
          <h3 className="mb-3 text-lg font-medium">Education</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>B.Tech in Artificial Intelligence, MITS Gwalior (SGPA: 8.80)</li>
            <li>Class XII CBSE: 77.4%</li>
          </ul>
        </motion.article>
        <motion.article whileHover={{ y: -4 }} className="glass rounded-2xl p-5">
          <h3 className="mb-3 text-lg font-medium">Professional Snapshot</h3>
          <p className="text-sm text-slate-300">
            Passionate developer focused on DSA, system design, and building real-world scalable applications.
          </p>
          <p className="mt-3 text-sm text-cyan-300">Location: Gwalior, India</p>
        </motion.article>
      </div>
    </SectionShell>
  );
}
