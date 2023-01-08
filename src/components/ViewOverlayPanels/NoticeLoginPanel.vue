<script setup>
import ViewContentPanel from "../ViewContentPanel.vue";
</script>

<template>
  <ViewContentPanel class="background" :fake="true" />
  <div class="foreground card prompt2">
    <div class="welcome">Hi there!</div>
    <!-- <div class="ad">{{ courseCode || "[ERROR] Please do not process" }}</div> -->
    <div class="welcome">✨</div>
    <div>Welcome to course.gallinula.com!</div>
    <div>
      Seems like you haven't logged in, please <b>log in</b> to see the content.
    </div>
    <Divider />
    <div>
      The website is still under development, and it is expected to launch in
      March. But before that, I plan to give early access to people who have
      signed up the waitlist. You can join the waitlist now!
    </div>
    <!-- <div>You can earn the bolt by</div>
      <li>Writing 1 review, or</li>
      <li>Uploading 1 syllabus, or</li>
      <li>Buying at cost ~0.5RMB</li>
      <Divider />
      <div>Now, join the waitlist by uploading your first syllabus!</div>
      <Divider /> -->
    <Divider />
    <div class="nav">
      <Button
        label="Go Back"
        type="button"
        class="p-button-rounded"
        icon="pi pi-angle-left"
        icon-pos="left"
        @click="this.$router.go(-1)"
        :disabled="true"
      ></Button>
      <Button
        label="Log in & Join Waitlist"
        type="button"
        class="p-button-rounded p-button-success"
        @click="authorize"
      ></Button>
    </div>
  </div>
</template>

<script>
import apiService from "../../service/apiService";
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
  methods: {
    authorize() {
      const uri = apiService.getAuthorizeUri();
      window.location.href = uri;
    }
  }
};
</script>

<style scoped>
.p-divider-solid.p-divider-horizontal:before {
  border-top-style: none;
}
.prompt2 {
  background-image: linear-gradient(135deg, #003a81 0%, #006f3f 150%);
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