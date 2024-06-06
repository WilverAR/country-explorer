<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update-continent']);
const continents = ref([
  { name: 'Europe', image: 'https://firebasestorage.googleapis.com/v0/b/country-explorer-a5f57.appspot.com/o/europa.webp?alt=media&token=175b204c-644b-4f9d-a527-592bc405ab2a', selected: false },
  { name: 'Asia', image: 'https://firebasestorage.googleapis.com/v0/b/country-explorer-a5f57.appspot.com/o/asia.webp?alt=media&token=9052d9da-bae7-418e-919b-925a76e2a498', selected: false },
  { name: 'Oceania', image: 'https://firebasestorage.googleapis.com/v0/b/country-explorer-a5f57.appspot.com/o/oceania.webp?alt=media&token=cbade8b0-a0eb-4b30-9f83-5fc694177607', selected: false },
  { name: 'Africa', image: 'https://firebasestorage.googleapis.com/v0/b/country-explorer-a5f57.appspot.com/o/africa.webp?alt=media&token=e37612ce-7712-4cb7-9fa7-36464de023a4', selected: false },
  { name: 'North America', image: 'https://firebasestorage.googleapis.com/v0/b/country-explorer-a5f57.appspot.com/o/america.webp?alt=media&token=8109d9d9-becb-45d0-ab2c-9d2e010f3ad7', selected: false },
]);
const selectedContinents = ref([]);

const toggleContinent = (continent) => {
  continent.selected = !continent.selected;
  if (continent.selected) {
    selectedContinents.value.push(continent.name);
  }
  else {
    const index = selectedContinents.value.indexOf(continent.name);
    if (index > -1) {
      selectedContinents.value.splice(index, 1);
    }
  }
  emit('update-continent', selectedContinents.value);
};
const clearFilter = () => {
  continents.value.forEach(continent => {
    continent.selected = false;
  });
  selectedContinents.value = [];
  emit('update-continent', selectedContinents.value);
};
</script>

<template>
  <div class="container-filter">
    <div class="filter-header">
      <span>{{$t('home.continentFilter.filterForContinents')}}</span>
      <p-button @click="clearFilter" class="clear-button">{{$t('home.continentFilter.clear')}}</p-button>
    </div>

    <div class="continents-content flex flex-wrap gap-1">
      <div class="continent-item flex flex-column" v-for="continent in continents" :key="continent.name" :class="{ 'selected': continent.selected }" @click="toggleContinent(continent)">
        <img class="continent-image" :src="continent.image" :alt="continent.name" width="125" height="125"/>
        <span>{{ continent.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-filter {
  width: 100%;
  border-radius: 2rem;
}
.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .clear-button {
    background: none;
    border: none;
    color: green;
    cursor: pointer;
  }
}
.continents-content {
  .continent-item {
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .continent-image:hover {
    border: 1px solid rgba(3, 28, 38, 0.8);
  }
}
.continent-item.selected {
  background: rgba(3, 28, 38, 0.5);
  color: whitesmoke;
}
.continent-image {
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

@media screen and (max-width: 425px) {
  .continent-image {
    width: 50px;
    height: 50px;
  }
}
</style>