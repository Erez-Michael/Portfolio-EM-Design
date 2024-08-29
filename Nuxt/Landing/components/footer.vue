
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
    <footer class="bg-dark dark:bg-white/[8%]" id="contact">
        <div class="py-16">
            <div class="container">
                <div class="grid items-center grid-cols-1 md:grid-cols-2 gap-7">
                    <div class="text-white">
                        <h3 class="font-bold text-3xl/normal lg:text-[40px]/normal max-w-xl">Let's build something exceptional together.</h3>
                        <div class="inline-block mt-8 md:mt-14" x-data="{ isOpen: false }">
                            <button type="button" class="flex items-center gap-2.5 btn btn-purple" @click="isOpen = true">
                                Say Hello
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z" fill="currentColor"></path>
                                </svg>
                            </button>
                            <div class="fixed text-dark dark:text-white inset-0 bg-dark/90 backdrop-blur-sm z-[99999] overflow-y-auto hidden" x-show="isOpen" @click="handleClick" :class="isOpen && '!block'">
                                <div class="flex items-center justify-center min-h-screen px-4" x-show="isOpen" x-transition x-transition.duration.300>
                                    <div class="relative w-full max-w-3xl my-8 overflow-hidden bg-white rounded-lg px-7 py-14 md:p-14">
                                        <button type="button" class="absolute flex items-center justify-center w-10 h-10 rounded-md ltr:right-4 rtl:left-4 top-4 ltr:md:right-5 rtl:md:left-5 md:top-5 bg-purple/10 text-purple" @click="isOpen = false">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
                                                <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="currentColor"></path>
                                            </svg>
                                        </button>
                                        <div class="max-w-[480px]">
                                            <h3 class="text-2xl font-bold text-dark md:text-3xl/normal">Got Ideas? We've got the skills. Let's team up.</h3>
                                            <p class="mt-5 text-gray">Tell us more about yourself and what you're got in mind.</p>
                                        </div>
                                        <form class="mt-8 md:mt-12">
                                            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                                                <div>
                                                    <input type="text" class="form-input" placeholder="Full name..." required>
                                                </div>
                                                <div>
                                                    <input type="email" class="form-input" placeholder="Your Email" required>
                                                </div>
                                                <div class="md:col-span-2">
                                                    <input type="text" class="form-input" placeholder="Subject" required>
                                                </div>
                                                <div class="md:col-span-2">
                                                    <textarea rows="3" class="h-auto resize-none form-textarea" placeholder="Your message..."></textarea>
                                                </div>
                                                <div class="md:col-span-2">
                                                    <button type="submit" class="btn btn-purple">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="@/assets/images/contact-cartoon.png" class="mx-auto" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[url(../images/footer-bg.svg)] bg-[center_top] bg-cover pt-24">
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    <div class="text-white">
                        <span >
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M34.9906 27.1998C34.7479 29.014 33.8545 30.6782 32.4767 31.883C31.0988 33.0879 29.3303 33.7512 27.5 33.7498C21.8642 33.7498 16.4591 31.511 12.474 27.5259C8.48884 23.5407 6.25 18.1357 6.25 12.4998C6.2486 10.6695 6.912 8.90101 8.11682 7.52318C9.32163 6.14534 10.9859 5.25197 12.8 5.00922C13.0682 4.97736 13.3395 5.03321 13.5732 5.16841C13.807 5.30361 13.9907 5.51089 14.0969 5.75922L17.3984 13.1342C17.4796 13.3236 17.5126 13.5302 17.4946 13.7354C17.4766 13.9407 17.4081 14.1384 17.2953 14.3108L13.9563 18.2811C13.8378 18.4598 13.7678 18.6662 13.753 18.8801C13.7382 19.094 13.7792 19.3081 13.8719 19.5014C15.1641 22.1467 17.8984 24.8483 20.5516 26.128C20.7459 26.2203 20.961 26.2603 21.1755 26.2442C21.3901 26.228 21.5967 26.1562 21.775 26.0358L25.6813 22.7077C25.8544 22.5925 26.0535 22.5223 26.2606 22.5035C26.4676 22.4846 26.6761 22.5178 26.8672 22.5998L34.2359 25.9014C34.4854 26.0069 34.6939 26.1905 34.83 26.4247C34.9661 26.6588 35.0225 26.9309 34.9906 27.1998Z" fill="currentColor" />
                                <path d="M23.7922 5.92673C23.8346 5.7681 23.9079 5.61937 24.0078 5.48906C24.1078 5.35875 24.2324 5.24941 24.3746 5.16728C24.5168 5.08515 24.6738 5.03185 24.8366 5.01041C24.9994 4.98898 25.1648 4.99983 25.3235 5.04236C27.6407 5.64697 29.755 6.85837 31.4484 8.55179C33.1418 10.2452 34.3532 12.3594 34.9578 14.6767C35.0004 14.8353 35.0112 15.0008 34.9898 15.1636C34.9683 15.3264 34.915 15.4834 34.8329 15.6256C34.7508 15.7678 34.6414 15.8924 34.5111 15.9924C34.3808 16.0923 34.2321 16.1656 34.0735 16.208C33.9679 16.2357 33.8592 16.2499 33.75 16.2502C33.4746 16.2502 33.2068 16.1592 32.9884 15.9913C32.77 15.8235 32.6131 15.5882 32.5422 15.322C32.0491 13.4304 31.0604 11.7044 29.6781 10.3221C28.2958 8.93976 26.5698 7.95109 24.6781 7.45798C24.5194 7.41572 24.3705 7.34257 24.24 7.24271C24.1095 7.14286 24 7.01825 23.9177 6.87603C23.8354 6.73382 23.782 6.57677 23.7605 6.41388C23.7389 6.25099 23.7497 6.08545 23.7922 5.92673ZM23.4281 12.458C25.5828 13.033 26.9672 14.4174 27.5422 16.572C27.6131 16.8382 27.77 17.0735 27.9884 17.2413C28.2068 17.4092 28.4746 17.5002 28.75 17.5002C28.8592 17.4999 28.9679 17.4857 29.0735 17.458C29.2321 17.4156 29.3808 17.3423 29.5111 17.2424C29.6414 17.1424 29.7508 17.0178 29.8329 16.8756C29.915 16.7334 29.9683 16.5764 29.9898 16.4136C30.0112 16.2508 30.0004 16.0853 29.9578 15.9267C29.1578 12.933 27.0672 10.8424 24.0735 10.0424C23.9148 9.99999 23.7494 9.98927 23.5867 10.0108C23.4239 10.0324 23.267 10.0858 23.1249 10.168C22.9828 10.2502 22.8582 10.3595 22.7584 10.4899C22.6586 10.6202 22.5854 10.7689 22.543 10.9275C22.5006 11.0861 22.4899 11.2515 22.5114 11.4143C22.533 11.577 22.5864 11.734 22.6686 11.8761C22.7508 12.0182 22.8602 12.1427 22.9905 12.2426C23.1208 12.3424 23.2695 12.4156 23.4281 12.458ZM36.2313 27.3564C35.9527 29.4737 34.9129 31.4171 33.3061 32.8237C31.6994 34.2303 29.6355 35.004 27.5 35.0002C15.0938 35.0002 5.00001 24.9064 5.00001 12.5002C4.99619 10.3647 5.76984 8.30083 7.17647 6.69407C8.58311 5.08731 10.5265 4.04753 12.6438 3.76892C13.1792 3.70355 13.7213 3.81308 14.1894 4.08117C14.6574 4.34926 15.0262 4.76152 15.2406 5.25642L18.5406 12.6236V12.6424C18.7048 13.0212 18.7727 13.4348 18.738 13.8462C18.7034 14.2577 18.5674 14.6541 18.3422 15.0002C18.3141 15.0424 18.2844 15.0814 18.2531 15.1205L15 18.9767C16.1703 21.3549 18.6578 23.8205 21.0672 24.9939L24.8703 21.758C24.9077 21.7266 24.9468 21.6974 24.9875 21.6705C25.3333 21.4399 25.7311 21.2991 26.145 21.2609C26.5588 21.2227 26.9757 21.2883 27.3578 21.4517L27.3781 21.4611L34.7391 24.7595C35.2348 24.9733 35.6481 25.3417 35.9171 25.8098C36.1861 26.2779 36.2963 26.8205 36.2313 27.3564ZM33.75 27.0439C33.75 27.0439 33.7391 27.0439 33.7328 27.0439L26.3891 23.7549L22.5844 26.9908C22.5475 27.0221 22.5089 27.0513 22.4688 27.0783C22.109 27.3183 21.6931 27.4609 21.2618 27.4921C20.8305 27.5233 20.3984 27.4421 20.0078 27.2564C17.0813 25.8424 14.1641 22.947 12.7485 20.0517C12.561 19.664 12.4769 19.2344 12.5043 18.8046C12.5316 18.3749 12.6696 17.9594 12.9047 17.5986C12.9312 17.5562 12.961 17.516 12.9938 17.4783L16.25 13.6174L12.9688 6.27361C12.9681 6.26737 12.9681 6.26109 12.9688 6.25486C11.4535 6.45251 10.0623 7.19574 9.05566 8.34535C8.04899 9.49496 7.49592 10.9721 7.50001 12.5002C7.5058 17.8027 9.6148 22.8864 13.3643 26.6359C17.1137 30.3854 22.1975 32.4944 27.5 32.5002C29.0271 32.5054 30.5039 31.9543 31.6542 30.9498C32.8044 29.9453 33.5495 28.5563 33.75 27.0424V27.0439Z" fill="currentColor" />
                            </svg>
                        </span>
                        <div class="mt-7">
                            <p class="text-sm text-white/80">Call me Mon-Fri 8am-6pm</p>
                            <a href="tel:5145832698" class="mt-3 text-lg font-semibold">514.583.2698</a>
                        </div>
                    </div>
                    <div class="text-white">
                        <span>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M35 15L22.7266 23.75H17.2734L5 15L20 5L35 15Z" fill="currentColor" />
                                <path d="M35.6938 13.9592L20.6938 3.95921C20.4883 3.82216 20.2469 3.74902 20 3.74902C19.7531 3.74902 19.5117 3.82216 19.3062 3.95921L4.30625 13.9592C4.13502 14.0735 3.99465 14.2282 3.89761 14.4098C3.80057 14.5913 3.74987 14.794 3.75 14.9998V31.2498C3.75 31.9129 4.01339 32.5488 4.48223 33.0176C4.95107 33.4864 5.58696 33.7498 6.25 33.7498H33.75C34.413 33.7498 35.0489 33.4864 35.5178 33.0176C35.9866 32.5488 36.25 31.9129 36.25 31.2498V14.9998C36.2501 14.794 36.1994 14.5913 36.1024 14.4098C36.0054 14.2282 35.865 14.0735 35.6938 13.9592ZM15.1125 23.7498L6.25 29.9998V17.4264L15.1125 23.7498ZM17.6703 24.9998H22.3297L31.1781 31.2498H8.82187L17.6703 24.9998ZM24.8875 23.7498L33.75 17.4264V29.9998L24.8875 23.7498ZM20 6.5014L32.7984 15.0342L22.3297 22.4998H17.6734L7.20469 15.0342L20 6.5014Z" fill="currentColor" />
                            </svg>
                        </span>
                        <div class="mt-7">
                            <p class="text-sm text-white/80">Write me an email.</p>
                            <a href="mailto:erezmichael01@gmail.com" class="mt-3 text-lg font-semibold">erezmichael01@gmail.com</a>
                        </div>
                    </div>
                    <div class="text-white">
                        <span>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M20 3.75C16.6848 3.75 13.5054 5.06696 11.1612 7.41117C8.81696 9.75537 7.5 12.9348 7.5 16.25C7.5 27.5 20 36.25 20 36.25C20 36.25 32.5 27.5 32.5 16.25C32.5 12.9348 31.183 9.75537 28.8388 7.41117C26.4946 5.06696 23.3152 3.75 20 3.75ZM20 21.25C19.0111 21.25 18.0444 20.9568 17.2221 20.4073C16.3999 19.8579 15.759 19.077 15.3806 18.1634C15.0022 17.2498 14.9031 16.2445 15.0961 15.2745C15.289 14.3046 15.7652 13.4137 16.4645 12.7145C17.1637 12.0152 18.0546 11.539 19.0245 11.3461C19.9945 11.1531 20.9998 11.2522 21.9134 11.6306C22.827 12.009 23.6079 12.6499 24.1573 13.4721C24.7068 14.2944 25 15.2611 25 16.25C25 17.5761 24.4732 18.8479 23.5355 19.7855C22.5979 20.7232 21.3261 21.25 20 21.25Z" fill="currentColor" />
                                <path d="M20 10C18.7639 10 17.5555 10.3666 16.5277 11.0533C15.4999 11.7401 14.6988 12.7162 14.2258 13.8582C13.7527 15.0003 13.6289 16.2569 13.8701 17.4693C14.1112 18.6817 14.7065 19.7953 15.5806 20.6694C16.4547 21.5435 17.5683 22.1387 18.7807 22.3799C19.9931 22.6211 21.2497 22.4973 22.3918 22.0242C23.5338 21.5512 24.5099 20.7501 25.1967 19.7223C25.8834 18.6945 26.25 17.4861 26.25 16.25C26.25 14.5924 25.5915 13.0027 24.4194 11.8306C23.2473 10.6585 21.6576 10 20 10ZM20 20C19.2583 20 18.5333 19.7801 17.9166 19.368C17.2999 18.956 16.8193 18.3703 16.5355 17.6851C16.2516 16.9998 16.1774 16.2458 16.3221 15.5184C16.4667 14.791 16.8239 14.1228 17.3483 13.5983C17.8728 13.0739 18.541 12.7167 19.2684 12.5721C19.9958 12.4274 20.7498 12.5016 21.4351 12.7854C22.1203 13.0693 22.706 13.5499 23.118 14.1666C23.5301 14.7833 23.75 15.5083 23.75 16.25C23.75 17.2446 23.3549 18.1984 22.6517 18.9016C21.9484 19.6049 20.9946 20 20 20ZM20 2.5C16.3545 2.50414 12.8596 3.95412 10.2818 6.53185C7.70412 9.10958 6.25414 12.6045 6.25 16.25C6.25 21.1562 8.51719 26.3562 12.8125 31.2891C14.7425 33.5181 16.9148 35.5252 19.2891 37.2734C19.4992 37.4207 19.7496 37.4996 20.0062 37.4996C20.2629 37.4996 20.5133 37.4207 20.7234 37.2734C23.0934 35.5245 25.2614 33.5174 27.1875 31.2891C31.4766 26.3562 33.75 21.1562 33.75 16.25C33.7459 12.6045 32.2959 9.10958 29.7182 6.53185C27.1404 3.95412 23.6455 2.50414 20 2.5ZM20 34.6875C17.4172 32.6562 8.75 25.1953 8.75 16.25C8.75 13.2663 9.93526 10.4048 12.045 8.29505C14.1548 6.18526 17.0163 5 20 5C22.9837 5 25.8452 6.18526 27.955 8.29505C30.0647 10.4048 31.25 13.2663 31.25 16.25C31.25 25.1922 22.5828 32.6562 20 34.6875Z" fill="currentColor" />
                            </svg>
                        </span>
                        <div class="mt-7">
                            <p class="text-sm text-white/80">Proudly located in the South West of Montreal </p>
                            <a href="https://maps.app.goo.gl/hwrzSByCuvByCjpk6" target="_blank" rel="noopener noreferrer" class="mt-3 text-lg font-semibold">Montréal, Québec, Canada</a>
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
                                    <a href="https://www.linkedin.com/in/erezmichael/" target="_blank" rel="noopener noreferrer">
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
    padding: 5px; /* Adjust as needed */
    border-radius: 8px; /* Optional: for rounded corners */
    background: linear-gradient(to bottom, #6a0dad, #1a1a2e); /* Purple to dark gradient */
}

</style>