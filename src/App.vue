<script setup>
import { RouterView } from 'vue-router'
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="container_app">
    <SideBar></SideBar>
    <main>
      <RouterView />
      <footer>FOOOOOTERRRR</footer>
    </main>
  </div>
</template>

<style scoped>
.container_app {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>
