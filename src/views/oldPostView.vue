<template>
  <div class="container">
    <flow-form ref="flowform" :questions="questions" :language="language" :standalone="true">
    </flow-form>
  </div>
</template>
  
<script>
// Import necessary components and classes
import {
  FlowForm,
  QuestionModel,
  QuestionType,
  ChoiceOption,
  LanguageModel,
} from "@ditdot-dev/vue-flow-form";

import NodeService from "../service/NodeService";

export default {
  name: "example",
  components: {
    FlowForm,
  },
  data() {
    return {
      language: new LanguageModel({
        // Your language definitions here (optional).
        // You can leave out this prop if you want to use the default definitions.
      }),
      questions: [
        // QuestionModel array
        new QuestionModel({
          title: "Question",
          type: QuestionType.MultipleChoice,
          options: [
            new ChoiceOption({
              label: "Answer",
            }),
          ],
        }),
      ],
    };
  },
  created() {
    this.nodeService = new NodeService();
  },
  mounted() {
    this.nodeService.getSurvey().then((data) => {
      console.log("here");
      console.log(data);
      this.questions = data;
      console.log(this.$refs.flowform);
    });
  },
};
</script>
  
<style>
/* Import Vue Flow Form base CSS */
@import "@ditdot-dev/vue-flow-form/dist/vue-flow-form.css";
/* Import one of the Vue Flow Form CSS themes (optional) */
@import "@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css";
/* @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
/* @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */

.container {
  width: 100%;
}
</style>