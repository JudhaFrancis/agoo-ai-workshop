<template>
  <span :class="['inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border', variantStyles[variant], className]">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'violet'
  }
});

const variantStyles = {
  violet: "bg-violet-100 text-violet-700 border-violet-200",
  cyan: "bg-cyan-100 text-cyan-700 border-cyan-200",
  emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
  amber: "bg-amber-100 text-amber-900 border-amber-200",
  red: "bg-red-100 text-red-700 border-red-200"
};
</script>
