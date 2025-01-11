<template>
    <!-- Start Services -->
    <section
        class="pt-36 md:py-36 text-white bg-gradient-to-b from-purple/[10%] to-white dark:bg-gradient-to-b dark:from-purple/[10%] dark:to-transparent"
        id="services">
        <div class="container">
            <div class="grid grid-cols-1" data-aos="fade-up">
                <div class="text-center space-y-12">
                    <div class="inline-block">
                        <BaseTitle text1="Services" text2=" Offered" maxWidth="300px" />
                    </div>
                    <p class="mt-5 text-gray max-w-[708px] mx-auto">
                        I craft digital, graphic and dimensional thinking to create category leading brand experiences
                        that have meaning.
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-14 gap-7">
                <div class="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-b from-white/[4%] to-transparent"
                    data-aos="fade-up">
                    <div>
                        <img :style="{ transform: `rotate(${getRotation(60)}deg)` }" src="@/assets/images/services-1.svg"
                            alt="">
                    </div>
                    <h3 class="text-dark dark:text-white text-xl font-semibold">Web Development</h3>
                    <p class="text-gray">I create responsive and high-performance websites using modern frameworks like
                        React, Next.js, Vue, and Nuxt, ensuring a seamless and engaging user experience.</p>
                </div>
                <div class="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-b from-white/[4%] to-transparent"
                    data-aos="fade-up">
                    <div>
                        <img :style="{ transform: `rotate(${getRotation(45)}deg)` }" src="@/assets/images/services-2.svg"
                            alt="">
                    </div>
                    <h3 class="text-dark dark:text-white text-xl font-semibold">Frontend Development</h3>
                    <p class="text-gray">Specializing in crafting dynamic, responsive websites with tools like Tailwind
                        CSS, turning complex designs into smooth, engaging user experiences.</p>
                </div>
                <div class="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-b from-white/[4%] to-transparent"
                    data-aos="fade-up">
                    <div>
                        <img :style="{ transform: `rotate(${getRotation(0)}deg)` }" src="@/assets/images/services-3.svg"
                            alt="">
                    </div>
                    <h3 class="text-dark dark:text-white text-xl font-semibold">Backend Development & APIs</h3>
                    <p class="text-gray">Developing powerful server-side applications and RESTful APIs with Node.js,
                        integrating databases like MongoDB to ensure your applications run efficiently.</p>
                </div>
                <div class="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-b from-white/[4%] to-transparent"
                    data-aos="fade-up">
                    <div>
                        <img :style="{ transform: `rotate(${getRotation(0)}deg)` }" src="@/assets/images/services-1.svg"
                            alt="">
                    </div>
                    <h3 class="text-dark dark:text-white text-xl font-semibold">Content Management Systems (CMS)
                    </h3>
                    <p class="text-gray">Expertise in setting up and customizing CMS platforms like Directus and
                        WordPress, providing you with flexible, easy-to-manage solutions for your content needs.</p>
                </div>
                <div class="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-b from-white/[4%] to-transparent"
                    data-aos="fade-up">
                    <div>
                        <img :style="{ transform: `rotate(${getRotation(0)}deg)` }" src="@/assets/images/services-2.svg"
                            alt="">
                    </div>
                    <h3 class="text-dark dark:text-white text-xl font-semibold">SEO Optimization</h3>
                    <p class="text-gray">Enhance your online visibility with strategic SEO services. From on-page
                        optimization to keyword research and analytics, we ensure your site ranks high and attracts the
                        right audience.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
    setup() {
        const scrollPosition = ref(0);

        const handleScroll = () => {
            scrollPosition.value = window.scrollY;
        };

        const getRotation = (index) => {
            // Create unique rotation for each image based on scroll position
            return (scrollPosition.value / 2) + (index * 50);
        };

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll);
        });

        return {
            getRotation,
        };
    },
};
</script>

<style scoped>
.text-outline {
    -webkit-text-stroke: 0.75px black;
}
</style>
