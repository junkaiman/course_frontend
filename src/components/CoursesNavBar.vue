
<template>
    <!-- <main> -->
        <div>
          <!-- <Tree :value="nodes1" scrollHeight="85vh"></Tree> -->
          <Tree
            :value="nodes1"
            selectionMode="single"
            v-model:selectionKeys="selectedKey2"
            :metaKeySelection="true"
            :filter="true"
            filterMode="lenient"
            scrollHeight="85vh"
            @nodeSelect="onNodeSelect"
            ></Tree>
            <!-- @nodeUnselect="onNodeUnselect" -->
        </div>
        
    <!-- </main> -->
</template>

<script>
import NodeService from "../service/NodeService";

export default {
  data() {
    return {
      nodes1: null,
      selectedKey2: null,
      dialogVisible: false,
    };
  },
  nodeService: null,
  created() {
    this.nodeService = new NodeService();
  },
  mounted() {
    this.nodeService.getTreeNodes().then((data) => (this.nodes1 = data));
    this.nodes2 = Array.from({ length: 100 }).map((_, i) =>
      this.createNode(i, 2)
    );
  },
  methods: {
    onNodeSelect(e) {
        console.log(e.data)
    },

    onNodeUnselect(e) {
        console.log(e.data)
    },

    createNode(i, children) {
      let node = {
        key: "node_" + i,
        label: "Node " + i,
        data: "Node " + i,
        expandedIcon: "pi pi-folder-open",
        collapsedIcon: "pi pi-folder",
        children: Array.from({ length: children }).map((_, j) => {
          return {
            label: "Node " + i + "." + j,
            data: "Node " + i + "." + j,
            icon: "pi pi-file",
          };
        }),
      };

      return node;
    },
  },
};
</script>