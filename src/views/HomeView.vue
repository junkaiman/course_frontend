<script setup>
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

<script>
import SearchBox from "../components/SearchBox.vue";
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
    <SearchBox />
    <!-- <ListBox></ListBox> -->
    <div class="chips">
      <Chip>Course Reviews</Chip>
      <Chip>Syllabus</Chip>
      <Chip>Faculty Reviews</Chip>
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