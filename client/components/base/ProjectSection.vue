<template>
  <div class="relative flex flex-wrap lg:flex-nowrap" data-aos="fade-up">
    <!-- Image Section -->
    <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1 relative">
      <!-- Diagonal Banner -->
      <div v-if="inDevelopment" class="absolute right-0 bottom-0 lg:bottom-0 lg:left-0 lg:right-auto bg-red-900 text-white text-[12px] rounded-tl-2xl rounded-br-2xl lg:text-2xl font-bold px-4 py-1 z-10">
        In development
      </div>

      <!-- Text only for smaller screens (mobile) -->
      <p :style="{ color: textColor }" class="text-[22px] font-bold pb-4 lg:hidden">{{ title }}</p>
      <a :href="projectLink" target="_blank" rel="noopener noreferrer">
        <img :src="imageUrl" class="sm:max-w-2/3 2xl:max-w-max object-cover w-full h-auto mx-auto" :alt="title">
      </a>
    </div>

    <!-- Text Content Section -->
    <div class="order-2 lg:order-1 lg:flex-1 flex flex-col justify-between gap-y-2 lg:gap-y-0">
      <!-- Text for larger screens -->
      <p :style="{ color: textColor }" class="text-[22px] font-bold hidden lg:block">{{ title }}</p>
      <p class="font-bold text-2xl/tight md:text-3xl/tight lg:text-[40px]/tight mt-4 max-w-[770px]">{{ description }}</p>
      <p class="text-gray w-full lg:max-w-[500px] 2xl:max-w-[700px] mt-6">{{ text }}</p>
      <!-- Button -->
      <div class="flex mt-8">
        <a :href="projectLink" target="_blank" rel="noopener noreferrer"
          class="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 duration-300 hover:bg-[var(--hover-color)] hover:text-white dark:border-white/[14%] dark:hover:bg-[var(--hover-color)] dark:hover:text-dark"
          :style="{ '--hover-color': hoverColor }">
          View Project
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>


  
<script>
export default {
  name: 'ProjectSection',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    projectLink: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: true
    },
    hoverColor: {
      type: String,
      required: true
    },
    inDevelopment: {
      type: Boolean,
      default: false
    }
  }
}
</script>

 
  