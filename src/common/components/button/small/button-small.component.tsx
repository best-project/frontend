import React from "react";
import ButtonSmallProps from "./button-small.props";

const ButtonSmallComponent = (props: ButtonSmallProps) => {
  return (
    <a className="button-small btn-sm" onClick={props.onClick}>
      {props.children}
    </a>
  );
};

ButtonSmallComponent.defaultProps = {
  isDisabled: false
};

export default ButtonSmallComponent;
