<script setup>
import { ref, onMounted, defineProps } from 'vue';
import { ApiFakeService } from "@/service/api.service.js";
import CountryDetail from "@/components/CountryDetail.vue";

const API = new ApiFakeService();
const props = defineProps({
  country: Object
});
const visible = ref(false);
const imageUrl = ref('');
const defaultUrl = ref('https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000');

onMounted(() => {
  API.getImageUrl(props.country.name).then((response) => {
    imageUrl.value = response.data.results[0]?.urls?.small || defaultUrl.value;
  });
});
</script>

<template>
  <div class="container-card" @click="visible = true" >
    <div class="country-image">
      <img :src="imageUrl" alt="Image of the country" height="250"/>
    </div>
    <div class="country-content flex gap-3">
      <img :src="`https://flagsapi.com/${country.code}/flat/64.png`" alt="Image of the flag" width="100" height="100"/>
      <div class="flex flex-column justify-content-center">
        <h3 class="country-name">{{ country.name }}</h3>
        <p class="country-continent">{{ country.continent.name }}</p>
      </div>
    </div>
  </div>
  <CountryDetail v-model:visible="visible" :key="country.code" :country="country" :imageUrl="imageUrl" />
</template>

<style scoped>
.container-card {
  background: rgba(255, 255, 255, 0.8);
  flex-grow: 1;
  width: 350px;
  border-radius: 2rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}
.container-card:hover {
  background: rgba(3, 28, 38, 0.6);
  color: whitesmoke;
  cursor: pointer;
}

.country-image {
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.country-content {
  padding: 1rem;
  max-height: min-content;
}
</style>