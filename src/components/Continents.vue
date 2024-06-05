<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update-continent']);
const continents = ref([
  { name: 'Europe', image: 'src/assets/images/europa.webp', selected: false },
  { name: 'Asia', image: 'src/assets/images/asia.webp', selected: false },
  { name: 'Oceania', image: 'src/assets/images/oceania.webp', selected: false },
  { name: 'Africa', image: 'src/assets/images/africa.webp', selected: false },
  { name: 'North America', image: 'src/assets/images/america.webp', selected: false },
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
<!--CHANGE THE CODE!!!-->
<template>
  <div class="filter-container">
    <div class="filter-header">
      <span>Filter for continents</span>
      <p_button @click="clearFilter" class="clear-button">Clear</p_button>
    </div>

    <div class="continents-content flex flex-wrap">
      <div class="continent-item flex flex-column" v-for="continent in continents" :key="continent.name" :class="{ 'selected': continent.selected }" @click="toggleContinent(continent)">
        <img class="continent-image" :src="continent.image" :alt="continent.name" width="125" height="125"/>
        <span>{{ continent.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
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