import React, { useState } from "react";
import CourseAddProps from "./course-add.props";
import ModalComponent from "common/components/modal/modal.component";
import FormInputComponent from "common/components/form/input/form-input.component";
import FormTextAreaComponent from "common/components/form/text-area/form-text-area.component";
import SelectComponent from "common/components/select/select.component";
import SelectOption from "../../../../common/components/select/select-option";
import ButtonComponent from "common/components/button/button.component";
import SelectFileComponent from "common/components/select-file/select-file.component";

const CourseAddComponent = (props: CourseAddProps) => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const isAddButtonEnabled = courseName && description && type && selectedFile;

  const typeOptions: SelectOption[] = [
    {
      name: "normal",
      value: "normal"
    },
    {
      name: "puzzle",
      value: "puzzle"
    }
  ];

  function onCloseClick() {
    clearInputs();
    props.onCloseClick();
  }

  function clearInputs() {
    setCourseName("");
    setDescription("");
    setType("");
  }

  function onAddButtonClick() {
    const request = {
      courseName,
      description,
      type,
      image: selectedFile
    };

    console.log(request);
  }

  const cta = (
    <ButtonComponent
      type="primary"
      size="sm"
      onClick={onAddButtonClick}
      isDisabled={!isAddButtonEnabled}
    >
      Add
    </ButtonComponent>
  );

  return (
    <ModalComponent
      isOpen={props.isOpen}
      onCloseClick={onCloseClick}
      size="lg"
      title="Add new course"
      cta={[cta]}
    >
      <div className="creator-add">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <FormInputComponent
                label="Course Name"
                value={courseName}
                onChange={setCourseName}
              />
            </div>
            <div className="form-group">
              <FormTextAreaComponent
                title="Description"
                value={description}
                onChange={setDescription}
                maxLength={200}
              />
            </div>
            <div className="form-group">
              <label className="text-muted">Type</label>
              <SelectComponent
                options={typeOptions}
                value={type}
                onChange={setType}
              />
            </div>
            <div className="form-group">
              <SelectFileComponent
                acceptFileTypes={[".jpg", ".jpeg"]}
                onFilesSelect={fileList => {
                  if (fileList.length) {
                    setSelectedFile(fileList[0]);
                  } else {
                    setSelectedFile(null);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </ModalComponent>
  );
};

export default CourseAddComponent;
