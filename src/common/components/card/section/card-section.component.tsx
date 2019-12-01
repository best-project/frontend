import React from "react";
import CardSectionProps from "./card-section.props";
import classnames from 'classnames';

const CardSectionComponent = (props: CardSectionProps) => {
    const classes = classnames("card-section", props.className)
    return (
        <div className={classes}>
            {props.title && <h5 className="h5 h5-responsive">{props.title}</h5>}
            {props.children}
        </div>
    );
};

export default CardSectionComponent;
