<template>
  <div v-if="visible" class="fixed inset-0 bg-black flex justify-center items-center z-[9999]">
    <div class="w-full max-w-xs relative">
      <!-- Progress text container -->
      <div class="absolute inset-0 flex justify-center items-center -z-10">
        <!-- Dynamic text container with transform and transition -->
        <div :style="textContainerStyle" class="flex justify-center items-baseline text-center text-3xl text-dark font-bold font-sora">
          <p :style="textStyle">{{ numericalProgress }}</p>
          <p :style="textStyle">%</p>
        </div>
      </div>

      <!-- Progress bar container -->
      <div class="h-6 relative overflow-hidden pb-12 -z-50">
        <div class="rounded-full absolute bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 h-full"
          :style="progressStyle"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const visible = ref(true); // Controls visibility of the loading overlay
const numericalProgress = ref(0); // Tracks progress percentage

// Style references for inline styling
const textContainerStyle = ref({});
const textStyle = ref({
  color: 'transparent',
  background: '#0E100F',
  '-webkit-background-clip': 'text',
  'background-clip': 'text',
});
const progressStyle = ref({
  left: '0%',
  right: '100%',
  transition: 'none',
});

// Watch the numericalProgress and apply transformation if it reaches 70%
watch(numericalProgress, (newValue) => {
  if (newValue >= 70) {
    textContainerStyle.value = {
      transform: 'translateX(200px)',
      transition: 'transform 1s ease-in-out',
    };
  }
});

onMounted(() => {
  // Start the progress bar animation
  setTimeout(() => {
    progressStyle.value.transition = 'right 2.5s linear';
    progressStyle.value.right = '0%'; // Fill the progress bar

    setTimeout(() => {
      progressStyle.value.transition = 'left 2.5s linear';
      progressStyle.value.left = '100%'; // Empty the progress bar
    }, 2500);

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      numericalProgress.value = Math.min(Math.floor((elapsedTime / 5000) * 100), 100);

      if (elapsedTime >= 5000) {
        clearInterval(interval);
        visible.value = false; // Hide the loading overlay
        // Re-enable scrolling when loading is done
        document.documentElement.style.overflow = ''; // Restore scrolling for html element
        document.body.style.overflow = ''; // Restore scrolling for body element
      }
    }, 50);
  }, 500);
});
</script>

<style scoped>
html,
body {
  overflow: hidden; /* Initially hide the scrollbar */
}

.bg-black {
  background-color: #000;
}

.bg-gradient-to-r {
  background: linear-gradient(90deg, #ffc41f, #b78a0d);
}

.text-dark {
  color: #333;
}

.font-sora {
  font-family: 'Sora', sans-serif;
}
</style>

