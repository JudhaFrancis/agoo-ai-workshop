<template>
  <footer class="bg-slate-900 pt-20 pb-10 text-white px-6">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 mb-6">
            <div class="rounded-xl overflow-hidden shrink-0">
              <img src="/images/logo.png" alt="Agoo Technology Logo" class="w-12 h-12 object-contain" />
            </div>
            <div>
              <span class="text-2xl font-black text-white">Agoo Technology</span>
              <p class="text-[10px] text-violet-400 font-bold uppercase tracking-widest leading-tight">AI Training &
                Workshops</p>
            </div>
          </div>
          <p class="text-slate-400 font-medium leading-relaxed">
            Empowering professionals with practical AI skills to work faster, smarter, and more efficiently.
          </p>
        </div>

        <div v-for="(col, i) in columns" :key="i">
          <h4 class="text-lg font-black mb-8">{{ col.title }}</h4>
          <ul class="space-y-4">
            <li v-for="link in col.links" :key="link.name">
              <a :href="link.href"
                class="flex items-start gap-3 text-slate-400 hover:text-white transition-colors font-medium">
                <component :is="link.icon" v-if="link.icon" class="w-5 h-5 shrink-0 mt-0.5" />
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="border-slate-800 mb-10" />

      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-slate-500 text-sm font-medium">
          Copyright © {{ currentYear }} <a href="https://site.agoo.in/" target="_blank" rel="noopener noreferrer"
            class="text-green-600 hover:text-green-700 transition-colors font-bold">Agoo Technologies</a>. All Rights
          Reserved.
        </p>
        <div class="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Mail, Phone } from 'lucide-vue-next';

defineProps({
  currentYear: Number
});

const columns = [
  {
    title: "Quick Links",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Curriculum", href: "#curriculum" },
      { name: "Instructor", href: "#instructor" },
      { name: "Benefits", href: "#benefits" },
    ]
  },
  {
    title: "Workshop Info",
    links: [
      { name: "Curriculum", href: "#curriculum" },
      { name: "Certificate", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "FAQs", href: "#faq" }
    ]
  },
  {
    title: "Contact Us",
    links: [
      { name: "Vadasery, Nagercoil - 629001, TN, India", href: "#", icon: MapPin },
      { name: "info@agoo.in", href: "mailto:info@agoo.in", icon: Mail },
      { name: "+91 86102 34644", href: "https://wa.me/918610234644", icon: Phone },
    ]
  }
];
</script>
