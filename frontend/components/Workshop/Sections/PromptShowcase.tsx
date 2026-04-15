'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Badge } from '../UI';

interface PromptCardProps {
  cat: string;
  prompt: string;
  benefit: string;
  theme: string;
}

const PromptCard = ({ cat, prompt, benefit, theme }: PromptCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`p-8 rounded-3xl border ${theme} relative group transition-all duration-500 hover:bg-slate-800/40`}>
      <div className="flex justify-between items-center mb-6">
        <Badge variant={cat.includes('Email') ? 'blue' : cat.includes('Resume') ? 'indigo' : 'emerald'} className="!bg-slate-800 !text-white border-slate-700">
          {cat}
        </Badge>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 mb-6 font-mono text-sm text-slate-300 leading-relaxed min-h-[160px] flex items-center">
        "{prompt}"
      </div>

      <div className="inline-flex items-center gap-2 text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity">
        <span className="text-emerald-500">{benefit}</span>
      </div>

      {copied && (
        <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-black px-2 py-1 rounded-md animate-bounce">
          Copied! ✓
        </div>
      )}
    </div>
  );
};

export const PromptShowcase = () => {
  const prompts = [
    {
      cat: "Email Writing",
      theme: "border-blue-500 bg-blue-900/10",
      prompt: "You are a professional email writer. Write a follow-up email to [client name] regarding [project]. Tone: polite but assertive. Length: under 120 words. End with a clear CTA.",
      benefit: "✓ Saves 15 minutes per email"
    },
    {
      cat: "Resume & Career",
      theme: "border-indigo-500 bg-indigo-900/10",
      prompt: "Rewrite this job experience bullet point to be achievement-focused using the STAR method: [paste your bullet]. Add quantifiable results. Keep it under 25 words.",
      benefit: "✓ Professional resume in under 30 minutes"
    },
    {
      cat: "Data Analysis",
      theme: "border-emerald-500 bg-emerald-900/10",
      prompt: "Here is my sales data for Q1: [paste data]. Summarize key trends, identify the top 3 issues, and suggest 2 actionable next steps. Format as bullet points.",
      benefit: "✓ Instant business insights"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 relative z-10">
          <Badge variant="blue" className="mb-4 !bg-blue-600 !text-white border-none">REAL PROMPTS YOU'LL LEARN</Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Copy-paste ready templates worth ₹199 alone</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {prompts.map((card, i) => (
            <PromptCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
