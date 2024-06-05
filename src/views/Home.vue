<script setup>
import { ref, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import Toolbar from '../components/Toolbar.vue';
import Cards from '../components/Cards.vue';

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
  console.log("como la es envio?: ", continentName);
  continents.value = continentName;
};

/*debo retornar todos los paises que son de europa!*/


const filteredCountries = computed(() => {
  if (!result.value) return [];
  console.log(result.value);
  return result.value.countries.filter(country => {
    const matchesSearch = search.value !== '' ? country.name.toLowerCase().includes(search.value.toLowerCase()) : true;
    const matchesContinent = continents.value.length > 0 ? continents.value.includes(country.continent.name) : true;
    return matchesSearch && matchesContinent;
  });
});

</script>

<template>
  <section class="container_home">
    <Toolbar @update-search="updateSearch($event)" @update-continent="updateContinent($event)"></Toolbar>
    <div class="container-countries flex flex-wrap justify-content-center pt-5">
      <Cards v-for="country in filteredCountries" :key="country.code" :country="country"></Cards>
    </div>
  </section>
</template>

<style scoped>
.container_home {
  padding-block: 3rem;
}

.container-countries {
  gap: var(--gap);
}
</style>