import { Theme, useTheme } from "@mui/material";
import { useAuth } from "context/auth.context";
import { ChangeEvent, useState } from "react";

interface IInitialValue {
  email: string;
}

interface ICategoryControllerReturns {
  getters: { value: IInitialValue; theme: Theme; errors: IInitialValue };
  handlers: {
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
  };
}

/**
 * Sign In Controller
 * @return {ICategoryControllerReturns}
 */
const CategoryController = (): ICategoryControllerReturns => {
  const auth = useAuth();
  const theme = useTheme();
  const [value, setValue] = useState<IInitialValue>({
    email: "",
  });
  const [errors, setErrors] = useState<IInitialValue>({
    email: "",
  });
  const [errorCount, setErrorCount] = useState<number>(0);

  function validate(value: { email: string }) {
    const error: { email: string } = {
      email: "",
    };
    if (!value.email) {
      error.email = "Email address is required";
    }
    return error;
  }

  /**
   * set the email and password value
   * change Handler
   * @param  {ChangeEvent<HTMLInputElement>} event
   */
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...value, [event.target.name]: event.target.value });
    setErrors({ email: "" });
  };

  /**
   * @return {void}
   */
  const submitHandler = (): void => {
    setErrors(validate(value));
    setErrorCount(errorCount + 1);
    if (!errors.email) {
      setValue({ email: "" });
    }
  };

  return {
    getters: { value, theme, errors },
    handlers: { changeHandler, submitHandler },
  };
};

export default CategoryController;
