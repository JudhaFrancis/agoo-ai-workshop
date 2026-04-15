'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageSquare, Zap, FileText } from 'lucide-react';
import { Card, Badge } from '../UI';

export const MasteryCards = () => {
  const cards = [
    { 
      icon: Brain, 
      color: 'text-violet-600 font-bold', 
      bg: 'bg-violet-50',
      title: "AI Fundamentals That Actually Matter", 
      body: "Cut through the buzzwords. Learn what AI can and can't do, and how to choose the right tool for every task.",
      tag: "Foundation"
    },
    { 
      icon: MessageSquare, 
      color: 'text-cyan-600 font-bold', 
      bg: 'bg-cyan-50',
      title: "Powerful Prompt Engineering", 
      body: "Write prompts that get results the first time. Learn the exact frameworks used by AI power users.",
      tag: "Core Skill"
    },
    { 
      icon: Zap, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50',
      title: "Automate Your Daily Workflows", 
      body: "Identify which of your tasks can be automated and build simple AI-powered workflows — no code needed.",
      tag: "Productivity"
    },
    { 
      icon: FileText, 
      color: 'text-amber-600', 
      bg: 'bg-amber-50',
      title: "AI-Powered Content Creation", 
      body: "Generate professional emails, reports, job descriptions, and a resume that gets noticed — in minutes.",
      tag: "Career Growth"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="violet" className="mb-4">WHAT YOU'LL WALK AWAY WITH</Badge>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Practical, job-ready AI skills — not theory</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col justify-between group">
                <div>
                  <div className={`w-14 h-14 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500`}>
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{card.body}</p>
                </div>
                <div>
                  <Badge variant={card.tag === 'Productivity' ? 'emerald' : card.tag === 'Foundation' ? 'violet' : card.tag === 'Core Skill' ? 'cyan' : 'amber'}>
                    {card.tag}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
