<script setup>
import { ref } from 'vue';
import FilterContinents from "@/components/FilterContinents.vue";

const emit = defineEmits(['update-search']);
const search = ref('');
const showFilter = ref(true);
const onInput = () => {
  emit('update-search', search.value);
};
const hideFilterWithDelay = () => {
  // Utiliza un pequeño retraso para evitar que el componente se cierre
  // inmediatamente al cambiar el foco hacia el filtro
  setTimeout(() => {
    showFilter.value = false;
  }, 200);
};
</script>

<template>
  <div class="container_searchbar flex flex-column align-items-center">
    <p-toolbar class="container_toolbar">
      <template #start>
        <div class="card flex flex-column gap-2">
          <span>Country</span>
          <input v-model="search" @input="onInput" placeholder="Write the country than you want to see" />
        </div>
      </template>
      <template #end>
        <div class="flex align-items-center">
          <p_button class="button" label="Search" icon="pi pi-search"></p_button>
        </div>
      </template>
    </p-toolbar>
    <div class="flex justify-content-center">
      <FilterContinents v-if="showFilter" @close="showFilter = false" />
    </div>
  </div>
</template>

<style scoped>
.container_searchbar {
  width: 100%;
}
.container_toolbar {
  border-radius: 5rem;
}

.card {
  margin-left: 1.5rem;
  flex-grow: 1;
}
.button {
  width: 150px;
  height: 50px;
  margin-right: 0.5rem;
  border-radius: 5rem;
}
input:focus {
  border-bottom: 1px solid #007BFF;
}
input {
  width: 500px;
  border: none;
  background-color: transparent;
  font-size: 1rem;
}
input:focus {
  outline: none;
}
</style>