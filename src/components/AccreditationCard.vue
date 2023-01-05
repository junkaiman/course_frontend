<template>
  <div
    class="tiltcard card prompt4"
    data-tilt
    data-tilt-scale="1.2"
    data-tilt-glare
    data-tilt-max-glare="0.3"
    data-tilt-reverse="true"
    ref="tiltcard"
  >
    <div class="emoji">{{emoji}}</div>
    <div class="upper">
      <div>
        <div><b>Course Code </b></div>
        <div>{{ courseCode }}</div>
      </div>
      <div>
        <div><b>Course Name</b></div>
        <div>{{ courseName }}</div>
      </div>
      <div>
        <div><b>Professor</b></div>
        <div>{{ courseProf }}</div>
      </div>
      <div>
        <div><b>Section</b></div>
        <div>{{ courseSection }}</div>
      </div>
    </div>
    <div class="mid">
      <div>
        <div><b>General Rating</b></div>
        <div>{{ ratingGeneral }}</div>
      </div>
      <div>
        <div><b>Difficulty</b></div>
        <div>{{ ratingDifficulty }}</div>
      </div>
      <div>
        <div><b>Grading</b></div>
        <div>{{ ratingGrading }}</div>
      </div>
      <div>
        <div><b>Helpful</b></div>
        <div>{{ ratingHelpful }}</div>
      </div>
      <div>
        <div><b>Teaching</b></div>
        <div>{{ ratingTeaching }}</div>
      </div>
    </div>
    <div class="lower">
      <div><b>Review</b></div>
      <div>{{ review }}</div>
    </div>
  </div>
</template>
  
  
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
  props: {
    emoji: String,
    courseCode: String,
    courseName: String,
    courseProf: String,
    courseSection: String,
    ratingGeneral: Number,
    ratingDifficulty: Number,
    ratingGrading: Number,
    ratingHelpful: Number,
    ratingTeaching: Number,
    review: String,
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