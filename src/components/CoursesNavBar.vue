
<template>
  <ScrollPanel style="width: 100%; height: 150vh" class="leftnavbar">
    <PanelMenu :model="courses">
      <!-- <template #item="{ item }">
        <a :href="item.to">{{ item.label }} {{item.data}}</a>
      </template> -->
    </PanelMenu>
  </ScrollPanel>
</template>

<script>
import NodeService from "../service/NodeService";

export default {
  data() {
    return {
      courses: null,
      selectedKey2: null,
      dialogVisible: false,
    };
  },
  nodeService: null,
  created() {
    this.nodeService = new NodeService();
  },
  mounted() {
    this.nodeService.getTreeNodes().then((data) => (this.courses = data));
  },
  methods: {
    onNodeSelect(e) {
      console.log(e.data);
    },

    onNodeUnselect(e) {
      console.log(e.data);
    },
  },
};
</script>

<style>
.leftnavbar {
  padding: 0.5rem;
  /* margin: 0rem 0.5rem; */
}

/* .leftnavbar .p-scrollpanel-bar {
  background-color: #e2e2e2 !important;
  opacity: 1;
  transition: background-color 0.3s;
}

.leftnavbar .p-scrollpanel-bar:hover {
  background-color: #cecece !important;
} */
</style>