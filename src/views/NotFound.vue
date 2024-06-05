<script setup>

</script>

<template>
  <div class="container-notFound">
    <h1>404: Page not found</h1>
    <h3>The requested URL <b>"/{{ route }}"</b> was not found on this server.</h3>
    <router-link to="/home">
      <p_button label="Go back to Home" severity="success"></p_button>
    </router-link>
  </div>
</template>

<style scoped>
.container-notFound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: black;
  gap: 1rem;

  :is(h1) {
    font-size: 5rem;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
  :is(h3) {
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
}
@media screen and (max-width: 768px) {
  .container-notFound {
    :is(h1) {
      font-size: 3rem;
    }
    :is(h3) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
@media screen and (max-width: 425px) {
  .container-notFound {
    :is(h1) {
      font-size: 2rem;
    }
  }
}
</style>