<script setup>
import { RouterLink, RouterView } from "vue-router";
import TopMenuBar from "./components/TopMenuBar.vue";
</script>

<template>
  <Button
    id="toggle-chat-button"
    type="button"
    label="Chat"
    @click="toggleChat"
    class="p-button-secondary p-button-rounded"
    icon="pi pi-comments"
  />
  <OverlayPanel ref="op" :dismissable="true">
    <iframe
      src="https://deadsimplechat.com/8_bfe6Inl"
      width="400px"
      height="600px"
      frameBorder="0"
    ></iframe>
  </OverlayPanel>
  <div class="top-banner">
    👨‍💻 course.gallinula.com is under development. Expected to release before
    session 4!
    <a href="https://afdian.net/a/hi_keon">
      ☕️ Buy me a coffee to make it earlier!
    </a>
  </div>
  <div class="menu"><TopMenuBar /></div>
  <div class="main"><RouterView /></div>
</template>

<script>
export default {
  methods: {
    toggleChat(event) {
      this.$refs.op.toggle(event);
    },
  },
};
</script>

<style>
.main {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}

b {
  font-weight: bold;
}

.top-banner {
  /* margin-bottom: 30px; */
  text-align: center;
  padding: 0.5rem;
  justify-content: center;
  height: 100%;
  background-color: #ea4c4c;
  color: white;
  font-size: 1.1rem;
}

.top-banner a {
  color: white;
  text-decoration: underline;
}

#toggle-chat-button {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1.5rem;
  z-index: 1000;
}

.p-overlaypanel-content {
  padding: 0 0.2rem !important;
}

iframe {
  border: none;
}
</style>
