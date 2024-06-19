<script setup>
import { ref, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import Toolbar from '../components/Searchbar.vue';
import Cards from '../components/CountryCard.vue';

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
      currency
      currencies
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
const search = ref('');
const continents = ref([]);
const { result, loading } = useQuery(GET_COUNTRIES);
const updateSearch = (newSearch) => {
  search.value = newSearch;
};
const updateContinent = (continentName) => {
  continents.value = continentName;
};

const filteredCountries = computed(() => {
  if (!result.value) return [];

  return result.value.countries.filter(country => {
    const matchesSearch = search.value !== '' ? country.name.toLowerCase().includes(search.value.toLowerCase()) : true;
    const matchesContinent = continents.value.length > 0 ? continents.value.includes(country.continent.name) : true;
    return matchesSearch && matchesContinent;
  });
});
</script>

<template>
  <section class="home">
    <Toolbar @update-search="updateSearch($event)" @update-continent="updateContinent($event)"></Toolbar>
    <div class="home-content flex flex-wrap justify-content-center">
      <div v-if="loading" v-for="i in 10" :key="i" class="container-card-skeleton">
        <p-skeleton width="100%" height="100%" style="border-radius: 2rem;" />
      </div>
      <Cards v-else v-for="country in filteredCountries" :key="country.code" :country="country"></Cards>
    </div>
  </section>
</template>

<style scoped>
.container-card-skeleton {
  flex-grow: 1;
  width: 350px;
  height: 390px; /* Añadí esta línea para asegurar que el Skeleton tenga la misma altura */
  gap: var(--gap);
}

.home {
  .home-content {
    gap: var(--gap);
    padding-top: var(--gap);
  }
}
</style>