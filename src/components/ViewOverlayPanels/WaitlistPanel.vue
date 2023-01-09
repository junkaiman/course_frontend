<script setup>
import ViewContentPanel from "../ViewContentPanel.vue";
// import { useLoginStatusStore } from "../../stores/login_status";
// import { storeToRefs } from "pinia";
// const loginStatusStore = useLoginStatusStore();
// const {uploaded_syllabus_ids, invitee_ids, access_token} = storeToRefs(loginStatusStore);
</script>

<template>
  <ViewContentPanel class="background" :fake="true" />
  <div class="foreground card prompt2">
    <div class="welcome">Stay Tuned!</div>
    <div class="welcome">✨</div>
    <div>You are on the private alpha waitlist!</div>
    <div>
      You are now <b>#{{ wlNumber }}</b> in line.
    </div>
    <div>By uploading more syllabi, you can move up in line.</div>
    <div>By inviting friends to sign up, you can move up in line.</div>
    <Divider />
    <div>To move forward the line, you can:</div>
    <li>Upload {{ need_syllabiUploadNum || 1 }} syllabi, or</li>
    <li>Invite {{ need_friendInviteNum || 2 }} friends</li>
    <Divider />
    <div>
      You have uploaded <b>{{ n_syllabus || 0 }}</b> syllabi and invited
      <b>{{ n_invites || 0 }}</b> friends! Keep going!
    </div>
    <Divider />
    <div class="nav">
      <Button
        label="Upload Syllabus"
        type="button"
        class="p-button-rounded"
        @click="$router.push('/upload/1/')"
      ></Button>
      <Button
        label="Invite Friends"
        type="button"
        class="p-button-rounded p-button-success"
        @click="copyInvitation"
      ></Button>
    </div>
  </div>
</template>

<script>
import apiService from "../../service/apiService";
import { useLoginStatusStore } from "../../stores/login_status";
export default {
  async mounted() {
    const store = useLoginStatusStore(this.$pinia);
    let order = await apiService.getWaitlistStatus(store.access_token);
    if (order) {
      this.wlNumber = order;
      this.n_syllabus = store.uploaded_syllabus_ids.length;
      this.n_invites = store.invitee_ids.length;
      this.invite_code = store.invite_code;
    }
  },
  data() {
    return {
      wlNumber: null,
      n_syllabus: 0,
      n_invites: 0,
    };
  },
  methods: {
    copyInvitation() {
      navigator.clipboard.writeText(`https://course.gallinula.com/i/${this.invite_code}`);
      this.$toast.add({
        severity: "success",
        summary: "Copied!",
        detail: "Your invitation link has been copied to your clipboard.",
        life: 3000,
      });
    },
  },
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
  margin: 8rem auto;
  width: 38rem;
  padding: 3rem;
  border: unset;
}
</style>