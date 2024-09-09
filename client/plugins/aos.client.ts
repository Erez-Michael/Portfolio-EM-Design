// plugins/aos.client.ts
import { defineNuxtPlugin } from '#app';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Initialize AOS when the app is mounted
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 1000, // Duration of animations in milliseconds
        easing: 'ease-in-out', // Animation easing
        once: true, // Animate only once
        delay: 0, // Global delay
      });
    });
  }
});
