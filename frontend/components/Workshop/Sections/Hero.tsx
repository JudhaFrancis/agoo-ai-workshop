'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Star, Calendar, Users, Wifi, Award, Lock, PlayCircle, FileText, MessageSquare, Video, Zap } from 'lucide-react';
import { Button, Card, Badge } from '../UI';

interface HeroProps {
  currentMonth: string;
  currentYear: number;
  typewriterText: string;
  scrollToSection: (id: string) => void;
}

export const Hero = ({ currentMonth, currentYear, typewriterText, scrollToSection }: HeroProps) => {
  return (
    <section id="about" className="relative lg:min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#FDFCFE] to-[#F5F3FF] flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full border border-violet-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Live Online • 21 {currentMonth} {currentYear}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Master AI Tools for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600">Daily Work Success</span>
            </h1>

            <div className="h-12 mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={typewriterText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xl md:text-2xl font-bold text-violet-600"
                >
                  ⚡ {typewriterText}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Master practical AI techniques and transform your daily productivity — no coding required, no expensive tools, just skills you can use from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" className="group shadow-2xl shadow-blue-500/30" onClick={() => scrollToSection('pricing')}>
                Register Now for ₹99 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" /> Download Free Curriculum
              </Button>
            </div>

            {/* Social proof removed as per user request */}
          </motion.div>

          {/* Right Column: Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 lg:max-w-md w-full"
          >
            <Card className="relative p-8 border-2 border-violet-100 shadow-2xl bg-white/95">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg z-20">
                Highest Rated
              </div>
              <div className="space-y-3 mb-8">
                {[
                  { icon: PlayCircle, text: "Live demonstrations with real use cases" },
                  { icon: FileText, text: "Downloadable prompt templates" },
                  { icon: MessageSquare, text: "Q&A session with the instructor" },
                  { icon: Award, text: "Certificate of participation" },
                  { icon: Video, text: "Access to workshop recording for 7 days" },
                  { icon: Zap, text: "Exclusive AI tools cheat sheet" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-700 tracking-tight text-sm leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>

              <hr className="mb-6 opacity-30" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-slate-400 line-through text-sm font-bold mr-2">₹199</span>
                  <span className="text-4xl font-black text-violet-600">₹99</span>
                </div>
                <Badge variant="emerald" className="bg-emerald-50 text-emerald-600 border-none px-3 py-1 uppercase text-[10px] tracking-wider">90% OFF</Badge>
              </div>

              <div className="mb-6 p-3 bg-violet-50/50 rounded-xl border border-violet-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-wider">Only 12 seats left</span>
                </div>
                <span className="text-[10px] font-bold text-violet-600">76% FULL</span>
              </div>

              <Button variant="gradient" size="lg" className="w-full mb-4 group" onClick={() => scrollToSection('pricing')}>
                Register Now <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-bold">
                <Lock className="w-3 h-3" /> Secure Payment via Razorpay
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
