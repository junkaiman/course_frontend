<template>
  <Menubar :model="items">
    <template #end>
      <div class="user-panel">
        <Menu
          ref="menu"
          :model="user_items"
          :popup="true"
          @mouseleave="mouseleave_toggle"
        />
        <!-- @click="toggle" -->
        <Chip
          icon="pi pi-spin pi-bolt"
          label="14"
          class="chip-button bolt-shake"
          @mouseover="mouseover_toggle"
        >
        </Chip>
        <!-- <Button
          icon="pi pi-user"
          class="p-button-rounded p-button-text"
          style="margin-right: 1rem"
          @click="toggle"
        >
        </Button> -->
      </div>
    </template>
  </Menubar>
</template>

<script>
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
  },
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "Courses",
          icon: "pi pi-fw pi-align-center",
          to: "/view/82ddfb3af8",
        },
        {
          label: "Write Review",
          icon: "pi pi-fw pi-pencil",
          to: "/post/1",
          style: "",
        },
        {
          label: "About",
          icon: "pi pi-fw pi-info-circle",
          to: "/about",
        },
      ],
      user_items: [
        {
          label: "Get More Bolt",
          icon: "pi pi-fw pi-bolt",
          to: "/recharge",
        },
        {
          label: "My Profile",
          icon: "pi pi-fw pi-user",
          to: "/profile",
        },
        {
          label: "Report",
          icon: "pi pi-fw pi-question-circle",
          to: "/report",
        },
        { separator: true },
        {
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
          to: "/quit",
        },
      ],
    };
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