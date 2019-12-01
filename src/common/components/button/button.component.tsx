import React from "react";
import ButtonProps from "./button.props";
import classNames from "classnames";

const ButtonComponent = (props: ButtonProps) => {
  const buttonClass = classNames(
    props.className,
    props.outline ? `btn btn-outline-${props.type}` : `btn btn-${props.type}`,
    props.size && props.size === "sm"
      ? "btn-sm"
      : props.size === "lg"
      ? "btn-lg"
      : undefined
  );

  return (
    <button
      type="button"
      className={buttonClass}
      disabled={props.isDisabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

ButtonComponent.defaultProps = {
  outline: false,
  isDisabled: false
};

export default ButtonComponent;
