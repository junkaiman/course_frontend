<template>
  <Panel class="p-fluid container" header="Report an issue">
    <div>Please select a category</div>
    <div>
      <Dropdown v-model="category" :options="categoryOptions" />
    </div>

    <div>
      <InputText v-model="issue" placeholder="Title" />
    </div>
    <div>
      <Textarea v-model="description" rows="5" placeholder="Description" />
    </div>
    <div>
      <Button label="Submit" @click="handleSubmit" />
    </div>
  </Panel>
</template>

<script>
export default {
  data() {
    return {
      category: null,
      issue: null,
      description: null,
      categoryOptions: ["Out-of-date content", "False course/faculty information", "Missing course/faculty content",  "Inappropriate review content", "Inaccessible resource", "Other"],
    };
  },
    methods: {
        handleSubmit() {
            // open email
            window.open(`mailto:junkaiman@outlook.com?subject=${this.category} - ${this.issue}&body=${this.description}`);
        },
    },
};
</script>

<style scoped>
.p-fluid {
  margin: 5rem 15rem;
}

.container div {
  margin-bottom: 1rem;
}
</style>