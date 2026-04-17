<template>
  <section class="py-24 px-6 bg-slate-50 relative overflow-hidden">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Before -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0 }"
        >
          <div class="bg-red-50 border border-red-100 rounded-3xl p-8 h-full shadow-lg">
            <h3 class="text-2xl font-black text-red-900 mb-8 flex items-center gap-3">
              <XCircle class="w-8 h-8 text-red-600" /> Without AI Skills
            </h3>
            <div class="space-y-4">
              <div v-for="(text, i) in beforeList" :key="i" class="flex items-start gap-4 text-slate-500 font-medium">
                <X class="w-5 h-5 text-red-400 shrink-0 mt-1" />
                <span>{{ text }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- After -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{ opacity: 1, x: 0 }"
        >
          <div class="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 h-full shadow-xl">
            <h3 class="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-3">
              <CheckCircle class="w-8 h-8 text-emerald-600" /> After This Workshop
            </h3>
            <div class="space-y-4">
              <div v-for="(text, i) in afterList" :key="i" class="flex items-start gap-4 text-emerald-900 font-bold">
                <Check class="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <span>{{ text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <p class="text-2xl font-black text-slate-900">The difference is one 2-hour session.</p>
        <Button @click="$emit('scrollToSection', 'pricing')" variant="primary" size="lg" class="mt-8">
          Join Now to Transform →
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { XCircle, CheckCircle, X, Check } from 'lucide-vue-next';
import Button from '../UI/Button.vue';

defineEmits(['scrollToSection']);

const beforeList = [
  "Spending 45 min writing one email",
  "Manual data summarizing — hours lost",
  "Generic resume nobody reads",
  "Googling answers repeatedly",
  "Overwhelmed by AI hype"
];

const afterList = [
  "Write perfect emails in 90 seconds",
  "Summarize any data with one prompt",
  "AI-crafted resume that stands out",
  "Get accurate answers instantly",
  "Use AI with clarity and confidence"
];
</script>
