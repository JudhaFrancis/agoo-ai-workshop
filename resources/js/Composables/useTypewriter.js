import { ref, onMounted, onUnmounted, computed } from 'vue';

export const useTypewriter = (words, interval = 3000) => {
  const index = ref(0);
  let timer = null;

  onMounted(() => {
    timer = setInterval(() => {
      index.value = (index.value + 1) % words.length;
    }, interval);
  });

  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });

  return computed(() => words[index.value]);
};
