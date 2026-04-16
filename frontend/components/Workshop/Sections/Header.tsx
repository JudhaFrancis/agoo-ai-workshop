'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ArrowRight, X, Menu } from 'lucide-react';
import { Button } from '../UI';

interface HeaderProps {
  isSticky: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export const Header = ({ isSticky, activeSection, mobileMenuOpen, setMobileMenuOpen, scrollToSection }: HeaderProps) => {
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Curriculum', id: 'curriculum' },
    { name: 'Instructor', id: 'instructor' },
    { name: 'Benefits', id: 'benefits' },
    { name: 'FAQ', id: 'faq' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isSticky ? 'bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="rounded-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden shrink-0">
            <img src="/logo.png" alt="Agoo Technology Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-lg md:text-2xl font-black text-slate-900 tracking-tight leading-none mb-0.5">Agoo Technology</span>
            <p className="text-[9px] md:text-[10px] text-violet-600 font-bold uppercase tracking-widest leading-none">AI Training & Workshops</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 border-b-2 ${activeSection === link.id
                ? 'text-violet-600 border-violet-600 bg-violet-10/50'
                : 'text-slate-500 border-transparent hover:text-violet-600 hover:border-violet-600/30'
                }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Button onClick={() => scrollToSection('pricing')} variant="primary" size="sm" className={`group ${activeSection === 'pricing' ? 'scale-105' : ''}`}>
              Register for ₹100 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['About', 'Curriculum', 'Instructor', 'Benefits', 'FAQ'].map((link) => (
                <button
                  key={link}
                  onClick={() => { scrollToSection(link.toLowerCase()); setMobileMenuOpen(false); }}
                  className="text-lg font-bold text-left text-slate-700 hover:text-violet-600 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
