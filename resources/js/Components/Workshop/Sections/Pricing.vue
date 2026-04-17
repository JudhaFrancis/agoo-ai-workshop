<template>
  <section id="pricing" class="py-32 px-6 bg-gradient-to-b from-violet-50 to-white">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight max-w-3xl mx-auto">
        Ready to Transform How You Work?
      </h2>
      <p class="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
        Be part of our Premiere Batch and start your AI journey today.
      </p>

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="max-w-md mx-auto"
      >
        <Card class="p-8 lg:p-10 border-2 border-violet-600 bg-white shadow-2xl relative">
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-6 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
            Premiere Batch — 50% OFF
          </div>

          <div class="mb-10 text-center">
            <div class="flex items-center justify-center gap-3 mb-2">
              <span class="text-slate-400 line-through text-xl font-bold">₹200</span>
              <span class="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase">Save ₹100</span>
            </div>
            <div class="text-7xl font-black text-slate-900 tracking-tighter">
              <span class="text-4xl align-top mr-1 text-violet-600">₹</span>100
            </div>
            <p class="text-slate-500 font-bold mt-4 text-sm">One-time payment • Lifetime Value</p>
          </div>

          <div class="space-y-4 mb-10 text-left border-y border-slate-100 py-8">
            <div v-for="(text, i) in benefits" :key="i" class="flex items-start gap-4 font-bold text-slate-700 text-sm leading-tight">
              <CheckCircle class="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
              <span>{{ text }}</span>
            </div>
          </div>

          <div class="mb-10 text-left">
            <div class="flex justify-between items-center mb-3">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span class="text-[10px] font-black text-red-600 uppercase tracking-widest">Fastest Filling Batch</span>
              </div>
              <span class="text-[10px] font-bold text-slate-500">{{ stats.total }} / {{ stats.capacity }} SEATS</span>
            </div>
            <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                v-motion
                :initial="{ width: 0 }"
                :visible-once="{ width: `${stats.percentage}%`, transition: { duration: 1500, ease: 'easeOut' } }"
                class="h-full bg-gradient-to-r from-violet-600 to-cyan-500"
              />
            </div>
          </div>

          <Button variant="gradient" size="lg" class="w-full mb-6 shadow-xl shadow-violet-500/20 group" @click="$emit('register')">
            Register Now <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div class="pt-4">
            <p class="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-6">
              Secure payment via Razorpay
            </p>
            <div class="flex justify-center gap-8 text-slate-300">
              <ShieldCheck class="w-6 h-6 hover:text-violet-400 transition-colors" />
              <CreditCard class="w-6 h-6 hover:text-violet-400 transition-colors" />
              <Mail class="w-6 h-6 hover:text-violet-400 transition-colors" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle, ShieldCheck, CreditCard, Mail, ArrowRight } from 'lucide-vue-next';
import { Card, Button } from '../UI';

defineProps({
  stats: Object
});

defineEmits(['register']);

const benefits = [
  "Live demonstrations with real use cases",
  "Downloadable prompt templates",
  "Q&A session with the instructor",
  "Certificate of participation",
  "Access to workshop recording for 7 days",
  "Exclusive AI tools cheat sheet"
];
</script>
