<template>
  <div class="container">
    <div v-for="item in reviews" :key="item.courseCode">
      <AccreditationCard
        class="accard"
        emoji="🎓"
        :courseCode="item.courseCode"
        :courseName="item.courseName"
        :courseProf="item.courseProf"
        :courseSection="item.courseSection"
        :ratingGeneral="item.ratingGeneral"
        :ratingWorkload="item.ratingWorkload"
        :ratingDifficulty="item.ratingDifficulty"
        :ratingGrading="item.ratingGrading"
        :ratingHelpful="item.ratingHelpful"
        :ratingTeaching="item.ratingTeaching"
        :review="item.review"
        magnifyScale="1.1"
      ></AccreditationCard>
    </div>
  </div>
</template>

<script setup>
import AccreditationCard from "../components/AccreditationCard.vue";
</script>

<style scoped>
.accard {
  /* zoom: 0.5; */
  /* -moz-transform: scale(0.5); */
}

.container {
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}

.container > div {
  flex-grow: 1;
  max-width: 50%;
}
/* .container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: -8rem -1rem;
  padding: 9rem 3rem;
  width: 100%;
  height: 100vh;
} */

/* .container > div {
  flex: 0 0 auto;
  width: 35rem;
  margin: 0 1rem;
  zoom: 0.9
} */
</style>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          courseCode: "COMPSCI 101",
          courseName: "Introduction to Computer Science",
          courseProf: "John Doe",
          courseSection: "A",
          ratingGeneral: "4.5",
          ratingWorkload: "2",
          ratingDifficulty: "4.5",
          ratingGrading: "4.5",
          ratingHelpful: "4.5",
          ratingTeaching: "4.5",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl eget nisl. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl eget nisl. Sed euismod, nunc vel",
        },
        {
          courseCode: "COMPSCI 201",
          courseName: "Data Structures and Algorithms",
          courseProf: "John Doe",
          courseSection: "2021Fall",
          ratingGeneral: "3",
          ratingWorkload: "2",
          ratingDifficulty: "3",
          ratingGrading: "4",
          ratingHelpful: "5",
          ratingTeaching: "1",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl eget nisl. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl eget nisl. Sed euismod, nunc vel",
        },
        {
          courseCode: "COMPSCI 101",
          courseName: "Introduction to Computer Science",
          courseProf: "John Doe",
          courseSection: "A",
          ratingGeneral: "4.5",
          ratingWorkload: "2",
          ratingDifficulty: "4.5",
          ratingGrading: "4.5",
          ratingHelpful: "4.5",
          ratingTeaching: "4.5",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl eget nisl. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl eget nisl. Sed euismod, nunc vel",
        },
        {
          courseCode: "COMPSCI 101",
          courseName: "Introduction to Computer Science",
          courseProf: "John Doe",
          courseSection: "A",
          ratingGeneral: "4.5",
          ratingWorkload: "2",
          ratingDifficulty: "4.5",
          ratingGrading: "4.5",
          ratingHelpful: "4.5",
          ratingTeaching: "4.5",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl eget nisl. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl eget nisl. Sed euismod, nunc vel",
        },
        {
          courseCode: "COMPSCI 101",
          courseName: "Introduction to Computer Science",
          courseProf: "John Doe",
          courseSection: "A",
          ratingGeneral: "4.5",
          ratingDifficulty: "4.5",
          ratingGrading: "4.5",
          ratingHelpful: "4.5",
          ratingTeaching: "4.5",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl eget nisl. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl eget nisl. Sed euismod, nunc vel",
        },
      ],
    };
  },
};
</script>