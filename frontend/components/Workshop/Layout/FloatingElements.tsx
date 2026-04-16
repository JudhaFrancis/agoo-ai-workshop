'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '../UI';
import axios from 'axios';

interface FloatingElementsProps {
  scaleX: any;
  scrollToSection: (id: string) => void;
  stats: any;
}

export const FloatingElements = ({ scaleX, scrollToSection, stats }: FloatingElementsProps) => {
  const [currentToast, setCurrentToast] = useState(0);
  const [toasts, setToasts] = useState<any[]>([]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const response = await axios.get(`${API_URL}/workshop/recent`);
        if (response.data && response.data.length > 0) {
          setToasts(response.data);
        }
      } catch (err) {
        console.error('Failed to fetch recent registrations', err);
      }
    };

    fetchRecent();
    // Fetch every 5 minutes
    const fetchInterval = setInterval(fetchRecent, 300000);
    return () => clearInterval(fetchInterval);
  }, [API_URL]);

  useEffect(() => {
    if (toasts.length === 0) return;
    const toastTimer = setInterval(() => {
      setCurrentToast(prev => (prev + 1) % toasts.length);
    }, 8000);
    return () => clearInterval(toastTimer);
  }, [toasts.length]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-violet-600 z-[100] origin-left" style={{ scaleX }} />

      {/* Toast Notification */}
      <AnimatePresence mode="wait">
        {toasts.length > 0 && (
          <motion.div
            key={currentToast}
            initial={{ opacity: 0, x: -50, y: 0 }}
            animate={{ opacity: 1, x: 20, y: -20 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed bottom-24 left-0 z-40"
          >
            <div className="bg-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-200 flex items-center gap-3 backdrop-blur-xl bg-white/90">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm font-medium text-slate-700">
                <span className="text-violet-600 font-bold">{toasts[currentToast].name}</span> from {toasts[currentToast].city} just registered · <span className="text-slate-400 text-xs">{toasts[currentToast].time}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918903489173"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-white text-emerald-600 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          How can we help?
        </span>
      </a>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
          <div className="flex flex-col">
            <span className="text-red-600 font-bold text-sm tracking-tight">{stats.seats_left} seats left</span>
            <span className="text-slate-800 font-black text-lg">₹100</span>
          </div>
          <Button onClick={() => scrollToSection('pricing')} variant="primary" size="lg" className="flex-1 rounded-xl">
            Register Now →
          </Button>
        </div>
      </div>
    </>
  );
};
