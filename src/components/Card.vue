<script setup>
defineProps({
  country: Object
});
</script>

<template>
  <div class="container_card">
    <div class="country_image">

    </div>
    <div class="country_content">
      <img src="" alt="" />
      <h2 class="country_name">{{ country.name }}</h2>
      <p class="country_continent">{{ country.continent.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.container_card {
  background: blue;
  width: 400px;
}
</style>