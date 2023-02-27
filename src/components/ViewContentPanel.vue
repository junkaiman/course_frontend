<script setup>
import StatsChart from "../components/StatsChart.vue";
import ReviewCard from "../components/ReviewCard.vue";
</script>

<template>
  <div class="container">
    <div class="info">
      <Button
        label="Report"
        class="p-button-rounded p-button-secondary"
        icon="pi pi-flag"
        style="display: block; margin-inline-start: auto"
        @click="reportCourse"
      />
      <Fieldset :legend="course_name">
        <div class="description">
          <b>What is it about?</b>
          <br />
          {{ course_description }}
        </div>
        <!-- <div class="faculties">
          <b>Who have taught this class?</b>
          <br />
          <Chip class="chip-button" label="John Doe" />
          <Chip class="chip-button" label="Amy Liu" />
        </div> -->
      </Fieldset>
    </div>
    <div class="resources">
      <Fieldset legend="Resources" :toggleable="true">
        <span v-for="syllabus in course_syllabus" :key="syllabus._id">
          <Button
            :label="'📄 Syllabus: ' + syllabus.course_section"
            class="p-button-secondary"
            @click="redirect(syllabus.filename)"
          />
        </span>
      </Fieldset>
    </div>
    <div class="stats">
      <Fieldset legend="Statistics" :toggleable="true">
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            filter: blur(10px);
          "
        >
          <StatsChart />
        </div>
      </Fieldset>
    </div>
    <div class="reviews">
      <Fieldset legend="Reviews" :toggleable="true" :collapsed="false">
        <Accordion style="filter: blur(10px);">
          <AccordionTab>
            <template #header>
              <i class="pi pi-user"></i> &nbsp;
              <span>John Doe</span>
            </template>
            <ReviewCard />
            <ReviewCard />
          </AccordionTab>
          <AccordionTab>
            <template #header>
              <i class="pi pi-user"></i> &nbsp;
              <span>Amy Liu</span>
            </template>
            <ReviewCard />
            <ReviewCard />
          </AccordionTab>
        </Accordion>
      </Fieldset>
    </div>
  </div>
</template>

<script>
import apiService from "../service/apiService";
import { useLoginStatusStore } from "../stores/login_status";

export default {
  data() {
    return {
      course_name: "Loading...",
      course_description: "Loading...",
      course_syllabus: [],
      course_reviews: [],
    };
  },
  methods: {
    redirect(filename) {
      window.open('/data/' + filename, '_blank')
    },
    reportCourse() {
      this.$router.push({path: '/report', query: {course_id: this.$route.params.id}})
    }
  },
  watch: {
    $route: {
      handler: function (to, from) {
        const store = useLoginStatusStore(this.$pinia);
        apiService
          .getCourse(store.access_token, to.params.id)
          .then((response) => {
            if (response) {
              this.course_name = response.course_info.name;
              this.course_description = response.course_info.description;
              this.course_syllabus = response.course_syllabus;
              this.course_reviews = response.course_reviews;
            } else {
              console.log("ERRRORR");
            }
          });
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem;
  width: 100%;
}

.container > div {
  margin: 1rem 0;
}
Button {
  margin: 0.1rem
  /* padding: 3rem; */
}

.p-fieldset-content > div {
  margin: 0.5rem 0 1rem 0;
}
</style>

