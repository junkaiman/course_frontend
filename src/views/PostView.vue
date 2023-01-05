<template>
  <div class="container">
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

<script setup>
import BasicInfo from "../components/post_review/BasicInfo.vue";
import RatingPanel from "../components/post_review/RatingPanel.vue";
import ReviewPanel from "../components/post_review/ReviewPanel.vue";
import ConfirmPanel from "../components/post_review/ConfirmPanel.vue";
import { storeToRefs } from "pinia";
import { usePostReviewStore } from "../stores/post_review";
</script>


<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Basic Info",
          to: "/post/1",
        },
        {
          label: "Ratings",
          to: "/post/2",
        },
        {
          label: "Review",
          to: "/post/3",
        },
        {
          label: "Confirmation",
          to: "/post/4",
        },
      ],
      formObject: {},
    };
  },
  methods: {
    nextPage(event) {
      console.log(event);
      let currentIdx = parseInt(this.$route.params.id) - 1;
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
      const store = usePostReviewStore(this.$pinia);
      console.log(store.firstname);
      this.$router.push(this.items[currentIdx + 1].to);
    },
    prevPage(event) {
      let currentIdx = parseInt(this.$route.params.id) - 1;
      this.$router.push(this.items[currentIdx - 1].to);
    },
    complete() {
      console.log(this.formObject);
    },
  },
  beforeRouteLeave(to, from) {
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (!answer) return false;
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