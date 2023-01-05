<script setup>
import { RouterLink, RouterView } from "vue-router";
import TopMenuBar from "./components/TopMenuBar.vue";
</script>

<template>
  <div class="top-banner">
    👨‍💻 course.gallinula.com is under development. Expected to release before
    session 4!
    <a href="https://afdian.net/a/hi_keon">
      ☕️ Buy me a coffee to make it earlier!
    </a>
  </div>
  <div class="menu"><TopMenuBar /></div>
  <div class="main"><RouterView /></div>
</template>

<script></script>

<style>
.main {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}

b {
  font-weight: bold;
}

.top-banner {
  /* margin-bottom: 30px; */
  text-align: center;
  padding: 0.5rem;
  justify-content: center;
  height: 100%;
  background-color: #ea4c4c;
  color: white;
  font-size: 1.1rem;
}

.top-banner a {
  color: white;
  text-decoration: underline;
}
</style>
