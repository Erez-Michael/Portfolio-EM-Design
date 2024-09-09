<template>
  <div>
    <section class="py-16 md:py-24 relative overflow-hidden" id="home">
      <div class="container">
        <div class="flex flex-col">
          <div class="flex flex-col justify-between items-center sm:flex-row">

            <div class="w-full lg:w-2/3 my-24 2xl:my-24" data-aos="fade-up">

              <BaseTitle text1="Hi I'm" text2=" Erez Michael" :isInverted="true" maxWidth="360px" />
              <div class="">
                <h1 class="font-bold text-3xl/normal md:text-[50px]/normal">Freelance Web Developer</h1>
                <p class="text-gray mt-6 max-w-[571px] leading-loose">Passionate Web Developer specializing in creating
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
  </div>
</template>

<style scoped>
.text-outline {
  -webkit-text-stroke: 0.75px black;
}
</style>
