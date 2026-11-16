import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="pengalaman" className="py-20 sm:py-28 border-b border-subtle">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        
        <div className="mb-14 pb-4 border-b border-subtle">
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-2 block">
            [02 / Pengalaman Kerja]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-[-0.02em]">
            Pengalaman Kerja
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted max-w-xl">
            Riwayat kontribusi dan tanggung jawab teknis yang pernah dan sedang saya jalani.
          </p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              <div className="md:col-span-4 font-mono text-xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-semibold">{exp.period}</span>
                  {exp.type && (
                    <span className="border border-subtle bg-surface px-1.5 py-0.2 text-[10px] text-muted rounded-sm">
                      {exp.type}
                    </span>
                  )}
                </div>
                <p className="text-ink font-medium text-sm">{exp.company}</p>
                <p className="text-muted text-[11px]">{exp.location}</p>
              </div>

              <div className="md:col-span-8 space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal">
                  {exp.role}
                </h3>

                <ul className="space-y-2 text-sm text-muted">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1 w-1 rounded-none bg-accent shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border border-subtle bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
