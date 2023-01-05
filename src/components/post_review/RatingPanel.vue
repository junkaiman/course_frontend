<template>
  <div class="rating">
    <div
      class="card prompt3"
      v-tooltip="'Give an overall rating of the course and the professor. \n\n More 💙 is better'"
    >
      <label for="">General</label>
      <Rating
        v-model="rating_general"
        onIcon="pi pi-heart-fill"
        offIcon="pi pi-heart"
        :stars="5"
        :cancel="false"
      >
        <template #onicon> <span class="emoji">💙</span> </template>
        <template #officon> <span class="emoji">⚪️</span> </template>
      </Rating>
    </div>
    <div class="card prompt3" v-tooltip="'How do you feel about the workload. \n\n More 📃 is heavier'">
      <label for="">Workload</label>
      <Rating
        v-model="rating_workload"
        onIcon="pi pi-heart-fill"
        offIcon="pi pi-heart"
        :stars="5"
        :cancel="false"
      >
        <template #onicon> <span class="emoji">📃</span> </template>
        <template #officon> <span class="emoji">⚪️</span> </template>
      </Rating>
    </div>
    <div class="card prompt3" v-tooltip="'The difficulty level of this course. \n\n More 🤯 is more difficult'">
      <label for="">Difficulty</label>
      <Rating
        v-model="rating_difficulty"
        onIcon="pi pi-heart-fill"
        offIcon="pi pi-heart"
        :stars="5"
        :cancel="false"
      >
        <template #onicon> <span class="emoji">🤯</span> </template>
        <template #officon> <span class="emoji">⚪️</span> </template>
      </Rating>
    </div>
    <div class="card prompt3" v-tooltip="'The teaching quality of the professor. \n\n More 👍 is better'">
      <label for="">Teaching</label>
      <Rating
        v-model="rating_teaching"
        onIcon="pi pi-heart-fill"
        offIcon="pi pi-heart"
        :stars="5"
        :cancel="false"
      >
        <template #onicon> <span class="emoji">👍</span> </template>
        <template #officon> <span class="emoji">⚪️</span> </template>
      </Rating>
    </div>
    <div class="card prompt3" v-tooltip="'The grading preference of the professor. \n\n More 💯 is higher scores'">
      <label for="">Grading</label>
      <Rating
        v-model="rating_grading"
        onIcon="pi pi-heart-fill"
        offIcon="pi pi-heart"
        :stars="5"
        :cancel="false"
      >
        <template #onicon> <span class="emoji">💯</span> </template>
        <template #officon> <span class="emoji">⚪️</span> </template>
      </Rating>
    </div>
    <div class="card prompt3" v-tooltip="'Whether the professor is helpful after class (office hours, etc.). \n\n More 🥰 is better'">
      <label for="">Helpful</label>
      <Rating
        v-model="rating_helpful"
        onIcon="pi pi-heart-fill"
        offIcon="pi pi-heart"
        :stars="5"
        :cancel="false"
      >
        <template #onicon> <span class="emoji">🥰</span> </template>
        <template #officon> <span class="emoji">⚪️</span> </template>
      </Rating>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { usePostReviewStore } from "../../stores/post_review";
const store = usePostReviewStore();
const {
  rating_general,
  rating_difficulty,
  rating_grading,
  rating_helpful,
  rating_teaching,
  rating_workload,
} = storeToRefs(store);
</script>

<style>
.p-rating .p-rating-item .p-rating-icon {
  font-size: 1.2rem !important;
}
.prompt3 {
  padding: 1rem 1rem;
  background-image: linear-gradient(135deg, #fbfbfc, #f6f7f9);
  /* box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.1); */
}

</style>

<style scoped>
.emoji {
  font-size: 1.5rem;
  margin: -0.2rem 0;
}
.card {
    padding: 0.8rem 1rem;
}
.rating > div {
  font-size: 1.1rem;
  margin: 0.5rem 0;
}
</style>

