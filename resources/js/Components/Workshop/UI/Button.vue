<template>
  <button 
    :class="[baseStyles, variantStyles[variant], sizeStyles[size], className]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  },
  className: {
    type: String,
    default: ''
  }
});

const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full outline-none";

const variantStyles = {
  primary: "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98]",
  secondary: "bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]",
  outline: "border-2 border-slate-200 text-slate-700 hover:border-violet-600 hover:text-violet-600 bg-transparent",
  ghost: "text-slate-600 hover:bg-slate-100",
  gradient: "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 shadow-lg shadow-violet-500/25 hover:scale-[1.02]"
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl"
};
</script>
