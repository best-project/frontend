import React from "react";
import IconProps from "./icon.props";

const IconComponent = (props: IconProps) => {
  return (
    <i
      className={`${props.namespace} ${props.name} ${props.size}`}
      style={{ color: props.color }}
    ></i>
  );
};

IconComponent.defaultProps = {
  namespace: "fa",
  size: "fa-lg",
  color: "#000"
};

export default IconComponent;
