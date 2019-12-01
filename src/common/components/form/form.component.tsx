import React, { Fragment } from "react";
import FormProps from "./form.props";

const FormComponent = (props: FormProps) => {
    return (
        <div className="form">
            {props.children}
            <div className="form__cta clearfix">
                {props.cta.map((item, index) => (
                    <Fragment key={index}>{item}</Fragment>
                ))}
            </div>
        </div>
    );
};

export default FormComponent;
