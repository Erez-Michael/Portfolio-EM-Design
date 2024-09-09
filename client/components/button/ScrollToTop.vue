<template>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="visible" @click="scrollToTop"
        :class="buttonClasses"
        class="fixed left-[90%] md:left-[95%] transform -translate-x-1/2 bg-gradient-to-b from-purple to-yellow p-2 rounded-full text-dark dark:text-dark text-4xl lg:text-3xl flex items-center justify-center w-[1.25em] md:w-[1.65em] lg:w-[1.95em] h-[1.6em] md:h-[2em] lg:h-[2.4em] cursor-pointer">
        <FontAwesomeIcon :icon="['fas', 'arrow-circle-up']" aria-hidden="true"
          class="w-10 h-10 md:w-14 md:h-14 text-primary-black transform -translate-y-[0.2em] hover:opacity-70" />
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import { useScrollToTop } from '@/composables/useScrollToTop';
  import gsap from 'gsap';
  
  // Use the useScrollToTop composable
  const { visible, scrollToTop } = useScrollToTop();
  const atBottom = ref(false);
  
  const buttonClasses = computed(() => ({
    'bottom-[16em]': atBottom.value,
    'bottom-[0.5em]': !atBottom.value,
    'md:bottom-[8em]': atBottom.value,
    'md:bottom-[0.5em]': !atBottom.value,
  }));
  
  const handleScroll = () => {
    const scrolled = window.innerHeight + window.scrollY >= document.body.offsetHeight -10;
    atBottom.value = scrolled;
  };
  
  // GSAP animation hooks for Vue transition
  const beforeEnter = (el) => {
    gsap.set(el, { opacity: 0 });
  };
  
  const enter = (el, done) => {
    gsap.to(el, { opacity: 1, duration: 4, ease: 'power2.inOut', onComplete: done });
  };
  
  const leave = (el, done) => {
    gsap.to(el, { opacity: 0, duration: 0.5, ease: 'power2.inOut', onComplete: done });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  .fixed {
    z-index: 10; 
      }
  </style>
  