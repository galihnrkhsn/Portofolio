import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const featured = PROJECTS.filter((p) => p.featured);
  const archived = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="proyek" className="py-20 sm:py-28 border-b border-subtle">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-subtle">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-2 block">
              [01 / Proyek &amp; Sistem]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-[-0.02em]">
              Sistem &amp; Aplikasi yang Dikerjakan
            </h2>
          </div>
          <p className="text-xs font-mono text-muted max-w-xs text-left sm:text-right">
            Beberapa sistem dan modul internal yang saya bangun untuk kebutuhan operasional.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-10 mb-16">
          {featured.map((project, idx) => (
            <FeaturedCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Archive Table */}
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
              Proyek
            </h3>
            <span className="font-mono text-[11px] text-muted">
              {archived.length} Entri
            </span>
          </div>

          <div className="divide-y divide-subtle border-y border-subtle">
            {archived.map((project) => (
              <ArchiveRow key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [showArchitecture, setShowArchitecture] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-md border border-subtle bg-surface p-6 sm:p-8 hover:border-ink/40 transition-colors duration-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-accent font-semibold">{project.year}</span>
            <span className="text-subtle">&bull;</span>
            <span className="text-ink font-medium">{project.company}</span>
            <span className="text-subtle">&bull;</span>
            <span className="text-muted uppercase tracking-wider">{project.category}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-muted leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-subtle pt-5 md:pt-0 md:pl-8 space-y-4">
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-muted mb-1.5">Teknologi</span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span key={t} className="rounded-sm border border-subtle bg-canvas px-2 py-0.5 font-mono text-[11px] text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {project.metrics && (
            <div className="pt-1">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-muted mb-1.5">Fokus</span>
              <span className="inline-block rounded-sm bg-canvas border border-subtle px-2.5 py-1 font-mono text-xs text-ink">
                {project.metrics}
              </span>
            </div>
          )}

          {project.architecture && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowArchitecture(prev => !prev)}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-ink hover:text-accent transition-colors min-h-[44px] cursor-pointer"
                aria-expanded={showArchitecture}
              >
                <span>{showArchitecture ? "Tutup detail teknis" : "Lihat detail teknis"}</span>
                {showArchitecture ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Expandable Architecture Details Panel */}
      <AnimatePresence>
        {showArchitecture && project.architecture && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mt-6 pt-6 border-t border-subtle"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-canvas p-5 rounded-sm border border-subtle font-mono text-xs">
              <div className="space-y-1.5">
                <span className="text-accent font-semibold uppercase tracking-wider block text-[11px]">
                  Tantangan Teknis
                </span>
                <p className="text-muted leading-relaxed font-sans text-xs sm:text-sm">
                  {project.architecture.challenge}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-accent font-semibold uppercase tracking-wider block text-[11px]">
                  Solusi &amp; Pendekatan
                </span>
                <p className="text-muted leading-relaxed font-sans text-xs sm:text-sm">
                  {project.architecture.solution}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const ArchiveRow: React.FC<{ project: Project }> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-4 px-3 -mx-3 hover:bg-surface/60 transition-colors rounded-sm">
      <div
        onClick={() => setExpanded(prev => !prev)}
        className="flex items-center justify-between gap-4 cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setExpanded(prev => !prev);
          }
        }}
        aria-expanded={expanded}
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <span className="font-mono text-xs text-muted w-24 shrink-0">{project.year}</span>
          <div>
            <h4 className="text-sm font-medium text-ink hover:text-accent transition-colors">
              {project.title}
            </h4>
            <span className="text-[11px] font-mono text-muted block sm:inline sm:ml-2">
              {project.company}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex gap-1.5">
            {project.stack.slice(0, 3).map((t) => (
              <span key={t} className="font-mono text-[10px] text-muted px-1.5 py-0.5 border border-subtle rounded-sm">
                {t}
              </span>
            ))}
          </div>
          {expanded ? (
            <ChevronUp className="h-4 w-4 text-accent" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted" />
          )}
        </div>
      </div>

      {expanded && project.architecture && (
        <div className="mt-3 pt-3 border-t border-subtle/60 text-xs text-muted space-y-2 font-mono">
          <p className="font-sans text-xs leading-relaxed">{project.summary}</p>
          <div className="bg-canvas p-3 rounded-sm border border-subtle text-[11px] space-y-1">
            <span className="text-accent font-semibold block">Pendekatan:</span>
            <p className="font-sans text-xs">{project.architecture.solution}</p>
          </div>
        </div>
      )}
    </div>
  );
};
