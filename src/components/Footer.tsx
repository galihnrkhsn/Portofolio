import React from 'react';
import { ArrowUpRight, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="py-20 sm:py-24 bg-canvas border-t border-subtle">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-subtle items-start">
          <div className="md:col-span-7 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent block">
              [04 / Kontak]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight tracking-[-0.02em]">
              Terhubung &amp; Kontak
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-lg leading-relaxed">
              Terbuka untuk diskusi teknis, proyek kolaborasi, maupun koneksi profesional baru.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col space-y-2.5 font-mono text-xs">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-between p-3 rounded-sm border border-subtle bg-surface hover:border-ink text-ink transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3 py-2.5 rounded-sm border border-subtle bg-surface hover:border-ink text-muted hover:text-ink transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3 text-muted" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3 py-2.5 rounded-sm border border-subtle bg-surface hover:border-ink text-muted hover:text-ink transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3 text-muted" />
              </a>
            </div>
          </div>
        </div>

        {/* Colophon & Tech Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-muted">
          <div>
            <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName}. {PERSONAL_INFO.title}.</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Tipografi: Newsreader, Instrument Sans / Switzer &amp; IBM Plex Mono</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
