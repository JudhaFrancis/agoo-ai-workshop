'use client';

import React, { useState, useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';

// --- Hooks ---
import { useCountdown } from '@/components/Workshop/Hooks/useCountdown';
import { useTypewriter } from '@/components/Workshop/Hooks/useTypewriter';

// --- Sections ---
import { Header } from '@/components/Workshop/Sections/Header';
import { Hero } from '@/components/Workshop/Sections/Hero';
import { CountdownSection } from '@/components/Workshop/Sections/CountdownSection';
import { MasteryCards } from '@/components/Workshop/Sections/MasteryCards';
import { BeforeAfter } from '@/components/Workshop/Sections/BeforeAfter';
import { Curriculum } from '@/components/Workshop/Sections/Curriculum';
import { PromptShowcase } from '@/components/Workshop/Sections/PromptShowcase';
import { Instructor } from '@/components/Workshop/Sections/Instructor';
import { Benefits } from '@/components/Workshop/Sections/Benefits';
import { PersonaCards } from '@/components/Workshop/Sections/PersonaCards';
import { FAQ } from '@/components/Workshop/Sections/FAQ';
import { Pricing } from '@/components/Workshop/Sections/Pricing';
import { Footer } from '@/components/Workshop/Sections/Footer';

// --- Layout & Floating ---
import { FloatingElements } from '@/components/Workshop/Layout/FloatingElements';

export default function AgooWorkshopLanding() {
  // --- Refs & Scroll ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  // --- Dynamic Content Effects ---
  const targetDate = new Date(currentYear, 3, 21); // April 21st (Month is 0-indexed)
  const timeLeft = useCountdown(targetDate);
  
  const typewriterText = useTypewriter([
    "Save 2+ hours every day",
    "Write better emails in seconds",
    "Automate repetitive tasks",
    "Build a professional resume with AI"
  ]);

  useEffect(() => {
    const handleScroll = () => setIsHeaderSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-inter text-slate-800">
      
      <FloatingElements 
        scaleX={scaleX} 
        scrollToSection={scrollToSection} 
      />

      <Header 
        isSticky={isHeaderSticky} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        scrollToSection={scrollToSection} 
      />

      <main>
        <Hero 
          currentMonth={currentMonth} 
          currentYear={currentYear} 
          typewriterText={typewriterText} 
          scrollToSection={scrollToSection} 
        />
        
        <CountdownSection timeLeft={timeLeft} />
        
        <MasteryCards />
        
        <BeforeAfter scrollToSection={scrollToSection} />
        
        <Curriculum />
        
        <PromptShowcase />
        
        <Instructor />
        
        <Benefits />
        
        <PersonaCards />
        
        <FAQ />
        
        <Pricing scrollToSection={scrollToSection} />
      </main>

      <Footer currentYear={currentYear} />
    </div>
  );
}
