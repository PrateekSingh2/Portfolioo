import { motion } from 'framer-motion';
import SectionShell from './SectionShell';
import { profiles } from '../data/portfolio';

export default function Profiles() {
  return (
    <SectionShell id="profiles" title="Coding Dashboard" subtitle="Competitive programming stats across major platforms.">
      <div className="grid gap-4 md:grid-cols-2">
        {profiles.map((profile) => (
          <motion.article key={profile.name} whileHover={{ y: -4 }} className="glass rounded-2xl p-5">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-lg font-medium">{profile.name}</h3>
              <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300">Rating {profile.rating}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
              <p>Problems: {profile.solved}</p>
              <p>Rank: {profile.rank}</p>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${profile.progress}%` }}
                viewport={{ once: true }}
                className="h-2 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400"
              />
            </div>
            <a href={profile.link} className="mt-4 inline-block text-sm text-cyan-300 hover:underline">
              View Profile →
            </a>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
