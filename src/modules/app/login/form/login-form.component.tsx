import React, { useState } from "react";
import LoginFormProps from "./login-form.props";
import FormInputComponent from "common/components/form/input/form-input.component";
import DividerComponent from "common/components/divider/divider.component";
import SocialButtonComponent from "common/components/button/social/social-button.component";
import ButtonComponent from "common/components/button/button.component";

const LoginFormComponent = (props: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isSubmitButtonEnabled = email.trim() && password;

  function onLoginButtonClick() {

  }

  function onFacebookClick() {
    console.log("Facebook");
  }
  function onInstagramClick() {
    console.log("Instagram");
  }
  function onGoogleClick() {
    console.log("Google");
  }

  return (
    <div className="login p-5">
      <p className="h4 mb-5 text-center">Sign in</p>
      <FormInputComponent
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
      />
      <FormInputComponent
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <ButtonComponent
        type="primary"
        className="btn-block"
        isDisabled={!isSubmitButtonEnabled}
        onClick={onLoginButtonClick}
      >
        Log in
      </ButtonComponent>

      <DividerComponent text="Or Login with" />
      <div className="login-social">
        <SocialButtonComponent type="facebook" onClick={onFacebookClick} />
        <SocialButtonComponent type="instagram" onClick={onInstagramClick} />
        <SocialButtonComponent type="google" onClick={onGoogleClick} />
      </div>
    </div>
  );
};

export default LoginFormComponent;
