import { Theme, useTheme } from "@mui/material";
import { useAuth } from "context/auth.context";
import { useAppDispatch } from "data";
import { AuthenticationThunk } from "data/thunk";
import { UserThunk } from "data/thunk/user.thunk";
import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IInitialValue {
  email: string;
  password: string;
}

interface ISignUpControllerReturns {
  getters: {
    value: IInitialValue;
    theme: Theme;
    errors: IInitialValue;
    open: boolean;
  };
  handlers: {
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
    handleClose: () => void;
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

  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get("referralCode");

  const handleClickOpen = async () => {
    setOpen(true);
    await dispatch(
      AuthenticationThunk.sendOtp({
        email: value.email,
      })
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

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
  const submitHandler = async (): Promise<void> => {
    setErrors(validate(value));
    setErrorCount(errorCount + 1);
    if (!errors.email && !errors.password) {
      auth.signUp({
        email: value.email,
        password: value.password,
      })
      if(value.email && value.password ){
        handleClickOpen();
      }
      setValue({ email: "", password: "" });
    }
  };

  return {
    getters: { value, theme, errors, open },
    handlers: { changeHandler, submitHandler, handleClose },
  };
};

export default SignUpController;
