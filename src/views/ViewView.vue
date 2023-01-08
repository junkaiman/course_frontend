<script setup>
import CoursesNavBar from "../components/CoursesNavBar.vue";
import WaitlistPanel from "../components/ViewOverlayPanels/WaitlistPanel.vue";
import UnlockPanel from "../components/ViewOverlayPanels/UnlockPanel.vue";
import NewUserPanel from "../components/ViewOverlayPanels/NewUserPanel.vue";
import ViewContentPanel from "../components/ViewContentPanel.vue";
import NoticeLoginPanel from "../components/ViewOverlayPanels/NoticeLoginPanel.vue";
import { useLoginStatusStore } from "../stores/login_status";
import { storeToRefs } from "pinia";
const loginStatusStore = useLoginStatusStore();
const { is_logged_in, user_status, unlocked_course_ids } =
  storeToRefs(loginStatusStore);
</script>

<template>
  <div class="left">
    <CoursesNavBar />
  </div>
  <div class="right">
    <ViewContentPanel
      v-if="
        is_logged_in &&
        user_status == 'confirmed' &&
        unlocked_course_ids.includes($route.params.id)
      "
    />
    <UnlockPanel v-else-if="is_logged_in && user_status == 'confirmed'" />
    <WaitlistPanel v-else-if="is_logged_in && user_status == 'waitlisted'" />
    <NewUserPanel v-else-if="is_logged_in && user_status == 'pending'" />
    <NoticeLoginPanel v-else />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
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