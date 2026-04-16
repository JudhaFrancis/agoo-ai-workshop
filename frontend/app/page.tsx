'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

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
import { RegistrationModal } from '@/components/Workshop/UI/RegistrationModal';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import axios from 'axios';

export default function AgooWorkshopLanding() {
  // --- Refs & Scroll ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  
  // --- Registration & Stats State ---
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [workshopStats, setWorkshopStats] = useState({
    total: 38,
    capacity: 50,
    seats_left: 12,
    percentage: 76
  });
  const [toast, setToast] = useState<{show: boolean, type: 'success' | 'error', message: string}>({
    show: false,
    type: 'success',
    message: ''
  });
  
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

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

  useEffect(() => {
    // Fetch Workshop Stats
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${API_URL}/workshop/stats`);
        setWorkshopStats(res.data);
      } catch (err) {
        console.error('Failed to fetch stats', err);
      }
    };

    fetchStats();

    // Load Razorpay Script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    const handleScroll = () => setIsHeaderSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // --- Intersection Observer for Active Section ---
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // Target the middle 10% of the screen for more precise tracking
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Wrap in requestAnimationFrame to avoid "update on unmounted component" warning
          requestAnimationFrame(() => {
            setActiveSection(entry.target.id);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    ['about', 'curriculum', 'instructor', 'benefits', 'faq'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [API_URL]);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 6000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const openRegistration = () => setIsRegModalOpen(true);

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-inter text-slate-800">
      
      <RegistrationModal 
        isOpen={isRegModalOpen} 
        onClose={() => setIsRegModalOpen(false)} 
        onSuccess={(msg) => showToast('success', msg)}
        onError={(msg) => showToast('error', msg)}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] w-full max-w-sm"
          >
            <div className={`px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-4 border ${toast.type === 'success' ? 'bg-emerald-500/95 border-emerald-400 text-white' : 'bg-red-500/95 border-red-400 text-white'}`}>
              {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
              <p className="text-sm font-bold flex-1">{toast.message}</p>
              <button onClick={() => setToast(prev => ({ ...prev, show: false }))} className="p-1 hover:bg-black/10 rounded-lg transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingElements 
        scaleX={scaleX} 
        scrollToSection={scrollToSection} 
        stats={workshopStats}
      />

      <Header 
        isSticky={isHeaderSticky} 
        activeSection={activeSection}
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
          onRegister={openRegistration}
          stats={workshopStats}
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
        
        <Pricing 
          scrollToSection={scrollToSection} 
          onRegister={openRegistration}
          stats={workshopStats}
        />
      </main>

      <Footer currentYear={currentYear} />
    </div>
  );
}
