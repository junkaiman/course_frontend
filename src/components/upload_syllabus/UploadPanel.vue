<template>
  <div class="card prompt3">
    <div class="p-fluid">
      <!-- <label for="">Select File</label> -->
      <!-- url="./upload" -->
      <FileUpload
        name="demo[]"
        url="./upload"
        accept=".pdf,.doc,.docx"
        :maxFileSize="10000000"
        :file-limit="1"
        :showUploadButton="false"
        :showCancelButton="false"
        :auto="false"
        :customUpload="true"
        @select="selected($event)"
        @before-upload="beforeUpload($event)"
        @before-send="beforeSend($event)"
        @upload="myUploader($event)"
      >
      </FileUpload>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { usePostReviewStore } from "../../stores/post_review";
import NodeService from "../../service/NodeService";

export default {
  mounted() {},
  unmounted() {
    const store = usePostReviewStore(this.$pinia);
    store.syllabus_file = null
  },
  data() {
    return {
      uploadedFiles: [],
      files: [],
      totalSize: 0,
      totalSizePercent: 0,
    };
  },
  methods: {
    myUploader(event) {
      console.log(event.files);
    },
    beforeUpload(event) {
      console.log(event);
    },
    beforeSend(event) {
      console.log(event);
    },
    selected(event) {
      const store = usePostReviewStore(this.$pinia);
      store.syllabus_file = event.files.at(0);
      console.log(store.syllabus_file);
      console.log(event);
    },
  },
};
</script>

<style>
.p-fileupload-file-thumbnail {
  display: none;
}

.p-fileupload-file-badge {
  display: none !important;
}
</style>