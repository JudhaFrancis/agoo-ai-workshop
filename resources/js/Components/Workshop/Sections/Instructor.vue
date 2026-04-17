<template>
  <section id="instructor" class="py-24 px-6 bg-white overflow-hidden">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:px-12">
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9, rotate: -2 }"
          :visible-once="{ opacity: 1, scale: 1, rotate: 0 }"
          class="flex-1 w-full max-w-md relative"
        >
          <div class="relative z-10 rounded-3xl bg-violet-50 aspect-square flex items-center justify-center border-2 border-violet-100 shadow-2xl overflow-hidden group">
            <img 
              src="/images/instructor.png" 
              alt="Karthik Ramesh - AI Instructor" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <GraduationCap class="absolute top-6 right-6 w-12 h-12 text-violet-600 bg-white p-2 rounded-2xl shadow-xl z-20" />
          </div>
          <!-- Abstract background blobs -->
          <div class="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-violet-100/50 rounded-full blur-3xl" />
          <div class="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-cyan-100/50 rounded-full blur-3xl" />
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{ opacity: 1, x: 0 }"
          class="flex-1"
        >
          <Badge class="mb-4">YOUR INSTRUCTOR</Badge>
          <h2 class="text-4xl font-black text-slate-900 mb-2">Karthik Ramesh</h2>
          <p class="text-xl font-bold text-violet-600 mb-8">AI & Automation Specialist, Agoo Technology</p>
          
          <p class="text-lg text-slate-600 leading-relaxed mb-10">
            With 8+ years of experience implementing AI solutions across industries, Karthik has consulted for companies including TCS, Infosys, and leading tech startups. He specializes in making AI practical and accessible for non-technical professionals through hands-on training.
          </p>

          <div class="grid grid-cols-3 gap-4 mb-10">
            <div v-for="(stat, i) in statItems" :key="i" class="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all">
              <div class="text-2xl font-black text-slate-900 mb-1">{{ stat.val }}</div>
              <div class="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-tight">{{ stat.label }}</div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-6 opacity-60">
            <span class="text-sm font-black text-slate-400 uppercase tracking-widest">Certified In:</span>
            <span class="text-xs font-bold text-slate-700">AI Certified Professional</span>
            <span class="text-xs font-bold text-slate-700">Google AI</span>
            <span class="text-xs font-bold text-slate-700">Microsoft Azure AI</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { GraduationCap } from 'lucide-vue-next';
import { Badge } from '../UI';

const statItems = [
  { val: "8+", label: "AI Experience" },
  { val: "Expert", label: "Enterprise Consultant" },
  { val: "Elite", label: "Certification" }
];
</script>
