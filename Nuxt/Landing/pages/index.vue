<template>
    <div>
        <section class="pt-[100px] relative overflow-hidden" id="home">
            <div class="container">
                <div class="flex flex-col">
                    <div class="flex flex-col flex-wrap justify-between items-center lg:flex-row ">
                        <div class="w-full lg:w-1/2">
                            <div class="py-16 md:py-24" data-aos="fade-up">
                                <div class="text-warning bg-warning/[14%] w-fit -rotate-6 shadow-xl rounded-tl-xl rounded-br-xl rounded-tr-xl border border-purple/[9%]">

                                    <p class=" font-semibold text-2xl lg:text-3xl inline-block p-2.5 ">
                                        Hi! I'm <span class="text-outline">Erez Michael</span>
                                    </p>
                                </div>

                                <h1 class="mt-6 md:mt-12 font-bold text-3xl/normal md:text-[50px]/normal">Freelance Web Developer</h1>
                                <p class="text-gray mt-6 max-w-[571px] leading-loose">Passionate Web Developer specializing in creating dynamic, user-focused websites and applications that blend creativity with robust functionality.</p>
                               
                                <div class="flex flex-col lg:flex-row items-center gap-5 pt-12 md:pt-20 md:gap-12">
                                    <div class="space-y-3 text-center">
                                        <p class="text-2xl font-semibold" data-vanilla-counter data-start-at="0"
                                            data-end-at="180" data-time="1000" data-delay="0" data-format="{}+">
                                            <count-to :startVal='0' :endVal='180' :duration='3000'>10</count-to>+
                                        </p>
                                        <p class="text-gray">Province Wide Clients</p>
                                    </div>
                                    <div class="space-y-3 text-center">
                                        <p class="text-2xl font-semibold" data-vanilla-counter data-start-at="0"
                                            data-end-at="590" data-time="1000" data-delay="0" data-format="{}+">
                                            <count-to :startVal='0' :endVal='590' :duration='3000'>16</count-to>+
                                        </p>
                                        <p class="text-gray">Completed Projects</p>
                                    </div>
                                    <div class="space-y-3 text-center">
                                        <p class="text-2xl font-semibold" data-vanilla-counter data-start-at="0"
                                            data-end-at="12" data-time="1000" data-delay="0" data-format="{}+">
                                            <count-to :startVal='0' :endVal='12' :duration='3000'>7</count-to>+
                                        </p>
                                        <p class="text-gray">Years Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div class="flex flex-col justify-center items-center my-10">
    
                                <nuxt-img src="/images/portrait.webp"
                                    class="flex lg:hidden"
                                    loading="lazy" alt="portrait" />
                                        <nuxt-img src="/images/portrait.webp"
                                    class="hidden lg:flex max-w-[420px]"
                                    loading="lazy" alt="portrait" />
                                    
                                    <div class="w-full flex flex-col  lg:flex-row  justify-between  gap-5 mt-10">
                                    <a href="javascript:;" class="flex justify-center items-center gap-2.5 btn btn-purple text-xl">
                                       <IconsHireMe />
                                        Hire Me
                                    </a>
                                    <a href="javascript:;" class="flex justify-center items-center  gap-2.5 btn btn-outline-white text-xl">
                                       <IconsDownload />
                                        Download CV
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- home section -->

        <!-- Start About me -->
        <section class="lg:py-16 md:py-24 border-t-2 border-gray/[12%] dark:border-white/[12%]" id="about">
            <div class="container shadow-xl rounded-xl lg:p-24 bg-gradient-to-tl from-purple/[12%] to-white py-16" data-aos="fade-up">
                <div class="flex flex-col lg:flex-row justify-center items-center gap-5 ">
  <p class="bg-purple text-white text-sm font-semibold py-3 px-8 uppercase rounded-full flex items-center gap-2.5 whitespace-nowrap">
    <IconsStar />
    <span>About Me</span>
  </p>
  <div class="mt-7 lg:mt-0 lg:ml-5">
    <p class="text-gray">
      I am a passionate web developer dedicated to building seamless and impactful digital experiences. From developing
      dynamic websites to crafting powerful backend solutions and setting up efficient content management systems, I
      focus on delivering high-quality, scalable results that drive success for your brand.
    </p>
  </div>
</div>


                <div class="flex flex-col text--center mt-14">
                    <div class="flex-wrap items-start sm:flex gap-7 space-y-7 sm:space-y-0">
                        <div class="space-y-2.5 font-semibold flex-1">
                            <p class="text-gray whitespace-nowrap">contact</p>
                            <a href="mailto:erezmichael01@gmail.com" class="flex whitespace-nowrap">erezmichael01@gmail.com</a>
                        </div>
                        <div class="space-y-2.5 font-semibold flex-1">
                            <p class="text-gray whitespace-nowrap">Phone</p>
                            <a href="tel:5145832698" class="flex whitespace-nowrap">+1 (514) 583-2698</a>
                        </div>
                        <div class="space-y-2.5 font-semibold flex-1">
                            <p class="text-gray whitespace-nowrap">Social Media</p>
                            <ul class="flex flex-wrap items-center gap-5">
                                <li class="shrink-0">
                                    <a href="https://www.linkedin.com/in/erezmichael/" target="_blank" rel="noopener noreferrer">
                                <img src="@/assets/images/linkedIn.svg" alt="LinkedIn">
                                    </a>

                                </li>
                            </ul>
                        </div>
                        <div class="space-y-2.5 font-semibold flex-1">
                            <p class="text-gray whitespace-nowrap">Spoken Languages</p>
                            <p class="whitespace-nowrap">English - French - Spanish - Hebrew</p>
                        </div>
                        <div class="space-y-2.5 font-semibold flex-1">
                            <p class="text-gray whitespace-nowrap">Interest</p>
                            <p class="whitespace-nowrap">Surfing, Hiking, Cooking, Health</p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
        <!-- End About me -->
    </div>
</template>

<style scoped>
.text-outline {
  -webkit-text-stroke: 0.75px black; /* Adjust the stroke width and color as needed */
}

</style>