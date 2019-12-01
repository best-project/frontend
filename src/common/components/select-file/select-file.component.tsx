import * as React from "react";
import { useEffect, useState } from "react";
import ReactDropzone from "react-dropzone";
import UploadProps from "./select-file.props";
import SelectFileService from "./select-file.service";
import ButtonComponent from "../button/button.component";
import classNames from "classnames";

const SelectFileComponent = (props: UploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  function onDragOver() {
    setIsDragOver(true);
  }

  function onDragLeave() {
    setIsDragOver(false);
  }

  function removeFile(file: File) {
    const indexOfRemovedFile = files.indexOf(file);
    if (indexOfRemovedFile === -1) {
      return;
    }

    const newFileList = [...files];
    newFileList.splice(indexOfRemovedFile, 1);

    setFiles(newFileList);
  }

  function onDrop(newFiles: File[]) {
    setFiles(prevFiles => [...(props.isMulti ? prevFiles : []), ...newFiles]);
    setIsDragOver(false);
  }

  function onDropRejected() {}

  useEffect(() => {
    props.onFilesSelect(files);
  }, [files]);

  return (
    <div>
      <ReactDropzone
        accept={props.acceptFileTypes}
        onDrop={onDrop}
        multiple={props.isMulti}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDropRejected={onDropRejected}
        disabled={props.isDisabled}
      >
        {dropzone => {
          return (
            <div {...dropzone.getRootProps()}>
              <input {...dropzone.getInputProps()} />

              <div
                className={classNames("select-file", {
                  "-dragover": isDragOver,
                  "-single": !props.isMulti,
                  "-disabled": props.isDisabled
                })}
              >
                {!files.length && (
                  <div className="dropzone-msg dz-message select-file__header">
                    Drop files here or click to select
                  </div>
                )}

                <div className="select-file__list">
                  {props.isPreviewListVisible &&
                    files.map((file, index) => {
                      const fileThumb = SelectFileService.getFileThumb(file);
                      const fileSize = (file.size / 1024 / 1024).toFixed(2);
                      return (
                        <div
                          key={file.name + index}
                          className="select-file__item"
                        >
                          <div className="select-file__thumb-wrapper">
                            {fileThumb && (
                              <img
                                src={fileThumb}
                                className="select-file__thumb"
                                alt={file.name}
                              />
                            )}
                          </div>
                          <div className="select-file__info">
                            <p className="select-file__size">
                              <small>{`${fileSize} MB`}</small>
                            </p>
                            <p className="select-file__name">{file.name}</p>
                            <div className="select-file__cta">
                              <ButtonComponent
                                type={"danger"}
                                size="sm"
                                className="select-file__remove"
                                onClick={e => {
                                  e.stopPropagation();
                                  removeFile(file);
                                }}
                              >
                                Remove
                              </ButtonComponent>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        }}
      </ReactDropzone>
    </div>
  );
};

SelectFileComponent.defaultProps = {
  isMulti: false,
  isPreviewListVisible: true,
  isDisabled: false
};

export default SelectFileComponent;
