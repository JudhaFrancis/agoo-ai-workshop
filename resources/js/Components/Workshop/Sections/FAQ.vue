<template>
  <section id="faq" class="py-24 px-6 bg-white">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-5xl font-black text-slate-900 text-center mb-20">Frequently Asked Questions</h2>
      <Accordion :items="faqItems" />
    </div>
  </section>
</template>

<script setup>
import Accordion from '../UI/Accordion.vue';

const faqItems = [
  { q: "Do I need any technical background?", a: "No. This workshop is designed for complete beginners. If you can type and browse the internet, you're ready." },
  { q: "What tools do I need?", a: "Just a laptop or desktop with a browser and internet connection. All AI tools used are free." },
  { q: "Will I get a recording?", a: "Yes. You'll have access to the full workshop recording for 7 days after the live session." },
  { q: "What if I don't find it useful?", a: "We offer a no-questions-asked refund within 24 hours of the workshop if you're not satisfied." },
  { q: "Is the ₹100 price permanent?", a: "No. This is an early bird price for the first 50 registrations only. Price returns to ₹200 after that." },
  { q: "How do I join after registering?", a: "You'll receive a Zoom/Google Meet link on your email within 30 minutes of registration." }
];
</script>
