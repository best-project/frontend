import React from "react";
import BreadCrumbWrapperProps from "./breadcrumb-wrapper.props";
import BreadCrumbItemComponent from "./../item/breadcrumb-item.component";

const BreadCrumbWrapperComponent = (props: BreadCrumbWrapperProps) => {
    const itemsLength = props.items.length;

    return (
        <div className="mt-5 mb-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {props.items.map((item, index) => (
                        <BreadCrumbItemComponent
                            key={index}
                            name={item.name}
                            url={item.url}
                            isRigthArrow={index + 1 !== itemsLength}
                        />
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default BreadCrumbWrapperComponent;
