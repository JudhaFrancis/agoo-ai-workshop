<template>
  <section class="py-20 bg-gradient-to-r from-violet-700 via-violet-800 to-cyan-900 border-y border-white/10 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div
        v-for="i in 4"
        :key="i"
        v-motion
        :initial="{ rotate: 0 }"
        :enter="{ 
          rotate: 360,
          transition: {
            duration: (20 + i * 5) * 1000,
            repeat: Infinity,
            ease: 'linear'
          }
        }"
        class="absolute w-[500px] h-[500px] border border-white rounded-full -top-40 -left-40"
      />
    </div>
    <div class="container mx-auto px-6 relative z-10 text-center">
      <h2 class="text-white text-xl md:text-2xl font-black mb-8 flex items-center justify-center gap-3">
        <Zap class="fill-white" /> EARLY BIRD PRICE ENDS IN:
      </h2>
      <div class="flex justify-center gap-4 md:gap-8">
        <div v-for="(time, i) in timeItems" :key="i" class="flex flex-col items-center">
          <div class="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
            <span class="text-3xl md:text-5xl font-black text-white">{{ String(time.value).padStart(2, '0') }}</span>
          </div>
          <span class="text-[10px] md:text-xs font-black text-white/70 uppercase tracking-widest mt-2">{{ time.label }}</span>
        </div>
      </div>
      <p class="text-white/60 text-sm font-bold mt-8">After this, price returns to ₹200</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { Zap } from 'lucide-vue-next';

const props = defineProps({
  timeLeft: {
    type: Object,
    required: true
  }
});

const timeItems = computed(() => [
  { label: 'Days', value: props.timeLeft.days },
  { label: 'Hours', value: props.timeLeft.hours },
  { label: 'Minutes', value: props.timeLeft.minutes },
  { label: 'Seconds', value: props.timeLeft.seconds }
]);
</script>
