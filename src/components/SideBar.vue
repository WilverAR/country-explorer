<script setup lang="ts">

</script>

<template>
  <div class="sidebar flex flex-column align-content-center gap-3 p-3">
    <div class="flex align-items-center justify-content-center flex-shrink-0">
      <p-avatar image="src/assets/logo.svg" shape="circle" size="large" style="max-width: 6rem; height: auto;" />
    </div>
    <router-link to="/home" class="view flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-home"></i>
      <span class="text ml-3">Home</span>
    </router-link>
    <router-link to="/view_one" class="view flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user"></i>
      <span class="text ml-3">User</span>
    </router-link>
    <router-link to="/view_two" class="view flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-cog"></i>
      <span class="text ml-3">Settings</span>
    </router-link>
  </div>
</template>

<style scoped>
.sidebar {
  width: 5rem;
  height: 100vh;
  background: rgba(3, 28, 38, 0.5);
  overflow: hidden;
  transition: width 0.3s;

  .view {
    display: flex;
    justify-content: center;
  }
}
.sidebar:hover {
  width: 250px; /* Ancho original del sidebar al hacer hover */

  .view {
    justify-content: flex-start;
  }
}
.text {
  display: none;
}
.sidebar:hover .text {
  display: block;
}

.router-link-active {
  background: transparent !important;
  i, span {
    color: whitesmoke !important;
  }
}
@media screen and (max-width: 768px) {
  .sidebar {
    width: 3.5rem;
    padding: 1.5rem 0 0 0 !important;
  }
  .sidebar:hover {
    width: 5rem;

    .view {
      justify-content: center;
    }
  }
  .sidebar:hover .text {
    display: none;
  }
}
</style>