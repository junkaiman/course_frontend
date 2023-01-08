<script setup>
import BasicInfo from "../components/post_review/BasicInfo.vue";
import RatingPanel from "../components/post_review/RatingPanel.vue";
import ReviewPanel from "../components/post_review/ReviewPanel.vue";
import ConfirmPanel from "../components/post_review/ConfirmPanel.vue";
import UploadPanel from "../components/upload_syllabus/UploadPanel.vue";
import UploadConfirmPanel from "../components/upload_syllabus/UploadConfirmPanel.vue";
import { storeToRefs } from "pinia";
import { usePostReviewStore } from "../stores/post_review";
import { useLoginStatusStore } from "../stores/login_status";
const loginStatusStore = useLoginStatusStore();
const { is_logged_in } = storeToRefs(loginStatusStore);
</script>

<template>
  <div class="container">
    <InlineMessage v-if="!is_logged_in" severity="warn">Please log in</InlineMessage>
    <div class="card">
      <Steps :model="items" :readonly="true" aria-label="Form Steps" />
    </div>
    <BasicInfo v-if="$route.params.id === '1'" />
    <UploadPanel v-else-if="$route.params.id === '2'" />
    <UploadConfirmPanel v-else-if="$route.params.id === '3'" />
    <div class="nav">
      <Button
        :disabled="$route.params.id === '1'"
        label="Prev"
        icon="pi pi-angle-left"
        @click="prevPage($event)"
      ></Button>
      <Button
        v-if="$route.params.id !== '3'"
        label="Next"
        icon="pi pi-angle-right"
        icon-pos="right"
        @click="nextPage($event)"
      ></Button>
      <Button
        v-if="$route.params.id === '3'"
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
          to: "/upload/1/",
        },
        {
          label: "Upload",
          to: "/upload/2/",
        },
        {
          label: "Confirmation",
          to: "/upload/3/",
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
};
</script>