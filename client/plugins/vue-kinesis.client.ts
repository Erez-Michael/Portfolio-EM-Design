// plugins/vue-kinesis.client.ts
import { defineNuxtPlugin } from '#app';
import VueKinesis from 'vue-kinesis';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueKinesis);
});
