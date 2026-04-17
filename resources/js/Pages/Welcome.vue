<template>
  <div class="min-h-screen bg-[#F8FAFC] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-inter text-slate-800">
    
    <RegistrationModal 
      :isOpen="isRegModalOpen" 
      @close="isRegModalOpen = false" 
      @success="msg => showToast('success', msg)"
      @error="msg => showToast('error', msg)"
    />

    <!-- Toast Notification -->
    <transition
      name="toast"
      mode="out-in"
    >
      <div 
        v-if="toast.show"
        class="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] w-full max-w-sm"
      >
        <div :class="['px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-4 border', toast.type === 'success' ? 'bg-emerald-500/95 border-emerald-400 text-white' : 'bg-red-500/95 border-red-400 text-white']">
          <CheckCircle2 v-if="toast.type === 'success'" class="w-5 h-5 shrink-0" />
          <AlertCircle v-else class="w-5 h-5 shrink-0" />
          <p class="text-sm font-bold flex-1">{{ toast.message }}</p>
          <button @click="toast.show = false" class="p-1 hover:bg-black/10 rounded-lg transition-colors">
            <X class="w-4 h-4" />
          </button>
        </div>
      </div>
    </transition>

    <FloatingElements 
      @scrollToSection="scrollToSection" 
      :stats="workshopStats"
    />

    <Header 
      :isSticky="isHeaderSticky" 
      :activeSection="activeSection"
      v-model:mobileMenuOpen="mobileMenuOpen" 
      @scrollToSection="scrollToSection" 
    />

    <main>
      <Hero 
        :currentMonth="currentMonth" 
        :currentYear="currentYear" 
        :typewriterText="typewriterText" 
        @scrollToSection="scrollToSection" 
        @register="openRegistration"
        :stats="workshopStats"
      />
      
      <CountdownSection :timeLeft="timeLeft" />
      
      <MasteryCards />
      
      <BeforeAfter @scrollToSection="scrollToSection" />
      
      <Curriculum />
      
      <PromptShowcase />
      
      <Instructor />
      
      <Benefits />
      
      <PersonaCards />
      
      <FAQ />
      
      <Pricing 
        @register="openRegistration"
        :stats="workshopStats"
      />
    </main>

    <Footer :currentYear="currentYear" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Head } from '@inertiajs/vue3';
import { CheckCircle2, AlertCircle, X } from 'lucide-vue-next';
import axios from 'axios';

// --- Composable Hooks ---
import { useCountdown } from '@/Composables/useCountdown';
import { useTypewriter } from '@/Composables/useTypewriter';

// --- Components ---
import { Header, Hero, CountdownSection, MasteryCards, BeforeAfter, Curriculum, PromptShowcase, Instructor, Benefits, PersonaCards, FAQ, Pricing, Footer } from '@/Components/Workshop/Sections';
import { FloatingElements } from '@/Components/Workshop/Layout';
import { RegistrationModal } from '@/Components/Workshop/UI';

const isHeaderSticky = ref(false);
const mobileMenuOpen = ref(false);
const activeSection = ref('about');

const isRegModalOpen = ref(false);
const workshopStats = ref({
  total: 38,
  capacity: 50,
  seats_left: 12,
  percentage: 76
});

const toast = ref({
  show: false,
  type: 'success',
  message: ''
});

const currentYear = new Date().getFullYear();
const currentMonth = new Date().toLocaleString('default', { month: 'long' });

const targetDate = new Date(currentYear, 3, 21); // April 21st
const timeLeft = useCountdown(targetDate);

const typewriterText = useTypewriter([
  "Save 2+ hours every day",
  "Write better emails in seconds",
  "Automate repetitive tasks",
  "Build a professional resume with AI"
]);

const API_URL = '/api';

const fetchStats = async () => {
  try {
    const res = await axios.get(`${API_URL}/workshop/stats`);
    workshopStats.value = res.data;
  } catch (err) {
    console.error('Failed to fetch stats', err);
  }
};

const showToast = (type, message) => {
  toast.value = { show: true, type, message };
  setTimeout(() => {
    toast.value.show = false;
  }, 6000);
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = id;
  }
};

const openRegistration = () => {
  isRegModalOpen.value = true;
};

const handleScroll = () => {
  isHeaderSticky.value = window.scrollY > 50;
};

let observer = null;

onMounted(() => {
  fetchStats();

  // Load Razorpay Script if not already loaded
  if (!window.Razorpay) {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }

  window.addEventListener('scroll', handleScroll);

  const observerOptions = {
    root: null,
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, observerOptions);

  ['about', 'curriculum', 'instructor', 'benefits', 'faq'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.toast-enter-active, .toast-leave-active {
  transition: all 0.5s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translate(-50%, 50px);
}
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>
