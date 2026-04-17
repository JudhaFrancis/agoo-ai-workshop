<template>
  <div :class="[
    'bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl transition-all duration-300',
    hoverEffect ? 'hover:shadow-xl hover:translate-y-[-4px] hover:border-violet-500/30' : 'shadow-md',
    className
  ]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  },
  hoverEffect: {
    type: Boolean,
    default: true
  }
});
</script>
