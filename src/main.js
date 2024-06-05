import './assets/css/main.css'
import 'primevue/resources/themes/aura-light-noir/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales/i18n'

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';

const httpLink = createHttpLink({
    uri: 'https://countries.trevorblades.com/',
});
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

import PrimeVue from "primevue/config";
import AnimateOnScroll from 'primevue/animateonscroll';

import SideBar from "primevue/sidebar";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from "primevue/inputtext";
import Toolbar from "primevue/toolbar";
import ConfirmPopup from "primevue/confirmpopup";
import OverlayPanel from "primevue/overlaypanel";
import Dialog from "primevue/dialog";


const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },
    render: () => h(App),
});
app.use(PrimeVue);
app.use(router);
app.use(i18n);

app.component('p-sidebar', SideBar);
app.component('p-button', Button);
app.component('p-avatar', Avatar);
app.component('p-icon-field', IconField);
app.component('p-input-icon', InputIcon);
app.component('p-input-text', InputText);
app.component('p-toolbar', Toolbar);
app.component('p-confirm-popup', ConfirmPopup);
app.component('p-overlay-panel', OverlayPanel);
app.component('p-dialog', Dialog);

app.directive('animateonscroll', AnimateOnScroll);

app.mount('#app')