<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";



const isOpen = ref(false);
const container = ref<HTMLElement | null>(null);
const currentYear = ref<number>(new Date().getFullYear());

const handleClick = (event: MouseEvent) => {
    if (container.value && !container.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

const handleClickOutside = (event: MouseEvent) => {
    if (container.value && !container.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener('click', handleClickOutside);
});

// Cleanup event listener when component is unmounted
onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside);
});
</script>
<template>
    <!-- Start Footer -->
    <footer class="bg-dark dark:bg-gradient-to-t dark:from-transparent  dark:to-dark" id="contact">
        <div class="py-16">
            <div class="container">
                <div class="flex-1 gap-7">
                    <div class="text-white">
                        <div class="flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly items-center text-center lg:text-left">
    <h3 class="font-bold mt-12 lg:mt-0 text-3xl/normal lg:text-[40px]/normal">
        Let's build something exceptional 
        <span class="relative inline-block">
            together.
            <svg class="absolute w-full h-[20px] -bottom-4 left-0" width="200" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13 Q 60 -5, 195 15" stroke="#ffffff" fill="transparent" stroke-width="2.5" />
            </svg>
        </span>
    </h3>
    <img src="@/assets/images/website-under-construction.webp" alt="Website Under Construction" class="mt-6 rounded-lg shadow-lg" />
</div>


                                
                        <!-- <div class="inline-block mt-8 md:mt-14" x-data="{ isOpen: false }">
                            <button type="button" class="flex items-center gap-2.5 btn btn-purple"
                                @click="isOpen = true">
                                Say Hello
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                                        fill="currentColor"></path>
                                </svg>
                            </button>
                            <div class="fixed text-dark dark:text-white inset-0 bg-dark/90 backdrop-blur-sm z-[99999] overflow-y-auto hidden"
                                x-show="isOpen" @click="handleClick" :class="isOpen && '!block'">
                                <div class="flex items-center justify-center min-h-screen px-4" x-show="isOpen"
                                    x-transition x-transition.duration.300>
                                    <div
                                        class="relative w-full max-w-3xl my-8 overflow-hidden bg-white rounded-lg px-7 py-14 md:p-14">
                                        <button type="button"
                                            class="absolute flex items-center justify-center w-10 h-10 rounded-md ltr:right-4 rtl:left-4 top-4 ltr:md:right-5 rtl:md:left-5 md:top-5 bg-purple/10 text-purple"
                                            @click="isOpen = false">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
                                                <path
                                                    d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </button>
                                        <div class="max-w-[600px]">
                                            <h3 class="text-2xl font-bold text-dark md:text-3xl/normal">Got a Project in
                                                Mind? Let's Collaborate!</h3>
                                            <p class="mt-5 text-gray">I'd love to hear more about your ideas and goals.
                                            </p>

                                        </div>
                                        <form class="mt-8 md:mt-12">
                                            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                                                <div>
                                                    <input type="text" class="form-input" placeholder="Full name..."
                                                        required>
                                                </div>
                                                <div>
                                                    <input type="email" class="form-input" placeholder="Your Email"
                                                        required>
                                                </div>
                                                <div class="md:col-span-2">
                                                    <input type="text" class="form-input" placeholder="Subject"
                                                        required>
                                                </div>
                                                <div class="md:col-span-2">
                                                    <textarea rows="3" class="h-auto resize-none form-textarea"
                                                        placeholder="Your message..."></textarea>
                                                </div>
                                                <div class="md:col-span-2">
                                                    <button type="submit" class="btn btn-purple">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>

                </div>
            </div>
        </div>
        <div class="bg-[url(../images/footer-bg.png)] bg-[center_top] bg-cover pt-24">
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    <div class="text-white">
                        <IconsPhone />
                        <div class="mt-7">
                            <p class="text-sm text-white/80">Call me Mon-Fri 8am-6pm</p>
                            <a href="tel:5145832698" class="mt-3 text-lg font-semibold">514.583.2698</a>
                        </div>
                    </div>
                    <div class="text-white">
                        <IconsMail />
                        <div class="mt-7">
                            <p class="text-sm text-white/80">Write me an email.</p>
                            <a href="mailto:erezmichael01@gmail.com"
                                class="mt-3 text-lg font-semibold">erezmichael01@gmail.com</a>
                        </div>
                    </div>
                    <div class="text-white">
                        <IconsPin />
                        <div class="mt-7">
                            <p class="text-sm text-white/80">Proudly located in the South West of Montreal </p>
                            <a href="https://maps.app.goo.gl/hwrzSByCuvByCjpk6" target="_blank"
                                rel="noopener noreferrer" class="mt-3 text-lg font-semibold">Montréal, Québec,
                                Canada</a>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1">
                    <div class="h-[2px] bg-white/[12%] block mt-12"></div>
                    <div class="flex flex-col items-center py-5 md:flex-row md:justify-between gap-7">
                        <div>
                            <p class="text-sm text-white">
                                Copyright
                                {{ currentYear }}
                                EM Design, All Rights Reserved.
                            </p>
                        </div>
                        <div>
                            <ul class="text-white flex items-center flex-wrap gap-3.5">


                                <li>
                                    <a href="https://www.linkedin.com/in/erezmichael/" target="_blank"
                                        rel="noopener noreferrer">
                                        <IconsLinkedin />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- End Footer -->
</template>

<style scoped>
.gradient-bg {
    display: inline-block;
    padding: 5px;
    /* Adjust as needed */
    border-radius: 8px;
    /* Optional: for rounded corners */
    background: linear-gradient(to bottom, #6a0dad, #1a1a2e);
    /* Purple to dark gradient */
}

.whitespace-nowrap {
    white-space: nowrap;
}

</style>