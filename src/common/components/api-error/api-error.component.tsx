import React from "react";
import ApiErrorProps from "./api-error.props";

const ApiErrorComponent = (props: ApiErrorProps) => {
  return (
    <div className="alert alert-danger" role="alert">
      <h2>{props.heading}</h2>
      {props.message}
    </div>
  );
};

ApiErrorComponent.defaultProps = {
  heading: "Error",
  message: "An error occurred while getting data. Refresh page to try again."
};

export default ApiErrorComponent;
