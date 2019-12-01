import React from "react";
import CheckboxProps from "./checkbox.props";

const CheckboxComponent = (props: CheckboxProps) => {
  return (
    <div className="custom-control custom-checkbox my-4">
      <input
        type="checkbox"
        className="custom-control-input"
        id="defaultLoginFormRemember"
        checked={props.isChecked}
        onChange={event => props.onChange(event.target.checked)}
        style={{ cursor: "pointer" }}
      />
      <label
        className="custom-control-label"
        htmlFor="defaultLoginFormRemember"
        style={{ cursor: "pointer" }}
      >
        {props.title}
      </label>
    </div>
  );
};

export default CheckboxComponent;
