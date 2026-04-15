'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, CreditCard, Mail, ArrowRight } from 'lucide-react';
import { Card, Button } from '../UI';

interface PricingProps {
  scrollToSection: (id: string) => void;
}

export const Pricing = ({ scrollToSection }: PricingProps) => {
  return (
    <section id="pricing" className="py-32 px-6 bg-gradient-to-b from-white to-violet-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">Ready to Transform How You Work?</h2>
        <p className="text-xl text-slate-600 mb-16 font-bold">Be part of our Premiere Batch and invest ₹99 in your future</p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <Card className="p-10 border-4 border-violet-600 bg-white shadow-2xl relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-lg">
              90% OFF — Limited Time
            </div>

            <div className="mb-8 mt-4">
              <span className="text-slate-400 line-through text-2xl font-black opacity-50">₹999</span>
              <div className="text-7xl font-black text-violet-600">₹99</div>
              <p className="text-slate-500 font-bold mt-2">Per person, one-time, lifetime value</p>
            </div>

            <div className="space-y-4 mb-10 text-left">
              {[
                "Live demonstrations with real use cases",
                "Downloadable prompt templates",
                "Q&A session with the instructor",
                "Certificate of participation",
                "Access to workshop recording for 7 days",
                "Exclusive AI tools cheat sheet"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 font-bold text-slate-700 text-sm">
                  <CheckCircle className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                  {text}
                </div>
              ))}
            </div>

            <div className="mb-8 p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
               <div className="flex justify-between items-center mb-3">
                   <span className="text-xs font-black text-red-600 uppercase tracking-wider">Fastest Filling Batch</span>
                   <span className="text-xs font-bold text-slate-500">38 of 50 seats taken</span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '76%' }}
                    className="h-full bg-red-600"
                  />
                </div>
            </div>

            <Button variant="gradient" size="lg" className="w-full py-6 text-xl rounded-2xl mb-6 shadow-2xl shadow-blue-500/40" onClick={() => scrollToSection('pricing')}>
              Register Now with Razorpay →
            </Button>

            <div className="space-y-4">
              <p className="text-xs text-slate-400 font-black uppercase tracking-widest">🔒 Secure payment · Instant confirmation · 24hr refund guarantee</p>
              <div className="flex justify-center gap-6 text-slate-300">
                <ShieldCheck className="w-8 h-8" />
                <CreditCard className="w-8 h-8" />
                <Mail className="w-8 h-8" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
