'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap } from 'lucide-react';
import { Badge } from '../UI';

export const Instructor = () => {
  const stats = [
    { val: "8+", label: "AI Experience" },
    { val: "Expert", label: "Enterprise Consultant" },
    { val: "Elite", label: "Certification" }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-md relative flex flex-col"
          >
            <div className="relative z-10 rounded-3xl bg-violet-50 flex-1 flex items-center justify-center p-12 border-2 border-violet-100 shadow-2xl overflow-hidden">
              <User size={160} strokeWidth={0.5} className="text-violet-200" />
              <GraduationCap className="absolute top-10 right-10 w-16 h-16 text-violet-600 bg-white p-3 rounded-2xl shadow-xl" />
            </div>
            {/* Abstract background blobs */}
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-violet-100/50 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-cyan-100/50 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Badge className="mb-4">YOUR INSTRUCTOR</Badge>
            <h2 className="text-4xl font-black text-slate-900 mb-2">Karthik Ramesh</h2>
            <p className="text-xl font-bold text-violet-600 mb-8">AI & Automation Specialist, Agoo Technology</p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              With 8+ years of experience implementing AI solutions across industries, Karthik has consulted for companies including TCS, Infosys, and leading tech startups. He specializes in making AI practical and accessible for non-technical professionals through hands-on training.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all">
                  <div className="text-2xl font-black text-slate-900 mb-1">{stat.val}</div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 opacity-60">
              <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Certified In:</span>
              <span className="text-xs font-bold text-slate-700">AI Certified Professional</span>
              <span className="text-xs font-bold text-slate-700">Google AI</span>
              <span className="text-xs font-bold text-slate-700">Microsoft Azure AI</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
