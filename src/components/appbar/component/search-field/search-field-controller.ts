import { useAppDispatch, useAppSelector } from "data";
import { GET_BUSSINESSBY_NAME } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ChangeEvent, useState } from "react";

export const SearchFieldController = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  console.log(search);
  //   const BussinessByName = useAppSelector(GET_BUSSINESSBY_NAME);

  function changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setSearch(event.target.value);
  }
  // console.log(BussinessByName, "BussinessByName");

  function submitHandler(): void {
    try {
      dispatch(AdminThunk.allBusiness({ businessName: search }));
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getters: {
      search,
    },
    handlers: {
      changeHandler,
      submitHandler,
    },
  };
};
