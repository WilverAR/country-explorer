<script setup>
import { RouterView } from 'vue-router'
import SideBar from "@/components/Sidebar.vue";
</script>

<template>
  <div class="container-app">
    <SideBar></SideBar>
    <main>
      <RouterView />
      <footer>
        <p>&copy;{{$t('footer.copyright')}}</p>
        <p>{{$t('footer.developed')}}</p>
      </footer>
    </main>
  </div>
</template>

<style scoped>
.container-app {
  width: 100%;
  height: 100vh;
  display: flex;
}

footer {
  width: 100%;
  padding: var(--gap);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid #d5d5d5;
  margin: 0 auto;
  text-align: center;

  p {
    margin: 0.5rem 0;
    text-align: center;
  }
  a {
    color: #007bff;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
}
</style>
