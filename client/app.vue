<template>
  <div>
      <Head>
        <Title>{{ title }} - Portfolio</Title>
        <link rel='icon' type='image/png' href='/favicon.png'>
      </Head>
      <NuxtPage />
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    default: "EM Design"
  }
});
</script>
