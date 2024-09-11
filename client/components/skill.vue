<template>
  <section class="py-16 md:py-24 mb-6">
    <div class="container">
      <div class="flex flex-col justify-center items-center" data-aos="fade-up">
        <div class="text-center">
          <div class="inline-block mb-6">
            <BaseTitle text1="Skill" text2=" Set" />
          </div>
          <p class="mt-5 text-gray max-w-[708px] mx-auto">
            Blending digital, graphic, and spatial creativity, we shape leading brand experiences that resonate with purpose.
          </p>
        </div>
      </div>

      <!-- Marquees for Both Mobile and Desktop -->
      <div class="flex flex-col gap-8 mt-14 mx-auto items-center max-w-[1000px]">
        <!-- Front-end Marquee -->
        <NuxtMarquee
          class="w-full"
          speed="60"
          pauseOnHover="true"
          :gradient="isDesktop"
          :gradientColor="isDesktop ? '#0d0f24' : ''"
          :gradientWidth="isDesktop ? 200 : 0"
        >
          <div class="flex items-center justify-center gap-7">
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"><IconsSkillReact /></a>
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer"><IconsSkillNext /></a>
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><IconsSkillVue /></a>
            <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer"><IconsSkillNuxt /></a>
            <a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer"><IconsSkillJavaScript /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><IconsSkillHtml /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><IconsSkillCss /></a>
            <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer"><IconsSkillPhp /></a>
          </div>
        </NuxtMarquee>

        <!-- Back-end Marquee -->
        <NuxtMarquee
          class="w-full"
          speed="70"
          direction="right"
          pauseOnHover="true"
          :gradient="isDesktop"
          :gradientColor="isDesktop ? '#0d0f24' : ''"
          :gradientWidth="isDesktop ? 200 : 0"
        >
          <div class="flex items-center justify-center gap-7">
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer"><IconsSkillNode /></a>
            <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer"><IconsSkillMongodb /></a>
            <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer"><IconsSkillExpress /></a>
            <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer"><IconsSkillNpm /></a>
            <a href="https://insomnia.rest" target="_blank" rel="noopener noreferrer"><IconsSkillInsomnia /></a>
            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer"><IconsSkillGit /></a>
            <a href="https://about.gitlab.com" target="_blank" rel="noopener noreferrer"><IconsSkillGitlab /></a>
            <a href="https://www.linux.org" target="_blank" rel="noopener noreferrer"><IconsSkillLinux /></a>
          </div>
        </NuxtMarquee>

        <!-- Design Marquee -->
        <NuxtMarquee
          class="w-full"
          speed="100"
          pauseOnHover="true"
          :gradient="isDesktop"
          :gradientColor="isDesktop ? '#0d0f24' : ''"
          :gradientWidth="isDesktop ? 200 : 0"
        >
          <div class="flex items-center justify-center gap-7">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><IconsSkillGithub /></a>
            <a href="https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration" target="_blank" rel="noopener noreferrer"><IconsSkillSharepoint /></a>
            <a href="https://www.microsoft.com/en-us/microsoft-365" target="_blank" rel="noopener noreferrer"><IconsSkillMicrosoft365 /></a>
            <a href="https://trello.com" target="_blank" rel="noopener noreferrer"><IconsSkillTrello /></a>
            <a href="https://www.autodesk.com/products/autocad" target="_blank" rel="noopener noreferrer"><IconsSkillAutocad /></a>
            <a href="https://www.adobe.com/products/photoshop" target="_blank" rel="noopener noreferrer"><IconsSkillPhotoshop /></a>
            <a href="https://www.adobe.com/products/illustrator" target="_blank" rel="noopener noreferrer"><IconsSkillIllustrator /></a>
            <a href="https://www.sketchup.com" target="_blank" rel="noopener noreferrer"><IconsSkillSketchup /></a>
            <a href="https://www.adobe.com/acrobat" target="_blank" rel="noopener noreferrer"><IconsSkillAcrobat /></a>
          </div>
        </NuxtMarquee>
      </div>
    </div>
  </section>
</template>

<script>

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

    return {
      isDesktop
    };
  }
};
</script>
