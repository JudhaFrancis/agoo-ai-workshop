<template>
  <section class="py-24 px-6 bg-slate-50">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-5xl font-black text-slate-900 text-center mb-20">This Workshop Is Perfect For You If...</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(p, i) in personas" :key="i" class="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all group">
          <div class="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <component :is="p.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-black text-slate-900 mb-2">{{ p.title }}</h3>
          <p class="text-slate-500 font-medium">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Briefcase, GraduationCap, Users, TrendingUp, Code, PenTool } from 'lucide-vue-next';

const personas = [
  { icon: Briefcase, title: "Working Professionals", desc: "Want to work faster and smarter" },
  { icon: GraduationCap, title: "Students & Freshers", desc: "Want to stand out in the job market" },
  { icon: Users, title: "HR & Recruiters", desc: "Want AI-powered hiring content" },
  { icon: TrendingUp, title: "Entrepreneurs", desc: "Want to automate business tasks" },
  { icon: Code, title: "Developers", desc: "Want better AI-assisted workflows" },
  { icon: PenTool, title: "Content Creators", desc: "Want to 10x content output" }
];
</script>
