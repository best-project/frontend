import React from "react";
import DividerProps from "./divider.props";

const DividerComponent = (props: DividerProps) => {
    return (
        <div className="split-layout__divider">
            <div className="split-layout__rule"></div>
            {props.text && (
                <>
                    <div className="split-layout__label">{props.text}</div>
                    <div className="split-layout__rule"></div>
                </>
            )}
        </div>
    );
};

DividerComponent.defaultProps = {
    text: "",
};

export default DividerComponent;
