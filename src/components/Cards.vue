<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'; // Importar la biblioteca axios

const props = defineProps({
  country: Object
});

const imageUrl = ref(''); // Crear una referencia para la URL de la imagen

const getCountryImage = async (countryName) => {
  try {
    // Construir la URL de la API de Unsplash
    const url = `https://api.unsplash.com/search/photos?query=${countryName}&size=small`;

    // Añadir la clave de API a la cabecera de la solicitud
    const headers = {
      Authorization: ``/*Client-ID 1fxOFzIv3I25i43U3iRpTgOtI7ZLsjrBVeOlt1QsBpw*/
    };

    // Hacer la solicitud a la API de Unsplash
    const response = await axios.get(url, { headers });

    // Extraer la URL small de la primera imagen
    const imageUrl = response.data.results[0]?.urls?.small || 'https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000';
    // Asignar la URL de la imagen a la referencia
    return imageUrl;
  } catch (error) {
    console.error(error);
  }
};

// Llamar a la función getCountryImage cuando el componente se monte
onMounted(async () => {
  imageUrl.value = await getCountryImage(props.country.name);
});
</script>

<template>
  <div class="container_card">
    <div class="country_image">
      <img :src="imageUrl" alt="Imagen del país" width="400" height="250"/>
    </div>
    <div class="country_content flex gap-3">
      <img :src="`https://flagsapi.com/${country.code}/flat/64.png`" alt="Imagen del continente" width="100" height="100"/>
      <div class="flex flex-column justify-content-center">
        <h3 class="country_name">{{ country.name }}</h3>
        <p class="country_continent">{{ country.continent.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container_card {
  background: rgba(255, 255, 255, 0.8);
  flex-grow: 1;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 2rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

.country_image {
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  overflow: hidden;
}


.country_content {
  padding: 1rem;
  max-height: min-content;
}
</style>