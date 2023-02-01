<template></template>

<script>
import { useLoginStatusStore } from "../stores/login_status";
import apiService from "../service/apiService";
import { usePostReviewStore } from "../stores/post_review";

export default {
  async mounted() {
    const store = useLoginStatusStore(this.$pinia);
    const postReviewStore = usePostReviewStore(this.$pinia);
    if (this.$route.name == "quit") {
      store.$reset();
      this.$router.push({ path: "/" });
    }
    if (this.$route.name == "refresh") {
      postReviewStore.$reset();
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
        this.$router.push({ path: "/view/DzLRojjiMQ/" });
      } else {
        // console.log("/refresh/ error, redirect to /");
        this.$router.push({ path: "/" });
      }
    }
  },
};
</script>