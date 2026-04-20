<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-500', isSticky ? 'bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-sm py-3' : 'bg-transparent py-5']">
    <div class="container mx-auto px-4 md:px-6 flex items-center justify-between">
      <div class="flex items-center gap-3 cursor-pointer group" @click="scrollToTop">
        <div class="rounded-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden shrink-0">
          <img src="/images/logo.png" alt="Agoo Technology Logo" class="w-10 h-10 md:w-12 md:h-12 object-contain" />
        </div>
        <div class="flex flex-col justify-center">
          <span class="text-lg md:text-2xl font-black text-slate-900 tracking-tight leading-none mb-0.5">Agoo Technology</span>
          <p class="text-[9px] md:text-[10px] text-violet-600 font-bold uppercase tracking-widest leading-none">AI Training & Workshops</p>
        </div>
      </div>

      <nav class="hidden lg:flex items-center gap-2">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollToSection(link.id)"
          :class="['relative px-4 py-2 text-sm font-bold transition-all duration-300 border-b-2', activeSection === link.id
            ? 'text-violet-600 border-violet-600 bg-violet-10/50'
            : 'text-slate-500 border-transparent hover:text-violet-600 hover:border-violet-600/30'
          ]"
        >
          {{ link.name }}
        </button>
      </nav>

      <div class="flex items-center gap-4">
        <div class="hidden lg:block">
          <Button @click="scrollToSection('pricing')" variant="primary" size="sm" :class="['group', activeSection === 'pricing' ? 'scale-105' : '']">
            Register for ₹99 <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <button class="lg:hidden p-2 text-slate-600" @click="$emit('update:mobileMenuOpen', !mobileMenuOpen)">
          <X v-if="mobileMenuOpen" />
          <Menu v-else />
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-slate-100">
        <div class="px-6 py-8 flex flex-col gap-6">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="$emit('scrollToSection', link.id); $emit('update:mobileMenuOpen', false);"
            class="text-lg font-bold text-left text-slate-700 hover:text-violet-600 transition-colors"
          >
            {{ link.name }}
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ArrowRight, X, Menu } from 'lucide-vue-next';
import Button from '../UI/Button.vue';

defineProps({
  isSticky: Boolean,
  activeSection: String,
  mobileMenuOpen: Boolean
});

defineEmits(['update:mobileMenuOpen', 'scrollToSection']);

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Curriculum', id: 'curriculum' },
  { name: 'Instructor', id: 'instructor' },
  { name: 'Benefits', id: 'benefits' },
  { name: 'FAQ', id: 'faq' }
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
