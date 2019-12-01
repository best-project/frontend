class FormValidationFactory {
  isEmail(email: string): string {
    const emailRegex = RegExp(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const errorMessage = "Email is not valid.";

    if (!emailRegex.test(email)) {
      return errorMessage;
    }
    return "";
  }

  isPasswordValid(password: string): string {
    const passwordRegex = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
    const errorMessage =
      "Require minimum 8 charactes, at least one letter and one number.";

    // const passwordRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$");
    // const errorMessage = "Require minimum 8 characters, at least one letter, one number and one special character";

    // const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");
    // const errorMessage = "Require minimum eight characters, at least one uppercase letter, one lowercase letter and one number";

    if (!passwordRegex.test(password)) {
      return errorMessage;
    }
    return "";
  }

  passwordsMatches(password: string, confirmPassword: string): string {
    const errorMessage = "Passwords are different.";

    if (password !== confirmPassword) {
      return errorMessage;
    }

    return "";
  }
}

const formValidationFactory = new FormValidationFactory();
export default formValidationFactory;
