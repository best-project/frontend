import FileService from "../../utils/file/file.service";

class SelectFileService {
    static getFileThumb(file: File): string | null {
        if (!FileService.isImage(file.name)) {
            return null;
        }

        return URL.createObjectURL(file);
    }
}

export default SelectFileService;
