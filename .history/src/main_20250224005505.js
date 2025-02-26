/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-23 17:18:54
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-02-24 00:55:03
 * @FilePath: \through_baggage_webt:\Projects\VS Code\vue-bootstrap-master\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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