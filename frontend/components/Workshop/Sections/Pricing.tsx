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
    <section id="pricing" className="py-32 px-6 bg-gradient-to-b from-violet-50 to-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight max-w-3xl mx-auto">
          Ready to Transform How You Work?
        </h2>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          Be part of our Premiere Batch and start your AI journey today.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <Card className="p-8 lg:p-10 border-2 border-violet-600 bg-white shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-6 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
              Premiere Batch — 90% OFF
            </div>

            <div className="mb-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-slate-400 line-through text-xl font-bold">₹999</span>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase">Save ₹900</span>
              </div>
              <div className="text-7xl font-black text-slate-900 tracking-tighter">
                <span className="text-4xl align-top mr-1 text-violet-600">₹</span>99
              </div>
              <p className="text-slate-500 font-bold mt-4 text-sm">One-time payment • Lifetime Value</p>
            </div>

            <div className="space-y-4 mb-10 text-left border-y border-slate-100 py-8">
              {[
                "Live demonstrations with real use cases",
                "Downloadable prompt templates",
                "Q&A session with the instructor",
                "Certificate of participation",
                "Access to workshop recording for 7 days",
                "Exclusive AI tools cheat sheet"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 font-bold text-slate-700 text-sm leading-tight">
                  <CheckCircle className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="mb-10 text-left">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Fastest Filling Batch</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500">38 / 50 SEATS</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '76%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-violet-600 to-cyan-500"
                />
              </div>
            </div>

            <Button variant="gradient" size="lg" className="w-full mb-6 shadow-xl shadow-violet-500/20 group" onClick={() => scrollToSection('pricing')}>
              Register Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="pt-4">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-6">
                Secure payment via Razorpay
              </p>
              <div className="flex justify-center gap-8 text-slate-300">
                <ShieldCheck className="w-6 h-6 hover:text-violet-400 transition-colors" />
                <CreditCard className="w-6 h-6 hover:text-violet-400 transition-colors" />
                <Mail className="w-6 h-6 hover:text-violet-400 transition-colors" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
