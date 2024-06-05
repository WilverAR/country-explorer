<script setup lang="ts">

</script>

<template>
  <div class="sidebar flex flex-column gap-3 p-3" v-if="true">
    <div class="flex align-items-center justify-content-center flex-shrink-0">
      <p-avatar image="src/assets/logo.svg" shape="circle" size="large" style="width: 6rem; height: auto;" />
    </div>
    <router-link to="/home" class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-home mr-3"></i>
      <span class="text">Home</span>
    </router-link>
    <router-link to="/view_one" class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user mr-3"></i>
      <span class="text">User</span>
    </router-link>
    <router-link to="/view_two" class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-cog mr-3"></i>
      <span class="text">Settings</span>
    </router-link>
  </div>
</template>

<style scoped>
.sidebar {
  width: 20rem;
  height: 100vh;
  background: rgba(3, 28, 38, 0.5);
  overflow: hidden;
  transition: width 0.3s;
}
.sidebar:hover {
  width: 250px; /* Ancho original del sidebar al hacer hover */
}

.router-link-active {
  background: transparent !important;
  i, span {
    color: whitesmoke !important;
  }
}
@media screen and (max-width: 768px) {
  .sidebar {
    width: 5rem;
  }
  .text {
    display: none;
  }
  .sidebar:hover .text {
    display: block;
  }
}
</style>