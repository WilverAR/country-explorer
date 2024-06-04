<script setup lang="ts">
//import {useSidebarStore} from "@/stores/sidebar";

//const store = useSidebarStore();

</script>

<template>
  <div class="sidebar flex flex-column gap-2 p-3" v-if="true">
    <div class="flex align-items-center justify-content-center flex-shrink-0">
      <p-avatar image="src/assets/logo.svg" shape="circle" size="large" style="width: 6rem; height: auto;" />
    </div>

    <router-link to="/home" class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-home mr-2"></i>
      <span class="font-medium">Home</span>
    </router-link>
    <router-link to="/view_one" class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-bookmark mr-2"></i>
      <span class="font-medium">View One</span>
    </router-link>
    <router-link to="/view_two" class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-bookmark mr-2"></i>
      <span class="font-medium">View Two</span>
    </router-link>
  </div>
</template>

<style scoped>
.sidebar {
  width: 20rem;
  height: 100vh;
  background-color: var(--surface-card);
  z-index: 100;
}

.router-link-active {
  background: transparent !important;
  i, span {
    color: orange !important;
  }
}
@media screen and (max-width: 768px) {
  .sidebar {
    position: fixed;
  }
}
</style>


<!--<script setup>

</script>

<template>
  <div class="container_sidebar">
    <div class="logo">
      <img src="" alt="primevue" width="350px" height="150px"/>
    </div>
    <ul>
      <router-link to="/home">
        <li><PV_Button class="pv_button"><i class="pi pi-home"></i>Home</PV_Button></li>
      </router-link>
      <router-link to="/view_one">
        <li><PV_Button class="pv_button"><i class="pi pi-users"></i>View One</PV_Button></li>
      </router-link>
      <router-link to="/view_two">
        <li><PV_Button class="pv_button"><i class="pi pi-cog"></i>View Two</PV_Button></li>
      </router-link>
    </ul>
  </div>
</template>

<style scoped>
.container_sidebar {
  width: 250px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
-->