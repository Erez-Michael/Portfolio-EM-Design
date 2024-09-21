<template>
    <div class="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        class="bg-yellow h-full transition-all duration-300 ease-out rounded-full"
        :style="{ width: scrollProgress + '%' }"
      ></div>
    </div>
  </template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// State for scroll progress percentage
const scrollProgress = ref(0);

// Function to calculate the scroll progress
const updateProgress = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  scrollProgress.value = scrollPercent;
};

// Add event listeners on mount and clean up on unmount
onMounted(() => {
  window.addEventListener('scroll', updateProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress);
});
</script>

  <style scoped>
  .bg-yellow {
    background: linear-gradient(90deg, #5b199c, #ca980e);
  }
  </style>
  