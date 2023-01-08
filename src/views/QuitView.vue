<template></template>

<script>
import { useLoginStatusStore } from "../stores/login_status";
export default {
  mounted() {
    const store = useLoginStatusStore();
    if (this.$route.path == "/quit/") {
      store.$reset();
      this.$router.push({ path: "/" });
    }
  },
};
</script>