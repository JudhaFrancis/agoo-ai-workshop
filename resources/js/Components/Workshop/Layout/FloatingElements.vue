<template>
  <div>
    <!-- Scroll Progress Bar -->
    <div 
      class="fixed top-0 left-0 right-0 h-[3px] bg-violet-600 z-[100] origin-left transition-transform duration-75" 
      :style="{ transform: `scaleX(${scrollProgress})` }"
    />

    <!-- Toast Notification -->
    <transition
      name="toast"
      mode="out-in"
    >
      <div
        v-if="toasts.length > 0"
        :key="currentToast"
        class="fixed bottom-24 left-0 z-40 px-4 py-3 ml-5 rounded-2xl shadow-2xl border border-slate-200 flex items-center gap-3 backdrop-blur-xl bg-white/90"
      >
        <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <p class="text-sm font-medium text-slate-700">
          <span class="text-violet-600 font-bold">{{ toasts[currentToast].name }}</span> from {{ toasts[currentToast].city }} just registered · <span class="text-slate-400 text-xs">{{ toasts[currentToast].time }}</span>
        </p>
      </div>
    </transition>

    <!-- WhatsApp Button -->
    <a
      href="https://wa.me/918610234644"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 p-4 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300 group"
    >
      <MessageCircle class="w-6 h-6" />
      <span class="absolute right-full mr-3 bg-white text-emerald-600 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        How can we help?
      </span>
    </a>

    <!-- Mobile Sticky CTA -->
    <div class="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      <div class="flex items-center justify-between gap-4 max-w-md mx-auto">
        <div class="flex flex-col">
          <span class="text-red-600 font-bold text-sm tracking-tight">{{ stats.seats_left }} seats left</span>
          <span class="text-slate-800 font-black text-lg">₹99</span>
        </div>
        <Button @click="$emit('scrollToSection', 'pricing')" variant="primary" size="lg" class="flex-1 rounded-xl">
          Register Now →
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { MessageCircle } from 'lucide-vue-next';
import axios from 'axios';
import Button from '../UI/Button.vue';

const props = defineProps({
  stats: {
    type: Object,
    required: true
  }
});

defineEmits(['scrollToSection']);

const scrollProgress = ref(0);
const currentToast = ref(0);
const toasts = ref([]);

const API_URL = '/api';

const handleScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrollProgress.value = height > 0 ? winScroll / height : 0;
};

const fetchRecent = async () => {
  try {
    const response = await axios.get(`${API_URL}/workshop/recent`);
    if (response.data && response.data.length > 0) {
      toasts.value = response.data;
    }
  } catch (err) {
    console.error('Failed to fetch recent registrations', err);
  }
};

let toastInterval = null;
let fetchInterval = null;

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  fetchRecent();
  fetchInterval = setInterval(fetchRecent, 300000);

  toastInterval = setInterval(() => {
    if (toasts.value.length > 0) {
      currentToast.value = (currentToast.value + 1) % toasts.value.length;
    }
  }, 8000);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  clearInterval(fetchInterval);
  clearInterval(toastInterval);
});
</script>

<style scoped>
.toast-enter-active, .toast-leave-active {
  transition: all 0.5s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
