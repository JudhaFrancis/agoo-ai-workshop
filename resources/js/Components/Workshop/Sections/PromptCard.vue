<template>
  <div :class="['p-8 rounded-3xl border relative group transition-all duration-500 hover:bg-slate-800/40', theme]">
    <div class="flex justify-between items-center mb-6">
      <Badge :variant="badgeVariant" class="!bg-slate-800 !text-white border-slate-700">
        {{ cat }}
      </Badge>
      <button
        @click="handleCopy"
        class="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
      >
        <Check v-if="copied" class="w-4 h-4 text-emerald-500" />
        <Copy v-else class="w-4 h-4" />
      </button>
    </div>

    <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 mb-6 font-mono text-sm text-slate-300 leading-relaxed min-h-[160px] flex items-center">
      "{{ prompt }}"
    </div>

    <div class="inline-flex items-center gap-2 text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity">
      <span class="text-emerald-500">{{ benefit }}</span>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div v-if="copied" class="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-black px-2 py-1 rounded-md animate-bounce">
        Copied! ✓
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Copy, Check } from 'lucide-vue-next';
import { Badge } from '../UI';

const props = defineProps({
  cat: String,
  prompt: String,
  benefit: String,
  theme: String
});

const copied = ref(false);

const badgeVariant = computed(() => {
  if (props.cat.includes('Email')) return 'blue';
  if (props.cat.includes('Resume')) return 'indigo';
  return 'emerald';
});

const handleCopy = () => {
  navigator.clipboard.writeText(props.prompt);
  copied.value = true;
  setTimeout(() => copied.value = false, 2000);
};
</script>
