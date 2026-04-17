<template>
  <section id="about" class="relative lg:min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#FDFCFE] to-[#F5F3FF] flex flex-col justify-center">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Left Column -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          class="flex-1 relative"
        >
          <div class="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full border border-violet-100 mb-6">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
            </span>
            <span class="text-xs font-bold uppercase tracking-wider">Live Online • 21 {{ currentMonth }} {{ currentYear }}</span>
          </div>

          <h1 class="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
            Master AI Tools for <br />
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600">Daily Work Success</span>
          </h1>

          <div class="h-12 mb-6">
            <transition
              name="typewriter"
              mode="out-in"
            >
              <p
                :key="typewriterText"
                class="text-xl md:text-2xl font-bold text-violet-600"
              >
                ⚡ {{ typewriterText }}
              </p>
            </transition>
          </div>

          <p class="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            Master practical AI techniques and transform your daily productivity — no coding required, no expensive tools, just skills you can use from day one.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" size="lg" class="group shadow-2xl shadow-blue-500/30" @click="$emit('register')">
              Register Now for ₹100 <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Download class="w-5 h-5 mr-2" /> Download Free Curriculum
            </Button>
          </div>
        </div>

        <!-- Right Column: Floating Card -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9, y: 50 }"
          :enter="{ opacity: 1, scale: 1, y: 0 }"
          class="flex-1 lg:max-w-md w-full"
        >
          <Card class="relative p-8 border-2 border-violet-100 shadow-2xl bg-white/95">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg z-20">
              Highest Rated
            </div>
            <div class="space-y-3 mb-8">
              <div v-for="(item, i) in features" :key="i" class="flex items-start gap-3">
                <component :is="item.icon" class="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                <span class="font-bold text-slate-700 tracking-tight text-sm leading-tight">{{ item.text }}</span>
              </div>
            </div>

            <hr class="mb-6 opacity-30" />

            <div class="flex items-center justify-between mb-6">
              <div>
                <span class="text-slate-400 line-through text-sm font-bold mr-2">₹199</span>
                <span class="text-4xl font-black text-violet-600">₹100</span>
              </div>
              <Badge variant="emerald" class="bg-emerald-50 text-emerald-600 border-none px-3 py-1 uppercase text-[10px] tracking-wider">50% OFF</Badge>
            </div>

            <div class="mb-6 p-3 bg-violet-50/50 rounded-xl border border-violet-100 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span class="text-[10px] font-black text-slate-600 uppercase tracking-wider">Only {{ stats.seats_left }} seats left</span>
              </div>
              <span class="text-[10px] font-bold text-violet-600">{{ stats.percentage }}% FULL</span>
            </div>

            <Button variant="gradient" size="lg" class="w-full mb-4 group" @click="$emit('scrollToSection', 'pricing')">
              Register Now <ArrowRight class="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>

            <div class="flex items-center justify-center gap-2 text-slate-400 text-xs font-bold">
              <Lock class="w-3 h-3" /> Secure Payment via Razorpay
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  ArrowRight, Download, Lock, PlayCircle, FileText, 
  MessageSquare, Award, Video, Zap 
} from 'lucide-vue-next';
import Button from '../UI/Button.vue';
import Card from '../UI/Card.vue';
import Badge from '../UI/Badge.vue';

defineProps({
  currentMonth: String,
  currentYear: Number,
  typewriterText: String,
  stats: Object
});

defineEmits(['register', 'scrollToSection']);

const features = [
  { icon: PlayCircle, text: "Live demonstrations with real use cases" },
  { icon: FileText, text: "Downloadable prompt templates" },
  { icon: MessageSquare, text: "Q&A session with the instructor" },
  { icon: Award, text: "Certificate of participation" },
  { icon: Video, text: "Access to workshop recording for 7 days" },
  { icon: Zap, text: "Exclusive AI tools cheat sheet" }
];
</script>

<style scoped>
.typewriter-enter-active {
  transition: all 0.3s ease-out;
}
.typewriter-leave-active {
  transition: all 0.3s ease-in;
}
.typewriter-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.typewriter-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
