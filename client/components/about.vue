<template>
  <div id="about">

    <section class="relative py-16 md:py-24">
      <div class="container">
        <div class="flex flex-col">
          <div class="flex flex-col justify-between items-center sm:flex-row">
  
            <div class="w-full lg:w-2/3 my-24 2xl:my-24" data-aos="fade-up">
              
              <BaseTitle text1="Hi I'm" text2=" Erez Michael" :isInverted="true" maxWidth="360px" />
                <div class="">
                  <h1 class="font-bold  text-[26px] md:text-[50px]">Freelance Web Developer</h1>
                  <p class="text-gray mt-6 max-w-[570px] leading-loose">Passionate Web Developer specializing in creating
                    dynamic, user-focused websites and applications that blend creativity with robust functionality.</p>
                  </div>
                  
                  <div class="py-6 sm:py-auto">
                    
                  <div class="flex flex-col lg:flex-row items-center gap-5 mt-12 sm:mt-auto md:gap-12">
                    <div class="relative">
                      <!-- Positioning the IconsBlob1 as a background -->
                      <IconsBlob1 class="absolute inset-0 -z-10 " />
                      <div class="space-y-3 text-center relative z-10 ">
                        <p class="text-2xl font-semibold" data-vanilla-counter data-start-at="0" data-end-at="180"
                        data-time="1000" data-delay="0" data-format="{}+">
                        <count-to :startVal='0' :endVal='180' :duration='3000'>10</count-to>+
                      </p>
                      <p class="text-gray dark:text-white">Province Wide Clients</p>
                      </div>
                    </div>
                    <div class="relative">
                      <!-- Positioning the IconsBlob2 as a background -->
                      <IconsBlob2 class="absolute inset-0 -z-10 " />
                      <div class="space-y-3 text-center">
                        <p class="text-2xl font-semibold" data-vanilla-counter data-start-at="0" data-end-at="590"
                        data-time="1000" data-delay="0" data-format="{}+">
                        <count-to :startVal='0' :endVal='590' :duration='3000'>16</count-to>+
                      </p>
                      <p class="text-gray dark:text-white">Completed Projects</p>
                    </div>
                  </div>
                  <div class="relative">
                    <!-- Positioning the IconsBlob3 as a background -->
                    <IconsBlob3 class="absolute inset-0 -z-10 " />
                    <div class="space-y-3 text-center">
                      <p class="text-2xl font-semibold" data-vanilla-counter data-start-at="0" data-end-at="12"
                      data-time="1000" data-delay="0" data-format="{}+">
                      <count-to :startVal='0' :endVal='12' :duration='3000'>7</count-to>+
                    </p>
                    <p class="text-gray dark:text-white">Years Experience</p>
                  </div>
                </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-auto flex flex-col justify-center items-center my-10">
                <!-- Portrait Mobile -->              
                <nuxt-img src="/images/portrait.webp" class="flex lg:hidden w-full" loading="lazy" alt="portrait" />
                <!-- Portrait Desktop -->
                <nuxt-img src="/images/portrait.webp" class="hidden lg:flex  max-w-[420px]" loading="lazy"
                alt="portrait" />
                
                <div class="w-full flex flex-col  lg:flex-row  justify-between  gap-5 mt-10">
                  <a href="javascript:;" class="flex justify-center items-center gap-2.5 btn btn-purple  text-2xl md:text-lg 2xl:text-xl">
                    <IconsHireMe />
                    Hire Me
                  </a>
                  <a href="javascript:;" class="flex justify-center items-center  gap-2.5 btn btn-outline-white text-2xl md:text-lg 2xl:text-xl">
                    <IconsDownload />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section class="relative py-2 md:py-48 lg:py-24  border-t-2 bg-gradient-to-b from-white to-purple/[10%]  dark:bg-gradient-to-t dark:from-purple/[10%] border-gray/[8%] dark:border-white/[12%]"
    id="about">
    <div class="container bg-white dark:bg-dark shadow-lg rounded-xl lg:p-20  py-12 z-50">
      <!-- Content container -->
      <div class="flex flex-col lg:flex-row justify-center items-center lg:justify-start gap-5">
        <!-- Rotated "About Me" box -->
        <BaseTitle text1="About" text2=" Me" />
        
        <!-- Description text -->
        <div class="md:mt-7 lg:mt-0 lg:ml-5 lg:w-4/5 leading-loose">
          <p class="text-gray ">
            I am a passionate web developer dedicated to building seamless and impactful digital experiences. From
            developing dynamic websites to crafting powerful backend solutions and setting up efficient content
            management
            systems, I focus on delivering high-quality, scalable results that drive success for your brand.
          </p>
        </div>
      </div>
      <!-- Additional content -->
      <div class="flex flex-col flex-wrap justify-between text-center mt-14">
        <div class="flex-wrap items-start sm:flex gap-8 space-y-7 sm:space-y-0">
          <div class="font-semibold flex-1">
            <p class="text-gray whitespace-nowrap mb-2">Contact</p>
            <a href="mailto:erezmichael01@gmail.com" class="whitespace-nowrap">erezmichael01@gmail.com</a>
          </div>
          <div class="font-semibold flex-1">
            <p class="text-gray whitespace-nowrap mb-2">Phone</p>
            <a href="tel:5145832698" class="whitespace-nowrap">+1 (514) 583-2698</a>
          </div>
          <div class="font-semibold flex-1">
            <p class="text-gray whitespace-nowrap mb-2">Social Media</p>
            <div class="flex justify-center">
              <a href="https://www.linkedin.com/in/erezmichael/" target="_blank" rel="noopener noreferrer"
              class="whitespace-nowrap">
              <img src="@/assets/images/linkedIn.svg" alt="LinkedIn" class="mx-auto" />
            </a>
          </div>
        </div>
        <div class="font-semibold flex-1">
          <p class="text-gray whitespace-nowrap mb-2">Languages</p>
            <p class="whitespace-nowrap">English - French - Spanish - Hebrew</p>
          </div>
          <div class="font-semibold flex-1">
            <p class="text-gray whitespace-nowrap mb-2">Interest</p>
            <p class="whitespace-nowrap">Surfing, Hiking, Cooking, Health</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>
.text-outline {
  -webkit-text-stroke: 0.75px black;
}
</style>