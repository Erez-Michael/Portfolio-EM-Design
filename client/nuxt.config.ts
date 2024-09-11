// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'en', class: 'scroll-smooth' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'EM Design - Personal Portfolio' },
        { name: 'keywords', content: 'EM Design, Personal Portfolio, Web Design, Graphic Design' },
        { name: 'author', content: 'EMDesigns' },

        // Open Graph meta tags
        { property: 'og:title', content: 'EM Design | Portfolio' },
        { property: 'og:description', content: 'Explore the portfolio of EM Design, showcasing creative projects and design works.' },
        { property: 'og:image', content: 'https://portfolio-em-design.vercel.app/favicon-64x64.png' }, // Absolute path
        { property: 'og:url', content: 'https://portfolio-em-design.vercel.app/' }, 
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'EM Design' },

        // Twitter Card meta tags
        { name: 'twitter:card', content: 'https://portfolio-em-design.vercel.app/favicon-64x64.png'' },
        { name: 'twitter:title', content: 'EM Design | Portfolio' },
        { name: 'twitter:description', content: 'Explore the portfolio of EM Design, showcasing creative projects and design works.' },
        { name: 'twitter:image', content: 'https://portfolio-em-design.vercel.app/favicon-64x64.png' }, // Use the same absolute path
        { name: 'twitter:site', content: '@your_twitter_handle' }, // Replace with your Twitter handle if applicable
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }, // Correct path and sizes
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }, // Correct path and sizes
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }, // Apple Touch Icon
        { rel: 'manifest', href: '/manifest.webmanifest' }, // Manifest for PWA
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#994ff5' }, // Safari Pinned Tab Icon
      ],
    },
  },
  modules: ['@nuxt/image', "nuxt-marquee"],
  css: [
    "~/assets/css/style.css",
    "~/assets/css/tailwind.css",
  ],
  plugins: [
    { src: "~/plugins/alpine.ts", mode: "client" },
    { src: "~/plugins/gsap.client.ts", mode: "client" },
    { src: "~/plugins/vue-scrollto.client.ts", mode: "client" },
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
