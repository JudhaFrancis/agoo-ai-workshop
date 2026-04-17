<template>
  <section class="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
    <div class="container mx-auto">
      <div class="text-center mb-16 relative z-10">
        <Badge variant="blue" class="mb-4 !bg-blue-600 !text-white border-none">REAL PROMPTS YOU'LL LEARN</Badge>
        <h2 class="text-3xl md:text-5xl font-black mb-6">Copy-paste ready templates worth ₹200 alone</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        <PromptCard v-for="(card, i) in prompts" :key="i" v-bind="card" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Badge } from '../UI';
import PromptCard from './PromptCard.vue';

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
</script>
