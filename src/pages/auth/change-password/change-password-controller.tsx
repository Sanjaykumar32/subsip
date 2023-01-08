import { Theme, useTheme } from "@mui/material";
import { useAppDispatch } from "data";
import { AuthenticationThunk } from "data/thunk";
import { ChangeEvent, useState } from "react";

interface IInitialValue {
  oldPassword: string;
  newPassword: string;
}

interface IPasswordResetControllerReturns {
  getters: { value: IInitialValue; theme: Theme };
  handlers: {
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
  };
}

/**
 * Sign Up Controller
 * @return {IPasswordResetControllerReturns}
 */
const PasswordResetController = (): IPasswordResetControllerReturns => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<IInitialValue>({
    oldPassword: "",
    newPassword: "",
  });

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
    dispatch(
      AuthenticationThunk.changePassword({
        oldPassword: value.oldPassword,
        newPassword: value.newPassword,
      })
    );
    setValue({ oldPassword: "", newPassword: "" });
  };

  return {
    getters: { value, theme },
    handlers: { changeHandler, submitHandler },
  };
};

export default PasswordResetController;
