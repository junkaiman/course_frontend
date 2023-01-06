<script setup>
import CoursesNavBar from "../components/CoursesNavBar.vue";
import StatsChart from "../components/StatsChart.vue";
import ReviewCard from "../components/ReviewCard.vue";
</script>

<template>
  <div class="left">
    <CoursesNavBar />
  </div>
  <div class="right">
    <div class="stats">
      <Fieldset legend="COMPSCI 101 - Introduction to Computer Science">
        <div class="description">
          <b>What is it about?</b>
          <br />
          COMPSCI 101 is an introduction to computer science course designed to
          provide a foundational understanding of the field. Students will learn
          basic concepts such as algorithms, data structures, and computer
          architecture. The course will also introduce students to programming
          and problem-solving techniques. Through lectures, hands-on lab
          assignments, and projects, students will gain a broad overview of the
          field of computer science and its applications. This course is ideal
          for students with little or no programming experience who are
          interested in exploring the field of computer science.
        </div>
        <div class="faculties">
          <b>Who have taught this class?</b>
          <br />
          <Chip class="chip-button" label="John Doe" />
          <Chip class="chip-button" label="Amy Liu" />
        </div>
        <!-- <Fieldset legend="Resources" :toggleable="true"></Fieldset> -->
      </Fieldset>
    </div>
    <div class="resources">
      <Fieldset legend="Resources" :toggleable="true">
        <Button class="p-button-secondary">📄 Syllabus (2020 Fall)</Button>
        <Button class="p-button-secondary">📄 Syllabus (2021 Fall)</Button>
      </Fieldset>
    </div>
    <div class="stats">
      <Fieldset legend="Statistics" :toggleable="true">
        <div style="display: flex; flex-direction: row; align-items: center">
          <StatsChart />
        </div>
      </Fieldset>
    </div>
    <div class="reviews">
      <Fieldset legend="Reviews" :toggleable="true" :collapsed="false">
        <Accordion>
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

<style scoped>
Button {
  margin: 0 0.15rem;
  /* padding: 3rem; */
}

.left {
  width: 40%;
  float: left;
}

.right {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 100%;
}

.right > div {
  margin: 0.5rem;
}
.p-fieldset-content > div {
  margin: 0.5rem 0 1rem 0;
}
</style>