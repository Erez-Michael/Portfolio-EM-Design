// ~/plugins/gsap.client.ts
import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the plugin with GSAP
// gsap.registerPlugin(ScrollTrigger)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('gsap', gsap)
  // nuxtApp.provide('scrollTrigger', ScrollTrigger)
})
