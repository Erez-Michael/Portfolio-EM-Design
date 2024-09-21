<template>
  <div :class="['min-h-screen', theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark']">
    <!-- Loading Bar -->
    <LoadingOverlay @loading-complete="handleLoadingComplete" />

    <!-- Navbar -->
    <Navbar :activeSection="activeSection" />

    <!-- Main Sections -->
    <section id="about">
      <About />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section>

    <ButtonScrollToTop />
    <Footer />

    <!-- Dark/Light Mode Toggle Button -->
    <div class="fixed z-50 flex flex-col gap-3 ltr:left-0 rtl:right-0 bottom-3 lg:top-1/4">
      <button
        type="button"
        class="inline-block px-4 text-white border-gray-200 shadow-lg h-11 bg-sky-500 ltr:rounded-r-md rtl:rounded-l-md"
        @click="toggleTheme"
      >
        <span v-if="theme === 'light'">Dark</span>
        <span v-else>Light</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define reactive properties
const theme = ref('dark'); 
const observer = ref(null);
const activeSection = ref('');
const isLoading = ref(true);

// Toggle between light and dark themes
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', theme.value === 'dark');
};

// Handle loading completion
const handleLoadingComplete = () => {
  isLoading.value = false;
  document.documentElement.style.overflow = ''; // Restore scrolling on html element
  document.body.style.overflow = ''; // Restore scrolling on body element
};

// Initialize intersection observer to track active sections
const initIntersectionObserver = () => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.5 } // Adjust threshold for better sensitivity
  );

  const sections = document.querySelectorAll('section');
  sections.forEach((section) => observer.value.observe(section));
};

// Set up on page load
onMounted(() => {
  // Disable scrolling on both html and body while the loading bar is active
  document.documentElement.style.overflow = 'hidden'; // Hide scroll on html element
  document.body.style.overflow = 'hidden'; // Hide scroll on body element

  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  AOS.init({
    easing: 'ease-in-out-sine',
    duration: 2000,
  });

  initIntersectionObserver();
});

// Clean up on unmount or when the component is unloaded
onUnmounted(() => {
  document.documentElement.style.overflow = ''; // Restore scrolling on html element
  document.body.style.overflow = ''; // Restore scrolling on body element
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
