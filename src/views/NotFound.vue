<script setup>

</script>

<template>
  <div class="container-notFound">
    <h1>{{$t('notFound.title')}}</h1>
    <h3>{{$t('notFound.requestedUrl')}}<b>"/{{ route }}"</b>{{$t('notFound.message')}}</h3>
    <router-link to="/home">
      <p-button label="Go back to Home" severity="success"></p-button>
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