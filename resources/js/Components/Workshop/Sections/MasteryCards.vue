<template>
  <section id="about" class="py-24 px-6 bg-white">
    <div class="container mx-auto">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <Badge variant="violet" class="mb-4">WHAT YOU'LL WALK AWAY WITH</Badge>
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Practical, job-ready AI skills — not theory</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(card, i) in cards" 
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
        >
          <Card class="p-8 h-full flex flex-col justify-between group">
            <div>
              <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500', card.bg, card.color]">
                <component :is="card.icon" class="w-7 h-7" />
              </div>
              <h3 class="text-2xl font-black text-slate-900 mb-4">{{ card.title }}</h3>
              <p class="text-slate-600 leading-relaxed mb-6">{{ card.body }}</p>
            </div>
            <div>
              <Badge :variant="getTagVariant(card.tag)">
                {{ card.tag }}
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Brain, MessageSquare, Zap, FileText } from 'lucide-vue-next';
import { Card, Badge } from '../UI';

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

const getTagVariant = (tag) => {
  if (tag === 'Productivity') return 'emerald';
  if (tag === 'Foundation') return 'violet';
  if (tag === 'Core Skill') return 'cyan';
  return 'amber';
};
</script>
