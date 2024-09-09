<template>
  <div>
    <NuxtLayout>
      <Head>
        <Title>{{ title }} - Portfolio</Title>
        <link rel='icon' type='image/png' href='/favicon.png'>
      </Head>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  title: {
    type: String,
    default: "EM Design"
  }
});
</script>
