<script setup>
import ViewContentPanel from "../ViewContentPanel.vue";
</script>

<template>
  <ViewContentPanel class="background" :fake="true" />
  <div class="foreground card prompt2">
    <div class="welcome">Unlock now?</div>
    <div class="ad">{{ courseCode || "[ERROR] Please do not process" }}</div>
    <div class="welcome">✨🔓</div>
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
      ></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalRegistered: 140,
      wlNumber: 12,
      syllabiUploadNum: 2,
      friendInviteNum: 4,
      courseCode: "COMPSCI 301",
    };
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