<template>
    <AccreditationCard
        emoji="🎓"
        :courseCode="course_code"
        :courseName="selected_course ? selected_course.label : ''"
        :courseProf="course_prof"
        :courseSection="course_section"
        :ratingGeneral="rating_general"
        :ratingWorkload="rating_workload"
        :ratingDifficulty="rating_difficulty"
        :ratingGrading="rating_grading"
        :ratingHelpful="rating_helpful"
        :ratingTeaching="rating_teaching"
        :review="review"
        magnifyScale="1.1"
    >
    </AccreditationCard>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePostReviewStore } from "../../stores/post_review";
import AccreditationCard from "../AccreditationCard.vue";

const store = usePostReviewStore();
const {
  course_code,
  course_name,
  course_prof,
  course_section,
  rating_general,
  rating_workload,
  rating_difficulty,
  rating_grading,
  rating_helpful,
  rating_teaching,
  review,
  selected_course
} = storeToRefs(store);
</script>

<script>
import VanillaTilt from "vanilla-tilt";

export default {
  mounted() {
    VanillaTilt.init(this.$refs.tiltcard, {
      max: 10,
      speed: 800,
      glare: true,
    });
  },
};
</script>

<style scoped>
.upper {
  padding: 0rem 0 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}

.upper > div {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
}

.mid {
  padding: 1rem 0 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}

.mid > div {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
}

.lower {
  text-align: justify;
  padding: 1rem 1rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
}
.card {
  padding: 1.5rem;
  width: 90%;
  margin: 3rem auto;
  transform-style: preserve-3d;
  transform: perspective(5000px);
}

.emoji {
  font-size: 5rem;
  position: absolute;
  top: -3rem;
  left: -1.5rem;
  transform: translateZ(20px);
}
</style>

<style>
.prompt4 {
  background-image: linear-gradient(-40deg, #f8f8f8 0%, #efefef 100%);

  box-shadow: 0.5rem 0.5rem 2.5rem 0.5rem rgba(0, 0, 0, 0.05);
}
</style>