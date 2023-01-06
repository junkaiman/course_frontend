<script setup>
import CoursesNavBar from "../components/CoursesNavBar.vue";
import WaitlistPanel from "../components/WaitlistPanel.vue";
import UnlockPanel from "../components/UnlockPanel.vue";
import ViewContentPanel from "../components/ViewContentPanel.vue";
</script>

<template>
  <div class="left">
    <CoursesNavBar />
  </div>
  <div class="right">
    <ViewContentPanel v-if="isLoggedIn"/>
    <WaitlistPanel v-else />
    <!-- <UnlockPanel v-else /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
}
</script>

<style scoped>
.left {
  width: 40vw;
  /* float: left; */
}

.right {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  width: 100%;
}

.right > div {
  margin: 0.5rem;
}
</style>