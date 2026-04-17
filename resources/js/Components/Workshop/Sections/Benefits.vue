<template>
  <section id="benefits" class="py-24 px-6 bg-white border-y border-slate-100">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-3xl md:text-5xl font-black text-slate-900 text-center mb-16">Everything Included for ₹100</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
        <div v-for="(item, i) in benefits" :key="i" class="flex items-center gap-4 group">
          <div class="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
            <Check class="w-5 h-5" />
          </div>
          <span class="text-lg font-bold text-slate-800">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Check } from 'lucide-vue-next';

const benefits = [
  "Live demonstrations with real use cases",
  "Downloadable prompt templates",
  "Q&A session with the instructor",
  "Certificate of participation",
  "Access to workshop recording for 7 days",
  "Exclusive AI tools cheat sheet"
];
</script>
