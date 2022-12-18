import { useAppDispatch, useAppSelector } from "data";
import { GET_BUSSINESSBY_NAME } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchFieldController = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  console.log(search);
  const BussinessByName = useAppSelector(GET_BUSSINESSBY_NAME);

  function changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setSearch(event.target.value);
  }
  console.log(BussinessByName, "BussinessByName");
  const navigate = useNavigate();

  function submitHandler(): void {
    try {
      dispatch(AdminThunk.allBusiness({ businessName: search }));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (BussinessByName.length > 0) {
      navigate("/listing/:id");
    } else {
      console.log("nodata");
    }
  }, [BussinessByName.length, navigate]);

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
