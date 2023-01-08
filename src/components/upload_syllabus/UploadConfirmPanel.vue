<template>
  <div class="card prompt3">
    <div class="p-fluid">
      <label for="">Course Code</label>
      <InputText v-model="course_code" disabled></InputText>
      <label for="">Course Name</label>
      <InputText v-model="course_name" disabled></InputText>
      <label for="">Professor</label>
      <InputText v-model="course_prof" disabled></InputText>
      <label for="">Section</label>
      <InputText v-model="course_section" disabled></InputText>
      <Divider/>
      <label for="">File Name</label>
      <InputText v-model="syllabus_filename" disabled></InputText>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePostReviewStore } from "../../stores/post_review";
import NodeService from "../../service/NodeService";
const store = usePostReviewStore();
const { course_code, course_name, course_prof, course_section, syllabus_filename } =
  storeToRefs(store);
</script>