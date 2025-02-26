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
