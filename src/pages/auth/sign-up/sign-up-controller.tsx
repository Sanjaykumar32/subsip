import { Theme, useTheme } from "@mui/material";
import { useAuth } from "context/auth.context";
import { ChangeEvent, useState } from "react";

interface IInitialValue {
  email: string;
  password: string;
}

interface ISignUpControllerReturns {
  getters: { value: IInitialValue; theme: Theme; errors: IInitialValue };
  handlers: {
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
  };
}

/**
 * Sign Up Controller
 * @return {ISignUpControllerReturns}
 */
const SignUpController = (): ISignUpControllerReturns => {
  const auth = useAuth();
  const theme = useTheme();
  const [value, setValue] = useState<IInitialValue>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<IInitialValue>({
    email: "",
    password: "",
  });
  const [errorCount, setErrorCount] = useState<number>(0);

  /**
   * Set the email and password value
   * @param  {ChangeEvent<HTMLInputElement>} event
   */
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...value, [event.target.name]: event.target.value });
    setErrors({ email: "", password: "" });
  };

  function validate(value: { email: string; password: string }) {
    const error: { email: string; password: string } = {
      email: "",
      password: "",
    };
    if (!value.email) {
      error.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      error.email = "Email address is invalid";
    }
    if (!value.password) {
      error.password = "password is required";
    }
    return error;
  }

  /**
   * @return {void}
   */
  const submitHandler = (): void => {
    setErrors(validate(value));
    setErrorCount(errorCount + 1);
    if (!errors.email && !errors.password) {
      auth.signUp({ email: value.email, password: value.password });
      setValue({ email: "", password: "" });
    }
  };

  return {
    getters: { value, theme, errors },
    handlers: { changeHandler, submitHandler },
  };
};

export default SignUpController;
