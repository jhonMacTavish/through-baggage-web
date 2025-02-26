<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-23 17:18:54
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-02-23 20:34:17
 * @FilePath: \through_baggage_webt:\Projects\VS Code\vue-bootstrap-master\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { reactive } from 'vue';
import carData from "./data/cars.json";
import CategoryData from './data/category.json';
import VideoData from './data/video-spots.json'
import NavBar from "./components/NavBar.vue";
import ModelBanner from './components/ModelBanner.vue';
import CategorySpot from './components/CategorySpot.vue';
import VideoSpot from './components/VideoSpot.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';


// state
const cars = reactive(carData);
const category = reactive(CategoryData);
const video = reactive(VideoData);


</script>

<template>
    <Main />
</template>

<style scoped></style>
