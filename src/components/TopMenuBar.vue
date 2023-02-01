<script setup>
// pinia
import { storeToRefs } from "pinia";
import { useLoginStatusStore } from "../stores/login_status";
const store = useLoginStatusStore();
const { is_logged_in, n_bolt } = storeToRefs(store);
// const { is_logged_in, bolt_count } = store;
const items = [
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    to: "/",
  },
  {
    label: "Courses",
    icon: "pi pi-fw pi-align-center",
    to: "/view/DzLRojjiMQ/",
  },
  {
    label: "Write Review",
    icon: "pi pi-fw pi-pencil",
    to: "/post/1/",
  },
  {
    label: "Upload Syllabus",
    icon: "pi pi-fw pi-upload",
    to: "/upload/1/",
  },
  {
    label: "About",
    icon: "pi pi-fw pi-info-circle",
    to: "/about/",
  },
];
const user_items = [
  {
    label: "Get More Bolt",
    icon: "pi pi-fw pi-bolt",
    to: "/recharge/",
  },
  {
    label: "My Reviews",
    icon: "pi pi-fw pi-user",
    to: "/profile/",
  },
  {
    label: "Report",
    icon: "pi pi-fw pi-question-circle",
    to: "/report/",
  },
  { separator: true },
  {
    label: "Quit",
    icon: "pi pi-fw pi-power-off",
    to: "/quit/",
  },
];
</script>

<template>
  <Menubar :model="items">
    <template #end>
      <div class="user-panel">
        <span v-if="is_logged_in">
          <Menu
            ref="menu"
            :model="user_items"
            :popup="true"
            @mouseleave="mouseleave_toggle"
          />
          <!-- @click="toggle" -->
          <Chip
            icon="pi pi-spin pi-bolt"
            :label="`${n_bolt}`"
            class="chip-button bolt-shake"
            @mouseover="mouseover_toggle"
          >
          </Chip>
        </span>
        <span v-else>
          <Button
            icon="pi pi-sign-in"
            icon-pos="right"
            label="Log In"
            class="p-button-rounded p-button-secondary p-button-sm"
            @click="authorize"
          >
          </Button>
        </span>
      </div>
    </template>
  </Menubar>
</template>

<script>
import ApiService from "../service/apiService";
export default {
  methods: {
    mouseover_toggle(e) {
      this.$refs.menu.show(e);
    },
    mouseleave_toggle(e) {
      this.$refs.menu.hide(e);
    },
    toggle(e) {
      this.$refs.menu.toggle(e);
    },
    authorize() {
      const uri = ApiService.getAuthorizeUri();
      window.location.href = uri;
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.user-panel {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.chip-button {
  margin-right: 1rem;
  user-select: none;
  background-color: var(--gray-200) !important;
}

.chip-button:hover {
  background-color: var(--gray-300) !important;
  box-shadow: 0rem 0rem 1rem 0.1rem var(--gray-300);
  transition: 0.2s;
}

.chip-button:active {
  background-color: var(--gray-400) !important;
}

.bolt-shake:active {
  animation: shake 0.1s;
  background-color: rgba(255, 255, 0, 0.1) !important;
  background-image: linear-gradient(
    135deg,
    rgba(255, 183, 0, 0.5),
    rgba(255, 255, 0, 0.4)
  ) !important;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>