<script setup>
import { ref } from 'vue';
import Continents from "@/components/Continents.vue";

const emit = defineEmits(['update-search', 'update-continent']);
const search = ref('');
let visible = ref(false);

const onVisible = (value) => {
  visible.value = value;
};
const updateContinent = (continent) => {
  console.log("como la es envio por aqui?: ", continent);
  emit('update-continent', continent);
};
const onInput = () => {
  emit('update-search', search.value);
};
</script>

<template>
  <div class="container_searchbar flex flex-column align-items-center">
    <p-toolbar class="container_toolbar">
      <template #start>
        <div class="card flex flex-column gap-2">
          <span>Country</span>
          <input class="custom-input" @click="onVisible(true)" v-model="search" @input="onInput" placeholder="Write the country than you want to see" />
        </div>
      </template>
      <template #end>
        <div class="flex align-items-center">
          <p_button class="button btn_left" icon="pi pi-search" label="Search"></p_button>
          <p_button class="button btn_right" icon="pi pi-search" label=""></p_button>
        </div>
      </template>
    </p-toolbar>
    <div class="flex justify-content-center">
      <Continents v-if="visible" @update-continent="updateContinent($event)"></Continents>
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
  border-bottom: 2px solid #007BFF;
  outline: none;
}
input {
  width: 500px;
  border: none;
  background-color: transparent;
  font-size: 1rem;
}
.btn_right {
  display: none;
}

@media screen and (max-width: 1024px) {
  input {
    width: 320px;
  }
  .btn_left {
    display: none;
  }
  .btn_right {
    display: block;
  }
  .button {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 768px) {
  input {
    width: 200px;
  }
  .button {
    width: 40px;
    height: 40px;
  }
}
</style>