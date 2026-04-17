<template>
  <div class="space-y-4 max-w-3xl mx-auto">
    <div v-for="(item, idx) in items" :key="idx" class="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
      <button 
        @click="toggle(idx)"
        class="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
      >
        {{ item.q }}
        <ChevronDown :class="['w-5 h-5 transition-transform duration-300', openIndex === idx ? 'rotate-180' : '']" />
      </button>
      
      <transition
        name="accordion"
        @enter="startTransition"
        @after-enter="endTransition"
        @before-leave="startTransition"
        @after-leave="endTransition"
      >
        <div v-if="openIndex === idx" class="overflow-hidden">
          <div class="px-6 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
            {{ item.a }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronDown } from 'lucide-vue-next';

defineProps({
  items: {
    type: Array,
    required: true
  }
});

const openIndex = ref(0);

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? null : idx;
};

// Simple height transition helpers
const startTransition = (el) => {
  el.style.height = el.scrollHeight + 'px';
};
const endTransition = (el) => {
  el.style.height = '';
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease-out;
  max-height: 500px;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
