// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'en', class: 'scroll-smooth' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'EM Design - Personal Portfolio' },
        { name: 'keywords', content: 'EM Design - Personal Portfolio' },
        { name: 'author', content: 'EMDesigns Themes' },

        // Open Graph meta tags
        { property: 'og:title', content: 'EM Design | Portfolio' },
        { property: 'og:description', content: 'Explore the portfolio of EM Design, showcasing creative projects and design works.' },
        { property: 'og:image', content: '/favicon-64x64.png' },  
        { property: 'og:url', content: 'https://portfolio-em-design.vercel.app/' }, 
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'EM Design' },

        // Twitter Card meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'EM Design | Portfolio' },
        { name: 'twitter:description', content: 'Explore the portfolio of EM Design, showcasing creative projects and design works.' },
        { name: 'twitter:image', content: '@/assets/images/favicon-64x64.png' }, 
        { name: 'twitter:site', content: '@your_twitter_handle' }, 
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#994ff5' },
       
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
