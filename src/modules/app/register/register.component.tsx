import React from "react";
import RegisterProps from "./register.props";
import CardComponent from "../../../common/components/card/card.component";
import RegisterFormComponent from "./form/register-form.component";

const RegisterComponent = (props: RegisterProps) => {
  return (
    <div className="login">
      <div className="container">
        <CardComponent className="mt-5" fitMode={true}>
          <div className="row">
            <div className="col-sm-block col-md-5">
              <div className="info-box"></div>
            </div>
            <div className="col-12 col-md-7">
              <RegisterFormComponent />
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  );
};

export default RegisterComponent;
