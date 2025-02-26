<script lang="ts" setup>
import { ref } from 'vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

const navigationOptions = {
  nextEl: ".client-review .swiper-btn-next",
  prevEl: ".client-review .swiper-btn-prev",
};
const modules = ref([Autoplay, Pagination, Navigation, Autoplay]);

// Define Swiper instance
const swiperInstance = ref<Swiper | null>(null);

// Function to go to previous slide
const prevSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

// Function to go to next slide
const nextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

// Testimonial data
const testimonials = [
  {
    project: "Duchesnay - Canada",
    clientName: "Duchesnay - Canada",
    company: "Duchesnay",
    feedback:
      "EM Design brought our vision to life with a beautifully designed, user-friendly app that has significantly improved engagement with our audience. Their attention to detail and understanding of our needs were outstanding.",
    image: "",
  },  
  {
    project: "Ludmer Engineering - Quebec",
    clientName: "Mordechai Ludmer",
    company: "Ludmer Engineering",
    feedback:
      "EM Design provided a streamlined design solution tailored to our requirements, making our operations more efficient and effective. The team's professionalism and creativity were evident in every step of the process.",
    image: "",
  },
  {
    project: "Analog Pharma - Canada",
    clientName: "Analog Pharma - Canada",
    company: "Analog Pharma",
    feedback:
      "EM Design's creative approach and strategic execution exceeded all expectations, delivering a final product that has elevated our brand and resonated with our target audience. A truly impressive collaboration!",
    image: "",
  }
];



</script>

<template>
  <!-- Start Testimonial -->
  <section class="pt-36 md:py-36 client-review bg-gradient-to-b from-purple/[10%] to-white dark:bg-gradient-to-b dark:from-transparent dark:via-purple/[18%] dark:to-transparent" id="testimonials">
    <div class="container">
      <div class="grid grid-cols-1">
        <div class="items-end justify-between lg:flex space-y-7 lg:space-y-0" data-aos="fade-up">
          <div>
            <div class="inline-block">
              <BaseTitle text1="Testimonials" marginBottom="50px"/>
            </div>
            <h2 class="font-semibold text-[26px]/normal mt-7">Illuminating Testimonials from Satisfied Clients</h2>
          </div>
          <div class="flex items-center justify-center gap-5 swiper-btn text-gray">
            <button @click="prevSlide" class="swiper-btn-prev border-2 h-[42px] w-[42px] flex items-center justify-center border-gray/[16%] hover:text-purple duration-300">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.94995 2.44995L2.39995 6.99995L6.94995 11.5499" stroke="currentColor" stroke-width="2.6" stroke-linecap="square" />
              </svg>
            </button>
            <button @click="nextSlide" class="swiper-btn-next border-2 h-[42px] w-[42px] flex items-center justify-center border-gray/[16%] hover:text-purple duration-300">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.05005 2.44995L6.60005 6.99995L2.05005 11.5499" stroke="currentColor" stroke-width="2.6" stroke-linecap="square" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Swiper
        :modules="modules"
        :navigation="navigationOptions"
        spaceBetween="30"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 }
        }"
        class="client-review-slider mt-14"
        dir="ltr"
        ref="swiper"
        :autoplay="{ delay: 3000 }"
        :loop="true"
      >
        <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="border-2 border-gray/[14%] md:flex-row flex-col p-5 flex items-start gap-7">
            <!-- <div class="shrink-0">
              <img :src="testimonial.image" :alt="testimonial.clientName" />
            </div> -->
            <div>
              <p class="font-medium leading-8 italic">"{{ testimonial.feedback }}"</p>
              <p class="mt-8 font-semibold">{{ testimonial.clientName }}</p>
              <p class="mt-2 text-purple">{{ testimonial.company }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  <!-- End Testimonial -->
</template>
