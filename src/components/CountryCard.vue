<script setup>
import { ref, onMounted } from 'vue';
import { ApiFakeService } from "@/service/api.service.js";
import CountryDetail from "@/components/CountryDetail.vue";

const API = new ApiFakeService();
const props = defineProps({
  country: Object
});
const visible = ref(false);
const imageUrl = ref('');
const imageFlag = ref('');
const defaultImageUrl = ref('https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg');
const defaultFlagUrl = ref('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/2560px-No_flag.svg.png');

const loading = ref(true);

onMounted(async () => {
  try {
    const response = await API.getImageUrl(props.country.name);
    ({small: imageUrl.value} = response.data.results[0].urls);
    imageFlag.value = `https://flagsapi.com/${props.country.code}/flat/64.png`;

  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading" class="container-card">
    <p-skeleton width="100%" height="100%" style="border-radius: 2rem;" />
  </div>
  <div v-else class="container-card" @click="visible = true" >
      <div class="country-image">
        <p-image image-class="img" :src="imageUrl" @error="imageUrl = defaultImageUrl" alt="Image of the country" width="100%" height="250"/>
      </div>
      <div class="country-content flex gap-3">
        <p-image image-class="img" :src="imageFlag" @error="imageFlag = defaultFlagUrl" alt="Image of the flag" width="100" height="100"/>
        <div class="flex flex-column justify-content-center">
          <h3 class="country-name">{{ country.name }}</h3>
          <p class="country-continent">{{ country.continent.name }}</p>
        </div>
      </div>
  </div>
  <CountryDetail v-model:visible="visible" :key="country.code" :country="country" :imageUrl="imageUrl" :imageFlag="imageFlag" />
</template>

<style scoped>
.container-card {
  background: rgba(255, 255, 255, 0.8);
  flex-grow: 1;
  width: 350px;
  height: 395px;
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
}

.country-content {
  padding: 1rem;
  max-height: min-content;
}
</style>