<script setup>
import { RouterView } from 'vue-router'
import Sidebar from "@/components/SideBar.vue";
</script>

<template>
  <div class="container_app">
    <Sidebar></Sidebar>
    <main>
      <RouterView />
      <footer>gaaaa</footer>
    </main>
  </div>
</template>

<style scoped>
.container_app {
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 1rem;
}
</style>
