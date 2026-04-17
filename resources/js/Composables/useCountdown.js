import { ref, onMounted, onUnmounted, watch } from 'vue';

export const useCountdown = (targetDate) => {
  const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  let timer = null;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      if (timer) clearInterval(timer);
      return;
    }

    timeLeft.value = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  onMounted(() => {
    updateCountdown();
    timer = setInterval(updateCountdown, 1000);
  });

  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });

  watch(() => targetDate, () => {
    updateCountdown();
  });

  return timeLeft;
};
