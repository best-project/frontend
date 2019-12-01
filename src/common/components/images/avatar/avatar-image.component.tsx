import React from "react";
import AvatarImageProps from "./avatar-image.props";
import ImageComponent from "../image/image.component";

const AvatarImageComponent = (props: AvatarImageProps) => {
  return (
    <ImageComponent
      source={props.source}
      size={props.size}
      imageClassName="hoverable"
      isRounded={true}
    />
  );
};

AvatarImageComponent.defaultProps = {
  size: 120
}

export default AvatarImageComponent;
