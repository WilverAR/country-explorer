<script setup>
import { ref } from 'vue';

const continents = ref([
  { name: 'Europa', image: 'path/to/europe-image.png', selected: false },
  { name: 'América', image: 'path/to/america-image.png', selected: false },
  { name: 'Asia', image: 'path/to/asia-image.png', selected: false },
  { name: 'Oceanía', image: 'path/to/oceania-image.png', selected: false },
  { name: 'África', image: 'path/to/africa-image.png', selected: false },
]);

const toggleContinent = (continent) => {
  continent.selected = !continent.selected;
};

const clearFilter = () => {
  continents.value.forEach(continent => {
    continent.selected = false;
  });
};
</script>

<template>
  <div class="filter-container">
    <div class="filter-header">
      <span>Filtrar por continentes</span>
      <p_button @click="clearFilter" class="clear-button">Limpiar</p_button>
    </div>
    <div class="continents-grid">
      <div
          v-for="continent in continents"
          :key="continent.name"
          class="continent-card"
          :class="{ 'selected': continent.selected }"
          @click="toggleContinent(continent)"
      >
        <img :src="continent.image" :alt="continent.name" class="continent-image"/>
        <span>{{ continent.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  width: 35%;
  position: fixed;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #ccc;
  border-radius: 1rem;
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
  color: #007BFF;
  cursor: pointer;
}

.continents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
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
  background-color: #007BFF;
  color: white;
}

.continent-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>