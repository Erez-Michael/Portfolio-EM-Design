<template>
  <div :style="{ backgroundColor: `rgba(14, 16, 15, ${enableOpacity ? navbarOpacity : 0.85})` }"
    class="fixed top-0 z-50 w-full py-7 transition-colors duration-300 ease" id="navbar">
    <div class="container relative">
      <div class="flex items-center justify-between md:block">
        <div class="flex items-center justify-between w-full">
          <div class="relative z-50">
            <a href="/">
              <img src="@/assets/images/logo-light.svg" alt="" class="h-8 md:h-10">
            </a>
          </div>
          <div class="flex items-center gap-5 lg:hidden">
            <!-- Mobile Toggle Button -->
            <ButtonMobileToggle />
          </div>
          <!-- Desktop Menu -->
          <div class="hidden lg:block">
            <ul class="flex items-center list-none space-x-7">
              <li v-for="item in menuItems" :key="item.href" class="group relative"
                :class="{ 'active-link': isActive(item.href) }">
                <a @click="scrollToSection($event, item.href)" :href="item.href"
                  class="link hover:cursor-pointer dark:text-white text-dark"
                  :class="{ 'active-link': isActive(item.href) }">
                  {{ item.text }}
                  <span></span><span></span>
                </a>
                <ul v-if="item.subItems" class="desktop-dropdown-menu">
                  <li v-for="subItem in item.subItems" :key="subItem.href" class="group relative">
                    <a @click="scrollToSection($event, subItem.href)" :href="subItem.href"
                      class="link sub-link p-2 block whitespace-nowrap dark:text-white text-dark"
                      :class="{ 'active-sub-link': isActive(subItem.href) }">
                      {{ subItem.text }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div :class="{ 'translate-x-0': menuVisible, 'translate-x-full': !menuVisible && isClosing }"
        class="lg:hidden mobile-menu fixed py-20 top-0 left-0 w-full h-full bg-white dark:bg-dark z-50 transition-transform duration-300 ease-in-out">
        <div class="border-b border-primary-gray1">
          <a href="/">
            <img src="@/assets/images/logo-black.svg" alt="" class="fixed top-8 left-5 h-8 md:h-10 z-40">
          </a>
        </div>
        <div class="h-full px-5 overflow-y-auto no-scrollbar">
          <ul class="flex flex-col w-full h-full">
            <li v-for="item in menuItems" :key="item.href" class="border-b border-primary-gray1">
              <div v-if="!item.subItems"
                class="uppercase text-[1.75em] font-future-earth font-extrabold flex cursor-pointer my-8">
                <a @click="handleMenuItemClick(item.href)" :href="item.href"
                  class="w-full text-left dark:text-white text-dark"
                  :class="{ 'active-link-mobile': isActive(item.href) }">
                  {{ item.text }}
                </a>
              </div>
              <div v-else
                class="uppercase tracking-widest text-[1.75em] font-future-earth font-extrabold flex justify-between cursor-pointer my-8"
                @click="toggleDropdown(item.text, $event)">
                {{ item.text }}
                <span class="text-primary-gray1 font-thin transform scale-150"
                  :class="{ 'rotate-45': isDropdownOpen(item.text) }">+</span>
              </div>
              <ul v-if="item.subItems" class="dropdown-menu" :class="{ open: isDropdownOpen(item.text) }">
                <li v-for="subItem in item.subItems" :key="subItem.href" class="flex items-center h-12">
                  <a @click="handleMenuItemClick(subItem.href)" :href="subItem.href"
                    class="uppercase dark:text-white text-dark"
                    :class="{ 'active-link-mobile': isActive(subItem.href) }">
                    {{ subItem.text }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted, provide } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import gsap from 'gsap';

const router = useRouter();
const route = useRoute();

const menuItems = [
  { text: 'Home', href: '#home' },
  { text: 'About Me', href: '#about' },
  { text: 'Services', href: '#services' },
  { text: 'Projects', href: '#work' },
  { text: 'Testimonials', href: '#client' }
];

const menuVisible = ref(false);
const isClosing = ref(false);
const dropdowns = ref({});

const isActive = (href) => route.hash === href;

provide('menuVisible', menuVisible);
provide('isClosing', isClosing);

const enableScroll = () => {
  document.body.style.overflow = '';
};

const scrollToSection = (event, sectionId) => {
  event.preventDefault(); // Prevent default anchor behavior
  const navbarHeight = document.getElementById('navbar').offsetHeight; // Get navbar height
  const section = document.querySelector(sectionId); // Get the target section

  // Calculate the offset position of the target section
  const offsetTop = section.offsetTop - navbarHeight;

  // Smooth scroll to the section
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  });

  // Close the mobile menu after clicking a link
  if (menuVisible.value) {
    menuVisible.value = false;
  }
};

const handleMenuItemClick = (href) => {
  isClosing.value = true;
  const tl = gsap.timeline({
    onComplete: () => {
      menuVisible.value = false;
      isClosing.value = false;
      enableScroll();
      gsap.to('.bar-1', { attr: { d: "M1,2 L11,2" }, ease: "power2.inOut" });
      gsap.to('.bar-2', { autoAlpha: 1, ease: "power2.inOut" });
      gsap.to('.bar-3', { attr: { d: "M1,8 L11,8" }, ease: "power2.inOut" });
      router.push(href);
    }
  });

  tl.to('.mobile-menu', { x: '-100%', ease: "power2.inOut", duration: 0.5 });
};

provide('handleMenuItemClick', handleMenuItemClick);

const toggleDropdown = (section) => {
  dropdowns.value[section] = !dropdowns.value[section];
};

const isDropdownOpen = (section) => {
  return dropdowns.value[section];
};

const props = defineProps({
  enableOpacity: {
    type: Boolean,
    default: true
  }
});

const handleScroll = () => {
  if (props.enableOpacity) {
    const scrollY = window.scrollY;
    const height = window.innerHeight;
    const newOpacity = 0.85 - scrollY / (height / 2);
    if (scrollY === 0) {
      setNavbarOpacity(0.85);
    } else if (newOpacity <= 0) {
      setNavbarOpacity(0);
    } else {
      setNavbarOpacity(Math.max(0, Math.min(0.85, newOpacity)));
    }
  }
};

onMounted(() => {
  if (props.enableOpacity) {
    window.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  if (props.enableOpacity) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style lang="scss" scoped>
.link {
  @apply text-dark dark:text-white text-sm lg:text-[16px] relative justify-center overflow-hidden uppercase tracking-widest;
  transition: color 0.3s ease, font-weight 0.5s ease;
}

.active-link-mobile {
  @apply text-dark dark:text-white relative justify-center overflow-hidden uppercase tracking-widest;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

ul {
  margin: auto;
  padding: 0;
  list-style: none;
  text-align: left;
}

li {
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
}

a {
  color: inherit; /* Inherit color from parent to apply dark mode correctly */
  text-decoration: none;
  letter-spacing: 0.2em;
  display: inline-block;
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: left;
}

a span,
.nuxt-link-exact-active span,
a::before,
.nuxt-link-exact-active::before,
a::after,
.nuxt-link-exact-active::after {
  position: absolute;
  background: #3BA5BE;
  transform-origin: center;
  transition: transform 1.5s ease-out;
}

a:hover span:first-child,
.nuxt-link-exact-active:hover span:first-child,
a:hover::before,
.nuxt-link-exact-active:hover::before,
a:hover span:last-child,
.nuxt-link-exact-active:hover span:last-child,
a:hover::after,
.nuxt-link-exact-active:hover::after {
  transform: scaleX(1);
  transform: scaleY(1);
  transition: transform 0.2s ease-in;
}

a span:first-child,
.nuxt-link-exact-active span:first-child {
  right: 0;
  bottom: 0;
  width: 100%;
  height: 1.5px;
  transform: scaleX(0);
}

a:hover span:first-child,
.nuxt-link-exact-active:hover span:first-child,
a:hover::before,
.nuxt-link-exact-active:hover::before,
a:hover span:last-child,
.nuxt-link-exact-active:hover span:last-child,
a:hover::after,
.nuxt-link-exact-active:hover::after {
  transform: scaleX(1);
  transform: scaleY(1);
  transition-delay: 0s;
}

a span:first-child,
.nuxt-link-exact-active span:first-child,
a::before,
.nuxt-link-exact-active::before {
  transition-delay: 0s;
}

a span:last-child,
.nuxt-link-exact-active span:last-child,
a::after,
.nuxt-link-exact-active::after {
  transition-delay: 0.05s;
}

.active-link .link,
.active-sub-link {
  color: #3BA5BE !important;
  font-weight: bold;
}

.active-link-mobile {
  color: #3BA5BE !important;
  font-weight: extrabold;
}

.active-link .nuxt-link-exact-active,
.active-link a {
  color: #3BA5BE !important;
}

/* Mobile Menu */
.mobile-menu {
  transform: translateX(-100%);
}

.translate-x-0 {
  transform: translateX(0%);
}

.translate-x-full {
  transform: translateX(100%);
}

.rotate-45 {
  transform: rotate(45deg);
  transition: transform 0.2s;
}

.h-full {
  height: 100%;
}

.overflow-y-auto {
  overflow-y: auto;
}

.dropdown-menu {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
}

.dropdown-menu.open {
  max-height: 500px;
}

/* Desktop Dropdown Menu */
@media (min-width: 1024px) {
  .desktop-dropdown-menu {
    @apply absolute left-0 shadow-md rounded-tl-lg rounded-br-lg hidden;
    min-width: 200px;
    z-index: 50;
  }

  .group:hover .desktop-dropdown-menu {
    @apply block;
  }

  .sub-link {
    @apply p-2 block whitespace-nowrap dark:text-white text-dark;
  }

  .sub-link:hover,
  .active-sub-link {
    @apply bg-primary-gray3 rounded-tl-lg rounded-br-lg;
  }
}
</style>


