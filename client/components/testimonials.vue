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
    project: "Ludmer Engineering - Quebec",
    clientName: "John Doe",
    company: "Ludmer Engineering",
    feedback:
      "The team provided a highly efficient design solution that helped us streamline our processes significantly. Their attention to detail and understanding of our needs were exceptional.",
    image: "",
  },
  {
    project: "Duchesnay - Canada",
    clientName: "Emily Smith",
    company: "Duchesnay",
    feedback:
      "Working with them on the fertility app was an empowering experience. They understood our vision and translated it into a beautiful, user-friendly app that our users love.",
    image: "",
  },
  {
    project: "Analog Pharma - Canada",
    clientName: "Michael Johnson",
    company: "Analog Pharma",
    feedback:
      "The project surpassed all our expectations. The creativity and strategy involved in creating this application were unparalleled. A brilliant job by a brilliant team!",
    image: "",
  },
  {
    project: "Sefon Surfboards - Peru",
    clientName: "Carlos Ruiz",
    company: "Sefon Surfboards",
    feedback:
      "Our surfboards never looked better online! The website truly captures the spirit of our brand and has been a huge hit with our customers. Highly recommended!",
    image: "",
  },
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
            <div class="shrink-0">
              <img :src="testimonial.image" :alt="testimonial.clientName" />
            </div>
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
