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
const { result } = useQuery(GET_COUNTRIES);
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
      <Cards v-for="country in filteredCountries" :key="country.code" :country="country"></Cards>
    </div>
  </section>
</template>

<style scoped>
.home {

  .home-content {
    gap: var(--gap);
    padding-top: var(--gap);
  }
}
</style>