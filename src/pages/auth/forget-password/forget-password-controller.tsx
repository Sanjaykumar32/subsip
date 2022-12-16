import { Theme, useTheme } from "@mui/material";
import { useAppDispatch } from "data";
import { AuthenticationThunk } from "data/thunk";
import { UserThunk } from "data/thunk/user.thunk";
import { ChangeEvent, useState } from "react";

interface IInitialValue {
  email: string;
}

interface IForgetPasswordControllerReturns {
  getters: { value: IInitialValue; theme: Theme };
  handlers: {
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
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
  const dispatch = useAppDispatch();
  /**
   * set the email and password value
   * @param  {ChangeEvent<HTMLInputElement>} event
   */
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  /**
   * @return {void}
   */
  const submitHandler = (): void => {
    dispatch(AuthenticationThunk.forgetPassword({ email: value.email }));
    setValue({ email: "" });
  };

  return {
    getters: { value, theme },
    handlers: { changeHandler, submitHandler },
  };
};

export default ForgetPasswordController;
