<template>
 <section
      class="relative lg:py-16 md:py-48  border-t-2 bg-gradient-to-b from-white to-purple/[10%] py-16 dark:bg-gradient-to-t dark:from-purple/[10%] border-gray/[8%] dark:border-white/[12%]"
      id="about">
      <div class="container bg-white dark:bg-dark shadow-lg rounded-xl lg:p-20  py-12 z-50">
        <!-- Content container -->
        <div class="flex flex-col lg:flex-row justify-center items-center lg:justify-start gap-5">
          <!-- Rotated "About Me" box -->
          <BaseTitle text1="About" text2=" Me" />

          <!-- Description text -->
          <div class="mt-7 lg:mt-0 lg:ml-5 lg:w-4/5 leading-loose">
            <p class="text-gray ">
              I am a passionate web developer dedicated to building seamless and impactful digital experiences. From
              developing dynamic websites to crafting powerful backend solutions and setting up efficient content
              management
              systems, I focus on delivering high-quality, scalable results that drive success for your brand.
            </p>
          </div>
        </div>

        <!-- Additional content -->
        <div class="flex flex-col justify-between text-center mt-14">
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
</template>