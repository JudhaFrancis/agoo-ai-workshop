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
  { time: '0:00–0:25', title: 'How to use AI effectively (not just tool)', desc: 'Master the mindset of AI collaboration beyond just basic tool usage.' },
  { time: '0:25–0:50', title: 'Writing powerful prompts', desc: 'Craft precision prompts that deliver high-quality results every time.' },
  { time: '0:50–1:15', title: 'Automating daily tasks', desc: 'Step-by-step guide to offloading repetitive work to intelligent AI workflows.' },
  { time: '1:15–1:40', title: 'Resume and content creation using AI', desc: 'Transform your professional presence and content velocity with AI assistance.' },
  { time: '1:40–2:00', title: 'Practical demos with real use cases', desc: 'Watch live as we apply these techniques to solve actual workplace challenges.' }
];
</script>
