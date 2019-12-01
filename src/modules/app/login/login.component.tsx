import React from "react";
import LoginFormComponent from "./form/login-form.component";
import CardComponent from "common/components/card/card.component";

const LoginComponent = () => {
  return (
    <div className="login">
      <div className="container">
        <CardComponent className="mt-5" fitMode={true}>
          <div className="row">
            <div className="col-sm-block col-md-5">
              <div className="info-box"></div>
            </div>
            <div className="col-12 col-md-7">
              <LoginFormComponent />
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  );
};

export default LoginComponent;
