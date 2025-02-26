import { createApp } from 'vue';
// import PrimeVue from 'primevue/config';
// import AnimateOnScroll from 'primevue/animateonscroll';

// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.css";
// import 'primevue/resources/themes/aura-light-green/theme.css'
import './style.css';
import App from './App.vue';
import i18n from './i18n';


const app = createApp(App);

app.use(i18n);
// app.use(PrimeVue);
// app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap';