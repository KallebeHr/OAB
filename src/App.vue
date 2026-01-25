<template>
  <v-app>
    <!-- <div v-if="!isLoaded"> -->
      <PreLoader />
    <!-- </div> -->
    <!-- <div v-else> -->
      <NavHeader/>
      <router-view />
    <!-- </div> -->
    <VLibras position="right" />
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PreLoader from './components/PreLoader.vue';
const isLoaded = ref(false);

onMounted(() => {
  const markLoaded = () => {
    setTimeout(() => (isLoaded.value = true), 3000);
  };

  if (document.readyState === 'complete') {
    markLoaded();
  } else {
    const listener = () => {
      if (document.readyState === 'complete') {
        markLoaded();
        document.removeEventListener('readystatechange', listener);
      }
    };
    document.addEventListener('readystatechange', listener);
  }
});
</script>
