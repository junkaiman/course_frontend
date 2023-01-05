<template>
  <div
    class="tiltcard"
    data-tilt
    data-tilt-scale="1.2"
    data-tilt-glare
    data-tilt-max-glare="0.3"
    data-tilt-reverse="false"
    ref="tiltcard"
  >
    <div class="title"><slot name="title"></slot></div>
    <div class="emoji"><slot name="emoji"></slot></div>
    <div class="description"><slot name="description"></slot></div>
  </div>
</template>

<style scoped>

.title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 10%;
    font-family: 'Libre Bodoni', serif;
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    width: 70%;
    text-align: center;
}

.emoji {
    font-size: 7rem;
    margin-bottom: 10%;
}

.description {
    font-size: 1.1rem;
    text-align: center;

}
.tiltcard {
  width: 22vw;
  height: calc(22vw * 1.5);
  background-image: linear-gradient(135deg, #5b247a 0%, #1bcedf 100%);
  border-radius: 1.5rem;
  box-shadow: 0.5rem 1rem 1.5rem rgba(0, 0, 0, 0.15);
  color: white;
  
  display: flex;
  flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    
}

.tiltcard:hover {
  cursor: pointer;
}

.rgb::after {
    opacity: 0.1;
  content: "";
  background: linear-gradient(
      45deg,
      #ff0000 0%,
      #ff9a00 10%,
      #d0de21 20%,
      #4fdc4a 30%,
      #3fdad8 40%,
      #2fc9e2 50%,
      #1c7fee 60%,
      #5f15f2 70%,
      #ba0cf8 80%,
      #fb07d9 90%,
      #ff0000 100%
    )
    repeat 0% 0% / 300% 100%;
  position: absolute;
  inset: -10px;
  border-radius: 5px;
  filter: blur(30px);
  transform: translateZ(-1px); /*or z-index */
  animation: rgb 8s linear infinite;
}
@keyframes rgb {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>



<script>
import VanillaTilt from "vanilla-tilt";

export default {
  mounted() {
    VanillaTilt.init(this.$refs.tiltcard, {
      max: 10,
      speed: 800,
      glare: true,
    
    });
  },
};
</script>