<template>
  <div class="card prompt3">
    <div class="p-fluid">
      <!-- <label for="">Select File</label> -->
      <FileUpload
        name="demo[]"
        url="./upload"
        accept=".pdf,.doc,.docx"
        :maxFileSize="10000000"
        :file-limit="1"
        :showUploadButton="false"
        :showCancelButton="false"
        :auto="true"
      />
    </div>
  </div>
</template>

<style>
.p-fileupload-file-thumbnail {
  display: none;
}
</style>