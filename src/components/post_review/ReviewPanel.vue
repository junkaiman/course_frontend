<template>
    <div class="card prompt3 p-fluid">
        <div class="hint">
            You should briefly summarize your overall experience with the professor. This could include their teaching style, whether they were engaging and clear in their lectures, and their availability for office hours or additional help. You might also mention any particularly memorable or notable aspects of the course, such as challenging assignments or engaging class discussions. Remember to keep your review respectful and professional, even if you did not have a positive experience. *
        </div>
        <Textarea v-model="review" :autoResize="true"  rows="8" cols="1" />
        
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePostReviewStore } from "../../stores/post_review";
const store = usePostReviewStore();
const { review } =
  storeToRefs(store);
</script>

<style scoped>
.hint {
margin-bottom: 0.5rem;
}
</style>