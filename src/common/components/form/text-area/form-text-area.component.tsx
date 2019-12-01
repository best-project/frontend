import React, { useRef } from "react";
import FormTextAreaProps from "./form-text-area.props";

const FormTextAreaComponent = (props: FormTextAreaProps) => {
  const inputRef = useRef<HTMLLabelElement>(null);

  function focusHandler() {
    if (inputRef && inputRef.current) {
      if (!inputRef.current.classList.contains("active")) {
        inputRef.current.classList.add("active");
      } else {
        if (!props.value) {
          inputRef.current.classList.remove("active");
        }
      }
    }
  }

  return (
    <div className="md-form">
      <textarea
        className="md-textarea form-control"
        rows={2}
        onFocus={focusHandler}
        onBlur={focusHandler}
        value={props.value}
        onChange={e => props.onChange(e.currentTarget.value)}
        maxLength={props.maxLength}
      ></textarea>
      <label ref={inputRef}>{props.title}</label>
    </div>
  );
};

FormTextAreaComponent.defaultProps = {
  maxLength: 100
};

export default FormTextAreaComponent;
