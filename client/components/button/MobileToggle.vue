<template>
  <button @click="handleButtonClick" class="fixed top-4 right-5 bg-transparent p-2 border-none z-50">
    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
      <path d="M1,2 L11,2" class="stroke-primary-gray3 stroke-[1] bar-1"></path>
      <path d="M1,5 L11,5" class="stroke-primary-gray2 stroke-[1] bar-2"></path>
      <path d="M1,8 L11,8" class="stroke-primary-gray1 stroke-[1] bar-3"></path>
    </svg>
  </button>
</template>

<script setup>
import { inject } from 'vue';
import gsap from 'gsap/all';

const menuVisible = inject('menuVisible');
const isClosing = inject('isClosing');

const handleButtonClick = () => {
  toggleMenu();
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};

const toggleMenu = () => {
  if (menuVisible.value) {
    isClosing.value = true;
    const tl = gsap.timeline({
      onComplete: () => {
        menuVisible.value = false;
        isClosing.value = false;
        enableScroll();
      }
    });

    tl.to('.bar-1', { attr: { d: "M1,2 L11,2" }, ease: "power2.inOut" })
      .to('.bar-2', { autoAlpha: 1, ease: "power2.inOut" }, "<")
      .to('.bar-3', { attr: { d: "M1,8 L11,8" }, ease: "power2.inOut" }, "<")
      .to('.mobile-menu', { x: '-100%', ease: "power2.inOut", duration: 0.5 });
  } else {
    disableScroll();
    menuVisible.value = true;

    gsap.to('.bar-1', { attr: { d: "M1,2 L11,8" }, ease: "power2.inOut" });
    gsap.to('.bar-2', { autoAlpha: 0 });
    gsap.to('.bar-3', { attr: { d: "M1,8 L11,2" }, ease: "power2.inOut" });
    gsap.fromTo('.mobile-menu', 
      { x: '-100%' }, 
      { x: '0%', ease: "power2.inOut", duration: 0.5 }
    );
  }
};
</script>

<style scoped>
.fixed {
  position: fixed;
}

.top-5 {
  top: 1.25rem;
}

.right-5 {
  right: 1.25rem;
}

.z-50 {
  z-index: 50;
}
</style>
