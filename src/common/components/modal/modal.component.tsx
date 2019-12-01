import React, { Fragment } from "react";
import ModalProps from "./modal.props";
import { MDBModal } from "mdbreact";
import ButtonComponent from "../button/button.component";

const ModalComponent = (props: ModalProps) => {
    return (
        <MDBModal
            isOpen={props.isOpen}
            toggle={props.onCloseClick}
            size={props.size}
        >
            <div className="modal-header">
                <button
                    type="button"
                    className="close"
                    onClick={props.onCloseClick}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            {props.title && (
                <h5 className="h5 h5-responsive title" id="myModalLabel">
                    {props.title}
                </h5>
            )}
            <div className="modal-body">
                {props.children}
            </div>
            <div className="modal-footer">
                <ButtonComponent
                    type="primary"
                    onClick={props.onCloseClick}
                    outline={true}
                    size="sm"
                >
                    Close
                </ButtonComponent>
                {props.cta &&
                    props.cta.map((ctaItem, index) => (
                        <Fragment key={index}>{ctaItem}</Fragment>
                    ))}
            </div>
        </MDBModal>
    );
};

ModalComponent.defaultProps = {
    isCancelButtonVisible: true,
};

export default ModalComponent;
