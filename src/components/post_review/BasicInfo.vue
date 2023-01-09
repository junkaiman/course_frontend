<template>
  <div class="card prompt3">
    <div class="p-fluid">
      <label for="">🔍 Search Course</label>
      <AutoComplete
        v-model="selectedCourse"
        placeholder="Search"
        :suggestions="filteredCourses"
        @complete="searchCourse($event)"
        @item-select="onCourseSelect($event)"
        optionLabel="label"
        forceSelection
        :completeOnFocus="false"
        loadingIcon="none"
      />
    </div>
  </div>
  <div class="card prompt2">
    <div class="p-fluid">
      <label for="" disabled>Course Code</label>
      <InputText v-model="course_code" disabled></InputText>
      <label for="">Course Name</label>
      <InputText v-model="course_name" disabled></InputText>
      <label for="">Professor</label>
      <AutoComplete
        v-model="course_prof"
        placeholder=""
        :suggestions="filteredProfs"
        @complete="searchProf($event)"
        @item-select="onProfSelect($event)"
        forceSelection
        :completeOnFocus="false"
        loadingIcon="none"
      />
      <!-- <InputText v-model="course_prof"></InputText> -->
      <label for="">Section</label>
      <Dropdown v-model="course_section" :options="sections"></Dropdown>
      <!-- <InputText v-model="course_section"></InputText> -->
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePostReviewStore } from "../../stores/post_review";
import NodeService from "../../service/NodeService";
const store = usePostReviewStore();
const { course_code, course_name, course_prof, course_section } =
  storeToRefs(store);
</script>

<script>
export default {
  created() {
    this.nodeService = new NodeService();
  },
  mounted() {
    this.nodeService.getTreeNodes().then((data) => (this.courses = data));
    this.nodeService.getProfs().then((data) => (this.profs = data));
  },
  data() {
    return {
      courses: null,
      profs: null,
      selectedCourse: null,
      filteredCourses: null,
      selectedProf: null,
      filteredProfs: null,
      sections: [
      "2023Spring",
      "2022Fall",
      "2022Spring",
      "2021Fall",
      "2021Spring",
      "2020Fall",
      "2020Spring",
      "2019Fall",
      "2019Spring",
      "2018Fall",
      ],
    };
  },
  methods: {
    searchCourse(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCourses = [...this.courses];
        } else {
          let tmp = [];
          this.courses.forEach((course) => {
            course.items.forEach((item) => {
              if (item.label.toLowerCase().includes(event.query.toLowerCase()))
                tmp.push(item);
            });
          });
          this.filteredCourses = tmp;
        }
      }, 50);
    },
    searchProf(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredProfs = [...this.profs];
        } else {
          let tmp = [];
          this.profs.forEach((prof) => {
            if (prof.toLowerCase().includes(event.query.toLowerCase()))
              tmp.push(prof);
          });
          this.filteredProfs = tmp;
        }
      }, 50);
    },
    onCourseSelect(event) {
      const store = usePostReviewStore(this.$pinia);
      const [course_code, ...rest] = event.value.label.split(" - ");
      const course_name = rest.join(" - ");
      const course_id = event.value.to.split('/').at(-1)
      store.course_id = course_id;
      store.course_code = course_code;
      store.course_name = course_name;
    },
    onProfSelect(event) {
      const store = usePostReviewStore(this.$pinia);
      store.course_prof = event.value;
    },
  },
};
</script>

<style>
.prompt1 {
  background-image: linear-gradient(135deg, #38b7f2 0%, #833cf6 150%);
  color: white;
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
}

.prompt2 {
  background-image: linear-gradient(135deg, #38b7f2 0%, #833cf6 150%);
  color: white;
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
}
</style>