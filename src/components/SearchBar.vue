<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update-search']);
const search = ref('');
const onInput = () => {
  emit('update-search', search.value);
};
</script>

<template>
  <div class="container_searchbar">
    <div class="card flex flex-wrap justify-content-center gap-3">
      <p-icon-field iconPosition="right">
        <p-input-icon>
          <i class="pi pi-search" />search
        </p-input-icon>
        <p-input-text v-model="search" @input="onInput" placeholder="Keyword Search" />
      </p-icon-field>
    </div>
  </div>
</template>

<style scoped>
.container_searchbar {
  width: 75%;
  margin: 0 auto;
  background: orange;
}
</style>