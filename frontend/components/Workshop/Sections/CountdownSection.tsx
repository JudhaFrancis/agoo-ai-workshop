'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface CountdownSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const CountdownSection = ({ timeLeft }: CountdownSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-violet-700 via-violet-800 to-cyan-900 border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[1,2,3,4].map(i => (
          <motion.div 
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + i*5, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[500px] h-[500px] border border-white rounded-full -top-40 -left-40"
          />
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-white text-xl md:text-2xl font-black mb-8 flex items-center justify-center gap-3">
          <Zap className="fill-white" /> EARLY BIRD PRICE ENDS IN:
        </h2>
        <div className="flex justify-center gap-4 md:gap-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((time, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                <span className="text-3xl md:text-5xl font-black text-white">{String(time.value).padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] md:text-xs font-black text-white/70 uppercase tracking-widest mt-2">{time.label}</span>
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm font-bold mt-8">After this, price returns to ₹999</p>
      </div>
    </section>
  );
};
