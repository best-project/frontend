import React from "react";
import BreadCrumbItemProps from './breadcrumb-item.props';

const BreadCrumbItemComponent = (props: BreadCrumbItemProps) => {
    return (
        <li className="breadcrumb-item">
            <a className="black-text" href={props.url}>
                {props.name}
            </a>
            {props.isRigthArrow && (
                <i
                    className="fas fa-angle-double-right mx-2"
                    aria-hidden="true"
                ></i>
            )}
        </li>
    );
};

BreadCrumbItemComponent.defaultProps = {
    isRigthArrow: true,
};

export default BreadCrumbItemComponent;
