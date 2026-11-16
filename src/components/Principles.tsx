import React from 'react';
import { HARD_SKILLS, SOFT_SKILLS, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';
import { Award, GraduationCap, Code2, CheckCircle2 } from 'lucide-react';

export const Principles: React.FC = () => {
  return (
    <section id="keahlian" className="py-20 sm:py-28 border-b border-subtle">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        
        <div className="mb-14 pb-4 border-b border-subtle">
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-2 block">
            [03 / Keahlian &amp; Kredensial]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-[-0.02em]">
            Keahlian Teknis, Sertifikasi &amp; Pendidikan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted max-w-2xl">
            Teknologi yang biasa saya gunakan sehari-hari, sertifikasi pendukung, dan riwayat pendidikan formal.
          </p>
        </div>

        {/* 1. Hard Skills Breakdown */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="h-4 w-4 text-accent" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              Keahlian Teknis (Hard Skills)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HARD_SKILLS.map((grp) => (
              <div
                key={grp.category}
                className="rounded-md border border-subtle bg-surface p-6 space-y-3"
              >
                <span className="font-mono text-xs text-accent font-medium block">
                  {grp.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {grp.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border border-subtle bg-canvas px-2.5 py-1 font-mono text-xs text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Certifications & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-4 w-4 text-accent" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                Sertifikasi Profesional (2026)
              </h3>
            </div>

            <div className="divide-y divide-subtle border border-subtle bg-surface rounded-md">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-4 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-ink font-sans">
                      {cert.title}
                    </p>
                    <span className="font-mono text-xs text-muted">
                      Penerbit: {cert.issuer}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-accent font-semibold px-2 py-0.5 border border-subtle rounded-sm bg-canvas">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Soft Skills (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-4 w-4 text-accent" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                  Pendidikan Formal
                </h3>
              </div>

              <div className="rounded-md border border-subtle bg-surface p-5 space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-accent font-medium">{EDUCATION.period}</span>
                  <span className="text-muted border border-subtle px-1.5 py-0.2 bg-canvas rounded-sm">SMK</span>
                </div>
                <h4 className="text-sm font-semibold text-ink font-sans">
                  {EDUCATION.school}
                </h4>
                <p className="text-xs text-muted font-mono">
                  Jurusan: {EDUCATION.major}
                </p>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                  Pola Kerja &amp; Kolaborasi
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {SOFT_SKILLS.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-subtle bg-surface px-2.5 py-1 font-mono text-[11px] text-muted hover:text-ink transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
