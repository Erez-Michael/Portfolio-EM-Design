<template>
  <div
    :style="{ maxWidth: maxWidth }"
    class="text-warning bg-warning/[14%] w-fit flex justify-start -rotate-6 shadow-xl rounded-tl-xl rounded-br-xl rounded-tr-xl border border-purple/[9%]"
  >
    <p class="font-semibold text-3xl lg:text-3xl inline-block p-2.5">
      <span :class="{ 'text-outline': !isInverted }">{{ text1 }}</span>
      <span :class="{ 'text-outline': isInverted }">{{ text2 }}</span>
      <span v-if="extraText">{{ extraText }}</span>
    </p>
  </div>
</template>

<script setup>
defineProps({
  text1: {
    type: String,
  },
  text2: {
    type: String,
  },
  extraText: {
    type: String,
    default: '',
  },
  isInverted: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: String,
    default: '220px', // Default max-width if not provided
  },
});
</script>

<style scoped>
.text-outline {
  -webkit-text-stroke: 0.75px black;
}
</style>
