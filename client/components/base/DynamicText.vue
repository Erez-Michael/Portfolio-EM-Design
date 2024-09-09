<template>
    <div>  
        <h1 class="mt-6 md:mt-12 font-bold text-3xl/normal md:text-[50px]/normal flex items-center">
    <span class="inline-block w-[120px] text-center">{{ currentWord }}</span> Web Developer
  </h1>
    </div>
  </template>
  
 
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Words to rotate
const words = ['passionate', 'creative', 'dedicated', 'friendly'];
const currentWord = ref(words[0]); // Initialize with the first word
let wordIndex = 0; // Start index for the rotation
let intervalId; // To store the interval ID

// Function to start the rotation
const startWordRotation = () => {
  intervalId = setInterval(() => {
    wordIndex = (wordIndex + 1) % words.length; // Update the word index in a circular manner
    currentWord.value = words[wordIndex]; // Update the current word
  }, 2000); // Control the interval time (2000ms = 2 seconds)
};

// Function to stop the rotation
const stopWordRotation = () => {
  clearInterval(intervalId); // Clear the interval
};

// Start rotation on component mount and stop it on component unmount
onMounted(() => {
  startWordRotation();
});

onBeforeUnmount(() => {
  stopWordRotation();
});
</script>
  