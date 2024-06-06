<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const toggleLanguage = () => {
  locale.value = (locale.value === 'es') ? 'en' : 'es';
};
</script>

<template>
  <div class="sidebar flex flex-column align-content-center gap-3">
    <img class="logo" src="../assets/img/logo.png" style="max-width: 3rem; height: auto;" alt="Image logo"/>
    <router-link to="/home" class="view flex align-items-center cursor-pointer border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-home"></i>
      <span class="text ml-3">{{$t('home.sidebar.home')}}</span>
    </router-link>
    <router-link to="/view-one" class="view flex align-items-center cursor-pointer border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user"></i>
      <span class="text ml-3">{{$t('home.sidebar.user')}}</span>
    </router-link>
    <router-link to="/view-two" class="view flex align-items-center cursor-pointer border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-cog"></i>
      <span class="text ml-3">{{$t('home.sidebar.setting')}}</span>
    </router-link>
    <div class="button-language view flex align-items-center p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple" @click="toggleLanguage">
      <i class="pi pi-language"></i>
      <span class="text ml-3">{{$t('home.sidebar.language')}}</span>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  min-width: 2rem;
  padding: .8rem;
  height: 100vh;
  background: rgba(3, 28, 38, 0.8);
  border-right: 10px solid rgba(3, 28, 38, 0.4);
  overflow: hidden;
  transition: min-width 0.3s;
  img.logo {
    width: 100%;
    padding-block: 1rem;
    margin: 0 auto;
  }
  .view {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;

    i {
      color: whitesmoke;
    }
    .text {
      display: none;
    }
  }
}
.sidebar:hover {
  min-width: 250px;

  .view {
    justify-content: flex-start;

    .text {
      display: block;
      color: whitesmoke;
    }
  }
  .view:hover {
    i, .text {
      color: black;
    }
  }
}
.router-link-active {
  background: var(--surface-100) !important;

  .text {
    color: black !important;
  }
  i {
    color: black !important;
  }
}
.button-language {
  cursor: pointer;
  margin-top: auto;
}

@media screen and (max-width: 768px) {
  .sidebar {
    padding: .5rem;
    border-right: 6px solid rgba(3, 28, 38, 0.5);

    .view {
      padding: .5rem;
    }
  }
  .sidebar:hover {
    min-width: 2rem;

    .view {
      justify-content: center;
      .text {
        display: none;
      }
    }
  }
}
</style>