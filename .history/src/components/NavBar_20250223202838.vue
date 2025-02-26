<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-23 17:18:54
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-02-23 20:28:37
 * @FilePath: \through_baggage_webt:\Projects\VS Code\vue-bootstrap-master\src\components\NavBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <nav class="navbar fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand ms-auto">通程行李状态</a>
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <div class="nav-link">前端知识</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">后端知识</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">数据库知识</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LogoIcon from "../assets/icons/LogoIcon.vue";
import QuestionIcon from "../assets/icons/QuestionIcon.vue";
import GlobeIcon from "../assets/icons/GlobeIcon.vue";
import ProfileIcon from "../assets/icons/ProfileIcon.vue";
import { computed, ref, onMounted, onBeforeUnmount } from "vue";

// state
const isMobile = ref(false);
// computed
const hideIcons = computed(() => {
  return isMobile.value;
});
// method
const handleResize = () => {
  isMobile.value = window.innerWidth < 991;
};
// lifecycle hooks
onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
nav.navbar.navbar-expand-lg {
  padding: 8px 32px;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  z-index: 1;
  width: 100%;
}

.navbar-expand-lg ul {
  margin: auto;
}

.navbar-expand-lg ul,
.menu-toggle-cta {
  margin: auto;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  gap: 10px;
}

.navbar-expand-lg ul li a {
  color: #000;
}

.navbar-toggler {
  background: rgba(0, 0, 0, 0.075);
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
}

.icons-container {
  display: flex;
  gap: 10px;
}

.offcanvas.offcanvas-end {
  left: 0;
  width: 100%;
}

@media (max-width: 768px) {
  nav.navbar.navbar-expand-lg {
    padding: 6px 4px;
  }
}
</style>
