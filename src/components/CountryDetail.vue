<script setup>
const { country, imageUrl, imageFlag } = defineProps(['country', 'imageUrl', 'imageFlag']);
</script>

<template>
  <p-dialog  closeOnEscape modal header="Country Details" :style="{ width: '22.5rem' }"
             :pt="{ root: 'border-none', mask: { style: 'backdrop-filter: blur(2px)' } }"
  >
    <div class="profile-card">
      <p-image image-class="img-profile-image" :src="imageUrl" alt="Country Image" class="profile-image" width="100%" height="250px" preview/>
      <div class="profile-info">
        <div class="flag-container">
          <p-image image-class="img-country-flag" :src="imageFlag" alt="Country Flag" class="country-flag" width="75px"/>
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