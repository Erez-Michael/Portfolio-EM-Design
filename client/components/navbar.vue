<template>
  <div class="fixed top-0 z-50 w-full py-7 transition-colors duration-300 ease bg-dark" id="navbar">
    <div class="container relative">
      <div class="flex items-center justify-between md:block">
        <div class="flex items-center justify-between w-full">
          <div class="relative z-50">
            <a href="#">
              <img src="@/assets/images/logo-light.svg" alt="Logo" class="h-8 md:h-10" />
            </a>
          </div>
          <!-- Mobile Toggle Button -->
          <div class="flex items-center gap-5 lg:hidden">
            <ButtonMobileToggle />
          </div>
          <!-- Desktop Menu -->
          <div class="hidden lg:block">
            <ul class="flex items-center list-none space-x-7">
              <li
                v-for="item in menuItems"
                :key="item.href"
                :class="{
                  'active-link': isActive(item.href) && item.text !== 'About Me',
                  '': item.text === 'About Me'
                }"
              >
                <a @click="scrollToSection(item.href)" :href="item.href" class="link hover:cursor-pointer ">
                  {{ item.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div
        :class="{ 'translate-x-0': menuVisible, 'translate-x-full': !menuVisible && isClosing }"
        class="lg:hidden mobile-menu fixed py-20 top-0 left-0 w-full h-full bg-white dark:bg-dark z-50 transition-transform duration-300 ease-in-out"
        ref="mobileMenu"
      >
        <div class="border-b border-primary-gray1">
          <a href="/">
            <!-- Logo for Light and Dark Mode -->
            <img
              src="@/assets/images/logo-dark.svg"
              alt="Logo"
              class="fixed top-8 left-5 h-8 md:h-10 z-40 block dark:hidden"
            />
            <img
              src="@/assets/images/logo-light.svg"
              alt="Logo"
              class="fixed top-8 left-5 h-8 md:h-10 z-40 hidden dark:block"
            />
          </a>
        </div>

        <div class="h-full px-5 overflow-y-auto no-scrollbar">
          <ul class="flex flex-col w-full h-full">
            <li
              v-for="item in menuItems"
              :key="item.href"
              class="border-b border-primary-gray1"
            >
              <a
                @click="handleMenuItemClick(item.href)"
                :href="item.href"
                class="w-full text-left uppercase text-[1.75em] font-bold flex cursor-pointer my-8"
                :class="{ 'active-link-mobile': isActive(item.href) }"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, provide, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

// Define menu items for navigation
const menuItems = [
  { text: 'About Me', href: '#about' },
  { text: 'Services', href: '#services' },
  { text: 'Projects', href: '#projects' },
  { text: 'Testimonials', href: '#testimonials' }
];

// State for mobile menu visibility
const menuVisible = ref(false);
const isClosing = ref(false);
const activeSection = ref('');
const observer = ref(null);
const mobileMenu = ref(null);

// Provide menu states for ButtonMobileToggle to use
provide('menuVisible', menuVisible);
provide('isClosing', isClosing);

// Function to handle smooth scroll to sections
const scrollToSection = (href) => {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

// Function to handle menu item click
const handleMenuItemClick = (href) => {
  isClosing.value = true;
  gsap.to(mobileMenu.value, {
    x: '-100%',
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete: () => {
      menuVisible.value = false;
      isClosing.value = false;
      resetButtonToHamburger();
    }
  });
  scrollToSection(href);
  enableScroll();
};

// Function to check active link
const isActive = (href) => {
  return href === `#${activeSection.value}`;
};

// Function to enable and disable scrolling
const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};

// Function to reset the menu button to hamburger state
const resetButtonToHamburger = () => {
  gsap.to('.bar-1', { attr: { d: "M1,2 L11,2" }, ease: "power2.inOut" });
  gsap.to('.bar-2', { autoAlpha: 1, ease: "power2.inOut" });
  gsap.to('.bar-3', { attr: { d: "M1,8 L11,8" }, ease: "power2.inOut" });
};

// Intersection observer to track active sections
const initIntersectionObserver = () => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: [0.1, 0.5] }
  );

  menuItems.forEach((item) => {
    const section = document.querySelector(item.href);
    if (section) {
      observer.value.observe(section);
    }
  });
};

// Setup observer on mount
onMounted(() => {
  initIntersectionObserver();
  disableScroll();
});

// Cleanup observer on unmount
onUnmounted(() => {
  if (observer.value) observer.value.disconnect();
  enableScroll();
});
</script>

<style scoped>
.link {
  @apply text-white text-sm lg:text-[16px] relative justify-center overflow-hidden uppercase tracking-widest;
  transition: color 0.3s ease, font-weight 0.5s ease;
}

.active-link {


}

.active-link-mobile {
  color: #FFC41F !important;
  -webkit-text-stroke: 0.75px black;
}

.mobile-menu {
  transform: translateX(-100%);
}

.translate-x-0 {
  transform: translateX(0%);
}

.translate-x-full {
  transform: translateX(100%);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
