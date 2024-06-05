<script setup>
import { ref } from 'vue';
import ContinentFilter from "@/components/ContinentFilter.vue";

const emit = defineEmits(['update-search', 'update-continent']);
const search = ref('');
const op = ref();

const onVisible = (event) => {
  op.value.toggle(event);
}
const updateContinent = (continent) => {
  emit('update-continent', continent);
};
const onInput = () => {
  emit('update-search', search.value);
};

</script>

<template>
  <div class="searchbar flex flex-column align-items-center">
    <p-toolbar class="toolbar">
      <template #start>
        <div class="card flex flex-column gap-2">
          <span>{{$t('home.searchBar.country')}}</span>
          <input class="custom-input-tablet" @click="onVisible" v-model="search" @input="onInput" :placeholder="$t('home.searchBar.write')" />
        </div>
      </template>
      <template #end>
        <div class="flex align-items-center">
          <p-button class="button btn-left" icon="pi pi-search" :label="$t('home.searchBar.search')"></p-button>
          <p-button class="button btn-right" icon="pi pi-search" label=""></p-button>
        </div>
      </template>
    </p-toolbar>
    <p-overlay-panel ref="op" style="width: max-content">
      <div class="container-continents flex justify-content-center">
        <ContinentFilter @update-continent="updateContinent($event)"></ContinentFilter>
      </div>
    </p-overlay-panel>
  </div>
</template>

<style>
.toolbar {
  border-radius: 5rem;
  width: min(100%, 1024px);
}
.card {
  margin-left: 1.5rem;
}
.button {
  width: 150px;
  height: 50px;
  margin-right: 0.5rem;
  border-radius: 5rem;
  background: rgba(3, 28, 38, 0.8);
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
.btn-right {
  display: none;
}

@media screen and (max-width: 768px) {
  input {
    width: 100px;
  }
  .btn-left {
    display: none;
  }
  .btn-right {
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