// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'en', class: 'scroll-smooth' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'EM Design - Personal Portfolio' },
        { name: "keywords", content: "nuxt 3, tailwind css, portfolio, personal website, template" },
        { name: "author", content: "EMDesigns Themes" }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
    },
  },
  modules: [
    '@nuxt/image',
  ],
  css: [
    "~/assets/css/style.css",
    "~/assets/css/tailwind.css",
  ],
  plugins: [
    { src: "~/plugins/alpine.ts", mode: "client" },
    { src: "~/plugins/gsap.client.ts", mode: "client" },
    { src: "~/plugins/vue-scrollto.client.ts", mode: "client" } 
  ],  
  build: {
    transpile: ["vue-countup-v3"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
