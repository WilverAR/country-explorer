<script setup>
import { ref } from 'vue';
import Continents from "@/components/Continents.vue";

const emit = defineEmits(['update-search', 'update-continent']);
const search = ref('');

const onVisible = (event) => {
  op.value.toggle(event);
}
const updateContinent = (continent) => {
  console.log("como la es envio por aqui?: ", continent);
  emit('update-continent', continent);
};
const onInput = () => {
  emit('update-search', search.value);
};
const op = ref();
</script>

<template>
  <div class="container_searchbar flex flex-column align-items-center">
    <p-toolbar class="container_toolbar">
      <template #start>
        <div class="card flex flex-column gap-2">
          <span>Country</span>
          <input class="custom-input-tablet" @click="onVisible" v-model="search" @input="onInput" placeholder="Write" />
        </div>
      </template>
      <template #end>
        <div class="flex align-items-center">
          <p_button class="button btn_left" icon="pi pi-search" label="Search"></p_button>
          <p_button class="button btn_right" icon="pi pi-search" label=""></p_button>
        </div>
      </template>
    </p-toolbar>
    <p-overlay-panel ref="op" style="width: max-content">
      <div class="container-continents flex justify-content-center">
        <Continents @update-continent="updateContinent($event)"></Continents>
      </div>
    </p-overlay-panel>
  </div>
</template>

<style>

.container_searchbar {
}
.container_toolbar {
  border-radius: 5rem;
  width: min(100%, 1024px);
}
.container-continents {

}

.card {
  margin-left: 1.5rem;
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
  width: 400px;
  border: none;
  background-color: transparent;
  font-size: 1rem;
}
.btn_right {
  display: none;
}

@media screen and (max-width: 768px) {
  input {
    width: 100px;
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
  .p-overlaypanel {
    width: 250px !important;
  }
}
</style>