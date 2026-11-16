import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-subtle bg-canvas/90 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-8">
        {/* Brand / Monogram */}
        <a
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-ink min-h-[44px]"
        >
          <span className="font-serif text-lg font-semibold italic text-accent">G.</span>
          <span className="tracking-widest uppercase text-xs text-muted group-hover:text-ink transition-colors">
            Portofolio
          </span>
        </a>

        {/* Desktop Navigation links & Theme switcher */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-muted font-medium">
            <a href="#proyek" className="hover:text-ink py-2 transition-colors">
              Proyek
            </a>
            <a href="#pengalaman" className="hover:text-ink py-2 transition-colors">
              Pengalaman
            </a>
            <a href="#keahlian" className="hover:text-ink py-2 transition-colors">
              Keahlian
            </a>
            <a href="#kontak" className="hover:text-ink py-2 transition-colors">
              Kontak
            </a>
          </nav>

          <div className="h-4 w-[1px] bg-subtle hidden md:block" />

          {/* Theme Switcher Button */}
          <button
            onClick={onToggleTheme}
            type="button"
            className="flex items-center justify-center gap-2 rounded-sm border border-subtle bg-surface px-3 py-2 min-h-[44px] text-xs text-ink hover:border-accent transition-colors duration-200 cursor-pointer"
            aria-label={`Beralih ke mode ${theme === 'light' ? 'Dark' : 'Light'}`}
            title={`Mode saat ini: ${theme === 'light' ? 'Warm Editorial' : 'Deep Botanical'}`}
          >
            {theme === 'light' ? (
              <>
                <Moon className="h-4 w-4 text-accent" />
                <span className="hidden sm:inline font-mono text-[11px] text-muted">Warm</span>
              </>
            ) : (
              <>
                <Sun className="h-4 w-4 text-accent" />
                <span className="hidden sm:inline font-mono text-[11px] text-muted">Botanical</span>
              </>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            type="button"
            className="md:hidden flex items-center justify-center rounded-sm border border-subtle bg-surface h-[44px] w-[44px] text-ink hover:border-accent transition-colors duration-200 cursor-pointer"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4 text-ink" />
            ) : (
              <Menu className="h-4 w-4 text-ink" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden border-t border-subtle bg-canvas/98 px-6 py-4 flex flex-col space-y-3"
          aria-label="Navigasi Mobile"
        >
          <a
            href="#proyek"
            onClick={closeMenu}
            className="flex items-center min-h-[44px] text-xs uppercase tracking-wider text-muted hover:text-ink transition-colors"
          >
            Proyek
          </a>
          <a
            href="#pengalaman"
            onClick={closeMenu}
            className="flex items-center min-h-[44px] text-xs uppercase tracking-wider text-muted hover:text-ink transition-colors"
          >
            Pengalaman
          </a>
          <a
            href="#keahlian"
            onClick={closeMenu}
            className="flex items-center min-h-[44px] text-xs uppercase tracking-wider text-muted hover:text-ink transition-colors"
          >
            Keahlian
          </a>
          <a
            href="#kontak"
            onClick={closeMenu}
            className="flex items-center min-h-[44px] text-xs uppercase tracking-wider text-muted hover:text-ink transition-colors"
          >
            Kontak
          </a>
        </nav>
      )}
    </header>
  );
};
