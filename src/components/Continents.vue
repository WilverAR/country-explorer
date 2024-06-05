<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update-continent']);
const continents = ref([
  { name: 'Europe', image: 'src/assets/images/europa.webp', selected: false },
  { name: 'North America', image: 'src/assets/images/america.webp', selected: false },
  { name: 'Asia', image: 'src/assets/images/asia.webp', selected: false },
  { name: 'Oceania', image: 'src/assets/images/oceania.webp', selected: false },
  { name: 'Africa', image: 'src/assets/images/africa.webp', selected: false },
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
  console.log(selectedContinents.value);
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
  <div class="filter-container">
    <div class="filter-header">
      <span>Filter for continents</span>
      <p_button @click="clearFilter" class="clear-button">Clear</p_button>
    </div>
    <div class="continents-grid">
      <div class="continent-card flex flex-wrap justify-content-center" v-for="continent in continents" :key="continent.name" :class="{ 'selected': continent.selected }" @click="toggleContinent(continent)">
        <img class="continent-image" :src="continent.image" :alt="continent.name" width="125" height="125"/>
        <span>{{ continent.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  width: 35%;
  position: fixed;
  background: whitesmoke;
  border: 1px solid #ccc;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.clear-button {
  background: none;
  border: none;
  color: green;
  cursor: pointer;
}

.continents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.continent-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.continent-card.selected {
  background: rgba(3, 28, 38, 0.5);
  color: whitesmoke;
}

.continent-image {
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>