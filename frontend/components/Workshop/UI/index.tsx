'use client';

import React, { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: any) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full outline-none";
  
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
      bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl
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

export const Select = ({ label, options, value, onChange, className = '' }: any) => {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">{label}</label>}
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className="relative w-full bg-slate-50 border-2 border-slate-100 focus:border-violet-600 rounded-2xl py-3.5 pl-6 pr-10 text-left outline-none transition-all font-medium text-slate-900 group">
            <span className="block truncate">{value}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <ChevronDown className="h-5 w-5 text-slate-400 group-data-[open]:rotate-180 transition-transform duration-300" />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white p-1 text-base shadow-2xl ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((option: string, idx: number) => (
                <ListboxOption
                  key={idx}
                  value={option}
                  className="group relative cursor-pointer select-none py-3 pl-10 pr-4 rounded-xl text-slate-600 data-[focus]:bg-violet-50 data-[focus]:text-violet-700 transition-colors"
                >
                  <span className="block truncate font-medium group-data-[selected]:font-black group-data-[selected]:text-violet-700">
                    {option}
                  </span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-600 opacity-0 group-data-[selected]:opacity-100 transition-opacity">
                    <Check className="h-4 w-4" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
