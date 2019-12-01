import React from "react";
import OverlayLoaderProps from "./overlay-loader.props";
import classnames from "classnames";

const OverlayLoaderComponent = (props: OverlayLoaderProps) => {
    const loaderClassname = classnames(
        "overlay-wrapper",
        props.hasBackground && "overlay-wrapper__hasBackground"
    );
    return (
        <div className={loaderClassname}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

OverlayLoaderComponent.defaultProps = {
    hasBackground: true,
};

export default OverlayLoaderComponent;
