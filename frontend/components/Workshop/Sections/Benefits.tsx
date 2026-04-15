'use client';

import React from 'react';
import { Check } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    "Live demonstrations with real use cases",
    "Downloadable prompt templates",
    "Q&A session with the instructor",
    "Certificate of participation",
    "Access to workshop recording for 7 days",
    "Exclusive AI tools cheat sheet"
  ];

  return (
    <section id="benefits" className="py-24 px-6 bg-white border-y border-slate-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-16">Everything Included for ₹99</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          {benefits.map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
