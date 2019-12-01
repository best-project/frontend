type UploadProps = {
    acceptFileTypes?: string[],
    isMulti: boolean,
    isDisabled: boolean,
    isPreviewListVisible: boolean,
    onFilesSelect: (files: File[]) => void,  
}

export default UploadProps;
