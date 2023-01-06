<script setup>
import ViewContentPanel from "../components/ViewContentPanel.vue";
</script>

<template>
  <ViewContentPanel class="background" :fake="true" />
  <div class="foreground card prompt2">
    <div class="welcome"> Stay Tuned!</div>
    <div class="welcome">✨</div>
    <div>You are on the private alpha waitlist! </div>
    <div>You are now <b>#{{ wlNumber }}</b> in line. </div>
    <div>By uploading more syllabi, you can move up in line.</div>
    <div>By inviting friends to sign up, you can move up in line.</div>
    <Divider />
    <div>To move 1 spot forward, you need to: </div>
    <li>Upload {{syllabiUploadNum || 2}} syllabi, or</li>
    <li>Invite {{friendInviteNum || 4}} friends</li>
    <Divider/>
    <div class="nav">
      <Button label="Upload Syllabus" type="button" class="p-button-rounded"></Button>
      <Button label="Invite Friends" type="button" class="p-button-rounded p-button-success"></Button>
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
    };
  },

}
</script>

<style scoped>

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
    margin: 10rem auto;
    width: 38rem;
    padding: 3rem;
    border: unset;
}

</style>