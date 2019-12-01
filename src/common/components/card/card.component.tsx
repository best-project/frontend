import React from "react";
import CardProps from "./card.props";
import classNames from "classnames";
import DividerComponent from "../divider/divider.component";

const CardComponent = (props: CardProps) => {
    const classes = classNames(
        props.className,
        !props.fitMode && "p-4",
        "card"
    );

    return (
        <div className={classes}>
            {props.title && (
                <>
                    <div className="card__title">
                        <h2 className="h4-responsive h4 float-left">
                            {props.title}
                        </h2>
                        {props.tooltip && (
                            <div className="float-right">{props.tooltip}</div>
                        )}
                    </div>
                    <DividerComponent />
                </>
            )}
            {props.children}
        </div>
    );
};

CardComponent.defaultProps = {
    fitMode: false,
};

export default CardComponent;
