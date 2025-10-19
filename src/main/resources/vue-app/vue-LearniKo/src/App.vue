<template>
  <div :class="{ 'dark-mode': isDarkMode }">
      <Navigation />
      <router-view></router-view>
      <Footer />
  </div>
</template>

<script setup>
import {onMounted } from 'vue'
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

function setNightMode() {
  const currentHour = new Date().getHours();
  const isNightTime = currentHour >= 21 || currentHour < 6;
  if (isNightTime) {
    document.body.classList.add('dark-mode');
  }
}
onMounted(setNightMode);
</script>
