<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update-continent']);
const continents = ref([
  { name: 'Europe', image: 'https://firebasestorage.googleapis.com/v0/b/country-explorer-a5f57.appspot.com/o/europa.png?alt=media&token=b67d126c-d18b-4fb5-a7de-28aad45b2bee', selected: false },
  { name: 'Asia', image: 'https://firebasestorage.googleapis.com/v0/b/country-explorer-a5f57.appspot.com/o/asia.png?alt=media&token=ac4dde0a-8363-40b6-ba06-df82ab613175', selected: false },
  { name: 'Oceania', image: 'https://firebasestorage.googleapis.com/v0/b/country-explorer-a5f57.appspot.com/o/oceania.png?alt=media&token=a7f00ab7-5fa8-467e-8526-333b21f130a6', selected: false },
  { name: 'Africa', image: 'https://firebasestorage.googleapis.com/v0/b/country-explorer-a5f57.appspot.com/o/africa.png?alt=media&token=35783790-6ce6-4e10-b2aa-4a4ab6ba9ec6', selected: false },
  { name: 'North America', image: 'https://firebasestorage.googleapis.com/v0/b/country-explorer-a5f57.appspot.com/o/america.png?alt=media&token=1e33593c-cf84-4066-91be-46312a13f7f2', selected: false },
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