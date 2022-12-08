import { Theme, useTheme } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface IInitialValue {
  email: string;
}

interface IForgetPasswordControllerReturns {
  getters: { value: IInitialValue; theme: Theme };
  handlers: {
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: (event: any) => void;
  };
}

/**
 * Forget Password Controller
 * @return {IForgetPasswordControllerReturns}
 */
const ForgetPasswordController = (): IForgetPasswordControllerReturns => {
  const theme = useTheme();
  const [value, setValue] = useState<IInitialValue>({
    email: "",
  });

  /**
   * set the email and password value
   * @param  {ChangeEvent<HTMLInputElement>} event
   */
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(name);
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
    });
    setValue({ email: "" });
  };

  return {
    getters: { value, theme },
    handlers: { changeHandler, submitHandler },
  };
};

export default ForgetPasswordController;
