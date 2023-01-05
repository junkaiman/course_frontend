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
          console.log("triggered1")
        } else {
          let tmp = [];
          this.courses.forEach((course) => {
            course.items.forEach((item) => {
              if (item.label.toLowerCase().includes(event.query.toLowerCase()))
                tmp.push(item);
            })
          })
          this.filteredCourses = tmp;

          // this.filteredCourses = this.courses.filter((course) => {
          //   return course.items.filter((item) => {
          //     return item.label
          //       .toLowerCase()
          //       .includes(event.query.toLowerCase());
            // });
            // course.items.filter((item) => {
            //   return item.label
            //     .toLowerCase()
            //     .includes(event.query.toLowerCase());
            // });
            // return course.label
            //   .toLowerCase()
            //   .includes(event.query.toLowerCase());
          // });
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