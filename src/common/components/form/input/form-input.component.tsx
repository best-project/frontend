import React, { useRef } from "react";
import FormInputProps from "./form-input.props";
import classNames from 'classnames';

const FormInputComponent = (props: FormInputProps) => {
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

  const containerClasses = classNames(props.errorMessage && "error", props.successMessage && "success", "md-form")

  return (
    <div className={containerClasses}>
      <input
        type={props.type}
        value={props.value}
        className="form-control"
        onFocus={focusHandler}
        onBlur={focusHandler}
        onChange={event => props.onChange(event.currentTarget.value)}
      />
      <label ref={inputRef}>
        {props.label}
      </label>
      {props.errorMessage && (
        <small className="font-weight-light">{props.errorMessage}</small>
      )}
      {props.successMessage && (
        <small className="font-weight-light">{props.successMessage}</small>
      )}
      
    </div>
  );
};

FormInputComponent.defaultProps = {
  type: "text"
};

export default FormInputComponent;
