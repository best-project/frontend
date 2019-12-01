class FileService {
  static isImage(filename: string): boolean {
      return /(png|jpg|jpeg)/.test(filename);
  }
}

export default FileService;
