import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: any) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants: any = {
    primary: "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]",
    outline: "border-2 border-slate-200 text-slate-700 hover:border-violet-600 hover:text-violet-600 bg-transparent",
    ghost: "text-slate-600 hover:bg-slate-100",
    gradient: "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 shadow-lg shadow-violet-500/25 hover:scale-[1.02]"
  };

  const sizes: any = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, className = '', hoverEffect = true }: any) => {
  return (
    <div className={`
      bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden
      ${hoverEffect ? 'hover:shadow-xl hover:translate-y-[-4px] hover:border-violet-500/30 transition-all duration-300' : 'shadow-md'}
      ${className}
    `}>
      {children}
    </div>
  );
};

export const Badge = ({ children, className = '', variant = 'blue' }: any) => {
  const variants: any = {
    violet: "bg-violet-100 text-violet-700 border-violet-200",
    cyan: "bg-cyan-100 text-cyan-700 border-cyan-200",
    emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
    amber: "bg-amber-100 text-amber-900 border-amber-200",
    red: "bg-red-100 text-red-700 border-red-200"
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const Accordion = ({ items }: { items: { q: string, a: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, idx) => (
        <div key={idx} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
          >
            {item.q}
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
