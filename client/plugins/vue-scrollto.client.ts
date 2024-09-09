// plugins/vue-scrollto.client.ts
import { defineNuxtPlugin } from '#app';
import VueScrollTo from 'vue-scrollto';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueScrollTo, {
    duration: 800, // Duration of the scroll animation in milliseconds
    easing: 'ease-in-out', // Easing pattern for the scroll
  });
});
