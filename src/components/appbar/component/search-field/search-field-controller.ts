import { useAppDispatch, useAppSelector } from "data";
import { GET_BUSINESS } from "data/selectors";
import { UserThunk } from "data/thunk/user.thunk";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchFieldController = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const BussinessByName = useAppSelector(GET_BUSINESS);

  /**
   *
   * @param {ChangeEvent<HTMLInputElement>} event
   * @return {void}
   */
  function changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setSearch(event.target.value);
  }

  /**
   * @return {void}
   */
  function submitHandler(): void {
    try {
      dispatch(UserThunk.business({ businessName: search }));
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getters: {
      search,
      navigate,
      BussinessByName,
    },
    handlers: {
      changeHandler,
      submitHandler,
    },
  };
};
