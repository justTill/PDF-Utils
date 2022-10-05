<template>
  <DropZone @drop.prevent="onDrop" class="drop-area" #default="{ dropZoneActive }"
            :uploaded-files="uploadedFiles"></DropZone>
  <button @click="mergeFiles">Merge Files</button>
  <span>{{ message }}</span>
</template>
<script>
import DropZone from "../utils/DropZone.vue";
import {PDFDocument} from 'pdf-lib'

export default {
  name: "MergeAction",
  components: {DropZone,},
  data() {
    return {
      uploadedFiles: [],
      message: "",
    }
  },
  computed: {},
  methods: {
    mergeFiles: async function () {
      if (this.uploadedFiles.length >= 2) {
        let mergedPdf = await this.createdMergedPdf();
        let pdfBase64 = await mergedPdf.saveAsBase64()
        if (pdfBase64) {
          this.downloadBase64Pdf(pdfBase64)
          this.uploadedFiles = []
        }
      } else {
        this.message = "Please drop two or more pdfs in the dropzone"
      }
    },
    createdMergedPdf: async function () {
      let pdfDoc = await PDFDocument.create()
      for (let f of this.uploadedFiles) {
        let currentFile = await this.readFilesAsync(f.file)
        let currentPdf = await PDFDocument.load(new Uint8Array(currentFile));
        let pages = await pdfDoc.copyPages(currentPdf, [...Array(currentPdf.getPageCount()).keys()])
        pages.forEach(p => pdfDoc.addPage(p))
      }
      return pdfDoc
    },
    onDrop: function () {
      this.message = ""
    },
    downloadBase64Pdf: function (pdf) {
      let element = document.createElement('a');
      element.setAttribute('href', 'data:application/pdf;base64,' + pdf);
      element.setAttribute('download', "mergedPdf.pdf");
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    readFilesAsync: function (file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
