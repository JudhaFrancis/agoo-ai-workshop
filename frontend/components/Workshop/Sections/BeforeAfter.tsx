'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, X, Check } from 'lucide-react';
import { Button } from '../UI';

interface BeforeAfterProps {
  scrollToSection: (id: string) => void;
}

export const BeforeAfter = ({ scrollToSection }: BeforeAfterProps) => {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-red-50 border border-red-100 rounded-3xl p-8 h-full shadow-lg">
              <h3 className="text-2xl font-black text-red-900 mb-8 flex items-center gap-3">
                <XCircle className="w-8 h-8 text-red-600" /> Without AI Skills
              </h3>
              <div className="space-y-4">
                {[
                  "Spending 45 min writing one email",
                  "Manual data summarizing — hours lost",
                  "Generic resume nobody reads",
                  "Googling answers repeatedly",
                  "Overwhelmed by AI hype"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4 text-slate-500 font-medium">
                    <X className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 h-full shadow-xl">
              <h3 className="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-emerald-600" /> After This Workshop
              </h3>
              <div className="space-y-4">
                {[
                  "Write perfect emails in 90 seconds",
                  "Summarize any data with one prompt",
                  "AI-crafted resume that stands out",
                  "Get accurate answers instantly",
                  "Use AI with clarity and confidence"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4 text-emerald-900 font-bold">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-2xl font-black text-slate-900">The difference is one 2-hour session.</p>
          <Button onClick={() => scrollToSection('pricing')} variant="primary" size="lg" className="mt-8">
            Join Now to Transform →
          </Button>
        </div>
      </div>
    </section>
  );
};
