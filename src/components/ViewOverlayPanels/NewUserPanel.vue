<script setup>
import ViewContentPanel from "../ViewContentPanel.vue";
</script>

<template>
  <ViewContentPanel class="background" :fake="true" />
  <div class="foreground card prompt2">
    <div class="welcome">Welcome!</div>
    <!-- <div class="ad">{{ courseCode || "[ERROR] Please do not process" }}</div> -->
    <div class="welcome">✨</div>
    <div>Seems like this is your very first step on this platform!</div>
    <div>First, you need to <b>upload 1 syllabus</b> of any course you are taking. After uploading, you will automatically join the waitlist.</div>
    <Divider />
    <!-- <div>Look at the top right corner ⚡️ of this page!</div>
    <div>The <b>spinning bolt <i class="pi pi-spin pi-bolt"></i></b> is your credit on this platform. You can use it to unlock course reviews. But you will lose credits when you</div>
    <li>Upload wrong documents on purpose</li>
    <li>Submit misrepresented reviews</li>
    <Divider />
    <div>You can earn the bolt by</div>
    <li>Writing 1 review, or</li>
    <li>Uploading 1 syllabus, or</li>
    <li>Buying at cost ~0.5RMB</li>
    <Divider /> -->
    <div>Now, join the waitlist by uploading your first syllabus!</div>
    <Divider />
    <div class="nav">
      <Button
        label="Go Back"
        type="button"
        class="p-button-rounded"
        icon="pi pi-angle-left"
        icon-pos="left"
        @click="$router.go(-1)"
        :disabled="true"
      ></Button>
      <Button
        label="Upload Syllabus & Join Waitlist"
        type="button"
        class="p-button-rounded p-button-success"
        @click="$router.push('/upload/1/')"
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
.p-divider-solid.p-divider-horizontal:before {
  border-top-style: none;
}
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
  margin: 4rem auto;
  width: 38rem;
  padding: 3rem;
  border: unset;
}
</style>