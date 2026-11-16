import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Principles } from './components/Principles';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  useLenis(); // Buttery smooth inertial scroll

  return (
    <div className="min-h-screen bg-canvas text-ink transition-colors duration-300 paper-grain">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Principles />
      </main>
      <Footer />
    </div>
  );
};

export default App;
