<script setup>
import ViewContentPanel from "../ViewContentPanel.vue";
</script>

<template>
  <ViewContentPanel class="background" :fake="true" />
  <div class="foreground card prompt2">
    <div style="margin-bottom: 10px">
      <!-- The course currently has -->
      <Tag
        :value="reviews_count + ' reviews'"
        rounded
        severity="warning"
        icon="pi pi-pencil"
      ></Tag>
      &nbsp;
      <!-- and  -->
      <Tag
        :value="syllabi_count + ' syllabi'"
        rounded
        severity="warning"
        icon="pi pi-upload"
      ></Tag>
    </div>
    <div class="welcome">Unlock now?</div>
    <div class="welcome">✨🔓</div>
    <div class="ad">{{ course_name || "[ERROR]" }}</div>
    <Divider />
    <div>Unlocking this page will cost you 1 bolt ⚡️</div>
    <div>After unlocking, you will have unlimited access to the content.</div>
    <Divider />
    <div>You can recharge 1 bolt by:</div>
    <li>Writing 1 review, or</li>
    <li>Upload 1 syllabus, or</li>
    <li>Buy at cost 0.5RMB</li>
    <Divider />
    <div class="nav">
      <Button
        label="Go Back"
        type="button"
        class="p-button-rounded"
        icon="pi pi-angle-left"
        icon-pos="left"
        @click="this.$router.go(-1)"
      ></Button>
      <Button
        label="Unlock Now"
        type="button"
        class="p-button-rounded p-button-success"
        icon="pi pi-unlock"
        @click="unlockCourse"
      ></Button>
    </div>
  </div>
</template>

<script>
import apiService from "../../service/apiService";
import { useLoginStatusStore } from "../../stores/login_status";
export default {
  data() {
    return {};
  },
  props: {
    course_code: Array,
    course_name: String,
    syllabi_count: Number,
    reviews_count: Number,
  },
  methods: {
    async unlockCourse() {
      const store = useLoginStatusStore(this.$pinia);
      let result = await apiService.unlockCourse(
        store.access_token,
        this.$route.params.id
      );
      if (result) {
        // console.log(result);
        if (result.status == "ok") {
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: result.message,
            life: 3000,
          });
          this.$router.go(0);
        } else {
          this.$toast.add({
            severity: "error",
            summary: "Error",
            detail: result.message,
            life: 3000,
          });
        }
      } else {
        console.log("ERRRORR");
      }
    },
  },
};
</script>

<style scoped>
.background {
  position: absolute;
  left: -1rem;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);

  /* disable select */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* disable drag */
  -webkit-app-region: no-drag;
  /* disable click */
  pointer-events: none;
}

.foreground {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10rem auto;
  width: 38rem;
  padding: 3rem;
  border: unset;
}
</style>