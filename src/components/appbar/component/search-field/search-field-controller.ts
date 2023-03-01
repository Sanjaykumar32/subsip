import { useAppDispatch, useAppSelector } from "data";
import { GET_BUSINESS } from "data/selectors";
import { UserThunk } from "data/thunk/user.thunk";
import { ChangeEvent, useState , useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

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
  function changeHandler(event: any): void {
    // event.preventDefault();
    setSearch(event);
   
  }

  // useEffect(()=>{
  //   navigate(`/?${search.trim()}`)
  // },[search])

  const Conid = BussinessByName?.filter((item) => {
    return item.vName === search;
  })[0];

  /**
   * @return {Promise<void>}
   */

  async function submitHandler(el:any) {
    if(el.iCategoryid){
      navigate(`/category/${el.iCategoryid}`)
    }else{
      navigate(`/listing/${el.name.replaceAll(/\s/g, "-")}` 
      , {state : {businessId : el.iBusinessid}}
      )
    }
   
    // try {
    //   const response: any = await dispatch(
    //     UserThunk.business({ businessName: search })
    //   );
    //   console.log(response ,'response')
    //   if (response.payload.data.length > 0) {
    //     navigate(`/listing/${Conid.iBusinessId}`);
    //   } else {
    //     console.log("nodata");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    // setSearch("");
  }

  return {
    getters: {
      search,
      navigate,
      BussinessByName,
    },
    handlers: {
      setSearch,
      changeHandler,
      submitHandler,
    },
  };
};
