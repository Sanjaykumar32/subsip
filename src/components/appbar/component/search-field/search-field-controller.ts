import { useAppDispatch, useAppSelector } from "data";
import { GET_BUSINESS } from "data/selectors";
import { UserThunk } from "data/thunk/user.thunk";
import { IBussinessResponse } from "interface";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchFieldController = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const BussinessByName = useAppSelector(GET_BUSINESS);

  console.log(BussinessByName, "BussinessByName");

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
   * @return {Promise<void>}
   */
  async function submitHandler(): Promise<void> {
    try {
      const response: any = await dispatch(
        UserThunk.business({ businessName: search })
      );
      if (response.payload.data.length > 0) {
        navigate(`/listing/:id`);
      }
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
