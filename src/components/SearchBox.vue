<template>
  <span class="p-input-icon-left">
    <i class="pi pi-search" /> &nbsp;
    <AutoComplete
      class="searchbox"
      v-model="selectedCourse"
      placeholder="Search"
      :suggestions="filteredCourses"
      @complete="searchCourse($event)"
      @item-select="onCourseSelect($event)"
      optionLabel="label"
      forceSelection
      :completeOnFocus="false"
      inputClass="searchbox-input"
      panelClass="searchbox-panel"
      dropdownClass="searchbox-dropdown"
      loadingIcon="none"
    />
    <!-- optionGroupChildren="items"
      optionGroupLabel="label" -->
  </span>
</template>

<script>
import { FilterService, FilterMatchMode } from "primevue/api";
import NodeService from "../service/NodeService";

export default {
  created() {
    this.nodeService = new NodeService();
  },
  mounted() {
    this.nodeService.getTreeNodes().then((data) => (this.courses = data));
  },
  data() {
    return {
      selectedCourse: null,
      courses: null,
      filteredCourses: null,
    };
  },
  methods: {
    searchCourse(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCourses = [...this.courses];
          console.log("triggered1");
        } else {
          let tmp = [];
          let tmp_labels = [];
          this.courses.forEach((course) => {
            course.items.forEach((item) => {
              // console.log(item)
              if (
                item.label.toLowerCase().includes(event.query.toLowerCase())
              ) {
                // console.log(tmp_labels.indexOf(item.label))
                if (tmp_labels.indexOf(item.label) === -1) {
                  tmp.push(item);
                  tmp_labels.push(item.label);
                }
              }
            });
          });
          this.filteredCourses = tmp
          // console.log(this.filteredCourses)
        }
      }, 50);
    },
    onCourseSelect(event) {
      this.$router.push(event.value.to);
    },
  },
};
</script>


<style scoped>
.searchbox {
  margin: 2rem;
}
</style>

<style>
.searchbox-input {
  width: 40vw;
  height: 2.5rem;
  /* padding: 1rem 8rem; */
  /* text-align: left; */
}
</style>