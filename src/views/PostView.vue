<script setup>
import BasicInfo from "../components/post_review/BasicInfo.vue";
import RatingPanel from "../components/post_review/RatingPanel.vue";
import ReviewPanel from "../components/post_review/ReviewPanel.vue";
import ConfirmPanel from "../components/post_review/ConfirmPanel.vue";
import { storeToRefs } from "pinia";
import { usePostReviewStore } from "../stores/post_review";
import { useLoginStatusStore } from "../stores/login_status";
import apiService from "../service/apiService";
const postReviewStore = usePostReviewStore();
const loginStatusStore = useLoginStatusStore();
const { is_logged_in } = storeToRefs(loginStatusStore);
</script>
<template>
  <div class="container">
    <InlineMessage v-if="!is_logged_in" severity="warn"
      >Please log in</InlineMessage
    >
    <div class="card">
      <Steps :model="items" :readonly="true" aria-label="Form Steps" />
    </div>
    <BasicInfo v-if="$route.params.id === '1'" />
    <RatingPanel v-else-if="$route.params.id === '2'" />
    <ReviewPanel v-else-if="$route.params.id === '3'" />
    <ConfirmPanel v-else-if="$route.params.id === '4'" />
    <div class="nav">
      <Button
        :disabled="$route.params.id === '1'"
        label="Prev"
        icon="pi pi-angle-left"
        @click="prevPage($event)"
      ></Button>
      <Button
        v-if="$route.params.id !== '4'"
        label="Next"
        icon="pi pi-angle-right"
        icon-pos="right"
        @click="nextPage($event)"
      ></Button>
      <Button
        v-if="$route.params.id === '4'"
        class="p-button-success"
        label="Confirm"
        icon="pi pi-check"
        icon-pos="right"
        @click="submitSurvey($event)"
      ></Button>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Basic Info",
          to: "/post/1/",
        },
        {
          label: "Ratings",
          to: "/post/2/",
        },
        {
          label: "Review",
          to: "/post/3/",
        },
        {
          label: "Confirmation",
          to: "/post/4/",
        },
      ],
      formObject: {},
    };
  },
  methods: {
    nextPage(event) {
      // console.log(event);
      let currentIdx = parseInt(this.$route.params.id) - 1;
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
      const store = usePostReviewStore(this.$pinia);
      this.$router.push(this.items[currentIdx + 1].to);
    },
    prevPage(event) {
      let currentIdx = parseInt(this.$route.params.id) - 1;
      this.$router.push(this.items[currentIdx - 1].to);
    },
    complete() {
      console.log(this.formObject);
    },
    async submitSurvey() {
      const store = usePostReviewStore(this.$pinia);
      const loginStatusStore = useLoginStatusStore(this.$pinia);
      if (
        !store.selected_course ||
        !store.course_prof ||
        !store.course_section ||
        !store.rating_general ||
        !store.rating_workload ||
        !store.rating_difficulty ||
        !store.rating_teaching ||
        !store.rating_grading ||
        !store.rating_helpful ||
        !store.review
      ) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Please fill out all fields",
          life: 3000,
        });
      } else {
        if (!loginStatusStore.is_logged_in) {
          this.$toast.add({
            severity: "error",
            summary: "Uploading failed",
            detail: "Please log in first",
            life: 8000,
          });
          return;
        }
        let review_id = await apiService.postReview(
          store.selected_course.to.split('/').at(-1),
          store.course_prof,
          store.course_section,
          store.rating_general,
          store.rating_workload,
          store.rating_difficulty,
          store.rating_teaching,
          store.rating_grading,
          store.rating_helpful,
          store.review,
          loginStatusStore.access_token
        );
        if (review_id) {
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "Survey Submitted",
            life: 3000,
          });
          this.$router.push("/refresh/");
        } else {
          this.$toast.add({
            severity: "error",
            summary: "Error",
            detail: "Something went wrong",
            life: 3000,
          });
        }
      }
    },
  },
};
</script>

<style>
.container {
  margin: 2rem;
  width: 35rem;
}

.card {
  margin: 1rem 0rem;
  padding: 1.5rem 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
}

.nav {
  margin: 0 2rem;
  display: flex;
  justify-content: space-between;
}
</style>