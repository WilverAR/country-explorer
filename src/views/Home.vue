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
  HERE IS THE QUERY TO GET IMAGES FROM THE PLACES CORRESPONDING TO THE COUNTRIES
https://api.unsplash.com/search/photos?query=peru

  const GET_IMAGES = gql`
  query {
    images {
      urls {
        regular
      }
    }
  }
`;

  const { result: images } = useQuery(GET_IMAGES);
  console.log(images.value);

  const filteredImages = computed(() => {
    if (!images.value) return [];
    return images.value.images.filter(image =>
        image.urls.regular.toLowerCase().includes(search.value.toLowerCase())
    );
  });

  const updateSearch = (newSearch) => {
    search.value = newSearch;
    console.log(search.value);
  };

  HERE IS THE QUERY TO GET IMAGES FROM THE FLAG CORRESPONDING TO THE COUNTRIES
  const GET_FLAGS = gql`
  query {
    flags {
      svgFile
    }
  }
`;

    const { result: flags } = useQuery(GET_FLAGS);
    console.log(flags.value);

    const filteredFlags = computed(() => {
      if (!flags.value) return [];
      return flags.value.flags.filter(flag =>
          flag.svgFile.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    const updateSearch = (newSearch) => {
      search.value = newSearch;
      console.log(search.value);
    };
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
    <div class="container-countries flex gap-5 flex-wrap justify-content-center pt-5">
      <Card v-for="country in filteredCountries" :key="country.code" :country="country"></Card>
    </div>
  </section>
</template>

<style scoped>
.container_home {
  padding-block: 3rem;
}
</style>