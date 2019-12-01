import React from "react";
import SocialButtonProps from "./social-button.props";
import IconComponent from "common/components/icon/icon.component";

const SocialButtonComponent = (props: SocialButtonProps) => {
  const icon =
    props.type === "facebook"
      ? "facebook-f"
      : props.type === "linkedin"
      ? "linkedin-in"
      : props.type;

  return (
    <a
      className={`icon-link ${props.type} round fill ${props.size}`}
      role="button"
      onClick={props.onClick}
    >
      <IconComponent namespace="fa" name={`fa-${icon}`} color="" size={props.size ==="sm" ? "fa-sm" : props.size === "lg" ? "fa-lg" : "fa-lg"}/>
    </a>
  );
};

SocialButtonComponent.defaultProps = {
  size: "lg"
};

export default SocialButtonComponent;
