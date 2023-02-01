<script setup>
import SearchBox from "../components/SearchBox.vue";
import confetti from "canvas-confetti";
var end = Date.now() + 4 * 1000;
// go DKU!
var colors = ["#003a81", "#006f3f"];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 70,
    spread: 35,
    startVelocity: 70,
    origin: { x: 0, y: 0.95 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 110,
    spread: 35,
    startVelocity: 70,
    origin: { x: 1, y: 0.95 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
</script>


<template>
  <main>
    <div class="welcome">
      <h1>🦆Welcome!</h1>
    </div>
    <div class="ad">course.gallinula.com</div>
    <div class="mobile_na">
      Mobile version is not supported yet. Please open the website with desktop
      browser.
    </div>
    <div class="slot">
      <br />
      This is a internal platform for students at Duke Kunshan University to
      anonymously review courses and professors.
    </div>
    <!-- <div class="search">
      <span class="p-input-icon-left">
        <InputText class="p-inputtext-lg" type="text" v-model="value1" placeholder="Search"/>
        <i class="pi pi-search" />
      </span>
    </div> -->
    <SearchBox id="searchbox" />
    <!-- <ListBox></ListBox> -->
    <div class="chips">
      <Chip :label="user_count+ ' Active Users'" icon="pi pi-user"></Chip>
      <Chip :label="review_count + ' Course Reviews'" icon="pi pi-pencil"></Chip>
      <Chip :label="syllabus_count + ' Syllabus'" icon="pi pi-upload"></Chip>
      <Divider></Divider>
      <!-- <Tag :value="user_count + ' users'" icon="pi pi-user" rounded></Tag>
      &nbsp;
      <Tag :value="review_count + ' reviews'" icon="pi pi-pencil" rounded></Tag>
      &nbsp;
      <Tag
        :value="syllabus_count + ' syllabi'"
        icon="pi pi-upload"
        rounded
      ></Tag> -->
    </div>
  </main>
  <div style="display: none">Not compatible with</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital@0;1&family=PT+Mono&family=Pacifico&display=swap");

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 10rem 0;
  text-align: center;
}

.search {
  margin: 3rem 0;
}

.p-inputtext-lg {
  width: 40vw;
}

.welcome {
  font-size: 2rem;
  font-family: "Pacifico", cursive;
}

.ad {
  font-size: 1.8rem;
  font-family: "PT Mono", monospace;
}

.slot {
  font-size: 1.3rem;
  width: 50vw;
}

.chips > .p-chip {
  margin: 0 0.2rem;
}

.mobile_na {
  margin-top: 3rem;
  display: none;
}

@media (max-width: 744px) {
  .slot,
  .search,
  .chips,
  .menu {
    display: none;
  }
  .mobile_na {
    display: block;
    /* width:100%; */
  }
}
</style>

<script>
import axios from "axios";
import { storeToRefs } from "pinia";
import { useLoginStatusStore } from "../stores/login_status";
import apiService from "../service/apiService";
// const store = useLoginStatusStore();
// const { is_logged_in, access_token } = storeToRefs(store);
export default {
  data() {
    return {
      user_count: 0,
      review_count: 0,
      syllabus_count: 0,
    };
  },
  async mounted() {
    const store = useLoginStatusStore(this.$pinia);
    // console.log("this.route.path", this.$route.path);
    // console.log("store", store);
    if (this.$route.name == "invite") {
      // console.log("this is /i/, saving invite code to store");
      store.inviter_code = this.$route.params.id;
      // console.log("/i/: store.inviter_code", store.inviter_code);
    }
    if (this.$route.name == "login") {
      let r = await apiService.login(
        this.$route.query.code,
        store.inviter_code
      );
      // console.log("get access_token", access_token)
      if (r.access_token) {
        store.is_logged_in = true;
        store.access_token = r.access_token;
        this.$router.push({ path: "/refresh/" });
      }
    } else if (store.is_logged_in) {
      // console.log("is logged in, refreshing");
      let user = await apiService.getUserProfile(store.access_token);
      // console.log("get user profile", user);
      if (user) {
        store.user_id = user.user_id;
        store.user_name = user.user_name;
        store.email = user.email;
        store.joined_at = user.joined_at;
        store.user_status = user.user_status;
        store.n_bolt = user.n_bolt;
        store.unlocked_course_ids = user.unlocked_course_ids;
        store.uploaded_syllabus_ids = user.uploaded_syllabus_ids;
        store.invite_code = user.invite_code;
        store.invitee_ids = user.invitee_ids;
      }
    }

    // Get stats
    apiService.getUserCount().then((res) => {
      this.user_count = res.pending + res.waitlisted + res.confirmed;
    });
    apiService.getReviewCount().then((res) => {
      this.review_count = res.review_count;
    });
    apiService.getSyllabusCount().then((res) => {
      this.syllabus_count = res.syllabus_count;
    });
    // this.user_count = res1.pending + res1.waitlisted + res1.confirmed;
    // this.review_count = res2.review_count;
    // this.syllabus_count = res3.syllabus_count;
  },
};
</script>