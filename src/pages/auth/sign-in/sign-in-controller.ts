import { Theme, useTheme } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface IInitialValue {
  email: string;
  password: string;
}

interface ISignInControllerReturns {
  getters: { value: IInitialValue; theme: Theme };
  handlers: {
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: (event: any) => void;
  };
}

/**
 * Sign In Controller
 * @return {ISignInControllerReturns}
 */
const SignInController = (): ISignInControllerReturns => {
  const theme = useTheme();
  const [value, setValue] = useState<IInitialValue>({
    email: "",
    password: "",
  });

  /**
   * set the email and password value
   * change Handler
   * @param  {ChangeEvent<HTMLInputElement>} event
   */
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  /**
   * @param {event:any}
   * @return {void}
   */
  const submitHandler = (event: any): void => {
    event.preventDefault();
    console.log({
      email: value.email,
      password: value.password,
    });
    setValue({ email: "", password: "" });
  };

  return {
    getters: { value, theme },
    handlers: { changeHandler, submitHandler },
  };
};

export default SignInController;
