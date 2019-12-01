import React from "react";
import ImageProps from "./image.props";
import classnames from 'classnames';

const ImageComponent = (props: ImageProps) => {

  const containerClasses = classnames('image-wrapper', props.containerClassname)
  const imageClasses = classnames('img-fluid', props.isRounded && 'rounded-circle', props.imageClassName)
  return (
    <div
      className={containerClasses}
      style={{ width: props.size, height: props.size }}
    >
      <img src={props.source} className={imageClasses} alt="pict"/>
    </div>
  );
};

export default ImageComponent;
