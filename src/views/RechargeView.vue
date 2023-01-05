<script setup>
import FancyCard from "../components/FancyCard.vue";
import confetti from "canvas-confetti";

confetti({
  particleCount: 200,
  startVelocity: 90,
  angle: 90,
  spread: 100,
  origin: {
    x: 0.5,
    y: 1.2,
  },
});
</script>

<template>
  <div class="container">
    <div class="welcome">
      <h1>Gallinula Bolt⚡️</h1>
    </div>
    <div class="ad">Choose an option to recharge your account</div>
    <div class="cards">
      <FancyCard @click="toggle_earn" id="card1">
        <template #title> Earn </template>
        <template #emoji> ✍️ </template>
        <template #description> Earn ⚡️ by writing a review </template>
      </FancyCard>
      <FancyCard @click="toggle_buy" id="card2">
        <template #title> Redeem </template>
        <template #emoji> 💰 </template>
        <template #description> Redeem your ⚡️ gift code </template>
      </FancyCard>
    </div>
  </div>
  <DynamicDialog />
</template>

<script>
import { useDialog } from "primevue/usedialog";
import BoltCodeValidate from "../components/BoltCodeValidate.vue";

export default {
  methods: {
    toggle_earn() {
      this.$router.push("/post/1");
    },
    toggle_buy() {
      this.$dialog.open(BoltCodeValidate, {
        props: {
          header: "Redeem Code",
          modal: true,
          draggable: false
        },
    });
    },
  },
};
</script>



<style scoped>
.ad {
  margin-bottom: 5vh;
}

.container {
  margin: 6vh 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cards {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

#card1 {
  background-image: linear-gradient(135deg, #5b247a 0%, #1bcedf 100%);
}

#card2 {
  background-image: linear-gradient(135deg, #f36265 0%, #961276 100%);
}
</style>
