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
      class="iframe-placeholder"
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

<style>
.iframe-placeholder {
  /* background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100% 100%"><text fill="%23111111" x="50%" y="50%" font-family="\'PT Mono\', monospace" font-size="36" text-anchor="middle">Loading...</text></svg>') 0px 0px no-repeat; */
  background: url('data:image/svg+xml;charset=utf-8,<svg width="100%" height="100%" viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg" stroke="%23111111"><g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="50%" cy="45%" r="6" stroke-opacity="0"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite" /><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite" /><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="50%" cy="45%" r="6" stroke-opacity="0"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite" /><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite" /><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="50%" cy="45%" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite" /></circle></g><text fill="%23111111" x="50%" y="53%" font-family="\'PT Mono\', monospace" font-size="24" text-anchor="middle">Loading</text></svg>')
    0px 0px no-repeat;
}

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
  padding: 0.3rem;
  justify-content: center;
  height: 100%;
  background-color: #ea4c4c;
  color: white;
  font-size: 1.1rem;
  background: linear-gradient(
    45deg,
    #ea4c4c 25%,
    #e47070 0,
    #e47070 50%,
    #ea4c4c 0,
    #ea4c4c 75%,
    #e47070 0
  );
  background-size: 30px 30px;
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

<script>
import axios from "axios";

export default {
  methods: {
    toggleChat(event) {
      this.$refs.op.toggle(event);
    },
  },
};
</script>