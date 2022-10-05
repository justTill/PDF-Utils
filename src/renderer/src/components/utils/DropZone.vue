<template>
  <div :data-active="active" @dragenter.prevent="setActive" @dragover.prevent="setActive"
       @dragleave.prevent="setInactive" @drop.prevent="onDrop">
    <label for="file-input">
				<span v-if="active">
					<span>Drop Them Here</span>
					<span class="smaller"> to add them</span>
				</span>
      <span v-else class="pointer">
					<span>Drag Your Files Here</span>
					<span class="smaller">
						or <strong><em>click here</em></strong> to select files
					</span>
				</span>
      <input type="file" id="file-input" multiple @change="onInputChange"/>
    </label>
    <ul class="image-list" v-show="uploadedFiles.length">
      <li v-for="file of uploadedFiles" :key="file.id" :file="file" @remove="removeFile" class="file-preview">
        <button @click="removeFile(file)" class="close-icon">&times;</button>
        <span>{{ file.file.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {ref} from 'vue'
import {UploadableFile} from "../../utils/UploadableFile.js";

export default {
  name: "DropZone",
  props: {
    uploadedFiles: Array
  },
  data() {
    return {
      active: ref(false),
      inActiveTimeout: null,
      events: ['dragenter', 'dragover', 'dragleave', 'drop']
    }
  },
  mounted() {
    this.events.forEach((eventName) => {
      document.body.addEventListener(eventName, this.preventDefaults)
    })
  },
  unmounted() {
    this.events.forEach((eventName) => {
      document.body.addEventListener(eventName, this.preventDefaults)
    })
  },
  methods: {
    preventDefaults: function (e) {
      e.preventDefault()
    },
    setActive: function () {
      this.active = true
      clearTimeout(this.inActiveTimeout)
    },
    setInactive: function () {
      this.inActiveTimeout = setTimeout(() => {
        this.active = false
      }, 50)
    },
    onDrop: function (e) {
      this.setInactive()
      this.addFiles([...e.dataTransfer.files])
    },
    onInputChange: function (e) {
      this.addFiles(Array.from(e.target.files))
      e.target.value = null
    },
    addFiles: function (files) {
      files.filter((f) => f.type === "application/pdf").forEach((f) => {
        this.uploadedFiles.push(new UploadableFile(f))
      })
    },
    removeFile: function (file) {
      const index = this.uploadedFiles.indexOf(file)
      if (index > -1) this.uploadedFiles.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="less">
.file-preview {
  width: 20%;
  margin: 1rem 2.5%;
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  .close-icon, .status-indicator {
    --size: 20px;
    position: absolute;
    line-height: var(--size);
    height: var(--size);
    border-radius: var(--size);
    box-shadow: 0 0 5px currentColor;
    right: 0.25rem;
    appearance: none;
    border: 0;
    padding: 0;
  }

  .close-icon {
    width: var(--size);
    font-size: var(--size);
    background: #933;
    color: #fff;
    top: 0.25rem;
    cursor: pointer;
  }

  .pointer {
    cursor: pointer;
  }
}
</style>
