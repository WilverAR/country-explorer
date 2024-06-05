<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const toggleLanguage = () => {
  locale.value = (locale.value === 'es') ? 'en' : 'es';
};
</script>

<template>
  <div class="sidebar flex flex-column align-content-center gap-3 p-3">
    <div class="flex align-items-center justify-content-center flex-shrink-0">
      <p-avatar image="src/assets/logo.svg" shape="circle" size="large" style="max-width: 6rem; height: auto;" />
    </div>
    <router-link to="/home" class="view flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-home"></i>
      <span class="text ml-3">{{$t('home.sidebar.home')}}</span>
    </router-link>
    <router-link to="/view-one" class="view flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user"></i>
      <span class="text ml-3">{{$t('home.sidebar.user')}}</span>
    </router-link>
    <router-link to="/view-two" class="view flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
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
  width: 5rem;
  height: 100vh;
  background: rgba(3, 28, 38, 0.8);
  overflow: hidden;
  transition: width 0.3s;

  .view {
    display: flex;
    justify-content: center;

    i {
      color: whitesmoke;
    }
    .text {
      display: none;
    }
  }
}
.sidebar:hover {
  width: 250px;

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
    width: 3.5rem;
    padding: 1.5rem 0 0 0 !important;
  }
  .sidebar:hover {
    width: 5rem;

    .view {
      justify-content: center;

      .text {
        display: none;
      }
    }
  }
}
</style>