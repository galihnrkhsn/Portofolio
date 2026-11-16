import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-subtle">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        
        {/* Editorial Subtitle & Index Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="inline-block h-2 w-2 rounded-none bg-accent" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {PERSONAL_INFO.title}
          </span>
          <span className="text-subtle font-mono text-xs">/</span>
          <span className="font-mono text-xs text-muted">
            {PERSONAL_INFO.location}
          </span>
        </motion.div>

        {/* Big Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.02em] text-ink leading-[1.08] mb-8"
        >
          Galih Nur Ikhsan
        </motion.h1>

        {/* Narrative & Positioning - Terse & Human */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10"
        >
          <div className="md:col-span-8 space-y-4">
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            
            {/* Core Competencies Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              {PERSONAL_INFO.competencies.map((comp) => (
                <span
                  key={comp}
                  className="rounded-sm border border-subtle bg-surface px-2.5 py-1 font-mono text-[11px] text-ink font-medium"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 border-l border-subtle pl-6 space-y-3 font-mono text-xs">
            <div>
              <span className="block text-muted text-[11px] uppercase tracking-wider">Peran Saat Ini</span>
              <span className="text-ink font-medium">Full Stack Developer di PT. Sipatex Putri Lestari</span>
            </div>
            <div>
              <span className="block text-muted text-[11px] uppercase tracking-wider">Keahlian Inti</span>
              <span className="text-ink font-medium">PHP, Laravel, Vue.js, PostgreSQL, MySQL, REST API, VPS</span>
            </div>
            <div>
              <span className="block text-muted text-[11px] uppercase tracking-wider">Lokasi</span>
              <span className="text-ink font-medium">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
