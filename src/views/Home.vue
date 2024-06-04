<script setup>
import { ref, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import SearchBar from '../components/SearchBar.vue';
import Card from '../components/Card.vue';

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      continent {
        name
      }
    }
  }
`;
/*
https://api.unsplash.com/photos/?client_id=1fxOFzIv3I25i43U3iRpTgOtI7ZLsjrBVeOlt1QsBpw
*/
const search = ref('');
const { result } = useQuery(GET_COUNTRIES);

const updateSearch = (newSearch) => {
  search.value = newSearch;
  console.log(search.value);
};

const filteredCountries = computed(() => {
  if (!result.value) return [];
  console.log(result.value);
  return result.value.countries.filter(country =>
      country.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <section class="container_home">
    <SearchBar @update-search="updateSearch($event)"></SearchBar>
    <div class="container-countries flex gap-2 flex-wrap justify-content-center pt-5">
      <Card v-for="country in filteredCountries" :key="country.code" :country="country"></Card>
    </div>
  </section>
</template>

<style scoped>
.container_home {
  padding-block: 3rem;
}
</style>