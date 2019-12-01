import React, { useState } from "react";
import RegisterFormProps from "./register-form.props";
import FormInputComponent from "../../../../common/components/form/input/form-input.component";
import DividerComponent from "../../../../common/components/divider/divider.component";
import SocialButtonComponent from "../../../../common/components/button/social/social-button.component";
import ButtonComponent from "common/components/button/button.component";
import CheckboxComponent from "common/components/checkbox/checkbox.component";
import formValidationFactory from 'common/utils/form-validation/form-validation.factory';

const RegisterFormComponent = (props: RegisterFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [areTermsAccepted, setAreTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const isSubmitButtonEnabled =
    name.trim() && email.trim() && password && confirmPassword;
  

  function onRegisterButtonClick() {
    setErrors({
      ...errors,
      email: formValidationFactory.isEmail(email),
      password: formValidationFactory.isPasswordValid(password),
      confirmPassword: formValidationFactory.passwordsMatches(password, confirmPassword)
    })
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
      <p className="h4 mb-5 text-center">Sign up</p>
      <FormInputComponent
        label="Name"
        value={name}
        onChange={setName}
        errorMessage={errors.name}
      />
      <FormInputComponent
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        errorMessage={errors.email}
      />
      <FormInputComponent
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        errorMessage={errors.password}
      />
      <FormInputComponent
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        errorMessage={errors.confirmPassword}
      />

      <CheckboxComponent
        title="Accept terms and conditions"
        isChecked={areTermsAccepted}
        onChange={setAreTermsAccepted}
      />

      <ButtonComponent
        type="primary"
        className="btn-block"
        isDisabled={!isSubmitButtonEnabled}
        onClick={onRegisterButtonClick}
      >
        Register
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

export default RegisterFormComponent;
