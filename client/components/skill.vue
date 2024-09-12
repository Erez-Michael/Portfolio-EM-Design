<template>
  <section class="py-16 md:py-24 mb-6">
    <div class="container">
      <div class="flex flex-col justify-center items-center" data-aos="fade-up">
        <div class="text-center">
          <div class="inline-block mb-6">
            <BaseTitle text1="Skill" text2=" Set" />
          </div>
          <p class="mt-5 text-gray max-w-[708px] mx-auto">
            Blending digital, graphic, and spatial creativity, I shape leading brand experiences that resonate with purpose.
          </p>
        </div>
      </div>

      <!-- Parent Wrapper with Relative Position -->
      <div class="relative max-w-[1000px] mx-auto mt-14">
        <!-- Cover Gradient Overlay for Marquees -->
        <div class="absolute inset-0 sm:dark:bg-[linear-gradient(90deg,_#111125_5%,_transparent_50%,_#111125_95%)] pointer-events-none z-20"></div>


        <!-- Marquees for Both Mobile and Desktop -->
        <div class="flex flex-col gap-8 items-center relative z-10">
          <!-- Front-end Marquee -->
          <NuxtMarquee speed="60" pauseOnHover="true" class="w-full">
            <div class="flex items-center justify-center gap-7">
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                <IconsSkillReact />
              </a>
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" class="hidden dark:block">
                <IconsSkillNext />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="dark:hidden block">
                <IconsSkillNextLight />
              </a>
              <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
                <IconsSkillVue />
              </a>
              <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">
                <IconsSkillNuxt />
              </a>
              <a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer">
                <IconsSkillJavaScript />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                <IconsSkillHtml />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                <IconsSkillCss />
              </a>
              <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                <IconsSkillPhp />
              </a>
            </div>
          </NuxtMarquee>

          <!-- Back-end Marquee -->
          <NuxtMarquee speed="70" direction="right" pauseOnHover="true" class="w-full">
            <div class="flex items-center justify-center gap-7">
              <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
                <IconsSkillNode />
              </a>
              <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
                <IconsSkillMongodb />
              </a>
              <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
                <IconsSkillExpress />
              </a>
              <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">
                <IconsSkillNpm />
              </a>
              <a href="https://insomnia.rest" target="_blank" rel="noopener noreferrer">
                <IconsSkillInsomnia />
              </a>
              <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
                <IconsSkillGit />
              </a>
              <a href="https://about.gitlab.com" target="_blank" rel="noopener noreferrer">
                <IconsSkillGitlab />
              </a>
              <a href="https://www.linux.org" target="_blank" rel="noopener noreferrer">
                <IconsSkillLinux />
              </a>
            </div>
          </NuxtMarquee>

          <!-- Design Marquee -->
          <NuxtMarquee speed="100" pauseOnHover="true" class="w-full">
            <div class="flex items-center justify-center gap-7">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="hidden dark:block">
                <IconsSkillGithub />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="dark:hidden block">
                <IconsSkillGithubLight />
              </a>
              <a href="https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration" target="_blank"
                rel="noopener noreferrer">
                <IconsSkillSharepoint />
              </a>
              <a href="https://www.microsoft.com/en-us/microsoft-365" target="_blank" rel="noopener noreferrer">
                <IconsSkillMicrosoft365 />
              </a>
              <a href="https://trello.com" target="_blank" rel="noopener noreferrer">
                <IconsSkillTrello />
              </a>
              <a href="https://www.autodesk.com/products/autocad" target="_blank" rel="noopener noreferrer">
                <IconsSkillAutocad />
              </a>
              <a href="https://www.adobe.com/products/photoshop" target="_blank" rel="noopener noreferrer">
                <IconsSkillPhotoshop />
              </a>
              <a href="https://www.adobe.com/products/illustrator" target="_blank" rel="noopener noreferrer">
                <IconsSkillIllustrator />
              </a>
              <a href="https://www.sketchup.com" target="_blank" rel="noopener noreferrer">
                <IconsSkillSketchup />
              </a>
              <a href="https://www.adobe.com/acrobat" target="_blank" rel="noopener noreferrer">
                <IconsSkillAcrobat />
              </a>
            </div>
          </NuxtMarquee>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const isDesktop = ref(false);

    const checkDesktop = () => {
      isDesktop.value = window.innerWidth >= 768;
    };

    onMounted(() => {
      checkDesktop();
      window.addEventListener('resize', checkDesktop);
    });

    const isDarkMode = computed(() => document.documentElement.classList.contains('dark'));

    return {
      isDesktop,
      isDarkMode,
    };
  },
};
</script>
