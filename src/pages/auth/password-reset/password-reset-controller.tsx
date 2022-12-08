import { Theme, useTheme } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface IInitialValue {
  password: string;
  confirmPassword: string;
}

interface IPasswordResetControllerReturns {
  getters: { value: IInitialValue; theme: Theme };
  handlers: {
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: (event: any) => void;
  };
}

/**
 * Sign Up Controller
 * @return {IPasswordResetControllerReturns}
 */
const PasswordResetController = (): IPasswordResetControllerReturns => {
  const theme = useTheme();
  const [value, setValue] = useState<IInitialValue>({
    password: "",
    confirmPassword: "",
  });

  /**
   * set the email and password value
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
      password: value.password,
      confirmPassword: value.confirmPassword,
    });
    setValue({ password: "", confirmPassword: "" });
  };

  return {
    getters: { value, theme },
    handlers: { changeHandler, submitHandler },
  };
};

export default PasswordResetController;
