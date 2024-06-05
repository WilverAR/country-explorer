<script setup>
import {defineProps} from 'vue';
const { country, imageUrl } = defineProps(['country', 'imageUrl']);
</script>

<template>
  <p-dialog  closeOnEscape modal header="Country Details" :style="{ width: '22.5rem' }" :pt="{
                root: 'border-none',
                mask: {
                    style: 'backdrop-filter: blur(2px)'
                }
            }">
    <div class="profile-card">
      <img :src="imageUrl" alt="Country Image" class="profile-image" />
      <div class="profile-info">
        <div class="flag-container">
          <img :src="`https://flagsapi.com/${country.code}/flat/64.png`" alt="Country Flag" class="country-flag" />
          <div>
            <h3>{{ country.name }}</h3>
            <p>{{ country.continent.name }}</p>
          </div>
        </div>
        <p><strong>{{$t('home.countryDetail.capital')}}:</strong> {{ country.capital }}</p>
        <div class="languages">
          <p v-for="languages in country.languages" :key="languages"><strong>{{$t('home.countryDetail.languages')}}:</strong> {{ languages.name }} </p>
        </div>
        <p><strong>{{$t('home.countryDetail.population')}}:</strong> {{ country.capital }}</p>
        <p><strong>{{$t('home.countryDetail.currency')}}:</strong> {{ country.currencies[0] }}</p>
        <p><strong>{{$t('home.countryDetail.region')}}:</strong></p>
      </div>
    </div>
  </p-dialog>
</template>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
}

.profile-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.flag-container {
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
}

.country-flag {
  width: 30px;
  height: auto;
}

h3 {
  margin: 0;
  color: #007bff;
}

p {
  margin: 5px 0;
}

select.region-select {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>