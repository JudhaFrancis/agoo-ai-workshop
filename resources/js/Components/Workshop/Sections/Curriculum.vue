<template>
  <section id="curriculum" class="py-24 px-6 bg-white">
    <div class="container mx-auto">
      <div class="text-center mb-20">
        <Badge variant="violet" class="mb-4">WHAT HAPPENS IN THOSE 2 HOURS</Badge>
        <h2 class="text-3xl md:text-5xl font-black text-slate-900">Workshop Curriculum</h2>
      </div>

      <div class="max-w-3xl mx-auto relative group">
        <!-- Vertical Line -->
        <div class="absolute left-[23px] top-0 bottom-0 w-0.5 bg-slate-100 group-hover:bg-violet-100 transition-colors duration-1000" />

        <div class="space-y-12">
          <div 
            v-for="(item, i) in items" 
            :key="i"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible-once="{ opacity: 1, x: 0 }"
            class="relative pl-16 flex flex-col sm:flex-row sm:items-start gap-4"
          >
            <div class="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border-2 border-violet-600 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
              <div class="w-3 h-3 rounded-full bg-violet-600" />
            </div>
            <div class="shrink-0 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-lg text-sm font-black inline-block mt-2">
              {{ item.time }}
            </div>
            <div class="flex-1">
              <h4 class="text-xl font-black text-slate-900 mb-2 leading-tight">{{ item.title }}</h4>
              <p class="text-slate-600">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Badge } from '../UI';

const items = [
  { time: '0:00–0:20', title: 'Welcome & AI Landscape Overview', desc: 'Understand where AI fits in your workflow and the current state of tools.' },
  { time: '0:20–0:45', title: 'Prompt Engineering Deep Dive', desc: 'Frameworks, templates, and live demos to get results the first time.' },
  { time: '0:45–1:10', title: 'Automation Workflows', desc: 'Build your first AI workflow live without writing a single line of code.' },
  { time: '1:10–1:35', title: 'Content & Resume Creation', desc: 'Live resume rewrite demonstration and AI-powered networking tips.' },
  { time: '1:35–1:50', title: 'AI Tools Walkthrough & Cheat Sheet', desc: 'Direct comparison of ChatGPT, Claude, and Gemini with our exclusive tools cheat sheet.' },
  { time: '1:50–2:00', title: 'Live Q&A + Resource Distribution', desc: 'Final Q&A session with the instructor, plus access to prompt templates, certificates, and recordings.' }
];
</script>
