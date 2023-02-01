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
        unlocked_course_ids.some((item) => item.course_id == $route.params.id)
      "
    />
    <UnlockPanel
      v-else-if="is_logged_in && user_status == 'confirmed'"
      :course_code="course_code"
      :course_name="course_name"
      :syllabi_count="syllabi_count"
      :reviews_count="reviews_count"
    />
    <WaitlistPanel v-else-if="is_logged_in && user_status == 'waitlisted'" />
    <NewUserPanel v-else-if="is_logged_in && user_status == 'pending'" />
    <NoticeLoginPanel v-else />
  </div>
</template>

<script>
import apiService from "../service/apiService";
import { useLoginStatusStore } from "../stores/login_status";
export default {
  data() {
    return {
      reviews_count: 0,
      syllabi_count: 0,
      course_name: "",
      course_code: [],
    };
  },
  async mounted() {
    const store = useLoginStatusStore(this.$pinia);
    if (store.is_logged_in) {
      let user = await apiService.getUserProfile(store.access_token);
      // console.log("get user profile", user);
      if (user) {
        store.user_id = user.user_id;
        store.user_name = user.user_name;
        store.email = user.email;
        store.joined_at = user.joined_at;
        store.user_status = user.user_status;
        store.n_bolt = user.n_bolt;
        store.unlocked_course_ids = user.unlocked_course_ids;
        store.uploaded_syllabus_ids = user.uploaded_syllabus_ids;
        store.invite_code = user.invite_code;
        store.invitee_ids = user.invitee_ids;
      }
    }
  },
  watch: {
    $route: {
      handler: function (to, from) {
        // console.log("now at:", to.params.id);
        apiService.getCourseStats(to.params.id).then((res) => {
          // console.log(res);
          this.reviews_count = res.reviews_count;
          this.syllabi_count = res.syllabi_count;
          this.course_name = res.course_name;
          this.course_code = res.course_code;
        });
      },
      immediate: true,
    },
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