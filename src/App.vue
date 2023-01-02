<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="top-banner">
    👨‍💻 course.gallinula.com is under development. Expected to release before session 4!
    <a href="https://afdian.net/a/hi_keon">
      ☕️ Buy me a coffee to make it earlier!
    </a>
  </div>
  <div class="menu">
    <Menubar :model="items" />
  </div>
  <div class="main">
    <RouterView />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "Courses",
          icon: "pi pi-fw pi-align-center",
          to: "/view",
        },
        {
          label: "Write Review",
          icon: "pi pi-fw pi-pencil",
          to: "/post",
          style: "",
        },
        {
          label: "About",
          icon: "pi pi-fw pi-info-circle",
          to: "/about",
        },
      ],
    };
  },
};
</script>

<style>
.main {
  display: flex;
  flex-direction: row;
  width: 100%;
  /* margin: 1rem; */
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
