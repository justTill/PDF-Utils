export class UploadableFile {
  constructor(file) {
    this.file = file
    this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
  }
}
